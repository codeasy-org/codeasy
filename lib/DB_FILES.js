import { Meteor } from 'meteor/meteor';
import { FilesCollection } from 'meteor/ostrio:files';
import Grid from 'gridfs-stream';
import { MongoInternals } from 'meteor/mongo';
import fs from 'fs';

let gfs;
if (Meteor.isServer) {
  gfs = Grid(
  MongoInternals.defaultRemoteCollectionDriver().mongo.db,
  MongoInternals.NpmModule
  );
}


DB_FILES = new FilesCollection({
  collectionName: 'db_files',
  allowClientCode: true,
  // debug: Meteor.isServer && process.env.NODE_ENV === 'development',
  onBeforeUpload(file) {
    // if (file.size <= 10485760 && /png|jpg|jpeg|gif|tif/i.test(file.extension)) return true;
    if (file.size <= 10485760) return true;
    return '업로드 파일은 10MB 까지 가능합니다.';
  },
  onAfterUpload(image) {
    // Move file to GridFS
    Object.keys(image.versions).forEach(versionName => {
      const metadata = {versionName, imageId: image._id, storedAt: new Date()}; // Optional
      const writeStream = gfs.createWriteStream({filename: image.name, metadata});

      fs.createReadStream(image.versions[versionName].path).pipe(writeStream);

      writeStream.on('close', Meteor.bindEnvironment(file => {
        const property = `versions.${versionName}.meta.gridFsFileId`;

        // If we store the ObjectID itself, Meteor (EJSON?) seems to convert it to a
        // LocalCollection.ObjectID, which GFS doesn't understand.
        this.collection.update(image._id, {$set: {[property]: file._id.toString()}});
        this.unlink(this.collection.findOne(image._id), versionName); // Unlink files from FS
      }));
    });
  },
  interceptDownload(http, image, versionName) {
    // Serve file from GridFS
    const _id = (image.versions[versionName].meta || {}).gridFsFileId;
    if (_id) {
      const readStream = gfs.createReadStream({_id});
      readStream.on('error', err => {
        throw err;
      });
      readStream.pipe(http.response);
    }
    return Boolean(_id); // Serve file from either GridFS or FS if it wasn't uploaded yet
  },
  onAfterRemove(images) {
    // Remove corresponding file from GridFS
    images.forEach(image => {
      Object.keys(image.versions).forEach(versionName => {
        const _id = (image.versions[versionName].meta || {}).gridFsFileId;
        if (_id) gfs.remove({_id}, err => {
          if (err) throw err;
        });
      });
    });
  }
});


if (Meteor.isServer) {
  // DB_FILES.denyClient();

  // DB_FILES.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
  //   fileName: 'logo.png'
  // });
  // Meteor.publish('files.images.all', function () {
  //   return [DB_FILES.find().cursor];
  // });
} else {
  // Meteor.subscribe('files.images.all');
}

// export default DB_FILES;

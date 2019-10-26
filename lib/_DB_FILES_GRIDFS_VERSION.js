//몽고디비에 파일을 저장
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
  onAfterUpload(_file) {
    // Move file to GridFS
    Object.keys(_file.versions).forEach(versionName => {
      const metadata = {versionName, fileId: _file._id, createdAt: new Date()}; // Optional
      const writeStream = gfs.createWriteStream({filename: _file.name, metadata});

      fs.createReadStream(_file.versions[versionName].path).pipe(writeStream);

      writeStream.on('close', Meteor.bindEnvironment(file => {
        const property = `versions.${versionName}.meta.gridFsFileId`;

        // If we store the ObjectID itself, Meteor (EJSON?) seems to convert it to a
        // LocalCollection.ObjectID, which GFS doesn't understand.
        this.collection.update(_file._id, {$set: {[property]: file._id.toString()}});
        this.unlink(this.collection.findOne(_file._id), versionName); // Unlink files from FS
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

DB_FILES.insertFile = function(file) {
  return DB_FILES.insert({file: file}).config.fileId;
}
DB_FILES.on('afterUpload', function (fileRef) {
  /* `this` context is the Images (FilesCollection) instance */
  if(Meteor.isClient) {
    // console.log(fileRef._id);
    // DB_FILES.findOne({_id: fileRef._id}).link();
    // location.reload();  //파일 업로드 이후 현재 페이지는 해당 링크에 즉시 접속 불가.
    // Meteor._sleepForMs(1000);
    // Meteor.subscribe('db_file', fileRef._id);
  } else {
    // DB_FILES.findOne({_id: fileRef._id}).link();
    // Meteor.publish('db_file', function(_id) {
    //   return DB_FILES.find({_id: _id}).cursor;
    // });
  }
});


// if (Meteor.isServer) {
//   DB_FILES.denyClient();
//
//   DB_FILES.load('https://raw.githubusercontent.com/VeliovGroup/Meteor-Files/master/logo.png', {
//     fileName: 'logo.png'
//   });
//   Meteor.publish('files.images.all', function () {
//     return [DB_FILES.find().cursor];
//   });
// } else {
//   Meteor.subscribe('files.images.all');
// }
//
// export default DB_FILES;

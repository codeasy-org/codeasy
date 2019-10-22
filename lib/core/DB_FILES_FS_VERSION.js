//파일 시스템에 파일을 저장
// import { Meteor } from 'meteor/meteor';
// import { FilesCollection } from 'meteor/ostrio:files';
//
// DB_FILES = new FilesCollection({
//   collectionName: 'db_files',
//   allowClientCode: true, // Disallow remove files from Client
//   onBeforeUpload(file) {
//     // Allow upload files under 10MB, and only in png/jpg/jpeg formats
//     if (file.size <= 10485760 && /png|jpg|jpeg/i.test(file.extension)) {
//       return true;
//     }
//     return 'Please upload image, with size equal or less than 10MB';
//   }
// });
//
// // if (Meteor.isClient) {
// //   Meteor.subscribe('files.images.all');
// // }
// //
// // if (Meteor.isServer) {
// //   Meteor.publish('files.images.all', function () {
// //     return DB_FILES.find().cursor;
// //   });
// // }
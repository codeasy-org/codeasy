// require(web)
// prodive
// web3.

// Meteor.setInterval(function() {
// //   web3...
// // }, 1000);


Meteor.methods({
  saveResume: function(firstName, credit) {
    console.log(firstName, credit);
    // var hash = web3.ijefiwjf.fweijfiewjf
    // web3.eth.coinbase.then(function(err, coinbase, param2, param3) {
    //   console.log param1.
    //
    //   if(!!err) alert{}
    //   else
    //     DB_RESUME.insert({
    //       firstName: firstName,
    //       credit: credit,
    //       createdAt: new Date()
    //       hash: coinbase
    //     })
    // })
  },
  removeResume: function() {
    // web3.iwejfiewj
  }
})












// import fs from 'fs';
// var Web3 = require("web3");
// // import Web3 from 'web3';
//
// var web3 = new Web3(new Web3.providers.HttpProvider("http://117.16.44.111:38405"));
// var proofContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"fileHash","type":"string"}],"name":"get","outputs":[{"name":"timestamp","type":"uint256"},{"name":"owner","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"string"},{"name":"fileHash","type":"string"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"owner","type":"string"},{"indexed":false,"name":"fileHash","type":"string"}],"name":"logFileAddedStatus","type":"event"}]);
// var proof = proofContract.at("0xf7f02f65d5cd874d180c3575cb8813a9e7736066");
// console.log(web3.eth.coinbase)
//
//
// // var proof = new web3.eth.contract([{"constant":false,"inputs":[{"name":"fileHash","type":"string"}],"name":"get","outputs":[{"name":"timestamp","type":"uint256"},{"name":"owner","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"owner","type":"string"},{"name":"fileHash","type":"string"}],"name":"set","outputs":[],"payable":false,"type":"function"},{"anonymous":false,"inputs":[{"indexed":false,"name":"status","type":"bool"},{"indexed":false,"name":"timestamp","type":"uint256"},{"indexed":false,"name":"owner","type":"string"},{"indexed":false,"name":"fileHash","type":"string"}],"name":"logFileAddedStatus","type":"event"}], "0xf7f02f65d5cd874d180c3575cb8813a9e7736066");
// // // web3.eth.isMining().then(console.log);
// // console.log(web3.eth.coinbase);
// // var proof = proofContract.at("0xf7f02f65d5cd874d180c3575cb8813a9e7736066");
//
//
// Meteor.startup(() => {
//   // code to run on server at startup
//   // var file = fs.readFileSync('/Users/kakadais/WebstormProjects/codeasy/public/images/samples/0001.jpeg')
//   // CodeasyFiles.insert({
//   //   file: file
//   // })
//   // console.log(CodeasyFiles.insert)
//   // console.log(process.env.ROOT_URL)
// });
//

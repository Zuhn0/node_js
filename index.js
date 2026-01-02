// const fs = require('fs');
const { log } = require('console');
const path = require('path')
const fsPromises = require('fs').promises;

// fs.readFile('./files/starter.txt', 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// });


// fs.readFile('./files/strter.txt', 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// // exit on uncaught errors

// process.on('uncaughtException', err => {
//    console.error(`There was an uncaught error: ${err}`);
//    process.exit(1);
// })

// fs.readFile('./files/starter.txt', 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// console.log("Hello....");


// // exit on uncaught errors

// process.on('uncaughtException', err => {
//    console.error(`There was an uncaught error: ${err}`);
//    process.exit(1);
// })


     //USING PATHS

// fs.readFile(path.join(__dirname,'files','starter.txt'), 'utf8', (err,data)=>{
//     if(err) throw err;
//     console.log(data);
// })

// console.log("Hello....");


   ////WRITE FILE/////

// fs.writeFile(path.join(__dirname,'files','reply.txt'), 'Nice to Meet You.', (err)=>{
//     if(err) throw err;
//     console.log("Write Complete");
// })

// fs.appendFile(path.join(__dirname,'files','test.txt'), ' Testing text .', (err)=>{
//     if(err) throw err;
//     console.log("Append Complete");
// })

// process.on('uncaughtException', err => {
//    console.error(`There was an uncaught error: ${err}`);
//    process.exit(1);
// })

    ///WRITING AND APPENDING AND RENAMING SAME TIME and PUTTING INSIDE EACH OTHER TO MAINTAIN THE ORDER OF EXECUTION// 

// fs.writeFile(path.join(__dirname,'files','reply.txt'), 'Nice to Meet You.', (err)=>{
//     if(err) throw err;
//     console.log("Write Complete");

//         fs.appendFile(path.join(__dirname,'files','reply.txt'), '\n \n Yes it is.', (err)=>{
//             if(err) throw err;
//             console.log("Append Complete");

//             fs.rename(path.join(__dirname,'files','reply.txt'),path.join(__dirname,'files','Newreply.txt'), (err)=>{
//               if(err) throw err;
//             console.log("rename Complete");
// })
// })
// })


const fileOps = async () => {
    try{
       const data = await fsPromises.readFile(path.join(__dirname,'files','starter.txt'),'utf8');
       console.log(data);
       await fsPromises.unlink(path.join(__dirname,'files','starter.txt'));
       await fsPromises.writeFile(path.join(__dirname,'files','promiseWrite.txt'),data);
       await fsPromises.appendFile(path.join(__dirname,'files','promiseWrite.txt'),'\n\n Nice to meet you');
       await fsPromises.rename(path.join(__dirname,'files','promiseWrite.txt'),path.join(__dirname,'files','promiseComplete.txt'));
        const newData = await fsPromises.readFile(path.join(__dirname,'files','promiseComplete.txt'),'utf8');
       console.log(newData);
    }
    catch(err){
        console.log(err);
        
    }
}

fileOps();


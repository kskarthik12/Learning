

//FS Module

// const fs =require('fs');

// const text1=fs.readFile('path.dirname(__filename)/hello.txt','utf-8',(err,data)=>{
//     console.log(data)
// });

// let text='karthik K'
// fs.writeFile('path.dirname(__filename)/hello.txt',text, (err, data)=>{
//     console.log(data)
// })



//Express Js module
// const path=require('path')
// const express =require('express')
// const os=require('os')
// const app=express()
// const route=express.Router()
// PORT=5000

// route.get('/',(req,res)=>{
//     res.send("Hi Guys")
// })

// app.listen(PORT,()=>console.log(`server listening in PORT ${PORT}`));




//Path & OS module
// const tex=path.basename(__dirname,'hello.txt')
// console.log(os.platform())




//HTTP module
// const HTTP=require('http')
// const { type } = require('os')

// HTTP.createServer(function(req,res){
//     res.writeHead(200,{'content-type':'text/plain'})
//     res.write('welcome')
//     res.end('thanks')
// }).listen(8000)


let arr = [66, 77, 7, 5, 77, "Arun", "test", "abc"]

let newArr = arr.filter((item, index)=>{


  return arr.indexOf(item)===index;
})


console.log(newArr)

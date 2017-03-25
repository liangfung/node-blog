/**
 * 主要核心逻辑入口
 */

//使用fs进行IO操作
const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');

class App {
    constructor() {

    }
    initServer() {
        return (request, response) => {
            
            let { url } = request; //=>解构赋值 let url = request.url
            
            //根据url 进行代码分发
            // if(url == '/css/index.css') {
            //     fs.readFile('./public/css/index.css','utf8',(error,data)=>{
            //         response.end(data)
            //     })
            // }
            // if(url == '/js/index.js') {
            //     fs.readFile('./public/js/index.js','utf8',(error,data)=>{
            //         response.end(data)
            //     })
            // }
            // if(url == '/') {
            //     fs.readFile('./public/index.html','utf8',(error,data)=>{
            //         response.end(data)
            //     })
            // }

            //fs读取index.html并返回
            //fs的路径相对于process.cwd()
            
               let data =  staticServer(url)
                response.end(data);
            
        }
    }
}


module.exports = App;
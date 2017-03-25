/**
 * 主要核心逻辑入口
 */

//使用fs进行IO操作
const fs = require('fs');

class App {
    constructor() {

    }
    initServer() {
        return (request, response) => {
            console.log('收到请求了')
            // fs读取index.html并返回
            // fs的路径相对于process.cwd()
            fs.readFile('./public/index.html', 'utf-8', (error, data) => {
                response.end(data)
            })
        }

    }
}

//export  class App
module.exports = App;
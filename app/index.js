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
			const { url } = request; //解构赋值 let url = request.url
			staticServer(url)
				.then((data) => {
					response.end(data);
				})
				.catch((err) => {
					response.end(err)
				})

			// if (url == '/css/index.css') {
			//     fs.readFile('./public/css/index.css', (error, data) => {
			//         response.end(data)
			//     })
			// }
			// if (url == '/js/index.js') {
			//     fs.readFile('./public/js/index.js', (error, data) => {
			//         response.end(data)
			//     })
			// }
			// if (url == '/') {
			//     fs.readFile('./public/index.html', (error, data) => {
			//         response.end(data)
			//     })
			// }

		}

	}
}

//export  class App
module.exports = App;
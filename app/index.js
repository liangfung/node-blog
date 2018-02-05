/**
 * 主要核心逻辑入口
 */

//使用fs进行IO操作
const fs = require('fs');
const path = require('path');
const staticServer = require('./static-server');
const apiServer = require('./api')

class App {
	constructor() {

	}
	initServer() {
		return (request, response) => {
			let { url } = request; //解构赋值 let url = request.url
			if (url.match('action')) {
				let body = apiServer(url)
				response.writeHead(200, 'resolve OK', 
				{
					'X-powered-by': 'Node.js',
					'Content-Type': 'application/json'
				})
				response.end(JSON.stringify(body))
			} else {
				staticServer(url)
				.then((data) => {
					response.writeHead(200, 'resolve OK', {'X-powered-by': 'node.js'})
					response.end(data)
				})
				.catch((err) => {
					response.end(err)
				})
			}
		}

	}
}

//export  class App
module.exports = App;
const fs = require('fs');
const path = require('path');

//通过url获取绝对路径
let getPath = (url) => {
  return path.resolve(process.cwd(), 'public', `.${url}`)
}
let staticFunc = (url) => {

  //简陋方法，日后重构,做一个路由分发
  let map = {
    '/': '/index.html',
    '/About': '/about.html',
    '/Blog': '/blog.html'
  }

  url = map[url] || url;
  let _path = getPath(url)
  return new Promise((resolve, reject) => {
    fs.readFile(_path, (err, res) => {
      if (err) {
        reject(err)
      } else {
        resolve(res)
      }
    })
  })
}

module.exports = staticFunc
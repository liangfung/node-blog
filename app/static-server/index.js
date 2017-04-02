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
    let body = ''
    try {
        body = fs.readFileSync(_path)
    } catch (err) {
        body = err.stack
    }

    return body;
}

module.exports = staticFunc
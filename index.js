
const http = require('http');
const PORT = 7000;
const App = require('./app');
const server = new App();

http.createServer(server.initServer()).listen(PORT, () => {
    console.log('done')
})
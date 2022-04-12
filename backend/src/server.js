const http = require('http');
const app = require('./app')
const port = process.env.PORT || 3333;
const server = http.createServer(app);
server.listen(port, () => { console.log(`Servidor rodando em http://localhost:${port}`) });
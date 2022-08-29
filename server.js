const http = require('http');
const express = require('express');
const path = require('path');
const app = express();
app.use(express.json());
app.use(express.static('express'));
// URL padrão do site
app.use('/', (req, res) => {
    res.sendFile(path.join(__dirname+'/src/index.html'));
});
const server = http.createServer(app);
var port = normalizePort(process.env.PORT || '3000');

server.listen(port);
console.debug('Server inicializado na porta ' + port);
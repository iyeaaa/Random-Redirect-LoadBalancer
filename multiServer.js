
const express = require('express');
const http = require('http');
const { Server } = require('socket.io');

const createServer = (port, serverName) => {
    const app = express();

    app.get('/', (req, res) => res.send(`Hello from ${serverName}`));

    // http 서버 생성
    const httpServer = http.createServer(app);

    httpServer.listen(port, () => {
        console.log(`${serverName} running on port ${port}`);
    });
};

const serverCount = 5; // 원하는 서버 수
const basePort = 3001;

for (let i = 0; i < serverCount; i++) {
    const port = basePort + i;
    createServer(port, `Server ${i + 1}`);
}

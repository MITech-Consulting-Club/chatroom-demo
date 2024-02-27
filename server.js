const websocket = require('ws');

const PORT = 8080;

const wss = new websocket.WebSocketServer({ port: PORT });

const colors = new Map();

wss.on('connection', function(ws) {
    console.log("New client connected");
    const color = Math.floor(Math.random() * 360);
    colors.set(ws, color);

    ws.on('message', function(msg) {
        const msgData = JSON.parse(msg);
        const senderColor = colors.get(ws);
        const response = {
            name: msgData.name,
            text: msgData.text,
            color: senderColor
        };
        for(let i = 0; i < colors.size; i++) {
            Array.from(colors.keys())[i].send(JSON.stringify(response));
        }
    });

    ws.on('close', function() {
        colors.delete(ws);
    });
});

console.log("Server started on port", PORT);

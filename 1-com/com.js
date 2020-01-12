const WebSocketServer = require("ws").Server;

async function createGunServer(options) {
  const wss = new WebSocketServer(options.ws);
  wss.on("connection", peer => {
    console.log("peer connected");
    peer.on("message", data => {
      console.log("received", data);
      peer.send(data);
    });

    peer.send("message on connect");
    setTimeout(() => peer.send("message after one second"), 1000);
  });
  return wss;
}

createGunServer({ ws: { port: 8080 } });

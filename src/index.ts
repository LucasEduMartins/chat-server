import onConnection from "./listeners/onConnetion";

const { createServer } = require("http");
const { Server } = require("socket.io");

const httpServer = createServer();
export const io = new Server(httpServer, {
  cors: {
    origin: "*",
  },
});

io.on("connection", onConnection);
httpServer.listen(3000);

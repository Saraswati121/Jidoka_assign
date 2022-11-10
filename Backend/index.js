const express = require("express");
const http = require("http");
const {Server} = require("socket.io");

const app = express();
const webServer = http.createServer(app);
const wss= new Server(webServer)

const history=[]
wss.on("connection", () => {
  ws.broadcast.emit("new user")
  ws.emit("history",history)

  ws.on("new message",(m)=>{ 
      // console.log("got new message",m)
      history.push(m)
      wss.emit("new message",m)
  })
})


webServer.listen(8080, () => {
  console.log('Server is running on port 8080');
});
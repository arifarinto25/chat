
const express = require('express');
const app = express();
const port = 3001;

const io = require("socket.io-client");
const socket = io("ws://54.254.162.2:3000");

app.get('/helloworld/:from/:to/:message', (req, res) => {
  res.send('Hello World!')
  const content = req.params.message
  const to = req.params.to
  const message = {
    content,
    from: req.params.from,
    to,
  };
  socket.to(to).to(req.params.from).emit("private message", message);
  console.log(message);
  messageStore.saveMessage(message);
});

app.listen(port, () => {
  console.log(`cli-nodejs-api listening at http://54.254.162.2:${port}`)
});
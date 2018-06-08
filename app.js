const express = require('express');
const msg = require('./model/message');
const dbconn = require('./model/dbconnector');

const app = express();

app.get('/', (req, res) => {
  res.send("alright, nice");
});

/*
app.post('/messages/:title&:msg', (req, res) => {
  console.log(`Received ${req.params.length} ...process further`);
  msg.title = req.params.title;
  msg.body = req.params.body;

  let result = writeMessage(msg);

  res.send(result);
});
*/

app.post('/messages', (req, res) => {
  console.log(`Received ${req.query.length} ...process further`);
  msg.title = req.query.title;
  msg.body = req.query.msg;

  let result = writeMessage(msg);

  res.send(result);
});

function writeMessage(message) {
  dbconn.filename = 'test';
  let returnValue = dbconn.create(message.title + '\r\n' + message.body);

  if(returnValue) {
    return returnValue;
  } else {
    throw Error("Something went wrong while writing to DB :(");
  }
}

app.listen(8000, () => { console.log("Server is listening :)") });
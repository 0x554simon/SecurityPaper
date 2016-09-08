var app = require('express')();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.get('/', function(req, res){
  res.sendFile(__dirname + '/index.html');
});

io.on('connection', function(socket){
  socket.on('master', function(msg){
    io.emit('slave', msg);
  });
});

http.listen(3000, function(){
  console.log('listening on *:3000');
});
/*
var express = require('express');
var http = require('http');
var app = express();

app.get('/index.html',function(req,res){
    res.writeHead(200, {'Content-Type':'text/html'});
    res.write('<header><meta charset="utf-8"/></head>');
    res.end('你好\n');
});
app.listen(1137,"127.0.0.1");
*/
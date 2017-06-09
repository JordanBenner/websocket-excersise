var express = require('express');
var app = express();
var http = require('http').Server(app);
var io = require('socket.io')(http);

app.set('view engine', 'hbs');

app.get('/', function (request, response){
response.render('chat.hbs');
});

io.on('connection', function (client){
  console.log('Connected');

  client.on('disconnect', function (){
    console.log(' EXITED')
  });
  client.on('incoming', function (msg){
    io.emit('chat-msg', msg)
  })
});
http.listen(8000,function (){
console.log('Listening on port 8000')
});


//private chat//

// client.on('join-room', function (room){
//   client.join(room, function(){
//     consol.log(client.rooms);
//     io.to(msg.room).emit('chat-message', '**new user joined**');
//   });
//
//   client.on('incoming', function (msg){
//     io.to(msg.room)emit('chat-msg', msg.msg)
//   });
// });
// });

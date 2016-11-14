function socket(io) {
  // start listen with socket.io
  io.on('connection', function(socket){
    console.log('a user connected');
    socket.on('new message', function(msg){
      var data = {
        message: msg.message,
        username:msg.username,
        date: Date.now()
      };
      io.emit('chat message', data);
    });
  });
}

module.exports = socket;

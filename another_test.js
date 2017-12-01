$('#chat-btn').click(function(event) {
  event.preventDefault();
  var connId = $("#friend").val();

  var conn = peer.connect(connId);

  conn.on('open', function(){
    $("#chat-body").append("<div>Connected!</div>");
  });

  $('#send-msg').click(function(event) {
    event.preventDefault();

    var msg = $("#msg").val();

    $("#chat-body").append("<div>" + msg + "</div>");
    conn.send(msg);
  });

  conn.on('data', function(data){
    $("#chat-body").append("<div>" + data + "</div>");
  });
});

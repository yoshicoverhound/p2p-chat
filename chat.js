require(['another_test']);

var peer = new Peer({key: 'gabq1mrc6uma38fr'});

peer.on('open', function(id) {
  $('#chat-id').text('Your peer ID is: ' + id);
});

peer.on('connection', function(conn) {
  $("#chat-body").append("<div>Connected?</div>");

  conn.on('data', function(data){
    $("#chat-body").append("<div>" + data + "</div>");
  });

  $('#send-msg').click(function(event) {
    event.preventDefault();

    var msg = $("#msg").val();

    $("#chat-body").append("<div>" + msg + "</div>");
    conn.send(msg);
  });
});

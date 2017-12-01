$(function() {
  var peer = new Peer({key: 'gabq1mrc6uma38fr'});

  peer.on('open', function(id) {
    $('#chat-id').text('Your peer ID is: ' + id);
  });

  var setupConnection = function (conn) {
    $('#send-msg').click(function(event) {
      event.preventDefault();

      var msg = $("#msg").val();

      $("#chat-body").append("<div>You said: " + msg + "</div>");
      conn.send(msg);
    });

    conn.on('data', function(data){
      $("#chat-body").append("<div>" + data + "</div>");
    });
  };

  peer.on('connection', function(conn) {
    $("#chat-body").append("<div>Connected!</div>");

    conn.on('data', function(data){
      $("#chat-body").append("<div>" + data + "</div>");
    });

    setupConnection(conn);
  });

  $('#chat-btn').click(function(event) {
    event.preventDefault();

    var connId = $("#friend").val();

    var conn = peer.connect(connId);

    conn.on('open', function(){
      $("#chat-body").append("<div>Connected!</div>");
    });

    setupConnection(conn);
  });
});

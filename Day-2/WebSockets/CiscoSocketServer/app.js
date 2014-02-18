var ws = require("nodejs-websocket")

// Scream server example: "hi" -> "HI!!!"
var server = ws.createServer(function (conn) {
    console.log("New connection")
    conn.on("text", function (str) {
       for(var i=0;i<server.connections.length;i++){
       		server.connections[i].sendText(str);
       }
    });
    
    conn.on("close", function (code, reason) {
        console.log("Connection closed")
    })
}).listen(8001);
console.log("Server listening on port 8001");
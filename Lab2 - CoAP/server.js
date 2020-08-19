var coap = require("coap");

var server = coap.createServer();
server.on('request', function(req, res) {
 

  var interval = setInterval(function() {
    res.write(new Date().toISOString() + '\n')
}, 1000)
server.listen(function() {
	console.log('server started');
});

server.on('request', function(req, res) {
 switch(req.url) {
  case ('/temp') :
   if (req.method == 'GET' && req.headers['Observe'] !== 0) {
    res.code = '2.05';
    res.setOption("Content-Format", "text/plain")
    res.end(tempValue.toString());
   }
  break;
  case ('/.well-known/core'):
   if (req.method == 'GET') {
    res.code = '2.05';
    res.setOption("Content-Format", "application/link-format");
    res.end(tempValue.toString());
   }
  break;
  default:
   res.code = '4.04';
   res.setOption("Content-Format", 'application/xml');
   res.end('<html><head><title>404 - Not found</title></head><body><h1>Not found.</h1></body></html>');
   console.log("[404] " + req.method + " to " + req.url);
  break;
 }
});
var phase=0
setInterval(geneFct,1000)
function geneFct(){
    phase=(parseFloat(phase)+Math.PI/20)%Math.PI
    tempValue=Math.sin(phase)
}
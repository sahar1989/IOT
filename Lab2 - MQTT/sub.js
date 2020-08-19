
var mqtt = require('mqtt')
var client = mqtt.connect('mqtt://localhost')
client.on('connect',function(){
client.subscribe('esiee/pc2409E/meas')
})
client.on('message',function(topic, message){
	//message is buffer
console.log(message.toString())
client.end()
})
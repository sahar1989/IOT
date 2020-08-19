var mqtt = require('mqtt')
var intervalID = setInterval(function(){console.log("Interval reached")},1000)
var client = mqtt.connect('mqtt://localhost')
client.on('connect',function(){
client.publish('esiee/pc2409E/meas','20')
})
client.on('message',function(topic, message){
	//message is buffer
console.log(message.toString())
console.log(intervalID)
client.end()
})
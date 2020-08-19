var mqtt = require('mqtt')
var client =mqtt.connect('mqtt://pc2409m.lan.esiee.fr')// broker address mqtt.connect('mqtt://localhost')////
//function to run periodic every 1 second
var intervalID = setInterval(function(){console.log("Interval reached")},1000)
client.on('connect',function(){
console.log('test from E 1')
client.subscribe('esiee/pc2409E/meas')
//we could define in 2 ways 
client.publish('esiee/pc2409E/meas',toString(intervalID))
//or 
/*var intervalID = setInterval(function(){
		client.publish('esiee/pc2409E/meas',"15")
		},1000)*/
})
client.on('message',function(topic, message){
	//message is buffer
	console.log('test from E')
console.log(message.toString())
client.end()
})
var mqtt = require('mqtt')
// broker address
var client =mqtt.connect('mqtt://pc2409D.lan.esiee.fr')//mqtt.connect('mqtt://pc2409m.lan.esiee.fr')mqtt.connect('mqtt://iot.eclipse.org')
//list of subscriber address
topics=['esiee/pc2409E/meas','esiee/pc2409D/meas','esiee/pc2409F/meas']
value = new Array(topics.length)
console.log('Liste des abonments :');
topics.forEach(function(element){
   console.log(element)
})
client.on('connect',function(){
    client.subscribe(topics)
	// we prefer to use our publisher and subscriber in one script file 
	var intervalID = setInterval(function(){
		client.publish('esiee/pc2409E/meas',"15")
		},1000)
	 	
})
client.on('message',function(topic, message){
	//message is buffer 
	for(n=0;n<topics.length;n++){
		//check each machine that publish is exist in our subscriber or no
	     if(topic===topics[n]){
			console.log("find publisher : ",topic )
		value[n]=parseInt(message.toString())
		console.log('Received',message.toString(),'from',topics[n])
	   }
	}
	var result=0;
	value.forEach(function(element){
		if(element==undefined)
		{
			element=0
		}
		result+=element
	})
	//compute average value of publish messages
	console.log("value.length----<",value.length)
	result/=value.length
    console.log("result----<",result)
    client.end()
})
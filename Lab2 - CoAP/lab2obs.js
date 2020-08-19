const coap =require('coap')
const remote ={
	hostname:'californium.eclipse.org',
	pathname:'/obs',
	observe:true
}
req=coap.request(remote)
req.on('response',function(res){
	res.on('data',function(resObs){
		console.log(res.code.toString())
		console.log(JSON.stringify(res.header))
		console.log(resObs.toString())
	})
	
})
req.end()
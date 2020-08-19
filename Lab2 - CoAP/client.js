const coap  = require('coap')
/*req   = coap.request('coap://localhost:5683/temp')
coap=require('coap')*/
remote={
	hostname:'localhost',
	pathname:'/temp',
	observe:true,
	
}
req=coap.request(remote)
req.on('response', function(res) {
  //console.log(res.code.toString())
  //console.log(JSON.stringify(res.headers))
  //console.log(res.payload.toString())
	res.on('data',function(resObs){
		console.log(res.code.toString())
        console.log(JSON.stringify(res.headers))
		console.log(resObs.toString())
	})
  
})

req.end()

coap=require('coap')
req=coap.request('coap://californium.eclipse.org/test')
req.on('response',function(res){
//res.pipe(process.stdout)
/*console.log(res.payload.toString())
console.log(res.code)
console.log(JSON.stringify(res.headers))*/
Header=res.headers
console.log(Header['Max-Age'].toString())
console.log(res.headers['Max-Age'].toString())
})
req.end()
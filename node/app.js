var express = require('express')
   ,path = require('path')
   ,task = require('./routes/tasks');
var app = express();

var bodyParser = require('body-parser');

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended:false }))
// app.get('/',function(req,res){
// 	res.sendfile('views/dist/index.html');
// })
app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*")
	res.header("Access-Control-Allow-Headers","X-Requested-with");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",'3.2.1');
	res.header("content-Type","application/json;charset=utf-8");
	next();
})

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Orgin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");
	next()
})


app.post('/post',function(req,res){
	console.log(req.body)
	task.getTask(req);
	res.send("is post");
})

var server = app.listen(3100,'localhost',()=>{
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s',host,port);
});

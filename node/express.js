var express = require('express');

var app = express(),
    blog = express(),
    expressAdmin = express();

var bodyParser = require('body-parser');
app.use(bodyParser.json()); // support json encoded bodies
app.use(bodyParser.urlencoded({ extended: false })); // support encoded bodies

app.use('/blog',blog);
blog.use('/admin',expressAdmin)
blog.use('/adminX',expressAdmin)

app.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*")
	res.header("Access-Control-Allow-Headers","X-Requested-with");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",'3.2.1');
	res.header("content-Type","application/json;charset=utf-8");
	next();
})

expressAdmin.all('*',function(req,res,next){
	res.header("Access-Control-Allow-Origin","*")
	res.header("Access-Control-Allow-Headers","X-Requested-with");
	res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
	res.header("X-Powered-By",'3.2.1');
	res.header("content-Type","application/json;charset=utf-8");
	next();
})

// console.log(app.path())
// console.log(blog.path())
// console.log(expressAdmin.path())

expressAdmin.use(function(requerst,response,next){
	console.log("In coms a"+requerst.method+"to"+requerst.url)
	next()
})

expressAdmin.get('/',function(req,res){
	console.log(req.query)
	var arr = [{id:'1'},{password:'213'}]
	res.send(arr)
})

app.use(function(req,res,next){
	res.header("Access-Control-Allow-Orgin","*");
	res.header("Access-Control-Allow-Headers","Origin,X-Requested-with,Content-Type,Accept");
	next()
})

app.post('/post',function(req,res){
	console.log(req.body)
	res.send("is post");
})

var server = app.listen(3000,'localhost',()=>{
	var host = server.address().address;
	var port = server.address().port;
	console.log('Example app listening at http://%s:%s',host,port);
});

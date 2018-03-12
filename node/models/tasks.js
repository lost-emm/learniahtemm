var mysql = require('../config/mysql'); //获取数据库连接配置
var task = function(){}; //预定义一个空类，接下来添加两个方法
task.prototype.find = function(id,callback){ //增加一个方法，名为find，传入参数为id和毁掉函数callback
	var sql = "SELECT * FROM studbs WGERE id = ?"; // sql查询语句，注意这里的“?”号，它会在query的时候被处理
	mysql.onelib_pool.getConnection(function(err,connection){
        if(err){
        	callback(true);
        	return;
        }
        //获取成功后，执行query
        //三个参数第一个sql语句，第二个是一个数组，第三个是回调函数
        //着重说明第二个参数，他将依次替换sql里的“？”
        //sql语句被替换后是："SELECT * FROM studbs WHERE id = " + id
        connection.query(sql,[id],function(err,results){
        	if(err){
        		callback(true);
        		return;
        	}
        	callback(false,results);
        })
	})
}
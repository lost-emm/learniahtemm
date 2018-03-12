//引用tasks模型
var Task = require('../models/tasks');

//根据taskid获取任务数据
exports.getTask = function(req,res){
	var taskid = req.params.id;
	var task = new Task();
	task.find(taskid,function(err,result){
		if(err){
			res.send('没找到taskid为'+taskid+'的任务');
		}else if(undefined!=result){
			res.send(result.length === 1? result[0]:result);
		}
		else{
			res.end("Error");
		}
	})
}

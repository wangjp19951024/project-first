var express = require('express');
var studentDB = require('../sk/api/studentDB');
var studentRouter = express.Router();
//实现接口
//查找所有学生信息
studentRouter.get('/findAll',function(req,resp){
    studentDB.findAllStudent(function(results){
         resp.send(results);
    });
});
//添加学生
studentRouter.get('/update',function(req,resp){
    studentDB.update(function(results){
         resp.send(results);
    });
});
studentRouter.post('/login',function(req,resp){
    resp.send('登录成功');
});
module.exports = studentRouter;
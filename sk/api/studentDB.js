//当前代码必须在api.js之后执行
var pool = require('./pool');
// if(!pool){
//     return;
// }
//查询
function findAllStudent(handler){
pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from student';
            connection.query(sql,function(err,results){
                    if(err){
                        throw err;
                    }else{
                        handler.call(this,results);
                    }
                    //回收链接，以便下次继续使用
                    connection.release();
                    // pool.end();
                    });
                }
        
             });
}
//通过id删除
function deleteById(id,handler){
    pool.getConnection(function(err,connection){
                if(err){
                    throw err;
                }else{
                    var sql = 'delete from student where id = ?';
                        connection.query(sql,[id],function(err,result){
                                if(err){
                                    throw err;
                                }else{
                                    handler.call(this,result);
                                }
                                connection.release();
                                // pool.end();
                            });
                        }
                })
            }
//通过id查找
function findById(id,handler){
    pool.getConnection(function(err,connection){
        if(err){
            throw err;
        }else{
            var sql = 'select * from student where id = ?'
            connection.query(sql,[id],function(err,result){
                if(err){
                    throw err;
                }else{
                    handler.call(this,result);
                }
                connection.release();
                // pool.end();
            })
        }
    })
}
//通过id修改信息
function update(handler){
    pool.getConnection(function(err,connection){
        if(!err){
            var sql = 'insert into student values(5,"sarah","男","1996-08-08",null)';
            connection.query(sql,function(err,result){
                if(!err){
                    handler.call(this ,result);
                }
                connection.release();
            })
        }
    })
}
// 保存所有学生信息
function save(handler){
    pool.getConnection(function(err,connection){
        if(!err){
            var sql = 'select * from student';
            connection.query(sql,function(err,result){
                if(!err){
                    handler.call(this,result);
                }
                connection.release();
                // pool.end();
            })
        }
    })
}
//暴露接口
module.exports = {
    findAllStudent:findAllStudent,
    deleteById:deleteById,
    findById:findById,
    update:update,
    save:save
}

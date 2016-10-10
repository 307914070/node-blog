var express = require('express');
var router = express.Router();

//数据库连接
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodedb');//本地数据库
//var db = monk('mongodb://62121bb5-5e9f-4904-9efd-929c3f3e0f46:46Hd0gilnN14EOsj6GcGag@10.9.27.25:27017/6fc79c07-383f-4f1f-8f1c-923e5defa28d');//服务器


/* init page */
router.get('/', function (req, res, next) {
    var collection = db.get('article');//获取当前数据库
    collection.find({}, {}, function (err, docs) {
        res.render('list', {title: '文章列表', msg: 'success', status: '0', datas: docs});
    });
});

module.exports = router;

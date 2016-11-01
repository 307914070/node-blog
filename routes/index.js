var express = require('express');
var router = express.Router();
//数据库连接
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodedb');//本地测试
//var db = monk('mongodb://62121bb5-5e9f-4904-9efd-929c3f3e0f46:46Hd0gilnN14EOsj6GcGag@10.9.27.25:27017/6fc79c07-383f-4f1f-8f1c-923e5defa28d');//服务器

/* GET home page. */
// router.get('/', function(req, res, next) {
//
//     var collection = db.get('article');//获得文章集合
//     console.log('开始查找...');//输出log
//     //var userName = req.param('data');
//     collection.find({}, {sort:{time: -1}}, function (err, docs) {
//         //var datas = docs;
//         res.render('index', {msg: 'success', status: '0', data: docs});
//     });
// });

router.get('/test', function (req, res) {
  res.send({data:'这是后台返回的一个data.'});
});

//获取文章
router.get('/getArticle', function (req, res) {
    var collection = db.get('article');//获得文章集合
    console.log('开始查找...');//输出log
    //var userName = req.param('data');
    collection.find({}, {}, function (err, docs) {
        console.log('结果：', docs);//输出log
        res.send({msg: 'success', status: '0', data: docs});
    });
});


module.exports = router;

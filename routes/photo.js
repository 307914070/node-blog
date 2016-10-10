var express = require('express');
var router = express.Router();

//数据库连接
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodedb');//本地测试
//var db = monk('10.9.27.25:27017/6fc79c07-383f-4f1f-8f1c-923e5defa28d');//服务器

//get photo
router.get('/', function (req, res, next) {
    res.render('photo', {title: 'photo'});

});

//添加文章
router.get('/addArticle', function (req, res) {
    var collection = db.get('article');//获得文章集合
    console.log('req:', req.param('data'));//输出log
    var userName = req.param('data');
    collection.insert(req.param('data'), function (err, docs) {
        res.send({msg: 'success', status: '0'});
    });
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

//测试请求
router.get('/getUser', function (req, res) {
    var collection = db.get('user');//获得用户集合
    collection.find({}, {}, function (err, docs) {
        res.send({title: 'photo', user: docs});
    });
});

module.exports = router;

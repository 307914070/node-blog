var router = require('../../common/router');

//数据库连接
var db = require('../../common/db.js'); //本地数据库
//var db = monk('mongodb://62121bb5-5e9f-4904-9efd-929c3f3e0f46:46Hd0gilnN14EOsj6GcGag@10.9.27.25:27017/6fc79c07-383f-4f1f-8f1c-923e5defa28d');//服务器

//get article
router.post('/add', function(req, res, next) {

    console.log('req:', req.body); //输出log
    var param = req.body; //获取页面数据
    param.time = new Date(); //获取时间

    var collection = db.get('article'); //获取数据库
    collection.find({}, {}, function(err, docs) {
        var number = docs.length;
        param.id = (parseInt(number) + 1); //id
        param.count = 10;
        collection.insert(param, function(error, docs) {
            console.log('docs:', docs);
            res.send({ msg: 'success', status: docs });
        })
    });
});

module.exports = router;
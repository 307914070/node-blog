var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
//var config = require('./config.js');

//路由后端控制器
var index = require('./routes/index'); //首页
var article = require('./routes/article'); //文章
var photo = require('./routes/photo'); //相册
var about = require('./routes/about'); //关于
var add = require('./routes/addArticle'); //添加文章
var list = require('./routes/list'); //文章列表

var app = express();
app.use(express.static('public'));//指定public目录


app.get('/', function(req, res) {
    res.sendfile('./views/index.html');
});

//路由前端渲染页面
app.use('/', index); //首页
// app.use('/article', article); //文章详细
// app.use('/photo', photo); //相册
// app.use('/about', about); //关于
// app.use('/add', add); //文章添加
// app.use('/list', list); //文章列表


// app.get('/test', function(req, res) {
//     var result = {
//         data: ['test']
//     };
//     res.send(JSON.stringify(result));
// });

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {}
    });
});

module.exports = app;

//数据库连接
var mongo = require('mongodb');
var monk = require('monk');
var db = monk('localhost:27017/nodedb'); //本地数据库
module.exports = db;
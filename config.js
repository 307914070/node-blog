if (!process.env.VCAP_SERVICES || !JSON.parse(process.env.VCAP_SERVICES).mongodb) {
  console.log("Please bind a mongodb service!")
  process.exit(1)
}
var db_config = JSON.parse(process.env.VCAP_SERVICES).mongodb;
var auth_config = [];
var db_host = db_config[0].credentials.host
var db_port = db_config[0].credentials.port
db_config.forEach(function(config) {
  auth_config.push({
    database: config.credentials.name,
    username: config.credentials.username,
    password: config.credentials.password
  });
});

module.exports = {
    test: 'aaa'
}


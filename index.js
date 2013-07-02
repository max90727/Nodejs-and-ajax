var express = require('express')
  //, routes = require('./routes')
  //, user = require('./routes/user')
  , http = require('http')
  , path = require('path');

var app = express();
app.use(express.bodyParser());

// all environments
app.set('port', process.env.PORT || 3000);
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');
app.use(express.favicon());
app.use(express.logger('dev'));
app.use(express.bodyParser());
app.use(express.methodOverride());
app.use(app.router);
app.use(express.static(path.join(__dirname, 'public')));

// development only
if ('development' == app.get('env')) {
  app.use(express.errorHandler());
}

app.all('/ajax', function(req, res, next) {  		//cors domain should be solved by &callback=?!!
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "X-Requested-With");
  next();
});

app.get('/ajax', function(req, res) {
  console.log(req.body.objectData);
  res.contentType('json');
  //res.send({ some: JSON.stringify({response:'json'}) });      //send json data
  res.sendfile('ajax/'+ req.query.filePath + '.json';  //send json file
});

app.get('/JSONP', function(req, res) {
    console.log("JSONP");
    console.log(req.query.cb );
    res.send(req.query.cb + '(\"hello JSONP\");');    //callback function: cb("hello JSONP");     
    //cb is callback function name which can be added in ajax url; cb is added into object req.query at runtime
});

//app.get('/', routes.index);
//app.get('/users', user.list);

http.createServer(app).listen(app.get('port'), function(){
  console.log('Express server listening on port ' + app.get('port'));
});

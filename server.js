/**
 * Created by johnson on 2017/7/1.
 */
let express = require('express');
let user = require('./rooutes/user')
let category = require('./rooutes/category')
let article = require('./rooutes/article')
let path =  require('path');

let app = express();
//设置模板引擎
app.set('view engine','html');
app.set('views',path.resolve('views'));
app.engine('html',require('ejs').__express);
app.use(express.static(path.resolve('node_modules')));
app.use('/user',user)
app.use('/category',category)
app.use('/article',article)
app.listen(8080);
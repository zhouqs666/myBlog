/**
 * Created by johnson on 2017/7/1.
 */
let express = require('express');
let user = require('./rooutes/user')
let category = require('./rooutes/category')
let article = require('./rooutes/article')
let app = express();

app.use('/user',user)
app.use('/category',category)
app.use('/article',article)
app.listen(8080);
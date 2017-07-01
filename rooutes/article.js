/**
 * Created by johnson on 2017/7/1.
 */
let express = require('express')
let router = express.Router()

router.get('/add',function (req, res) {
    res.send('增加文章')
})

router.get('/delete',function (req, res) {
    res.send('删除文章')
})
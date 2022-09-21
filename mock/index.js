const express = require('express')
const app = express()
const debug = require('debug')('my-application')
// 使用nodemon优点：不用重启服务器，修改后直接刷新页面即可

app.get('/',(req,res) => {
    res.send({
        msg:'success'
    })
})

app.listen(3003, () => {
    debug('服务器运行在3003端口')
})
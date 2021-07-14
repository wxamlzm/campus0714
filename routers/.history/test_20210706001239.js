// 引入第三方模块
const express = require('express');
const mysql = require('mysql');
// 创建web服务器和端口
const app = express().listen(8080, ()=>{
    console.log("LInkStart");
});

// 创建连接池

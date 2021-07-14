// 引入第三方模块
const express = require('express');
const mysql = require('mysql');
// 创建web服务器和端口
const app = express().listen(8080, ()=>{
    console.log("LInkStart");
});

// 创建连接池
let pool = mysql.createPool({
    host: "127.0.0.1",
    port: "8080",
    
})
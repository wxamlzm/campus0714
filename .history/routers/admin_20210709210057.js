// import express
const express = require('express');
// import pool
const pool = require('pool');
// create router obj
let router = express.Router();

// add router
// admin login: (post /login)
// address:
router.post('/login', (req, res, next)=>{
  // transform req to obj
  let reqObj = req.body;
  // execute sql
  let strSql = 'SELECT* FROM admin WHERE aid=? AND apwd=?';
  pool.query(strSql, [reqObj.aid, reqObj.apwd], (err, data)=>{
    if(err){
      next(err);
      return;
    }
    if(data.length == 0){
      res.send({code:0, msg:'登录失败'});
    }else{
      res.send({code:1, msg:'登录成功'});
    }
  });
});

// show resumelist

// show resumedata

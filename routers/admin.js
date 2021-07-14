// import express
const express = require('express');
// import pool
const pool = require('../util/pool.js');
// create router
const router = express.Router();

// set adminlogin (post /login)
// address: /admin/login
router.post('/login', (req, res, next)=>{
  // translate req to obj;
  let reqObj = req.body;
  // execute sql
  let strSql = 'SELECT* FROM admininfo WHERE a_names=? AND apwd';
  pool.query(strSql, [reqObj.aname, reqObj.apwd], (err,data)=>{
    if(err){
      next(err);
      next;
    }
    if(0 == data.length){
      res.send({code:0,msg:'登录失败'});
    }else{
      res.send({code:1,msg:'登录成功'});
    }
  });
});

// set resume view 
module.exports = router;
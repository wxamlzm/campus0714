// import express
const express = require('express');
// import pool
const pool = require('../util/pool.js');
// create router
const router = express.Router();

// add route
// user login (post /login)
// address: /user/login
router.post('/login', (req, res, next)=>{
    // translate req to obj
    let reqObj = req.body;
    // execute sql
    let strSql = '';
    pool.query(strSql, [], (err, data)=>{
        if(err){
            next(err);
            return;
        }
        if(data.length == 0){
            res.send({code:0,msg:'logerr'});
        }else{
            res.send({code:1,msg:'logsuc'});
        };
    });
});

// user regiest (post /reg);
// address: /user/reg
router.post('/reg', (req, res, next)=>{
    // translate req to obj
    let reqObje = req.body;
    // execute sql
    let strSql = '';
    pool.query(strSql, [], (err, data)=>{
        if(err){
            next(err);
            return;
        }
        if(data.affectedRows == 0){
            res.send({code:1, msg:'注册失败'});
        }else{
            res.send({code:1, msg:'注册成功'})
        }
    })
})
module.exports = router;
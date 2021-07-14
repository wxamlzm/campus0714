// import express
const express = require('express');
// import pool
const pool = require('../util/pool.js');
// create router
const router = express.Router();

// add route
// user login (post /login)
// adderess: /user/login
router.post('/login', (req, res, next)=>{
    // translate req to obj
    let reqObj = req.body;
    // execute sql
    let strSql = '';
    pool.query(strSql, [], (err, data)=>[])
})
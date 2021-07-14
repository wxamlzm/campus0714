// import express
const express = require('express');
// import pool
const pool = require('./util/pool.js');
// import router
const adminRouter = require('./routers/admin.js');
const userRouter = require('./routers/user.js');

// create webserver and port
const server = express().listen(8080, ()=>{
  console.log('LINKSTART');
});

// set midware
// translate post data
server.use(express.urlencoded({
  extended:false
}));
// host static resources
server.use(express.static(__dirname, 'views'));

// host router
server.use('/admin', adminRouter);
server.use('/user', userRouter);

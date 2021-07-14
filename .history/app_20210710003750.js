// import express
const express = require('express');
// import pool
const pool = require('./util/pool.js');
// import path
const path = require('path');
// import routers


// create web server
const app = express();
// create port
app.listen(8080, ()=>{
    console.log('LINKSTART!');
});

// use midware to translate post data
app.use(express.urlencoded({
    extended:false;
}));

// hosting file midware
app.use(express.static(path.join(__dirname, 'views')));
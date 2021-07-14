// require express
const express = require('express');
// create webserver&port
const app = express().listen(8080, ()=>{
    console.log("LInkStart");
});
'use strict';

var express = require('express');

var app = express();

function logger(req,res,next){
  console.log(new Date(), req.method, req.url);
  next();
}

function hello(req,res,next){
  res.write('Hello \n');
  next();
}

function bye(req,res,next){
  res.write('Bye \n');
  res.end();
}

var apiRouter = express.Router();

apiRouter.use(logger);

// app.use(hello,bye);

app.use('/api',apiRouter);

app.use(hello,bye);

var server = app.listen(3000);


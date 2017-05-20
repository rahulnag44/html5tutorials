var express = require('express');
var app = express();
var path = require('path');

app.use(express.static(path.join(__dirname,'/public')));

app.use('/audioSources',express.static(path.join(__dirname,'/media/audio')));

app.use('/videoSources',express.static(path.join(__dirname,'/media/video')));

app.use('/node_modules',express.static(path.join(__dirname,'/node_modules')));

var port = 7420;
app.listen(port,function(){
    console.log("Listeniing on port: "+port);
});
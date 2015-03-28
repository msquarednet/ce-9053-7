var express = require("express");

var app = express();

app.locals.pretty = true;

app.set("view engine", "jade");

var things = [
    { id: 1, name: "Rock"},
    { id: 2, name: "Paper"},
    { id: 3, name: "Scissors"}
];

var people = [
    { id: 1, name: "Moe"},
    { id: 2, name: "Larry"},
    { id: 3, name: "Curly"}
];

var tabs = {};

app.use(function(req,res, next) {
    res.locals.tabs = tabs;
    next();
});



app.get("/", function(req, res){
   res.render("index", {tab: "home"});
});
app.get("/things", function(req, res){
    res.render("things", { things: things, tab: "things"});
});

app.get("/things/:id", function(req, res){
    var thing;
    for(var i = 0; i < things.length; i++){
       if(req.params.id == things[i].id){
          thing = things[i]; 
          break;
       } 
    }
    res.render("thing", { thing: thing, tab: "things"});
});

app.get("/people", function(req, res){
    res.render("people", { people: people, tab: "people"});
});

app.get("/people/:id", function(req, res){
    var person;
    for(var i = 0; i < people.length; i++){
       if(req.params.id == people[i].id){
          person = people[i]; 
          break;
       } 
    }
    res.render("person", { person: person, tab: "people"});
    
    
});

app.listen(process.env.PORT);
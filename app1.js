var express=require('express');
var app=express();
app.get("/", function(require, response) {
    response.send("You have sent a GET request.");
});
app.post("/", function(require, response) {
    response.send("A post request? Nice.");
});
app.put("/", function(require, response) {
    response.send("I don't see many put requests.");
});
app.delete("/", function(require, response) {
    response.send("Oh dear, a delete?");
});
app.listen(3000, function(){
    console.log("CRUD app is listening on port 3000.")
})
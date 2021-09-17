//npm init -y
// npm install express
// npm install nodemon
//express to create server easily
  const express=require("express");
  const app=express();


app.get("/home",function(req,res){

    res.send("hello");
    
})


  app.listen(3000,function(){
      console.log("server is listening 3000 port");
  })
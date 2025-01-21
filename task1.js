var express=require("express")
var app=express()
var mysql2=require("mysql2")
var connection=mysql2.createConnection({
    host:"localhost",
    user:"root",
    password:"123456",
    database:"bhanu"

})
connection.connect((err)=>{
    if(err){
        console.log(err.message)
    }else{
        console.log("my sql connected")
    }
}
    
)
app.get("/works",(req,res)=>{

    res.send("database connected ")

})
app.listen(3009,()=>{
    console.log("server running")
})


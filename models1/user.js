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
        console.log("my sql connectd")
    }
})

var findAll=()=>{
    return new Promise((resolve,reject)=>{
  connection.query("select * from bhanu",(err,res)=>{
    if(err){
        reject (err)}
        else{
            resolve(res)
        }
    })
  })
    }
create=(name,email)=>{
return new promise
}
    

const express = require('express')
const mongo = require('mongodb')
const cors = require('cors')

var app = express();
var mongoclient = mongo.MongoClient;
app.use(cors());
var mydb = "student";
const url = 'mongodb://localhost:27017';

app.get('/',(req,res)=>{
    res.send('Hello from express server')
})

app.get("/getdata",function(req,res){
    mongoclient.connect(url,(err,client)=>{
      if (err)
        console.log(err)
      else{
        console.log("Connected to database");
        let db = client.db(mydb)
        db.collection("studentInfo").find({}).toArray((error,result)=>{
          if(err)
            console.log(error)
          else
            console.log(result)
            res.send(result)
        });        
      }
    })
  })

  app.post('/adddata',function(req,res){
    mongoclient.connect(url,(err,client)=>{
      if(err)
        console.log(err)
      else
      {
        console.log("Connected to database");
        let db = client.db(mydb)
        db.collection("studentInfo").insertOne((req.body),(err,res)=>{
          if (err)
            console.log(err)
          else
            res.log("data inserted successfully")            
        });
        client.close();
      }
    })
  })

app.listen(4000,()=>{
    console.log("Server Running @ 4000")
})
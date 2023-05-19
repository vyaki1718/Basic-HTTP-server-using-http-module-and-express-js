const express= require('express');

const PORT=3000;

const app=express();  //create a server express object

app.get('/', (req,res)=>{
    res.send("hi there welcome to get");
})

app.post('/', (req,res)=>{
    res.json({
        massage:"Ok"
    })
})


app.listen(PORT, () => {
    //once we successfully boot up on the given port , this callback will be excuted
    console.log(`server running on port http://localhost:${PORT} `);
  });
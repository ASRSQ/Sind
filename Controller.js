const express=require('express');
const cors=require('cors');
const bodyParser=require('body-parser');
const models=require('./models');

const app=express();
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
let user=models.User;

app.post('/login',async (req,res)=>{
    let response=await user.findOne({
        where:{Pnome:req.body.name, matricula: req.body.password}
    });
    if(response === null){
        res.send(JSON.stringify('error'));
    }else{
        res.send(response);
    }
    console.log(response);
});

let port=process.env.PORT || 8080;
app.listen(port,(req,res)=>{
    console.log('Servidor Rodando');
});
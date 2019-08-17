const express=require('express');
const hbs=require('hbs');

const port=process.env.PORT || 3000;
var app=express();
hbs.registerPartials(__dirname+'/views/partials');
app.set('view engine','hbs');

app.use(express.static(__dirname+'/public'))


app.get('/bad',(req,res)=>
{
  res.send({
    name:"Abhinay Kumar",
    roll:85,
    branch:"CSE"
  });
});

app.get('/home',(req,res)=>{
  res.render('home.hbs',{
    title:"Home",
    date:new Date().getFullYear()
  })
});

app.get('/about',(req,res)=>{
  res.render('home.hbs',{
    title:'About',
    date: new Date().getFullYear()
  })
});

app.get('/projects',(req,res)=>{
  res.render('projects.hbs',{
    title:'Projects',
    date: new Date().getFullYear()
  })
});

app.listen(port,()=>
{
  console.log(`Server is up and running on port ${port}`);
});

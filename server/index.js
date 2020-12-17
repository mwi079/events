const express=require('express');
const router=require('./router');

const PORT=3001;

const app=express();

app.use(router);

app.listen(PORT, ()=>{
  console.log(` Listening on http://localhost:${PORT}`)
})
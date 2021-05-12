const express=require('express');
const app=express();
const path=require('path');
const socketio=require('socket.io');
const http=require('http');
const server=http.createServer(app);
const io=socketio(server);
app.use('/',express.static(path.join(__dirname,'/public')));
let user={};

io.on('connection',(socket)=>{
    
    socket.on('login',(data)=>{
        user[socket.id]=data.user;
        });

     socket.on('message',(data)=>{
         io.emit('received',{
             msg:data.msg,
             name:user[socket.id]
         })
     })   
})











server.listen(process.env.PORT || 3000,()=>{
    console.log('Server Running');
})

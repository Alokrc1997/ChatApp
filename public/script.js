const socket=io();



$('#login-btn').click(()=>{
   socket.emit('login',{
       user:$('#user').val()
   });
   $('#login').hide();
   $('#maindiv').show();
   $('#user').val();
});



$('#send-btn').click(()=>{
    
    socket.emit('message',{
            msg:$('#message').val()
    });
    $('#message').val("");

})

socket.on('received',(data)=>{
   // console.log(data);
    $('#list').append(`<li><strong>${data.name} : </strong>${data.msg}</li>`)
})

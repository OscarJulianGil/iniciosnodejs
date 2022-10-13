var nodemailer  = require('nodemailer');

//Información del emisor
var transporter = nodemailer.createTransport({
    service: 'gmail',
    auth :{
        user:'oscarjuligil@gmail.com',
        pass:'gqwkezexqvaeigrz'
    }
});

//Información del correo
 var mailOptions = {
    from:'oscarjuligil@gmail.com',
    to: 'oscarjuligil@hotmail.com',
    subject: "Prueba de envio desde Node JS",
    text: 'Correo de pruebas desde node js'
 }

 //Envio del correo electronico
 transporter.sendMail(mailOptions,function(error,info){
    if(error){
        console.log(error);
    }
    else{
        console.log("Correo enviado exitosamente...");
    }
 });
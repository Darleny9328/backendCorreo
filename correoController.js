const { response } = require('express');
const nodeMailer = require('nodemailer');


const envioCorreo = (req=request, resp=response)=>{
     let body = req.body;


     let config = nodeMailer.createTransport({
        host: 'send.one.com',
        post: 465,
        auth:{
            user:'sistemas@secapruh.com.mx',
            pass:'sistemas22'
        }
    })


    const opciones = {
        from:'SECAPRUH',
        Subject: body.asunto,
        name: body.nombre,
        to:body.email,
        text:body.mensaje
    };



    config.sendMail(opciones, function(error, result){

        if (error) return resp.json({ok:false, msg:error})

        return resp.json({
            ok:true,
            msg:result
        });
    })

}


module.exports= {
    envioCorreo
}
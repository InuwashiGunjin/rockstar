const { createUser, findUserUsername } = require("../services/AuthService")
const crypto = require("crypto")
const uuidv4 = require('uuid').v4
var {sessions} = require('../../index');

//VIEW
exports.registration=(req,res)=>{
    res.render("auth/registration",{layout:"layouts/blank"})
}
exports.login=(req,res)=>{
    res.render("auth/login",{layout:"layouts/blank"})
}


//PROCESS
exports.registrationProccess=async(req,res)=>{
    var user = await findUserUsername(req.body)
    if(user==null){
        var s ="abcderg"
        req.body.password = crypto.createHmac("sha256",s).update(req.body.password).digest("hex")
        //let user = {"username":req.body.username,"password":req.body.password,"firstname":req.body.firstName,"lastname":req.body.lastName,"email":req.body.email}
        createUser(req.body).then(()=>res.redirect('/')).catch(err=>res.render("auth/registration",{layout:"layouts/blank",err:"Korisnicko ime je zauzeto"}));      
    }
    else
        res.render("auth/registration",{layout:"layouts/blank",msg:"Korisnicko ime je zauzeto"});
}
exports.loginProccess=async(req,res)=>{
    var user = await findUserUsername(req.body)
    
    const { privateKey, publicKey } = crypto.generateKeyPairSync('rsa', {
        modulusLength: 2048,
    });
    var s ="abcderg"
    var signature = crypto.sign("sha256",Buffer.from(crypto.createHmac("sha256",s).update(req.body.password).digest("hex")),privateKey)
    let verificationUser = crypto.verify("sha256",Buffer.from(user!==null?user.password:" "),publicKey, signature)
    if(verificationUser){
        const sessionId = uuidv4();
        res.set('Set-Cookie',`session=${sessionId}`);
        if(typeof(sessions)=='undefined')
            sessions={};
        sessions[sessionId] = user;
        res.redirect('/');
    }
    else
    res.render("auth/registration",{layout:"layouts/blank",msg:"Korisnicko ime je zauzeto"});
}
exports.logOut = (req,res)=>{
    res.json(sessions)    
    sessions[sessionId]=null
}
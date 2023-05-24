const ConcertsService = require("../services/ConcertsService");
const CardService = require("../services/CardService")
const index = require("../../index");

exports.index = async(req,res)=>{
    var concerts = await ConcertsService.findAllConcerts();
    //res.json(concerts);
    res.render("concert/main",{layout:"layouts/main",data:concerts})
}

exports.reserveCard = async(req,res) => {
    var concertId=req.params.id_concert;
    var user = index.getUser(req.cookies["session"]);
    if(typeof(user)=='undefined')
        res.redirect("/auth/login")
    else
    {
        var nonReservedCard = await ConcertsService.findOneNonReservedCard(concertId);
        nonReservedCard=nonReservedCard[0].cards[0];
        nonReservedCard.is_reserved = true;
        nonReservedCard.id_user_reserved = user.id_users;
        if(typeof(nonReservedCard)!='undefined')
        {
            nonReservedCard =await CardService.reserveCard(nonReservedCard);
            res.json(nonReservedCard)
        }
        else
        {
            res.json("NO MORE CARDS");
        }
    }
}
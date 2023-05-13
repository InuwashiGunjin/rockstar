
const HomeService = require("../services/HomeService");

exports.index = async(req,res)=>{
    var lastSongs = await HomeService.findLastThreeSongs();
    var lastConcerts = await HomeService.findLastThreeConcerts();
    //var data = {"lastSongs":lastSongs,"lastConcerts":lastConcerts};
    //res.json(data);
    res.render("home/index",{layout:"layouts/main",data : {"lastSongs":lastSongs,"lastConcerts":lastConcerts}})
}


exports.about = (req,res)=>{
    //getAll().then(data=>res.json(data))
    res.render("home/about",{layout:"layouts/main"})
}


const HomeService = require("../services/HomeService");

exports.index = async(req,res)=>{
    var [lastSongs,metadata] = await HomeService.findLastThreeSongsAtNewAlbum();
    var lastConcerts = await HomeService.findLastThreeConcerts();
    //res.json(lastSongs)
    //res.json({"lastSongs":lastSongs,"lastConcerts":lastConcerts});
    res.render("home/index",{layout:"layouts/main",data : {"lastSongs":lastSongs,"lastConcerts":lastConcerts}})
}


exports.discography = async(req,res)=>{
    var allSongsOnTheAlbum = await HomeService.findAllSongsOnTheAlbum()
    //VIEW
    res.render("tourParts/table",{layout:"layouts/main"})
}

exports.findFutureConcerts = async(req,res)=>{
    var futureConcerts = await HomeService.findFutureConcerts()
    res.json(futureConcerts)
    //VIEW
    //res.render("home/about",{layout:"layouts/main"})
}

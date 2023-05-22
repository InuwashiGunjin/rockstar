const adminService = require("../services/AdminService")

exports.createConcert = (req,res)=>{
    res.render()
}
exports.createAlbum = async(req,res)=>{
    res.render()
}

exports.createSong = async(req,res)=>{
    var album = await adminService.findAllAlbum()
    res.json(album)
    //res.render()
}


exports.createConcertProccess = async(req,res)=>{
    adminService.createConcert(req.body).then(()=>res.send("Uspesno unesen koncert")).catch(err=>res.json(err))
}
exports.createAlbumProccess = async(req,res)=>{
    adminService.createAlbum(req.body).then(()=>res.send("Uspesno unesen album")).catch(err=>res.json(err))
}

exports.createSongProccess = async(req,res)=>{
    adminService.createSong(req.body).then(()=>res.send("Uspesno unesena pesma")).catch(err=>res.json(err))
}
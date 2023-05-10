

exports.index = (req,res)=>{
    //getAll().then(data=>res.json(data))
    res.render("home/index",{layout:"layouts/main"})
}


exports.about = (req,res)=>{
    //getAll().then(data=>res.json(data))
    res.render("home/about",{layout:"layouts/main"})
}

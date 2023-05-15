
const ConcertsService = require("../services/ConcertsService");


exports.index = async(req,res)=>{
    var concerts = await ConcertsService.findAllConcerts();
    //res.json(concerts);
    res.render("concertParts/table",{layout:"layouts/main",data:concerts})
}
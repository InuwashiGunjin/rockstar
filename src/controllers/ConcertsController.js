const ConcertsService = require("../services/ConcertsService");


exports.index = async(req,res)=>{
    var concerts = await ConcertsService.findAllConcerts();
    //res.json(concerts);
    res.render("concert/main",{layout:"layouts/main",data:concerts})
}
const CardModel = require("../models/CardModel")

module.exports.reserveCard = (card) => {
    return CardModel.update(
        {
            is_reserved:true,
            id_user_reserved:card.id_user_reserved
        },
        {
            where:{id_card:card.id_card}
        }
    )
}
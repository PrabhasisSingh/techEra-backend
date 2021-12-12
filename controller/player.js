// create a reference to the model
let playerModel = require('../models/player');

module.exports.playerList = function (req, res, next) {

    playerModel.find((err, playerDS) => {  
        if (err) {
            console.error(err);
            return res.status(400).send({
                success: false,
                message: getErrorMessage(err)
            });
        }
        else {
           
            res.status(200).json(playerDS);
        }
    });
}


module.exports.playerAdd = (req, res, next) => {

    let newItem = new playerModel(req.body);

    console.log(newItem);
    playerModel.create(newItem, (err, item) => {
        if (err) {
            console.log(err);
            // res.end(err);
            return res.status(400).send({
                success: false,
                message: getErrorMessage(err)
            });
        }
        else {
            // refresh the book list
            console.log(item);
            // res.redirect('/inventory/list');
            return res.status(200).json(item);
        }
    });

}
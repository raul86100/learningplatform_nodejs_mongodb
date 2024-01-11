const autherinfomodel = require("../../model/authorinfo");
const mentorsignup = (req, res, next) => {
  autherinfomodel
    .create(req.body)
    .then(() => {
      res.send("created in database");
    })
    .catch((err) => {
      res.send("email Id is already exist");
    });
};

module.exports = { mentorsignup };

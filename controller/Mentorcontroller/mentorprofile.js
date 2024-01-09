const autherinfomodel = require("../../model/authorinfo");
const mentorsignup = (req, res, next) => {
  autherinfomodel
    .create(req.body)
    .then(() => {
      res.send("created in database");
    })
    .catch((err) => {
      console.log(err);
    });
};

module.exports = { mentorsignup };

var bodyParser = require('body-parser');

var jsonParser = bodyParser.json();
var baseURL = '/api/rants';

module.exports = (app, db) => {

  app.get(baseURL, function(req, res, next) {
    db.rants
      .find({})
      .sort({ timestamp: 1 })
      .exec((err, docs) => {
        res.json(docs);
        next();
      });
  });

  app.post(baseURL, jsonParser, (req, res, next) => {
    var text = (req.body || {}).text;
    if (!text) {
      res.status(400).json({ message: 'text must not be empty' });
      return next();
    }
    db.users
      .find({})
      .limit(1)
      .exec((err, user) => {
        var rant = {
          text: text,
          timestamp: new Date().toISOString(),
          name: user[0].name,
          imageURL: user[0].imageURL
        };
        db.rants.insert(rant, (err, saved) => {
          res.json(saved);
          next();
        });
      });
  });

  app.delete(baseURL + '/:id', (req, res, next) => {
    db.rants.remove({ _id: req.params.id }, (err, removed) => {
      res.json({});
      next();
    });
  });

};

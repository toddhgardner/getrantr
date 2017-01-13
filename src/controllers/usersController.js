module.exports = (app, db) => {

  app.get('/api/user', function(req, res, next) {
    db.users
      .find({})
      .sort({ timestamp: 1 })
      .exec((err, docs) => {
        res.json(docs[0]);
        next();
      });
  });

};

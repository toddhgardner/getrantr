
module.exports = (app, db) => {

  app.get('/api/analytics/*', (req, res, next) => {
    res.json({});
    next();
  });

};

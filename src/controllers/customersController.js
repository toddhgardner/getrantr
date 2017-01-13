module.exports = (app, db) => {

  app.get('/api/customers/1', (req, res, next) => {
    var user = {
      name: 'Todd Gardner',
      imageURL: '/images/profile1.jpg',
      joinedOn: '2015-06-01T00:00:00.000Z'
    };

    var rants = [];
    for (var i = 0; i < 100; i++) {
      rants.push({
        name: user.name,
        imageURL: user.imageURL,
        text: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit.',
        timestamp: new Date().toISOString()
      });
    }

    db.rants.remove({}, { multi: true }, () => {
      db.rants.insert(rants, () => {
        db.users.remove({}, { multi: true }, () => {
          db.users.insert(user, () => {
            res.json({ message: 'loaded customer 1' });
            next();
          });
        });
      });
    });

  });

};

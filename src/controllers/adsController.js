
var ID_CHARS = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
function getAdvertiserId() {
  var res = '';
  for (var i = 0; i < 5000; i++) {
    res += ID_CHARS.charAt(Math.floor(Math.random() * ID_CHARS.length));
  }
  return res;
}

function shuffle(array) {
  var currentIndex = array.length, temporaryValue, randomIndex;

  // While there remain elements to shuffle...
  while (0 !== currentIndex) {

    // Pick a remaining element...
    randomIndex = Math.floor(Math.random() * currentIndex);
    currentIndex -= 1;

    // And swap it with the current element.
    temporaryValue = array[currentIndex];
    array[currentIndex] = array[randomIndex];
    array[randomIndex] = temporaryValue;
  }

  return array;
}

module.exports = (app, db) => {

  app.get('/api/ads', (req, res, next) => {
    db.ads
      .find({})
      .exec((err, docs) => {
        for (var i = 0; i < docs.length; i++) {
          docs[i].advertiserId = getAdvertiserId();
        }
        var ads = shuffle(docs);
        res.json(ads);
        next();
      });
  });

};

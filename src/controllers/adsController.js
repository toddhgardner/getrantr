var ADS = [
  {
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-russia.jpg',
    targetURL: 'https://www.travelallrussia.com/'
  }, {
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-goldbathroom.jpg',
    targetURL: 'http://www.houzz.com/gold-bathroom'
  }, {
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-hair.jpg',
    targetURL: 'http://www.hairclub.com/'
  }
];

var ID_CHARS = '23456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz';
function getAdvertiserId() {
  var res = '';
  for (var i = 0; i < 5000; i++) {
    res += ID_CHARS.charAt(Math.floor(Math.random() * ID_CHARS.length));
  }
  return res;
}

module.exports = (app, db) => {

  app.get('/api/ads', (req, res, next) => {
    var result = [];
    for (var i = 0; i < 5; i++) {
      var ad = ADS[Math.floor(Math.random() * ADS.length)];
      ad.advertiserId = getAdvertiserId();
      result.push(ad);
    }

    res.json(result);
    next();
  });

};

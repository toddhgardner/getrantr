var ADS = [
  {
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-bacon.jpg',
    targetURL: 'http://www.baconfreak.com/'
  }, {
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-dundee.png',
    targetURL: 'https://www.youtube.com/watch?v=POJtaO2xB_o'
  }, {
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-bear.jpeg',
    targetURL: 'http://www.bear.org/website/'
  }, {
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-hasslehoff.png',
    targetURL: 'http://davidhasselhoffonline.com/bear'
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

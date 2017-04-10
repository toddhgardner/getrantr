var Datastore = require('nedb');

var db = {};
db.ads = new Datastore({ filename: './data/ads.db', autoload: true });
db.users = new Datastore({ filename: './data/users.db', autoload: true });
db.rants = new Datastore({ filename: './data/rants.db', autoload: true });

switch (process.argv[2]) {
  case '1':
  case 'todd':
    importTodd(db, () => {
      console.log('Imported User 1 (Todd)');
    });
    break;

  case '2':
  case 'donald':
    importDonald(db, () => {
      console.log('Imported User 2 (Donald)');
    });
    break;

  case '3':
  case 'alttodd':
    importAltTodd(db, () => {
      console.log('Imported User 3 (Alt Todd)');
    });
    break;

  default:
    console.warn(`Invalid import ${process.argv[2]}`);

}

function importTodd(db, callback) {
  var user = {
    name: 'Todd H. Gardner',
    imageURL: '/images/profile1.jpg',
    joinedOn: '2015-06-01T00:00:00.000Z'
  };

  var rants = [];
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'There are only two hard problems in programming: cache invalidation, and being willing to relocate to San Francisco',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 2).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'The year is 2017. Donald J. Trump is President. The primary resistance leaders are Teen Vogue and the Merriam-Webster online dictionary.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 4).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'That thing where you buy some domains for a crazy idea...',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 6).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'If body { background: red; } isn’t the first thing you do to test a CSS file is included, then I don’t know what kind of developer you are.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 10).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'How did health insurance pull the scam of counting eyeballs and mouths as not part of the body and not eligible for normal health care?',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 16).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'JavaScript sneaks into all sorts of places it shouldn\'t be because its the easiest way to do it on a tight timeline.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 20).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: '*STEFON VOICE* This release has everything:\n- features\n- bug fixes\n- a root kit from a shadowy government agency\n- and human load balancers',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 26).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'People are the lifeblood of this organisation and we respect each employee as an individual.\n\nDoes that answer your question, number 795?',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 28).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Today I learned "Standards are like toothbrushes: Everyone wants one but no one wants to use someone else\'s"',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 32).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'While we\'re at it, let\'s cut their budget to a third and redirect the funds to academic and ethical studies.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 38).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Business have to lose so much money to software resellers--I don\'t understand why this idea exists anymore.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 48).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'McDonalds Breakfast is literally the only reason to go to McDonalds.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 56).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Startup (noun): Company running on other people\'s money, with a product running on other people\'s computers, selling other people\'s data.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 60).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'just when you think you finally have a hold on IE, Safari comes and slams you with a chair across the back.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 60).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Hey, @MSEdgeDev I have a reproduceable IE11 Freezing bug, but all I can find is the Edge tracker. Should I report it there?',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 72).toISOString()
  });

  var ads = [];
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-bacon.jpg',
    targetURL: 'http://www.baconfreak.com/'
  });
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-dundee.png',
    targetURL: 'https://www.youtube.com/watch?v=POJtaO2xB_o'
  });
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-bear.jpeg',
    targetURL: 'http://www.bear.org/website/'
  });
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-hasslehoff.png',
    targetURL: 'http://davidhasselhoffonline.com/bear'
  });

  db.rants.remove({}, { multi: true }, () => {
    db.rants.insert(rants, () => {
      db.ads.remove({}, { multi: true }, () => {
        db.ads.insert(ads, () => {
          db.users.remove({}, { multi: true }, () => {
            db.users.insert(user, callback);
          });
        });
      });
    });
  });
}

function importDonald(db, callback) {
  var user = {
    name: 'Donald J. Trump',
    imageURL: '/images/profile2.jpg',
    joinedOn: '2009-03-01T00:00:00.000Z'
  };

  var rants = [];
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'What is our country coming to when a judge can halt a Homeland Security travel ban and anyone, even with bad intentions, can come into U.S.?',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 2).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'MAKE AMERICA GREAT AGAIN!',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 4).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'The opinion of this so-called judge, which essentially takes law-enforcement away from our country, is ridiculous and will be overturned!',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 6).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: '.@CNN is in a total meltdown with their FAKE NEWS because their ratings are tanking since election and their credibility will soon be gone!',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 10).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'We had a great News Conference at Trump Tower today. A couple of FAKE NEWS organizations were there but the people truly get what\'s going on',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 16).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Intelligence agencies should never have allowed this fake news to "leak" into the public. One last shot at me.Are we living in Nazi Germany?',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 20).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'I win an election easily, a great "movement" is verified, and crooked opponents try to belittle our victory with FAKE NEWS. A sorry state!',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 26).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'FAKE NEWS - A TOTAL POLITICAL WITCH HUNT!',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 28).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: '.@ariannahuff is unattractive both inside and out. I fully understand why her former husband left her for a man- he made a good decision.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 32).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Sorry losers and haters, but my I.Q. is one of the highest -and you all know it! Please don\'t feel so stupid or insecure,it\'s not your fault',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 38).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Barney Frank looked disgusting--nipples protruding--in his blue shirt before Congress. Very very disrespectful.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 48).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Dopey Prince @Alwaleed_Talal wants to control our U.S. politicians with daddy’s money. Can’t do it when I get elected. #Trump2016',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 56).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Rosie is crude, rude, obnoxious and dumb - other than that I like her very much!',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 60).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'Hillary Clinton has announced that she is letting her husband out to campaign but HE\'S DEMONSTRATED A PENCHANT FOR SEXISM, so inappropriate!',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 60).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: 'The concept of global warming was created by and for the Chinese in order to make U.S. manufacturing non-competitive.',
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 72).toISOString()
  });

  var ads = [];
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-russia.jpg',
    targetURL: 'https://www.travelallrussia.com/'
  });
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-goldbathroom.jpg',
    targetURL: 'http://www.houzz.com/gold-bathroom'
  });
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-hair.jpg',
    targetURL: 'http://www.hairclub.com/'
  });

  db.rants.remove({}, { multi: true }, () => {
    db.rants.insert(rants, () => {
      db.ads.remove({}, { multi: true }, () => {
        db.ads.insert(ads, () => {
          db.users.remove({}, { multi: true }, () => {
            db.users.insert(user, callback);
          });
        });
      });
    });
  });

}

function importAltTodd(db, callback) {
  var user = {
    name: 'AltTodd',
    imageURL: '/images/profile1a.jpg',
    joinedOn: null
  };

  var rants = [];
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: null,
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 2).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: null,
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 4).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: null,
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 6).toISOString()
  });
  rants.push({
    name: user.name,
    imageURL: user.imageURL,
    text: null,
    timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 10).toISOString()
  });

  var ads = [];
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-bacon.jpg',
    targetURL: 'http://www.baconfreak.com/'
  });
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-dundee.png',
    targetURL: 'https://www.youtube.com/watch?v=POJtaO2xB_o'
  });
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-bear.jpeg',
    targetURL: 'http://www.bear.org/website/'
  });
  ads.push({
    advertiserId: 'REPLACE_ME',
    imageURL: '/images/ad-hasslehoff.png',
    targetURL: 'http://davidhasselhoffonline.com/bear'
  });

  db.rants.remove({}, { multi: true }, () => {
    db.rants.insert(rants, () => {
      db.ads.remove({}, { multi: true }, () => {
        db.ads.insert(ads, () => {
          db.users.remove({}, { multi: true }, () => {
            db.users.insert(user, callback);
          });
        });
      });
    });
  });

}

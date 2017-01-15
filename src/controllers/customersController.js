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

  app.get('/api/customers/2', (req, res, next) => {
    var user = {
      name: 'Donald J. Trump',
      imageURL: '/images/profile2.jpg',
      joinedOn: '2009-03-01T00:00:00.000Z'
    };

    var rants = [];
    rants.push({
      name: user.name,
      imageURL: user.imageURL,
      text: 'Congressman John Lewis should spend more time on fixing and helping his district, which is in horrible shape and falling apart (not to......',
      timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 2).toISOString()
    });
    rants.push({
      name: user.name,
      imageURL: user.imageURL,
      text: 'The "Unaffordable" Care Act will soon be history!',
      timestamp: new Date((new Date()) * 1 - 1000 * 3600 * 4).toISOString()
    });
    rants.push({
      name: user.name,
      imageURL: user.imageURL,
      text: 'released by "Intelligence" even knowing there is no proof, and never will be. My people will have a full report on hacking within 90 days!',
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

    db.rants.remove({}, { multi: true }, () => {
      db.rants.insert(rants, () => {
        db.users.remove({}, { multi: true }, () => {
          db.users.insert(user, () => {
            res.json({ message: 'loaded customer 2' });
            next();
          });
        });
      });
    });

  });

};

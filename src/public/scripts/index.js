/* global AdCollection, AdListView, AddRantView, RantCollection, RantListView, UserModel, UserView */

(function() {
  'use strict';

  var ads = new AdCollection();
  var rants = new RantCollection();
  var user = new UserModel();

  var adList = new AdListView({
    el: $('#ads'),
    collection: ads
  });

  var userView = new UserView({
    el: $('#user'),
    model: user
  });

  var addRant = new AddRantView({
    el: $('#add-rant'),
    collection: rants,
    user: user
  });

  var timeline = new RantListView({
    el: $('#timeline'),
    collection: rants
  });

  ads.startRotation();
  user.fetch();
  rants.fetch();

})();

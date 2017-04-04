/* global AdCollection, AdListView, AddRantView, RantCollection, RantListView, UserModel, UserView */

$(function() {
  'use strict';

  console.log('I feel a rant coming on.');

  var ads = new AdCollection();
  var rants = new RantCollection();
  rants.user = new UserModel();

  var adList = new AdListView({
    el: $('#ads'),
    collection: ads
  });

  var userView = new UserView({
    el: $('#user'),
    model: rants.user
  });

  var addRant = new AddRantView({
    el: $('#add-rant'),
    collection: rants
  });

  var timeline = new RantListView({
    el: $('#timeline'),
    collection: rants
  });

  rants.user.fetch();
  rants.fetch();

});

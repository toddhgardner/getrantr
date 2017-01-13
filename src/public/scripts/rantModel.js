var RantModel = Backbone.Model.extend({
  idAttribute: '_id'
});

var RantCollection = Backbone.Collection.extend({
  url: '/api/rants/',
  comparator: 'timestamp',
  model: RantModel
});

//
// var Rant = (function() {
//
//
//
//   var exports = {
//
//     add: function(rant) {
//       var xhr = new XMLHttpRequest();
//       xhr.open('POST', '/api/rants');
//       xhr.send(JSON.stringify(rant));
//     },
//
//     get: function(callback) {
//       var xhr = new XMLHttpRequest();
//       xhr.open('GET', '/api/rants');
//       xhr.addEventListener('readystatechange', (evt) => {
//         if (xhr.readyState === 4 && xhr.status === 200) {
//           try {
//             callback(JSON.parse(xhr.responseText));
//           }
//           catch(e) {
//             console.error('Error getting rants', e);
//           }
//         }
//       });
//       xhr.send();
//     }
//
//   };
//
//   return exports;
//
// })();

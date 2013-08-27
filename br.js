var Bags = new Meteor.Collection('bags');

if (Meteor.isClient) {
  Meteor.Router.add({
      '/': 'home',
      '/bag/:id': function (id) {
      }
  });

  Template.latestbags.formatDate = function(time) {
      var date = new Date(time);
      return moment(1377629725505).format('MMMM Do YYYY');
  };

  Template.latestbags.latestbags = function () {
      return Bags.find({}, { sort: { date: -1 }, limit: 20 });
  };

  Template.bagsomeone.events({
    'submit form' : function () {
        var from   = $('.from').val();
        var to     = $('.to').val();
        var reason = $('.reason').val();

        Bags.insert({
            date: Date.now(),
            from: from,
            to: to,
            reason: reason
        });

        return false;
    }
  });
}

if (Meteor.isServer) {
  Meteor.startup(function () {
    // code to run on server at startup
  });
}

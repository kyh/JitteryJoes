'use strict';

//Initialize Controller
angular.module('jitteryApp.controllers', [])
//Controllers
.controller('ReviewListCtrl', function ($scope, $http) {

  // Set our reviews object to be empty by default.
  $scope.reviews = [];
  $scope.reviewCount = {
    'After Dinner': {
      "name": "After Dinner",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Europeans often have a coffee after dinner.  Try sampling a taste of Europe here at home, with a soft, fruity blend that will still let you get some beauty sleep at night.",
      "picture": "img/blends/AfterDinner.png"
    },
    'Bourque Newswatch': {

      "name": "Bourque Newswatch",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Our intern named this blend, we honestly don’t know what it was until we googled the name (he wanted to be a journalist).  Try this classic flavour, roasted with cinnamon to give it a new kick!",
      "picture": "img/blends/Bourque.png"
    },
    'CN Tower of Power': {
      "name": "CN Tower of Power",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Did you know it takes half a million coffee beans end to end to reach the height of the CN Tower? Once you’ve tried this blend you’ll have the superpower of the CN tower bursting out of your fingertips",
      "picture": "img/blends/Tower.png"
    },
    'Connoisseur Estates': {
      "name": "Connoisseur Estates",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "This is our most sophisticated and most complex blend yet. It is highly praised by coffee connoisseurs around the world, and we maintain the recipe as a highly coveted secret.",
      "picture": "img/blends/Connoseiur.png"
    },
    'Columbian': {
      "name": "Columbian",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Straight from Colombia, this blend is brought straight to you after escaping the local coffee cartels.  With a strong bold flavour, and a light nutty note, enjoy it while you can.",
      "picture": "img/blends/Columbian.png"
    },
    'Fordnation Blend': {
      "name": "Fordnation Blend",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Named after our latest scandalous Toronto Mayor, this blend is only for the daring. It’s a strong blend featuring a bold flavour, and possibly some illegal substances. Try it at your own risk!",
      "picture": "img/blends/Ford.png"
    },
    'Hawaii Kona': {
      "name": "Hawaii Kona",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Do you miss the beach, surfing and coconut trees?  Try Jittery Joe’s version of tropical paradise in a cup. Featuring a nutty coconut taste and a hint of sweetness, this blend is a vacation at home.",
      "picture": "img/blends/Hawai.png"
    },
    'House Blend': {
      "name": "House Blend",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Overwhelmed by our huge selection of coffees? Try our classic house blend that’s roasted in house with tonnes of love from Jittery Joe.",
      "picture": "img/blends/House.png"
    },
    'Italian Roast': {
      "name": "Italian Roast",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "We tried to make a coffee version of an Italian expresso, and I think we succeeded.  This is a rich blend of coffee that resembles the strong taste of espresso that is meant for the bold coffee lovers out there.",
      "picture": "img/blends/Italian.png"
    },
    'Lionel Roastie': {
      "name": "Lionel Roastie",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Hello!  Is a strong, bold flavour you’re looking for?  If you ever wanted to be reminded of the 80’s, the Lionel Roastie will take you back to the golden age of funky music.",
      "picture": "img/blends/Lionel.png"
    },
    'Mocca-Java': {
      "name": "Mocca-Java",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Who doesn’t love chocolate?  Our funky Mocca-Java blend is roasted with organic dark cocoa beans which will keep you energized all day.  Just don’t become addicted. ",
      "picture": "img/blends/Ford.png"
    },
    'Reggae Blend': {
      "name": "Reggae Blend",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Ya man!  This blend will have you singing “Dont Worry, Be Happy” to its funky flavours.  Have a taste of classic Reggae that will remind you of Jamaica here in at Jittery Joes.",
      "picture": "img/blends/Reggae.png"
    },
    'Ruth Roast': {
      "name": "Ruth Roast",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Ruth Ruth Ruth!! A blend named after our favourite customer shows you how much we care about your feedback. Tell us which blend is your favourite and you might have a blend named after you.",
      "picture": "img/blends/Ruth.png"
    },
    'Toronto Blend': {
      "name": "Toronto Blend",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "If you are living in a Toronto state of mind, then this blend is the perfect companion for you.  Its complex yet subtle taste is a true reflection of such a diverse city.",
      "picture": "img/blends/Toronto.png"
    },
    'Tropic of Coffee': {
      "name": "Tropic of Coffee",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "Tropic of Cancer or Tropic of Capricorn? The best place to be is the Tropic of Coffee, we traveled around the world for this exotic blend of tropical beans that will bring you closer to the equator.",
      "picture": "img/blends/1.png"
    },
    'World Tour Blend': {
      "name": "World Tour Blend",
      "count": 0,
      "sum": 0,
      "average": 0,
      "description": "When Jittery Joe was a young lad, he traveled around the world displaying his secret blend composed of 7 different types of coffee beans!",
      "picture": "img/blends/French.png"
    }
  };

  // JSONP to get the current ratings.
  $http.jsonp('http://jitteryjoes.myplanetfellowship.com/api/ratings.jsonp?callback=JSON_CALLBACK').
  success(function(data, status) {
  	$scope.reviews = data;
    for (var i = 0; i < $scope.reviews.length; i++) {
      var coffeeType = $scope.reviews[i].item;
      var coffeeRating = $scope.reviews[i].rating;
      for (var k = 0; k < $scope.reviewCount.length; k++) {
        if (coffeeType == $scope.reviewCount[k].name) {
          $scope.reviewCount[k].count++;
          $scope.reviewCount[k].sum += parseInt(coffeeRating);
          $scope.reviewCount[k].average = $scope.reviewCount[k].sum / $scope.reviewCount[k].count;
        };
      };
    };
  });

  // Add a new rating to the list.
  $scope.addNewRating = function () {
    // Get the form data from the scope.
    var review = $scope.review;

    // Prepare the data.
    var nodeData = {
    	'type': 'review',
    	'field_review_comment': {'und': [{'value': review.comment} ]},
    	'field_review_rating': {'und': [{'value': review.rating} ]},
    	'field_review_item': {'und': {'value': review.item}},
    	'field_origin_app': {'und': [{'value': 'EMU'}]}
    };

    // POST the data and create a node.
    $http({url: 'http://jitteryjoes.myplanetfellowship.com/api/node.json', method: 'POST', data: nodeData}).
    success(function(data, status) {
        // Setup data object.
        var review = $scope.review;
        // Add our app id and date in seconds.
        review.app = 'EMU';
        var d = new Date();
        review.node_created = (d.getTime() / 1000);

        // Add the review to the reviews array.
        $scope.reviews.unshift (review);

        // Reset form vars.
        $scope.review = {};
      });
  }

  $scope.changeRating = function (rating) {
    $scope.rating = rating;
  }

  // Set our "signupSent" flag to false by default.
  $scope.signupSent = false;

  // Add a newsletter signup.
  $scope.addNewSignup = function () {
    // Get the form data from the scope.
    var user = $scope.user;

    // Prepare the data.
    var nodeData = {
    	'type': 'signup',
    	'field_user_name': {'und': [{'value': user.name} ]},
    	'field_user_email': {'und': [{'value': user.email} ]},
    	'field_origin_app': {'und': [{'value': 'EMU'}]}
    };

    // POST the data and create a node.
    $http({url: 'http://jitteryjoes.myplanetfellowship.com/api/node.json', method: 'POST', data: nodeData}).
    success(function(data, status) {
        // Set our "signupSent" flag.
        $scope.signupSent = true;
      });
  }
});
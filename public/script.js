    var hwApp = angular.module('HelloWorldApp', []);
	
    hwApp.controller(
      'HelloWorldController',
      ['$scope', function ($greet) {
        $greet.who = 'WeAreTheWorld!';
      }]
    );

    hwApp.controller(
      'whoAmI',
      ['$scope', function ($greet1) {
        $greet1.firstname = 'John';
        $greet1.lastname = 'Doe';
      }]
    );


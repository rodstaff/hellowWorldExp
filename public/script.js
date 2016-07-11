    var HWApp = angular.module('HelloWorldApp', []);
	
    HWApp.controller(
      'HelloWorldController',
      ['$scope', function ($greet) {
        $greet.who = 'WeAreTheWorld!';
      }]
    );

    HWApp.controller(
      'whoAmI',
      ['$scope', function ($greet1) {
        $greet1.firstname = 'John';
        $greet1.lastname = 'Doe';
      }]
    );


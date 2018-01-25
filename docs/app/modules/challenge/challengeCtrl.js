(function() {
	'use strict';

	/**
	* @ngdoc function
	* @name app.controller:challengeCtrl
	* @description
	* # challengeCtrl
	* Controller of the app
	*/

  	angular
		.module('challenge')
		.controller('ChallengeCtrl', Challenge);

		Challenge.$inject = ['$scope','ChallengeService'];

		/*
		* recommend
		* Using function declarations
		* and bindable members up top.
		*/

		function Challenge($scope,challengeService) {
			/*jshint validthis: true */
			var vm = this;
			vm.test = 'hello je suis un test';
			vm.test2 = "Before press button";

			vm.testService = function(){
				 vm.test2 = challengeService.test("After press");
			}
		}

})();

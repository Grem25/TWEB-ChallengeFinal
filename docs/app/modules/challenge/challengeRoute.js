'use strict';

/**
 * @ngdoc function
 * @name app.route:challengeRoute
 * @description
 * # challengeRoute
 * Route of the app
 */

angular.module('challenge')
	.config(['$stateProvider', function ($stateProvider) {
		
		$stateProvider
			.state('home.challenge', {
				url:'/challenge',
				templateUrl: 'app/modules/challenge/challenge.html',
				controller: 'ChallengeCtrl',
				controllerAs: 'vm'
			});

		
	}]);

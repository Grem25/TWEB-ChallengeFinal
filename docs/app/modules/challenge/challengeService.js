(function() {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.service:challengeService
	 * @description
	 * # challengeService
	 * Service of the app
	 */

  	angular
		.module('challenge')
		.factory('ChallengeService', Challenge);
		// Inject your dependencies as .$inject = ['$http', 'someSevide'];
		// function Name ($http, someSevide) {...}

		Challenge.$inject = ['$http'];

		function Challenge ($http) {

			return {
				test: function (payload) {
					return payload;
	
				}
			}

		}

})();

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
	
				},

				getTest: function () {
					return new Promise((resolve) => {
	
						// fetch from our server
						$http.get("https://lit-wave-84586.herokuapp.com/challenge")
							.then(function (response) {
							
								// send back data
								resolve(response.data);
							});
	
	
					});
	
				},

				postTest: function (test) {
					return new Promise((resolve) => {
						
						$http({
							method: 'POST',
							url: 'https://lit-wave-84586.herokuapp.com/challenge',
							headers: {
								'Content-Type': 'application/json'
							},
							data: {
								test
							}
						}).then((res) => {
							resolve(res);
						});	
	
	
					});
	
				}
			}

		}

})();

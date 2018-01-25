(function () {
	'use strict';

	/**
	 * @ngdoc function
	 * @name app.test:challengeTest
	 * @description
	 * # challengeTest
	 * Test of the app
	 */

	describe('challenge test', function () {
		var controller = null, $scope = null;

		beforeEach(function () {
			module('challenge-client');
		});

		beforeEach(inject(function ($controller, $rootScope) {
			$scope = $rootScope.$new();
			controller = $controller('ChallengeCtrl', {
				$scope: $scope
			});
		}));

		it('Should controller must be defined', function () {
			expect(controller).toBeDefined();
		});

	});
})();

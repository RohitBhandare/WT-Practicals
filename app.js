var app = angular.module("myApp", []);

app.controller("myCtrl", function($scope) {
	$scope.loggedIn = false;

	$scope.register = function() {
		// Validate input fields
		if (!$scope.firstName || !$scope.lastName || !$scope.email || !$scope.password) {
			$scope.registrationError = "Please fill in all fields.";
			return;
		}

		// Check if email is already registered
		// ...

		// Register user
		// ...

		$scope.firstName = "";
		$scope.lastName = "";
		$scope.email = "";
		$scope.password = "";
		$scope.registrationError = "";
	};

	$scope.login = function() {
		// Validate input fields
		if (!$scope.loginEmail || !$scope.loginPassword) {
			$scope.loginError = "Please fill in all fields.";
			return;
		}

		// Check if email and password match
		// ...

		$scope.loggedIn = true;
		$scope.firstName = "John";
		$scope.lastName = "Doe";
		$scope.email = $scope.loginEmail;
		$scope.loginEmail = "";
		$scope.loginPassword = "";
		$scope.loginError = "";
	};

	$scope.logout = function() {
		$scope.loggedIn = false;
		$scope.firstName = "";
		$scope.lastName = "";
		$scope.email = "";
	};
});

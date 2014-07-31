app.controller("mainController", function($scope, $http){
 
    $scope.results = [];
    $scope.init = function() {
	$http({method: 'GET', url: 'http://127.0.0.1:5000/api/v1.0/objects/computers/index'}).success(function(data, status, headers, config) {
            angular.forEach(data, function(value, index){
                angular.forEach(value.objects, function(value, index){
                    $scope.results.push(value);
                });
            });
        }).error(function(error) {

        });
    };
 
});


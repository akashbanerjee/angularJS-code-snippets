(function () {

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "";

    $scope.check = function() {
        var numberOfTypes = $scope.name.split(',');
        if(numberOfTypes.length=0)
          $scope.message = "Please enter data first";
        else if(numberOfTypes.length<=3)
          $scope.message = "Enjoy!";
        else
          $scope.message = "Too much!";
    };

  };




})();
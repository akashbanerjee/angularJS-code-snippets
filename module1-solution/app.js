(function () {

  angular.module('LunchCheck', [])
    .controller('LunchCheckController', LunchCheckController);

  LunchCheckController.$inject = ['$scope'];

  function LunchCheckController($scope) {
    $scope.name = "";
    $scope.messages = "";

    $scope.check = function() { 

      var input = $scope.name;
       var numberOfTypes = input.split(",");
       var numberOfItems = 0;
       console.log(numberOfTypes.length);
       for (var i = 0; i < numberOfTypes.length; i++) {
           if (numberOfTypes[i].trim() != "") {
               numberOfItems ++;
           }
       }
         
        if(input.trim() == 0)
        {
          $scope.messages = "Please enter data first";
        }
        else if(numberOfItems <= 3)
        {
          $scope.messages = "Enjoy!";
        }
        else
        {
          $scope.messages = "Too much!";
        }
    };

  };




})();
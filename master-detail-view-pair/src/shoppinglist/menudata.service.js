(function () {
'use strict';

angular.module('Data')
.service('MenuDataService ', MenuDataService )
.constant('ApiBasePath', "https://davids-restaurant.herokuapp.com");


MenuDataService .$inject = ['$http', 'ApiBasePath'];
function MenuDataService ($http, ApiBasePath) {
  var service = this;


 

  
  service.getAllCategories  = function () {
    
       return $http({
        method: "GET",
        url: (ApiBasePath + "/categories.json")
      });
      
  };

/*  service.getItemsForCategory  = function (categoryShortName) {
      var deferred = $q.defer();

      
      $timeout(function () {
        
        deferred.resolve(items);
      }, 800);

      return deferred.promise;
    };*/  


}

})();
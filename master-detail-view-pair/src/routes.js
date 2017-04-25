(function () {
'use strict';

angular.module('MenuApp')
.config(RoutesConfig);

RoutesConfig.$inject = ['$stateProvider', '$urlRouterProvider'];
function RoutesConfig($stateProvider, $urlRouterProvider) {


  $urlRouterProvider.otherwise('/');


  $stateProvider

 
  .state('home', {
    url: '/',
    templateUrl: 'src/shoppinglist/templates/home.template.html'
  })


  .state('categories', {
    url: '/categories',
    templateUrl: 'src/shoppinglist/templates/main-shoppinglist.template.html',
    controller: 'MainShoppingListController as categories',
    resolve: {
      items: ['MenuDataService ', function (MenuDataService) {console.log("inside resolve1");
        return MenuDataService.getAllCategories().then(function(response)  {
          
          return response.data;
        });
      }]
    }
  })

   .state('items', {
    url: '/items/{category}',
    templateUrl: 'src/shoppinglist/templates/items.template.html',
    controller: 'ItemDetailController as itemDetail',
    resolve: {
      items: ['MenuDataService', '$stateParams', function (MenuDataService,$stateParams) {
        console.log("inside resolve");
          return MenuDataService.getItemsForCategory($stateParams.category).then(function(response)  {
              return response.data.menu_items;
            });
        }]
    }
  });

 
} 

})();
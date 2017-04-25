(function () {
'use strict';

angular.module('MenuApp')
.controller('MainShoppingListController', MainShoppingListController);


MainShoppingListController.$inject = ['items'];
function MainShoppingListController(items) {
  console.log("Inside MainShoppingListController");
  var categories = this;
  categories.items = items;

 
}

})();
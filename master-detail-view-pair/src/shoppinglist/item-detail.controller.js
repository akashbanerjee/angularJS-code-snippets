(function ()  {
  'use strict';

  angular.module('MenuApp')
  .controller('ItemDetailController', ItemDetailController);

  
  ItemDetailController.$inject = ['items'];
  function ItemDetailController(items) {
    console.log("Inside Item detail Controller");
    var itemDetail = this;
    itemDetail.items = items;
  }

})();
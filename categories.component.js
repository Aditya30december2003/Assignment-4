(function () {
    'use strict';
  
    angular.module('MenuApp')
      .component('categories', {
        templateUrl: 'templates/categories.template.html',
        controller: CategoriesController,
        bindings: {
          categories: '<' // Input binding to receive categories data
        }
      });
  
    CategoriesController.$inject = [];
    function CategoriesController() {
      var $ctrl = this;
      // Controller logic can be added here if needed
    }
  })();
  
  
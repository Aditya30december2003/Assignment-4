// items.component.js
(function () {
    'use strict';
  
    angular.module('MenuApp')
      .component('items', {
        templateUrl: 'templates/items.template.html',
        bindings: {
          items: '<'
        }
      });
  })();
  
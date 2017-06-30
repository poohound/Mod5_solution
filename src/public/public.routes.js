(function() {
'use strict';

angular.module('public')
.config(routeConfig);

/**
 * Configures the routes and views
 */
routeConfig.$inject = ['$stateProvider'];
function routeConfig ($stateProvider) {
  // Routes
  $stateProvider
    .state('public', {
      abstract: true,
      templateUrl: 'src/public/public.html'
    })
    .state('public.home', {
      url: '/',
      templateUrl: 'src/public/home/home.html'
    })
    .state('public.menu', {
      url: '/menu',
      templateUrl: 'src/public/menu/menu.html',
      controller: 'MenuController',
      controllerAs: 'menuCtrl',
      resolve: {
        menuCategories: ['MenuService', function (MenuService) {
          return MenuService.getCategories();
        }]
      }
    })
    .state('public.info', {
      url: '/MyInfo',
      templateUrl: 'src/public/info/info.html',
      controller: 'InfoController',
      controllerAs: 'infoCtrl',
      resolve: {
        MenuItem: ['InfoService', function (InfoService) {
          return InfoService.getUserMenuItem();
        }],
        User: ['InfoService', function (InfoService){
          return InfoService.getUser();
        }]
      }
    })
    .state('public.sign', {
      url: '/SignUp',
      templateUrl: 'src/public/sign/sign.html',
      controller: 'SignController',
      controllerAs: 'signCtrl',
      resolve: {
        User: ['InfoService', function (InfoService){
          return InfoService.getUser();
        }]
      }
    })
    .state('public.menuitems', {
      url: '/menu/{category}',
      templateUrl: 'src/public/menu-items/menu-items.html',
      controller: 'MenuItemsController',
      controllerAs: 'menuItemsCtrl',
      resolve: {
        menuItems: ['$stateParams','MenuService', function ($stateParams, MenuService) {
          return MenuService.getMenuItems($stateParams.category);
        }]
      }
    });
}
})();

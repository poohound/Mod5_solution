(function () {
"use strict";

angular.module('public')
.service('InfoService', InfoService);


  InfoService.$inject = ['$http', 'ApiPath'];
  function InfoService($http, ApiPath) {
    var service = this;
    service.user = [];

    service.setUser = function(FirstName, LastName, Email, Phone, MenuItem) {
      service.user.push({
        "FirstName": FirstName,
        "LastName" : LastName,
        "Email": Email,
        "Phone": Phone,
        "MenuItem": MenuItem
      });
      console.log(service.user);
    };
    service.getUser = function(){
      return service.user
    };
    service.getUserMenuItem = function(){
      if (service.user.length == 0){
        return null
      }else{
        return $http.get(ApiPath + '/menu_items/' + service.user[0].MenuItem + '.json').then(function (response) {
          console.log(response.data);
          return response.data;
        });
      }
    };
  }
})();

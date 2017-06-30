(function () {
"use strict";

angular.module('public')
.controller('InfoController', InfoController);

  InfoController.$inject = ['MenuItem','User','ApiPath'];
  function InfoController(MenuItem, User, ApiPath) {
    var infoCtrl = this;
    infoCtrl.ApiPath = ApiPath;
    infoCtrl.User = User;
    infoCtrl.MenuItem = MenuItem;

    if(infoCtrl.User.length == 0){
      infoCtrl.showItem = false;
    }else{
      infoCtrl.showItem = true;
    }
  }
})();

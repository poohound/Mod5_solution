(function () {
"use strict";

angular.module('public')
.controller('SignController', SignController);

  SignController.$inject = ['InfoService', 'User'];
  function SignController(InfoService, User) {
    var signCtrl = this;
    signCtrl.FirstName = '';
    signCtrl.LastName = '';
    signCtrl.Phone = '';
    signCtrl.Email = '';
    signCtrl.MenuItem = '';
    signCtrl.saved = false;

    signCtrl.submit = function(){
      console.log(signCtrl.FirstName,signCtrl.LastName,signCtrl.Phone,signCtrl.Email,signCtrl.MenuItem);
      InfoService.setUser(signCtrl.FirstName,signCtrl.LastName,signCtrl.Phone,signCtrl.Email,signCtrl.MenuItem);
      signCtrl.saved = true;

    };
  }

})();

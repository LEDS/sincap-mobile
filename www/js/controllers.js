(function() {
  var AppController, LoginController, PlaylistsController;

  LoginController = (function() {
    function LoginController($scope1, $ionicModal, $timeout) {
      this.$scope = $scope1;
      this.$ionicModal = $ionicModal;
      this.$timeout = $timeout;
      this.$scope.loginData = {};
      this.$ionicModal.fromTemplateUrl('templates/login.html', {
        scope: $scope
      }).then(function(modal) {
        return $scope.modal = modal;
      });
    }

    LoginController.prototype.closeLogin = function() {
      return this.$scope.modal.hide();
    };

    LoginController.prototype.login = function() {
      return this.$scope.modal.show();
    };

    LoginController.prototype.doLogin = function() {
      console.log('Doing login', this.$scope.loginData);
      return this.$timeout(function() {
        return this.$scope.closeLogin();
      }, 1000);
    };

    return LoginController;

  })();

  AppController = (function() {
    function AppController($scope1, $ionicModal, $timeout) {
      this.$scope = $scope1;
      this.$ionicModal = $ionicModal;
      this.$timeout = $timeout;
    }

    return AppController;

  })();

  PlaylistsController = (function() {
    function PlaylistsController($scope1) {
      this.$scope = $scope1;
      this.$scope.playlists = [
        {
          title: 'Reggae',
          id: 1
        }, {
          title: 'Chill',
          id: 2
        }, {
          title: 'Dubstep',
          id: 3
        }, {
          title: 'Indie',
          id: 4
        }, {
          title: 'Rap',
          id: 5
        }, {
          title: 'Cowbell',
          id: 6
        }
      ];
      this.$scope.title = 'Captações';
    }

    return PlaylistsController;

  })();

  angular.module('sincap.controllers', []);

  angular.module('sincap').controller('LoginCtrl', ['$scope', LoginController]);

  angular.module('sincap').controller('AppCtrl', ['$scope', AppController]);

  angular.module('sincap').controller('PlaylistCtrl', ['$scope', PlaylistsController]);

}).call(this);

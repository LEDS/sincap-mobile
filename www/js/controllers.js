(function() {
  var AppController, CaptacaoController, LoginController;

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

  CaptacaoController = (function() {
    function CaptacaoController($scope1) {
      this.$scope = $scope1;
      this.$scope.processos = dataJson;
      this.$scope.title = 'Captações';
    }

    return CaptacaoController;

  })();

  angular.module('sincap.controllers', []);

  angular.module('sincap').controller('LoginCtrl', ['$scope', LoginController]);

  angular.module('sincap').controller('AppCtrl', ['$scope', AppController]);

  angular.module('sincap').controller('CaptacaoCtrl', ['$scope', CaptacaoController]);

}).call(this);

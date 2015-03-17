class LoginController
  constructor: (@$scope, @$ionicModal, @$timeout) ->
    @$scope.loginData = {}

    @$ionicModal.fromTemplateUrl('templates/login.html', scope: $scope)
    .then (modal) ->
      $scope.modal = modal

  closeLogin: ->
    @$scope.modal.hide()

  login: ->
    @$scope.modal.show()

  doLogin: ->
    console.log 'Doing login', @$scope.loginData

    @$timeout ->
      @$scope.closeLogin()
    , 1000

angular.module('sincap').controller 'LoginCtrl', ['$scope', LoginController]
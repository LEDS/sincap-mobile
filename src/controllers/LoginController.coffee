class LoginController
  constructor: (@$scope, @loginService) ->

    @$scope.login = =>
      @loginService.tryLogin(@$scope.data).then (results) ->
        alert(results)
#    @$scope.loginData = {}
#
#    @$ionicModal.fromTemplateUrl('templates/login.html', scope: $scope)
#    .then (modal) ->
#      $scope.modal = modal
#
#  closeLogin: ->
#    @$scope.modal.hide()
#data
#  login: ->
#    @$scope.modal.show()
#
#  doLogin: ->
#    console.log 'Doing login', @$scope.loginData
#
#    @$timeout ->
#      @$scope.closeLogin()
#    , 1000

angular.module('sincap').controller 'LoginCtrl', ['$scope', 'LoginService', LoginController]

class LoginController
  constructor: (@$scope, @$location, @loginService) ->

    @$scope.login = (dados) =>
      @loginService.login(dados).success (results) ->
        

angular.module('sincap').controller 'LoginCtrl', ['$scope', '$location', 'LoginService', LoginController]

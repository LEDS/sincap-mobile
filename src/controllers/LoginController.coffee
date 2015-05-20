class LoginController
  constructor: (@$scope, @$location, @loginService) ->
    @$scope.data = {}
    @$scope.placeholder = "CPF"
    @$scope.mask = ""
    
    @$scope.login = (data) =>
      data = @$scope.formataCPF data
      @loginService.login(data).success (results) ->

    @$scope.formataCPF = (data) ->
      cpf = data.username
      data.username = cpf.slice(0,3)+'.'+cpf.slice(3,6)+'.'+cpf.slice(6,9)+'-'+cpf.slice(9,12)
      data

    @$scope.focus = () =>
      @$scope.mask = "999.999.999-99"
      @$scope.placeholder = ""

    @$scope.nofocus = () =>
      if(!@$scope.data or !@$scope.data.username)
        @$scope.placeholder = "CPF"
        @$scope.mask = ""
      else
        @$scope.mask = "999.999.999-99"
        @$scope.placeholder = ""

angular.module('sincap').controller 'LoginCtrl', ['$scope', '$location', 'LoginService', LoginController]
  
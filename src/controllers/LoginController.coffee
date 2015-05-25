class LoginController
  constructor: (@$scope, @$location, @loginService) ->
    @data = {}
    @placeholder = "CPF"
    @mask = ""

  login: (data) ->
    @data = @formataCPF data
    @loginService.login(data).success (results) ->

  formataCPF: (data) ->
    cpf = data.username
    data.username = cpf.slice(0,3)+'.'+cpf.slice(3,6)+'.'+cpf.slice(6,9)+'-'+cpf.slice(9,12)
    data

angular.module('sincap').controller 'LoginCtrl', ['$scope', '$location', 'LoginService', LoginController]

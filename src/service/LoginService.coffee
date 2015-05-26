class LoginService
  urlBase = 'http://127.0.0.1:8080/msincap/api/login'
  nextStep = 'app/captacoes/AGUARDANDOCAPTACAO'

  constructor: (@$http, @$location, @TokenStorage) ->

  login: (data) =>
    @$http.post("#{urlBase}", data).success (result) =>
      #@$scope.authenticated = true
      @TokenStorage.store(result)
      @$location.path(nextStep)

  logoff: () =>
    @TokenStorage.clear()
    #$scope.authenticated = false

angular.module('sincap').service 'LoginService', ['$http', '$location', 'TokenStorage', LoginService]

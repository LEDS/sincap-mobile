class LoginService
  urlBase = 'http://127.0.0.1:8080/msincap/api/login'
  nextStep = 'app/captacoes/AGUARDANDOCAPTACAO'

  constructor: (@$http, @state, @tokenStorage) ->

  login: (data) =>
    @$http.post("#{urlBase}", data).success (result) =>
      @tokenStorage.store(result)
      @state.go 'app.captacoes'

  logoff: () =>
    @tokenStorage.clear()

angular.module('sincap').service 'LoginService', ['$http', '$state', 'TokenStorage', LoginService]

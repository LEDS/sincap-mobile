class LoginService
  urlBase = 'http://127.0.0.1:8080/msincap/api/login'

  constructor: (@$http, @TokenStorage) ->

  login: (data) ->
    @$http.post("#{urlBase}", data).success (result, status, headers) ->
      data.autenticado = true
      data.token = headers('X-AUTH-TOKEN')
      TokenStorage.store(headers('X-AUTH-TOKEN'))
      data.headers = headers()
      console.log headers()
      return data

angular.module('sincap').service 'LoginService', ['$http', 'TokenStorage', LoginService]

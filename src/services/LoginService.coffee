class LoginService
  urlBase = 'http://127.0.0.1:8080/msincap/api/login'

  constructor: (@$http, @TokenStorage) ->

  login: (data) =>
    @$http.post("#{urlBase}", data).success (result) =>
      @TokenStorage.store(result)
      @TokenStorage

angular.module('sincap').service 'LoginService', ['$http', 'TokenStorage', LoginService]

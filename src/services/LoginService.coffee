class LoginService
  urlBase = 'http://127.0.0.1:8080/msincap/api/login'

  constructor: (@$http) ->

  tryLogin: (dataLogin) ->
    @$http.post("#{urlBase}", dataLogin)
    .then (results) ->
      results.data

angular.module('sincap').service 'LoginService', ['$http', LoginService]
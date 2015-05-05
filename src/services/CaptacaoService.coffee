class CaptacaoService
  URLBASE = 'http://127.0.0.1:8080/msincap/captacao'

  constructor: (@$http) ->
  captacaoPorTipo: (queryString) ->
    @$http.get(URLBASE + '?estado=' + queryString).then (results) ->
      results.data

  quantCaptacoesRealizar: (estado) ->
    @$http.get(URLBASE + '/quantidade' + '?estado=' + estado).then (results) ->
      results.data

angular.module('sincap').service 'CaptacaoService', ['$http', CaptacaoService]
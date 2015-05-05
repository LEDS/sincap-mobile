class CaptacaoService
  urlBase = 'http://127.0.0.1:8080/msincap/captacao'
  #captacoesRealizar = '?estado=AGUARDANDOCAPTACAO'
  constructor: (@$http) ->
  captacaoPorTipo: (queryString) ->
    @$http.get(urlBase + '?estado=' + queryString).then (results) ->
      results.data

  #quantCaptacoesRealizar: () ->
    #@$http.get()





angular.module('sincap').service 'CaptacaoService', ['$http', CaptacaoService]
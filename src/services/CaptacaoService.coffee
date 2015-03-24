class CaptacaoService
  urlBase = 'http://127.0.0.1:8080/msincap/captacao?bancoolhos.id=2'

  constructor: (@$http) ->
  get: ->
    @$http.get(urlBase)
    .then (results) ->
      results.data

#    getPerson: (id) ->
#        @$http.get("#{urlBase}/#{id}")
#        .then (results) ->
#            results.data
#
#    save: (person) ->
#        @$http.post("#{urlBase}", person)
#        .error (results, status) ->
#            {results, status}

angular.module('sincap').service 'CaptacaoService', ['$http', CaptacaoService]
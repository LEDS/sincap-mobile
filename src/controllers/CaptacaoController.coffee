class CaptacaoController
  constructor: (@$scope, @captacaoService) ->
    @$scope.processos2 = window.dataJson
    @captacaoService.get().then (results) =>
      @$scope.processos = results

    @$scope.title = 'Captações'

angular.module('sincap').controller 'CaptacaoCtrl', ['$scope', 'CaptacaoService', CaptacaoController]
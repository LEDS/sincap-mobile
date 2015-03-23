class CaptacaoController
  constructor: (@$scope, @captacaoService) ->
    @$scope.processos = window.dataJson
    @$scope.processos2 = @captacaoService.get()

    @$scope.title = 'Captações'

angular.module('sincap').controller 'CaptacaoCtrl', ['$scope', 'CaptacaoService', CaptacaoController]
class CaptacaoController
  constructor: (@$scope, @captacaoService) ->
    @$scope.processos2 = window.dataJson
    @$scope.processos = @captacaoService.get()

    @$scope.title = 'Captações'

angular.module('sincap').controller 'CaptacaoCtrl', ['$scope', 'CaptacaoService', CaptacaoController]
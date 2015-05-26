class CaptacaoController
  constructor: (@$scope, @$stateParams, @captacaoService) ->
    @$scope.estado = @$stateParams.estado

    @captacaoService.captacaoPorTipo(@$scope.estado).then (results) =>
      @$scope.processos = {}
      @$scope.processos = results

    @$scope.title = 'Captações'

angular.module('sincap').controller 'CaptacaoCtrl', ['$scope', '$stateParams', 'CaptacaoService', CaptacaoController]
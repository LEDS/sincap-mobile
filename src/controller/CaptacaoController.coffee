class CaptacaoController
  constructor: (@stateParams, @captacaoService) ->
    @estado = @stateParams.estado

    @captacaoService.captacaoPorTipo(@estado).then (results) =>
      @processos = results

    @title = 'Captações'

angular.module('sincap').controller 'CaptacaoCtrl', ['$stateParams', 'CaptacaoService', CaptacaoController]

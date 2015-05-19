class RealizarCaptacaoController
  constructor: (@scope, @stateParams, @captacaoService) ->
    idProcesso = @stateParams.id
    @scope.captacao = {}

    @captacaoService.captacaoPorId(idProcesso).then (results) =>
      @scope.processo = results

    @scope.enviar = () =>
      console.log @scope.captacao

angular.module('sincap').controller 'RealizarCaptacaoCtrl', ['$scope', '$stateParams', 'CaptacaoService',
                                                             RealizarCaptacaoController]
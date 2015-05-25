class RealizarCaptacaoController
  constructor: (@stateParams, @captacaoService) ->
    idProcesso = @stateParams.id
    @processo = {}
    @captacao = {}

    @captacaoService.captacaoPorId(idProcesso).then (result) =>
      @processo = result

  enviar: ->
    console.log @captacao

angular.module('sincap').controller 'RealizarCaptacaoCtrl', ['$stateParams', 'CaptacaoService',
                                                             RealizarCaptacaoController]

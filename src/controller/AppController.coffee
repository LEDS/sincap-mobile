class AppController
  constructor: (@$scope, @CaptacaoService) ->
    REALIZAR = 'AGUARDANDOCAPTACAO'
    CORRIGIR =  'AGUARDANDOCORRECAOCAPTACACAO'

    @CaptacaoService.quantCaptacoesRealizar(REALIZAR).then (results) =>
      @$scope.quantCaptacoesRealizar = results
    @CaptacaoService.quantCaptacoesRealizar(CORRIGIR).then (results) =>
      @$scope.quantCaptacoesCorrigir = results

angular.module('sincap').controller 'AppCtrl', ['$scope', 'CaptacaoService', AppController]

class CaptacaoController
  constructor: (@$scope) ->
    @$scope.processos = window.dataJson

    @$scope.title = 'Captações'

angular.module('sincap').controller 'CaptacaoCtrl', ['$scope', CaptacaoController]
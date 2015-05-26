class CaptacaoController
  constructor: (@scope, @stateParams, @ionicModal, @tokenStorage, @loginService, @captacaoService) ->
    @estado = @stateParams.estado

    if not @tokenStorage.isAuthenticated()
      @ionicModal.fromTemplateUrl 'templates/login.html',
        scope: @scope
      .then (modal) =>
        @modal = modal
        modal.show()

    @captacaoService.captacaoPorTipo(@estado).then (results) =>
      @processos = results

    @title = 'Captações'

  login: ->
    @dadosLogin.username = @formataCPF @dadosLogin.username
    @loginService.login(@dadosLogin). success =>
      @modal.remove()

  formataCPF: (cpf) ->
    cpf.slice(0,3)+'.'+cpf.slice(3,6)+'.'+cpf.slice(6,9)+'-'+cpf.slice(9,12)

angular.module('sincap').controller 'CaptacaoCtrl', ['$scope', '$stateParams', '$ionicModal', 'TokenStorage', 'LoginService', 'CaptacaoService', CaptacaoController]

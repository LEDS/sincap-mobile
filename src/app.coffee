angular.module 'sincap', ['ionic', 'ui.mask']

.config(($httpProvider) ->
  $httpProvider.interceptors.push('TokenAuthInterceptor')
)

.run ($ionicPlatform) ->
  $ionicPlatform.ready ->
    if window.cordova and window.cordova.plugins.Keyboard
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar true
    if window.StatusBar
      StatusBar.styleDefault()

  # Desativa o botão de voltar
  $ionicPlatform.registerBackButtonAction((->), 100)

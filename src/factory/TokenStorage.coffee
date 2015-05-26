TokenStorage = ->
  storageKey = ''
  authenticated = no

  store: (token) ->
    localStorage.setItem(storageKey, token)
    authenticated = yes

  retrieve: ->
    localStorage.getItem(storageKey)

  clear: ->
    authenticated = no
    localStorage.removeItem(storageKey)

  isAuthenticated: ->
    authenticated

angular.module('sincap').factory 'TokenStorage', [TokenStorage]

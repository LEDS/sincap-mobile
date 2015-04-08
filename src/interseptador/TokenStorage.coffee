TokenStorage = () ->
  storageKey = 'auth_token'
  
  {
    store: (token) ->
      localStorage.setItem(storageKey, token)

    retrieve: () ->
      localStorage.getItem(storageKey)

    clear : () ->
      localStorage.removeItem(storageKey)
  }
  

angular.module('sincap').factory 'TokenStorage', [TokenStorage]
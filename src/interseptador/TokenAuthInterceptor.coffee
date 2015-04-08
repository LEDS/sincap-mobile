TokenAuthInterceptor = ($q, TokenStorage) ->
  {
    request: (config) ->
      authToken = TokenStorage.retrieve()
      
      if (authToken)
        config.headers['X-AUTH-TOKEN'] = authToken
      
      config

    responseError: (error) ->
      if (error.status is 401 or error.status is 403)
        TokenStorage.clear()

      $q.reject(error)

  }

angular.module('sincap').factory 'TokenAuthInterceptor', ['$q', 'TokenStorage', TokenAuthInterceptor]
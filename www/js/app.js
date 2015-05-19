(function() {
  angular.module('sincap', ['ionic', 'ui.mask']).config(function($httpProvider) {
    return $httpProvider.interceptors.push('TokenAuthInterceptor');
  }).run(function($ionicPlatform) {
    return $ionicPlatform.ready(function() {
      if (window.cordova && window.cordova.plugins.Keyboard) {
        cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
      }
      if (window.StatusBar) {
        return StatusBar.styleDefault();
      }
    });
  });

}).call(this);

(function() {
  angular.module('sincap').config(function($stateProvider, $urlRouterProvider) {
    $stateProvider.state('app', {
      url: "/app",
      abstract: true,
      templateUrl: "templates/menu.html",
      controller: 'AppCtrl'
    }).state('app.search', {
      url: "/search",
      views: {
        'menuContent': {
          templateUrl: "templates/search.html"
        }
      }
    }).state('app.captacoes', {
      url: "/captacoes/:estado",
      views: {
        'menuContent': {
          templateUrl: "templates/captacao.html",
          controller: 'CaptacaoCtrl'
        }
      }
    }).state('app.editarCaptacao', {
      url: "/captacoes/realizar/:id",
      views: {
        'menuContent': {
          templateUrl: "templates/form.html",
          controller: 'RealizarCaptacaoCtrl'
        }
      }
    }).state('app.login', {
      url: "/login",
      views: {
        'menuContent': {
          templateUrl: "templates/login.html",
          controller: 'LoginCtrl as ctrl'
        }
      }
    });
    return $urlRouterProvider.otherwise('/app/login');
  });

}).call(this);

(function() {
  var AppController;

  AppController = (function() {
    function AppController($scope, CaptacaoService) {
      var CORRIGIR, REALIZAR;
      this.$scope = $scope;
      this.CaptacaoService = CaptacaoService;
      REALIZAR = 'AGUARDANDOCAPTACAO';
      CORRIGIR = 'AGUARDANDOCORRECAOCAPTACACAO';
      this.CaptacaoService.quantCaptacoesRealizar(REALIZAR).then((function(_this) {
        return function(results) {
          return _this.$scope.quantCaptacoesRealizar = results;
        };
      })(this));
      this.CaptacaoService.quantCaptacoesRealizar(CORRIGIR).then((function(_this) {
        return function(results) {
          return _this.$scope.quantCaptacoesCorrigir = results;
        };
      })(this));
    }

    return AppController;

  })();

  angular.module('sincap').controller('AppCtrl', ['$scope', 'CaptacaoService', AppController]);

}).call(this);

(function() {
  var CaptacaoController;

  CaptacaoController = (function() {
    function CaptacaoController($scope, $stateParams, captacaoService) {
      this.$scope = $scope;
      this.$stateParams = $stateParams;
      this.captacaoService = captacaoService;
      this.$scope.estado = this.$stateParams.estado;
      this.captacaoService.captacaoPorTipo(this.$scope.estado).then((function(_this) {
        return function(results) {
          _this.$scope.processos = {};
          return _this.$scope.processos = results;
        };
      })(this));
      this.$scope.title = 'Captações';
    }

    return CaptacaoController;

  })();

  angular.module('sincap').controller('CaptacaoCtrl', ['$scope', '$stateParams', 'CaptacaoService', CaptacaoController]);

}).call(this);

(function() {
  var LoginController;

  LoginController = (function() {
    function LoginController(loginService) {
      this.loginService = loginService;
      this.data = {};
      this.placeholder = "CPF";
      this.mask = "";
    }

    LoginController.prototype.login = function(data) {
      this.data = this.formataCPF(data);
      return this.loginService.login(data).success(function(results) {});
    };

    LoginController.prototype.formataCPF = function(data) {
      var cpf;
      cpf = data.username;
      data.username = cpf.slice(0, 3) + '.' + cpf.slice(3, 6) + '.' + cpf.slice(6, 9) + '-' + cpf.slice(9, 12);
      return data;
    };

    return LoginController;

  })();

  angular.module('sincap').controller('LoginCtrl', ['LoginService', LoginController]);

}).call(this);

(function() {
  var RealizarCaptacaoController;

  RealizarCaptacaoController = (function() {
    function RealizarCaptacaoController(scope, stateParams, captacaoService) {
      var idProcesso;
      this.scope = scope;
      this.stateParams = stateParams;
      this.captacaoService = captacaoService;
      idProcesso = this.stateParams.id;
      this.scope.captacao = {};
      this.captacaoService.captacaoPorId(idProcesso).then((function(_this) {
        return function(results) {
          return _this.scope.processo = results;
        };
      })(this));
      this.scope.enviar = (function(_this) {
        return function() {
          return console.log(_this.scope.captacao);
        };
      })(this);
    }

    return RealizarCaptacaoController;

  })();

  angular.module('sincap').controller('RealizarCaptacaoCtrl', ['$scope', '$stateParams', 'CaptacaoService', RealizarCaptacaoController]);

}).call(this);

(function() {
  var TokenAuthInterceptor;

  TokenAuthInterceptor = function($q, TokenStorage) {
    return {
      request: function(config) {
        var authToken;
        authToken = TokenStorage.retrieve();
        if (authToken) {
          config.headers['X-AUTH-TOKEN'] = authToken;
        }
        return config;
      },
      responseError: function(error) {
        if (error.status === 401 || error.status === 403) {
          TokenStorage.clear();
        }
        return $q.reject(error);
      }
    };
  };

  angular.module('sincap').factory('TokenAuthInterceptor', ['$q', 'TokenStorage', TokenAuthInterceptor]);

}).call(this);

(function() {
  var TokenStorage;

  TokenStorage = function() {
    var storageKey;
    storageKey = '';
    return {
      store: function(token) {
        return localStorage.setItem(storageKey, token);
      },
      retrieve: function() {
        return localStorage.getItem(storageKey);
      },
      clear: function() {
        return localStorage.removeItem(storageKey);
      }
    };
  };

  angular.module('sincap').factory('TokenStorage', [TokenStorage]);

}).call(this);

(function() {
  var CaptacaoService;

  CaptacaoService = (function() {
    var URLBASE;

    URLBASE = 'http://127.0.0.1:8080/msincap/captacao';

    function CaptacaoService($http) {
      this.$http = $http;
    }

    CaptacaoService.prototype.captacaoPorTipo = function(queryString) {
      return this.$http.get(URLBASE + '?estado=' + queryString).then(function(results) {
        return results.data;
      });
    };

    CaptacaoService.prototype.captacaoPorId = function(queryString) {
      return this.$http.get(URLBASE + '/obter' + '?id=' + queryString).then(function(results) {
        return results.data;
      });
    };

    CaptacaoService.prototype.quantCaptacoesRealizar = function(estado) {
      return this.$http.get(URLBASE + '/quantidade' + '?estado=' + estado).then(function(results) {
        return results.data;
      });
    };

    return CaptacaoService;

  })();

  angular.module('sincap').service('CaptacaoService', ['$http', CaptacaoService]);

}).call(this);

(function() {
  var LoginService,
    bind = function(fn, me){ return function(){ return fn.apply(me, arguments); }; };

  LoginService = (function() {
    var nextStep, urlBase;

    urlBase = 'http://127.0.0.1:8080/msincap/api/login';

    nextStep = 'app/captacoes/AGUARDANDOCAPTACAO';

    function LoginService($http, $location, TokenStorage) {
      this.$http = $http;
      this.$location = $location;
      this.TokenStorage = TokenStorage;
      this.logoff = bind(this.logoff, this);
      this.login = bind(this.login, this);
    }

    LoginService.prototype.login = function(data) {
      return this.$http.post("" + urlBase, data).success((function(_this) {
        return function(result) {
          _this.TokenStorage.store(result);
          return _this.$location.path(nextStep);
        };
      })(this));
    };

    LoginService.prototype.logoff = function() {
      return this.TokenStorage.clear();
    };

    return LoginService;

  })();

  angular.module('sincap').service('LoginService', ['$http', '$location', 'TokenStorage', LoginService]);

}).call(this);

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiLCJyb3V0ZXMuY29mZmVlIiwiY29udHJvbGxlcnMvQXBwQ29udHJvbGxlci5jb2ZmZWUiLCJjb250cm9sbGVycy9DYXB0YWNhb0NvbnRyb2xsZXIuY29mZmVlIiwiY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyLmNvZmZlZSIsImNvbnRyb2xsZXJzL1JlYWxpemFyQ2FwdGFjYW9Db250cm9sbGVyLmNvZmZlZSIsImludGVyc2VwdGFkb3IvVG9rZW5BdXRoSW50ZXJjZXB0b3IuY29mZmVlIiwiaW50ZXJzZXB0YWRvci9Ub2tlblN0b3JhZ2UuY29mZmVlIiwic2VydmljZXMvQ2FwdGFjYW9TZXJ2aWNlLmNvZmZlZSIsInNlcnZpY2VzL0xvZ2luU2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixFQUF5QixDQUFDLE9BQUQsRUFBVSxTQUFWLENBQXpCLENBRUEsQ0FBQyxNQUZELENBRVEsU0FBQyxhQUFELEdBQUE7V0FDTixhQUFhLENBQUMsWUFBWSxDQUFDLElBQTNCLENBQWdDLHNCQUFoQyxFQURNO0VBQUEsQ0FGUixDQU1BLENBQUMsR0FORCxDQU1LLFNBQUMsY0FBRCxHQUFBO1dBQ0gsY0FBYyxDQUFDLEtBQWYsQ0FBcUIsU0FBQSxHQUFBO0FBQ25CLE1BQUEsSUFBRyxNQUFNLENBQUMsT0FBUCxJQUFtQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUE3QztBQUNFLFFBQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsd0JBQXpCLENBQWtELElBQWxELENBQUEsQ0FERjtPQUFBO0FBRUEsTUFBQSxJQUFHLE1BQU0sQ0FBQyxTQUFWO2VBQ0UsU0FBUyxDQUFDLFlBQVYsQ0FBQSxFQURGO09BSG1CO0lBQUEsQ0FBckIsRUFERztFQUFBLENBTkwsQ0FBQSxDQUFBO0FBQUE7OztBQ0FBO0FBQUEsRUFBQSxPQUFPLENBQUMs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dWxlICdzaW5jYXAnLCBbJ2lvbmljJywgJ3VpLm1hc2snXVxuXG4uY29uZmlnKCgkaHR0cFByb3ZpZGVyKSAtPlxuICAkaHR0cFByb3ZpZGVyLmludGVyY2VwdG9ycy5wdXNoKCdUb2tlbkF1dGhJbnRlcmNlcHRvcicpXG4pXG5cbi5ydW4gKCRpb25pY1BsYXRmb3JtKSAtPlxuICAkaW9uaWNQbGF0Zm9ybS5yZWFkeSAtPlxuICAgIGlmIHdpbmRvdy5jb3Jkb3ZhIGFuZCB3aW5kb3cuY29yZG92YS5wbHVnaW5zLktleWJvYXJkXG4gICAgICBjb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmQuaGlkZUtleWJvYXJkQWNjZXNzb3J5QmFyIHRydWVcbiAgICBpZiB3aW5kb3cuU3RhdHVzQmFyXG4gICAgICBTdGF0dXNCYXIuc3R5bGVEZWZhdWx0KCkiLCJhbmd1bGFyLm1vZHVsZSAnc2luY2FwJ1xuLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgLnN0YXRlICdhcHAnLFxuICAgIHVybDogXCIvYXBwXCJcbiAgICBhYnN0cmFjdDogdHJ1ZVxuICAgIHRlbXBsYXRlVXJsOiBcInRlbXBsYXRlcy9tZW51Lmh0bWxcIlxuICAgIGNvbnRyb2xsZXI6ICdBcHBDdHJsJ1xuXG4gIC5zdGF0ZSAnYXBwLnNlYXJjaCcsXG4gICAgdXJsOiBcIi9zZWFyY2hcIlxuICAgIHZpZXdzOlxuICAgICAgJ21lbnVDb250ZW50JzpcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL3NlYXJjaC5odG1sXCJcblxuICAuc3RhdGUgJ2FwcC5jYXB0YWNvZXMnLFxuICAgIHVybDogXCIvY2FwdGFjb2VzLzplc3RhZG9cIlxuICAgIHZpZXdzOlxuICAgICAgJ21lbnVDb250ZW50JzpcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL2NhcHRhY2FvLmh0bWxcIlxuICAgICAgICBjb250cm9sbGVyOiAnQ2FwdGFjYW9DdHJsJ1xuXG4gIC5zdGF0ZSAnYXBwLmVkaXRhckNhcHRhY2FvJyxcbiAgICB1cmw6IFwiL2NhcHRhY29lcy9yZWFsaXphci86aWRcIlxuICAgIHZpZXdzOlxuICAgICAgJ21lbnVDb250ZW50JzpcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL2Zvcm0uaHRtbFwiXG4gICAgICAgIGNvbnRyb2xsZXI6ICdSZWFsaXphckNhcHRhY2FvQ3RybCdcblxuICAuc3RhdGUgJ2FwcC5sb2dpbicsXG4gICAgdXJsOiBcIi9sb2dpblwiXG4gICAgdmlld3M6XG4gICAgICAnbWVudUNvbnRlbnQnOlxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvbG9naW4uaHRtbFwiXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgY3RybCdcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvYXBwL2xvZ2luJ1xuIiwiY2xhc3MgQXBwQ29udHJvbGxlclxuICBjb25zdHJ1Y3RvcjogKEAkc2NvcGUsIEBDYXB0YWNhb1NlcnZpY2UpIC0+XG4gICAgUkVBTElaQVIgPSAnQUdVQVJEQU5ET0NBUFRBQ0FPJ1xuICAgIENPUlJJR0lSID0gICdBR1VBUkRBTkRPQ09SUkVDQU9DQVBUQUNBQ0FPJ1xuXG4gICAgQENhcHRhY2FvU2VydmljZS5xdWFudENhcHRhY29lc1JlYWxpemFyKFJFQUxJWkFSKS50aGVuIChyZXN1bHRzKSA9PlxuICAgICAgQCRzY29wZS5xdWFudENhcHRhY29lc1JlYWxpemFyID0gcmVzdWx0c1xuICAgIEBDYXB0YWNhb1NlcnZpY2UucXVhbnRDYXB0YWNvZXNSZWFsaXphcihDT1JSSUdJUikudGhlbiAocmVzdWx0cykgPT5cbiAgICAgIEAkc2NvcGUucXVhbnRDYXB0YWNvZXNDb3JyaWdpciA9IHJlc3VsdHNcblxuYW5ndWxhci5tb2R1bGUoJ3NpbmNhcCcpLmNvbnRyb2xsZXIgJ0FwcEN0cmwnLCBbJyRzY29wZScsICdDYXB0YWNhb1NlcnZpY2UnLCBBcHBDb250cm9sbGVyXVxuIiwiY2xhc3MgQ2FwdGFjYW9Db250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAoQCRzY29wZSwgQCRzdGF0ZVBhcmFtcywgQGNhcHRhY2FvU2VydmljZSkgLT5cbiAgICBAJHNjb3BlLmVzdGFkbyA9IEAkc3RhdGVQYXJhbXMuZXN0YWRvXG5cbiAgICBAY2FwdGFjYW9TZXJ2aWNlLmNhcHRhY2FvUG9yVGlwbyhAJHNjb3BlLmVzdGFkbykudGhlbiAocmVzdWx0cykgPT5cbiAgICAgIEAkc2NvcGUucHJvY2Vzc29zID0ge31cbiAgICAgIEAkc2NvcGUucHJvY2Vzc29zID0gcmVzdWx0c1xuXG4gICAgQCRzY29wZS50aXRsZSA9ICdDYXB0YcOnw7VlcydcblxuYW5ndWxhci5tb2R1bGUoJ3NpbmNhcCcpLmNvbnRyb2xsZXIgJ0NhcHRhY2FvQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZVBhcmFtcycsICdDYXB0YWNhb1NlcnZpY2UnLCBDYXB0YWNhb0NvbnRyb2xsZXJdIiwiY2xhc3MgTG9naW5Db250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAoQGxvZ2luU2VydmljZSkgLT5cbiAgICBAZGF0YSA9IHt9XG4gICAgQHBsYWNlaG9sZGVyID0gXCJDUEZcIlxuICAgIEBtYXNrID0gXCJcIlxuXG4gIGxvZ2luOiAoZGF0YSkgLT5cbiAgICBAZGF0YSA9IEBmb3JtYXRhQ1BGIGRhdGFcbiAgICBAbG9naW5TZXJ2aWNlLmxvZ2luKGRhdGEpLnN1Y2Nlc3MgKHJlc3VsdHMpIC0+XG5cbiAgZm9ybWF0YUNQRjogKGRhdGEpIC0+XG4gICAgY3BmID0gZGF0YS51c2VybmFtZVxuICAgIGRhdGEudXNlcm5hbWUgPSBjcGYuc2xpY2UoMCwzKSsnLicrY3BmLnNsaWNlKDMsNikrJy4nK2NwZi5zbGljZSg2LDkpKyctJytjcGYuc2xpY2UoOSwxMilcbiAgICBkYXRhXG5cbmFuZ3VsYXIubW9kdWxlKCdzaW5jYXAnKS5jb250cm9sbGVyICdMb2dpbkN0cmwnLCBbJ0xvZ2luU2VydmljZScsIExvZ2luQ29udHJvbGxlcl1cbiIsImNsYXNzIFJlYWxpemFyQ2FwdGFjYW9Db250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAoQHNjb3BlLCBAc3RhdGVQYXJhbXMsIEBjYXB0YWNhb1NlcnZpY2UpIC0+XG4gICAgaWRQcm9jZXNzbyA9IEBzdGF0ZVBhcmFtcy5pZFxuICAgIEBzY29wZS5jYXB0YWNhbyA9IHt9XG5cbiAgICBAY2FwdGFjYW9TZXJ2aWNlLmNhcHRhY2FvUG9ySWQoaWRQcm9jZXNzbykudGhlbiAocmVzdWx0cykgPT5cbiAgICAgIEBzY29wZS5wcm9jZXNzbyA9IHJlc3VsdHNcblxuICAgIEBzY29wZS5lbnZpYXIgPSAoKSA9PlxuICAgICAgY29uc29sZS5sb2cgQHNjb3BlLmNhcHRhY2FvXG5cbmFuZ3VsYXIubW9kdWxlKCdzaW5jYXAnKS5jb250cm9sbGVyICdSZWFsaXphckNhcHRhY2FvQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZVBhcmFtcycsICdDYXB0YWNhb1NlcnZpY2UnLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIFJlYWxpemFyQ2FwdGFjYW9Db250cm9sbGVyXSIsIlRva2VuQXV0aEludGVyY2VwdG9yID0gKCRxLCBUb2tlblN0b3JhZ2UpIC0+XG4gIHtcbiAgICByZXF1ZXN0OiAoY29uZmlnKSAtPlxuICAgICAgYXV0aFRva2VuID0gVG9rZW5TdG9yYWdlLnJldHJpZXZlKClcbiAgICAgIFxuICAgICAgaWYgKGF1dGhUb2tlbilcbiAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtQVVUSC1UT0tFTiddID0gYXV0aFRva2VuXG4gICAgICBcbiAgICAgIGNvbmZpZ1xuXG4gICAgcmVzcG9uc2VFcnJvcjogKGVycm9yKSAtPlxuICAgICAgaWYgKGVycm9yLnN0YXR1cyBpcyA0MDEgb3IgZXJyb3Iuc3RhdHVzIGlzIDQwMylcbiAgICAgICAgVG9rZW5TdG9yYWdlLmNsZWFyKClcblxuICAgICAgJHEucmVqZWN0KGVycm9yKVxuXG4gIH1cblxuYW5ndWxhci5tb2R1bGUoJ3NpbmNhcCcpLmZhY3RvcnkgJ1Rva2VuQXV0aEludGVyY2VwdG9yJywgWyckcScsICdUb2tlblN0b3JhZ2UnLCBUb2tlbkF1dGhJbnRlcmNlcHRvcl0iLCJUb2tlblN0b3JhZ2UgPSAoKSAtPlxuICBzdG9yYWdlS2V5ID0gJydcbiAgXG4gIHtcbiAgc3RvcmU6ICh0b2tlbikgLT5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCB0b2tlbilcblxuICByZXRyaWV2ZTogKCkgLT5cbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KVxuXG4gIGNsZWFyIDogKCkgLT5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlS2V5KVxuICB9XG4gIFxuXG5hbmd1bGFyLm1vZHVsZSgnc2luY2FwJykuZmFjdG9yeSAnVG9rZW5TdG9yYWdlJywgW1Rva2VuU3RvcmFnZV0iLCJjbGFzcyBDYXB0YWNhb1NlcnZpY2VcbiAgVVJMQkFTRSA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvbXNpbmNhcC9jYXB0YWNhbydcblxuICBjb25zdHJ1Y3RvcjogKEAkaHR0cCkgLT5cbiAgY2FwdGFjYW9Qb3JUaXBvOiAocXVlcnlTdHJpbmcpIC0+XG4gICAgQCRodHRwLmdldChVUkxCQVNFICsgJz9lc3RhZG89JyArIHF1ZXJ5U3RyaW5nKS50aGVuIChyZXN1bHRzKSAtPlxuICAgICAgcmVzdWx0cy5kYXRhXG5cbiAgY2FwdGFjYW9Qb3JJZDogKHF1ZXJ5U3RyaW5nKSAtPlxuICAgIEAkaHR0cC5nZXQoVVJMQkFTRSsgJy9vYnRlcicrICc/aWQ9JyArIHF1ZXJ5U3RyaW5nKS50aGVuIChyZXN1bHRzKSAtPlxuICAgICAgcmVzdWx0cy5kYXRhXG5cbiAgcXVhbnRDYXB0YWNvZXNSZWFsaXphcjogKGVzdGFkbykgLT5cbiAgICBAJGh0dHAuZ2V0KFVSTEJBU0UgKyAnL3F1YW50aWRhZGUnICsgJz9lc3RhZG89JyArIGVzdGFkbykudGhlbiAocmVzdWx0cykgLT5cbiAgICAgIHJlc3VsdHMuZGF0YVxuXG5hbmd1bGFyLm1vZHVsZSgnc2luY2FwJykuc2VydmljZSAnQ2FwdGFjYW9TZXJ2aWNlJywgWyckaHR0cCcsIENhcHRhY2FvU2VydmljZV1cbiIsImNsYXNzIExvZ2luU2VydmljZVxuICB1cmxCYXNlID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MC9tc2luY2FwL2FwaS9sb2dpbidcbiAgbmV4dFN0ZXAgPSAnYXBwL2NhcHRhY29lcy9BR1VBUkRBTkRPQ0FQVEFDQU8nXG5cbiAgY29uc3RydWN0b3I6IChAJGh0dHAsIEAkbG9jYXRpb24sIEBUb2tlblN0b3JhZ2UpIC0+XG5cbiAgbG9naW46IChkYXRhKSA9PlxuICAgIEAkaHR0cC5wb3N0KFwiI3t1cmxCYXNlfVwiLCBkYXRhKS5zdWNjZXNzIChyZXN1bHQpID0+XG4gICAgICAjQCRzY29wZS5hdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgICAgQFRva2VuU3RvcmFnZS5zdG9yZShyZXN1bHQpXG4gICAgICBAJGxvY2F0aW9uLnBhdGgobmV4dFN0ZXApXG5cbiAgbG9nb2ZmOiAoKSA9PlxuICAgIEBUb2tlblN0b3JhZ2UuY2xlYXIoKVxuICAgICMkc2NvcGUuYXV0aGVudGljYXRlZCA9IGZhbHNlXG5cbmFuZ3VsYXIubW9kdWxlKCdzaW5jYXAnKS5zZXJ2aWNlICdMb2dpblNlcnZpY2UnLCBbJyRodHRwJywgJyRsb2NhdGlvbicsICdUb2tlblN0b3JhZ2UnLCBMb2dpblNlcnZpY2VdXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
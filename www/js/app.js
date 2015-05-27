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
    }).state('app.single', {
      url: "/captacoes/:processoId",
      views: {
        'menuContent': {
          templateUrl: "templates/form.html",
          controller: 'CaptacaoCtrl'
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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiLCJyb3V0ZXMuY29mZmVlIiwiY29udHJvbGxlcnMvQXBwQ29udHJvbGxlci5jb2ZmZWUiLCJjb250cm9sbGVycy9DYXB0YWNhb0NvbnRyb2xsZXIuY29mZmVlIiwiY29udHJvbGxlcnMvTG9naW5Db250cm9sbGVyLmNvZmZlZSIsImludGVyc2VwdGFkb3IvVG9rZW5BdXRoSW50ZXJjZXB0b3IuY29mZmVlIiwiaW50ZXJzZXB0YWRvci9Ub2tlblN0b3JhZ2UuY29mZmVlIiwic2VydmljZXMvQ2FwdGFjYW9TZXJ2aWNlLmNvZmZlZSIsInNlcnZpY2VzL0xvZ2luU2VydmljZS5jb2ZmZWUiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7QUFBQSxFQUFBLE9BQU8sQ0FBQyxNQUFSLENBQWUsUUFBZixFQUF5QixDQUFDLE9BQUQsRUFBVSxTQUFWLENBQXpCLENBRUEsQ0FBQyxNQUZELENBRVEsU0FBQyxhQUFELEdBQUE7V0FDTixhQUFhLENBQUMsWUFBWSxDQUFDLElBQTNCLENBQWdDLHNCQUFoQyxFQURNO0VBQUEsQ0FGUixDQU1BLENBQUMsR0FORCxDQU1LLFNBQUMsY0FBRCxHQUFBO1dBQ0gsY0FBYyxDQUFDLEtBQWYsQ0FBcUIsU0FBQSxHQUFBO0FBQ25CLE1BQUEsSUFBRyxNQUFNLENBQUMsT0FBUCxJQUFtQixNQUFNLENBQUMsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUE3QztBQUNFLFFBQUEsT0FBTyxDQUFDLE9BQU8sQ0FBQyxRQUFRLENBQUMsd0JBQXpCLENBQWtELElBQWxELENBQUEsQ0FERjtPQUFBO0FBRUEsTUFBQSxJQUFHLE1BQU0sQ0FBQyxTQUFWO2VBQ0UsU0FBUyxDQUFDLFlBQVYsQ0FBQSxFQURGO09BSG1CO0lBQUEsQ0FBckIsRUFERztFQUFBLENBTkwsQ0FBQSxDQUFBO0FBQUE7OztBQ0FBO0FBQUEsRUFBQSxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FDQSxDQUFDLE1BREQsQ0FDUSxTQUFDLGNBQUQsRUFB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QyxDQUFBLGVBQUQsWUFBZ0IsQ0FBQTtBQUFBLDJDQUFBLENBQUE7QUFBQSx5Q0FBQSxDQUFyQztJQUFBLENBSGI7O0FBQUEsMkJBS0EsS0FBQSxHQUFPLFNBQUMsSUFBRCxHQUFBO2FBQ0wsSUFBQyxDQUFBLEtBQUssQ0FBQyxJQUFQLENBQVksRUFBQSxHQUFHLE9BQWYsRUFBMEIsSUFBMUIsQ0FBK0IsQ0FBQyxPQUFoQyxDQUF3QyxDQUFBLFNBQUEsS0FBQSxHQUFBO2VBQUEsU0FBQyxNQUFELEdBQUE7QUFFdEMsVUFBQSxLQUFDLENBQUEsWUFBWSxDQUFDLEtBQWQsQ0FBb0IsTUFBcEIsQ0FBQSxDQUFBO2lCQUNBLEtBQUMsQ0FBQSxTQUFTLENBQUMsSUFBWCxDQUFnQixRQUFoQixFQUhzQztRQUFBLEVBQUE7TUFBQSxDQUFBLENBQUEsQ0FBQSxJQUFBLENBQXhDLEVBREs7SUFBQSxDQUxQLENBQUE7O0FBQUEsMkJBV0EsTUFBQSxHQUFRLFNBQUEsR0FBQTthQUNOLElBQUMsQ0FBQSxZQUFZLENBQUMsS0FBZCxDQUFBLEVBRE07SUFBQSxDQVhSLENBQUE7O3dCQUFBOztNQURGLENBQUE7O0FBQUEsRUFnQkEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLENBQXdCLENBQUMsT0FBekIsQ0FBaUMsY0FBakMsRUFBaUQsQ0FBQyxPQUFELEVBQVUsV0FBVixFQUF1QixjQUF2QixFQUF1QyxZQUF2QyxDQUFqRCxDQWhCQSxDQUFBO0FBQUEiLCJmaWxlIjoiYXBwLmpzIiwic291cmNlc0NvbnRlbnQiOlsiYW5ndWxhci5tb2R1bGUgJ3NpbmNhcCcsIFsnaW9uaWMnLCAndWkubWFzayddXG5cbi5jb25maWcoKCRodHRwUHJvdmlkZXIpIC0+XG4gICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ1Rva2VuQXV0aEludGVyY2VwdG9yJylcbilcblxuLnJ1biAoJGlvbmljUGxhdGZvcm0pIC0+XG4gICRpb25pY1BsYXRmb3JtLnJlYWR5IC0+XG4gICAgaWYgd2luZG93LmNvcmRvdmEgYW5kIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmRcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIgdHJ1ZVxuICAgIGlmIHdpbmRvdy5TdGF0dXNCYXJcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKSIsImFuZ3VsYXIubW9kdWxlICdzaW5jYXAnXG4uY29uZmlnICgkc3RhdGVQcm92aWRlciwgJHVybFJvdXRlclByb3ZpZGVyKSAtPlxuICAkc3RhdGVQcm92aWRlclxuICAuc3RhdGUgJ2FwcCcsXG4gICAgdXJsOiBcIi9hcHBcIlxuICAgIGFic3RyYWN0OiB0cnVlXG4gICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL21lbnUuaHRtbFwiXG4gICAgY29udHJvbGxlcjogJ0FwcEN0cmwnXG5cbiAgLnN0YXRlICdhcHAuc2VhcmNoJyxcbiAgICB1cmw6IFwiL3NlYXJjaFwiXG4gICAgdmlld3M6XG4gICAgICAnbWVudUNvbnRlbnQnOlxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvc2VhcmNoLmh0bWxcIlxuXG4gIC5zdGF0ZSAnYXBwLmNhcHRhY29lcycsXG4gICAgdXJsOiBcIi9jYXB0YWNvZXMvOmVzdGFkb1wiXG4gICAgdmlld3M6XG4gICAgICAnbWVudUNvbnRlbnQnOlxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvY2FwdGFjYW8uaHRtbFwiXG4gICAgICAgIGNvbnRyb2xsZXI6ICdDYXB0YWNhb0N0cmwnXG5cbiAgLnN0YXRlICdhcHAuc2luZ2xlJyxcbiAgICB1cmw6IFwiL2NhcHRhY29lcy86cHJvY2Vzc29JZFwiXG4gICAgdmlld3M6XG4gICAgICAnbWVudUNvbnRlbnQnOlxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvZm9ybS5odG1sXCJcbiAgICAgICAgY29udHJvbGxlcjogJ0NhcHRhY2FvQ3RybCdcblxuICAuc3RhdGUgJ2FwcC5sb2dpbicsXG4gICAgdXJsOiBcIi9sb2dpblwiXG4gICAgdmlld3M6XG4gICAgICAnbWVudUNvbnRlbnQnOlxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvbG9naW4uaHRtbFwiXG4gICAgICAgIGNvbnRyb2xsZXI6ICdMb2dpbkN0cmwgYXMgY3RybCdcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvYXBwL2xvZ2luJ1xuIiwiY2xhc3MgQXBwQ29udHJvbGxlclxuICBjb25zdHJ1Y3RvcjogKEAkc2NvcGUsIEBDYXB0YWNhb1NlcnZpY2UpIC0+XG4gICAgUkVBTElaQVIgPSAnQUdVQVJEQU5ET0NBUFRBQ0FPJ1xuICAgIENPUlJJR0lSID0gICdBR1VBUkRBTkRPQ09SUkVDQU9DQVBUQUNBQ0FPJ1xuXG4gICAgQENhcHRhY2FvU2VydmljZS5xdWFudENhcHRhY29lc1JlYWxpemFyKFJFQUxJWkFSKS50aGVuIChyZXN1bHRzKSA9PlxuICAgICAgQCRzY29wZS5xdWFudENhcHRhY29lc1JlYWxpemFyID0gcmVzdWx0c1xuICAgIEBDYXB0YWNhb1NlcnZpY2UucXVhbnRDYXB0YWNvZXNSZWFsaXphcihDT1JSSUdJUikudGhlbiAocmVzdWx0cykgPT5cbiAgICAgIEAkc2NvcGUucXVhbnRDYXB0YWNvZXNDb3JyaWdpciA9IHJlc3VsdHNcblxuYW5ndWxhci5tb2R1bGUoJ3NpbmNhcCcpLmNvbnRyb2xsZXIgJ0FwcEN0cmwnLCBbJyRzY29wZScsICdDYXB0YWNhb1NlcnZpY2UnLCBBcHBDb250cm9sbGVyXVxuIiwiY2xhc3MgQ2FwdGFjYW9Db250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAoQCRzY29wZSwgQCRzdGF0ZVBhcmFtcywgQGNhcHRhY2FvU2VydmljZSkgLT5cbiAgICBAJHNjb3BlLmVzdGFkbyA9IEAkc3RhdGVQYXJhbXMuZXN0YWRvXG5cbiAgICBAY2FwdGFjYW9TZXJ2aWNlLmNhcHRhY2FvUG9yVGlwbyhAJHNjb3BlLmVzdGFkbykudGhlbiAocmVzdWx0cykgPT5cbiAgICAgIEAkc2NvcGUucHJvY2Vzc29zID0ge31cbiAgICAgIEAkc2NvcGUucHJvY2Vzc29zID0gcmVzdWx0c1xuXG4gICAgQCRzY29wZS50aXRsZSA9ICdDYXB0YcOnw7VlcydcblxuYW5ndWxhci5tb2R1bGUoJ3NpbmNhcCcpLmNvbnRyb2xsZXIgJ0NhcHRhY2FvQ3RybCcsIFsnJHNjb3BlJywgJyRzdGF0ZVBhcmFtcycsICdDYXB0YWNhb1NlcnZpY2UnLCBDYXB0YWNhb0NvbnRyb2xsZXJdIiwiY2xhc3MgTG9naW5Db250cm9sbGVyXG4gIGNvbnN0cnVjdG9yOiAoQGxvZ2luU2VydmljZSkgLT5cbiAgICBAZGF0YSA9IHt9XG4gICAgQHBsYWNlaG9sZGVyID0gXCJDUEZcIlxuICAgIEBtYXNrID0gXCJcIlxuXG4gIGxvZ2luOiAoZGF0YSkgLT5cbiAgICBAZGF0YSA9IEBmb3JtYXRhQ1BGIGRhdGFcbiAgICBAbG9naW5TZXJ2aWNlLmxvZ2luKGRhdGEpLnN1Y2Nlc3MgKHJlc3VsdHMpIC0+XG5cbiAgZm9ybWF0YUNQRjogKGRhdGEpIC0+XG4gICAgY3BmID0gZGF0YS51c2VybmFtZVxuICAgIGRhdGEudXNlcm5hbWUgPSBjcGYuc2xpY2UoMCwzKSsnLicrY3BmLnNsaWNlKDMsNikrJy4nK2NwZi5zbGljZSg2LDkpKyctJytjcGYuc2xpY2UoOSwxMilcbiAgICBkYXRhXG5cbmFuZ3VsYXIubW9kdWxlKCdzaW5jYXAnKS5jb250cm9sbGVyICdMb2dpbkN0cmwnLCBbJ0xvZ2luU2VydmljZScsIExvZ2luQ29udHJvbGxlcl1cbiIsIlRva2VuQXV0aEludGVyY2VwdG9yID0gKCRxLCBUb2tlblN0b3JhZ2UpIC0+XG4gIHtcbiAgICByZXF1ZXN0OiAoY29uZmlnKSAtPlxuICAgICAgYXV0aFRva2VuID0gVG9rZW5TdG9yYWdlLnJldHJpZXZlKClcbiAgICAgIFxuICAgICAgaWYgKGF1dGhUb2tlbilcbiAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtQVVUSC1UT0tFTiddID0gYXV0aFRva2VuXG4gICAgICBcbiAgICAgIGNvbmZpZ1xuXG4gICAgcmVzcG9uc2VFcnJvcjogKGVycm9yKSAtPlxuICAgICAgaWYgKGVycm9yLnN0YXR1cyBpcyA0MDEgb3IgZXJyb3Iuc3RhdHVzIGlzIDQwMylcbiAgICAgICAgVG9rZW5TdG9yYWdlLmNsZWFyKClcblxuICAgICAgJHEucmVqZWN0KGVycm9yKVxuXG4gIH1cblxuYW5ndWxhci5tb2R1bGUoJ3NpbmNhcCcpLmZhY3RvcnkgJ1Rva2VuQXV0aEludGVyY2VwdG9yJywgWyckcScsICdUb2tlblN0b3JhZ2UnLCBUb2tlbkF1dGhJbnRlcmNlcHRvcl0iLCJUb2tlblN0b3JhZ2UgPSAoKSAtPlxuICBzdG9yYWdlS2V5ID0gJydcbiAgXG4gIHtcbiAgc3RvcmU6ICh0b2tlbikgLT5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCB0b2tlbilcblxuICByZXRyaWV2ZTogKCkgLT5cbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KVxuXG4gIGNsZWFyIDogKCkgLT5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlS2V5KVxuICB9XG4gIFxuXG5hbmd1bGFyLm1vZHVsZSgnc2luY2FwJykuZmFjdG9yeSAnVG9rZW5TdG9yYWdlJywgW1Rva2VuU3RvcmFnZV0iLCJjbGFzcyBDYXB0YWNhb1NlcnZpY2VcbiAgVVJMQkFTRSA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvbXNpbmNhcC9jYXB0YWNhbydcblxuICBjb25zdHJ1Y3RvcjogKEAkaHR0cCkgLT5cbiAgY2FwdGFjYW9Qb3JUaXBvOiAocXVlcnlTdHJpbmcpIC0+XG4gICAgQCRodHRwLmdldChVUkxCQVNFICsgJz9lc3RhZG89JyArIHF1ZXJ5U3RyaW5nKS50aGVuIChyZXN1bHRzKSAtPlxuICAgICAgcmVzdWx0cy5kYXRhXG5cbiAgcXVhbnRDYXB0YWNvZXNSZWFsaXphcjogKGVzdGFkbykgLT5cbiAgICBAJGh0dHAuZ2V0KFVSTEJBU0UgKyAnL3F1YW50aWRhZGUnICsgJz9lc3RhZG89JyArIGVzdGFkbykudGhlbiAocmVzdWx0cykgLT5cbiAgICAgIHJlc3VsdHMuZGF0YVxuXG5hbmd1bGFyLm1vZHVsZSgnc2luY2FwJykuc2VydmljZSAnQ2FwdGFjYW9TZXJ2aWNlJywgWyckaHR0cCcsIENhcHRhY2FvU2VydmljZV1cbiIsImNsYXNzIExvZ2luU2VydmljZVxuICB1cmxCYXNlID0gJ2h0dHA6Ly8xMjcuMC4wLjE6ODA4MC9tc2luY2FwL2FwaS9sb2dpbidcbiAgbmV4dFN0ZXAgPSAnYXBwL2NhcHRhY29lcy9BR1VBUkRBTkRPQ0FQVEFDQU8nXG5cbiAgY29uc3RydWN0b3I6IChAJGh0dHAsIEAkbG9jYXRpb24sIEBUb2tlblN0b3JhZ2UpIC0+XG5cbiAgbG9naW46IChkYXRhKSA9PlxuICAgIEAkaHR0cC5wb3N0KFwiI3t1cmxCYXNlfVwiLCBkYXRhKS5zdWNjZXNzIChyZXN1bHQpID0+XG4gICAgICAjQCRzY29wZS5hdXRoZW50aWNhdGVkID0gdHJ1ZVxuICAgICAgQFRva2VuU3RvcmFnZS5zdG9yZShyZXN1bHQpXG4gICAgICBAJGxvY2F0aW9uLnBhdGgobmV4dFN0ZXApXG5cbiAgbG9nb2ZmOiAoKSA9PlxuICAgIEBUb2tlblN0b3JhZ2UuY2xlYXIoKVxuICAgICMkc2NvcGUuYXV0aGVudGljYXRlZCA9IGZhbHNlXG5cbmFuZ3VsYXIubW9kdWxlKCdzaW5jYXAnKS5zZXJ2aWNlICdMb2dpblNlcnZpY2UnLCBbJyRodHRwJywgJyRsb2NhdGlvbicsICdUb2tlblN0b3JhZ2UnLCBMb2dpblNlcnZpY2VdXG4iXSwic291cmNlUm9vdCI6Ii9zb3VyY2UvIn0=
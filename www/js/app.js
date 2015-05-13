(function() {
  angular.module('sincap', ['ionic']).config(function($httpProvider) {
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
  window.dataJson = [
    {
      "id": 459,
      "obito": {
        "id": 477,
        "paciente": {
          "id": 521,
          "nome": "Paciente Teste",
          "dataInternacao": 1420077600000,
          "dataNascimento": -568072800000,
          "profissao": "Estudante",
          "nomeMae": "josefina",
          "religiao": "Catolico",
          "numeroProntuario": "1216546549875667987",
          "numeroSUS": "45465",
          "nacionalidade": "Brasileiro",
          "documentoSocial": {
            "documento": "8979877",
            "tipoDocumentoComFoto": "RG"
          },
          "sexo": "MASCULINO",
          "telefone": null,
          "endereco": {
            "id": 2192,
            "logradouro": "rua",
            "numero": "45",
            "complemento": null,
            "bairro": 3381,
            "cidade": 2062,
            "estado": 8,
            "cep": null
          },
          "estadoCivil": "SOLTEIRO"
        },
        "dataObito": 1420426860000,
        "dataCadastro": 1425315420701,
        "aptoDoacao": true,
        "primeiraCausaMortis": {
          "id": 1742,
          "nome": ""
        },
        "segundaCausaMortis": {
          "id": 1744,
          "nome": ""
        },
        "setor": 1,
        "hospital": 1,
        "terceiraCausaMortis": {
          "id": 1745,
          "nome": ""
        },
        "quartaCausaMortis": {
          "id": 1743,
          "nome": ""
        },
        "tipoObito": "PCR",
        "corpoEncaminhamento": null,
        "idadePaciente": 63,
        "horasObito": 1713
      },
      "entrevista": {
        "id": 341,
        "doacaoAutorizada": true,
        "entrevistaRealizada": true,
        "dataEntrevista": 1422889200000,
        "dataCadastro": 1425321396946,
        "responsavel": {
          "id": 309,
          "nome": "Responsavel",
          "dataNascimento": 536464800000,
          "nacionalidade": "Brasileiro",
          "profissao": "Tecnico",
          "documentoSocial": {
            "documento": "01231321654",
            "tipoDocumentoComFoto": "RG"
          },
          "religiao": "Catolico",
          "grauEscolaridade": "ANALFABETO",
          "estadoCivil": "SOLTEIRO",
          "sexo": "MASCULINO",
          "parentesco": "AVOS",
          "telefone": {
            "id": 2573,
            "numero": "(27)7987-9874"
          },
          "telefone2": {
            "id": 2574,
            "numero": ""
          },
          "endereco": {
            "id": 2191,
            "logradouro": "rua",
            "numero": "564987",
            "complemento": null,
            "bairro": 2457,
            "cidade": 1841,
            "estado": 8,
            "cep": null
          }
        },
        "responsavel2": null,
        "testemunha1": {
          "id": 617,
          "documentoSocial": {
            "documento": "544165165467",
            "tipoDocumentoComFoto": "RG"
          },
          "nome": "Testemunha 1",
          "telefone": null
        },
        "testemunha2": {
          "id": 618,
          "documentoSocial": {
            "documento": "541541564984897",
            "tipoDocumentoComFoto": "RG"
          },
          "nome": "Testemunha 2",
          "telefone": null
        },
        "funcionario": 2
      },
      "captacao": null,
      "dataAbertura": 1425315420701,
      "historico": [
        {
          "id": 1115,
          "estadoNotificacao": "AGUARDANDOANALISEOBITO",
          "dataAtualizacaos": 1425315420701,
          "funcionario": 1
        }, {
          "id": 1122,
          "estadoNotificacao": "AGUARDANDOANALISEENTREVISTA",
          "dataAtualizacaos": 1425321396946,
          "funcionario": 2
        }, {
          "id": 1123,
          "estadoNotificacao": "AGUARDANDOCAPTACAO",
          "dataAtualizacaos": 1425321525155,
          "funcionario": 3
        }, {
          "id": 1119,
          "estadoNotificacao": "AGUARDANDOENTREVISTA",
          "dataAtualizacaos": 1425320661422,
          "funcionario": 3
        }
      ],
      "codigo": "HUCAM1216546549875667987",
      "dataArquivamento": null,
      "arquivado": false,
      "notificador": 1,
      "causaNaoDoacao": null,
      "ultimoEstado": {
        "id": 1123,
        "estadoNotificacao": "AGUARDANDOCAPTACAO",
        "dataAtualizacaos": 1425321525155,
        "funcionario": 3
      }
    }, {
      "id": 551,
      "obito": {
        "id": 575,
        "paciente": {
          "id": 856,
          "nome": "André Aguiar",
          "dataInternacao": 1420077600000,
          "dataNascimento": 691552800000,
          "profissao": "Sem profissão",
          "nomeMae": "mae",
          "religiao": "Sem religião",
          "numeroProntuario": "12236659",
          "numeroSUS": "01211554",
          "nacionalidade": "Brasileiro",
          "documentoSocial": {
            "documento": "321231324465",
            "tipoDocumentoComFoto": "RG"
          },
          "sexo": "MASCULINO",
          "telefone": null,
          "endereco": {
            "id": 3476,
            "logradouro": "1",
            "numero": "64",
            "complemento": null,
            "bairro": 3535,
            "cidade": 2072,
            "estado": 8,
            "cep": "65465-169"
          },
          "estadoCivil": "UNIAO_ESTAVEL"
        },
        "dataObito": 1420124400000,
        "dataCadastro": 1425931500000,
        "aptoDoacao": true,
        "primeiraCausaMortis": {
          "id": 2101,
          "nome": "2121"
        },
        "segundaCausaMortis": {
          "id": 2103,
          "nome": "2123"
        },
        "setor": 3,
        "hospital": 1,
        "terceiraCausaMortis": {
          "id": 2104,
          "nome": "231231"
        },
        "quartaCausaMortis": {
          "id": 2102,
          "nome": "23123"
        },
        "tipoObito": "PCR",
        "corpoEncaminhamento": null,
        "idadePaciente": 23,
        "horasObito": 1797
      },
      "entrevista": {
        "id": 552,
        "doacaoAutorizada": true,
        "entrevistaRealizada": true,
        "dataEntrevista": 1426593600000,
        "dataCadastro": 1426593957236,
        "responsavel": {
          "id": 498,
          "nome": "Responsavel Nome1",
          "dataNascimento": 315543600000,
          "nacionalidade": "Brasileiro",
          "profissao": "Sem profissao",
          "documentoSocial": {
            "documento": "651621895162",
            "tipoDocumentoComFoto": "RG"
          },
          "religiao": "Sem religião",
          "grauEscolaridade": "ENSINO_FUNDAMENTAL_COMPLETO",
          "estadoCivil": "SOLTEIRO",
          "sexo": "MASCULINO",
          "parentesco": "PAIS",
          "telefone": {
            "id": 4091,
            "numero": "(51)45485-4185"
          },
          "telefone2": {
            "id": 4092,
            "numero": "(94)56491-9516"
          },
          "endereco": {
            "id": 3475,
            "logradouro": "54579",
            "numero": "654564",
            "complemento": null,
            "bairro": 3246,
            "cidade": 2052,
            "estado": 8,
            "cep": "21126-321"
          }
        },
        "responsavel2": null,
        "testemunha1": {
          "id": 993,
          "documentoSocial": {
            "documento": "546521651651",
            "tipoDocumentoComFoto": "RG"
          },
          "nome": "Testemunha1",
          "telefone": null
        },
        "testemunha2": {
          "id": 994,
          "documentoSocial": {
            "documento": "555555555555",
            "tipoDocumentoComFoto": "PASSAPORTE"
          },
          "nome": "Testemunha2",
          "telefone": null
        },
        "funcionario": 2
      },
      "captacao": null,
      "dataAbertura": 1425931528580,
      "historico": [
        {
          "id": 1334,
          "estadoNotificacao": "AGUARDANDOANALISEOBITO",
          "dataAtualizacaos": 1425931910584,
          "funcionario": 1
        }, {
          "id": 1332,
          "estadoNotificacao": "AGUARDANDOANALISEOBITO",
          "dataAtualizacaos": 1425931528580,
          "funcionario": 1
        }, {
          "id": 1834,
          "estadoNotificacao": "AGUARDANDOANALISEENTREVISTA",
          "dataAtualizacaos": 1426593957236,
          "funcionario": 2
        }, {
          "id": 1836,
          "estadoNotificacao": "AGUARDANDOCAPTACAO",
          "dataAtualizacaos": 1426594376472,
          "funcionario": 3
        }, {
          "id": 1353,
          "estadoNotificacao": "AGUARDANDOENTREVISTA",
          "dataAtualizacaos": 1426091050081,
          "funcionario": 3
        }, {
          "id": 1333,
          "estadoNotificacao": "AGUARDANDOCORRECAOOBITO",
          "dataAtualizacaos": 1425931548804,
          "funcionario": 3
        }
      ],
      "codigo": "HUCAM12236659",
      "dataArquivamento": null,
      "arquivado": false,
      "notificador": 1,
      "causaNaoDoacao": null,
      "ultimoEstado": {
        "id": 1836,
        "estadoNotificacao": "AGUARDANDOCAPTACAO",
        "dataAtualizacaos": 1426594376472,
        "funcionario": 3
      }
    }, {
      "id": 560,
      "obito": {
        "id": 589,
        "paciente": {
          "id": 857,
          "nome": "Paulo",
          "dataInternacao": 1392865200000,
          "dataNascimento": 461818800000,
          "profissao": "Sem profissão",
          "nomeMae": "sei nao",
          "religiao": "Sem religião",
          "numeroProntuario": "212121212",
          "numeroSUS": "1212121",
          "nacionalidade": "Brasileiro",
          "documentoSocial": {
            "documento": "212121",
            "tipoDocumentoComFoto": "CARTEIRA_DE_TRABALHO"
          },
          "sexo": "MASCULINO",
          "telefone": null,
          "endereco": {
            "id": 3478,
            "logradouro": "1",
            "numero": "64",
            "complemento": null,
            "bairro": 3248,
            "cidade": 2052,
            "estado": 8,
            "cep": "84568-546"
          },
          "estadoCivil": "SOLTEIRO"
        },
        "dataObito": 1426266000000,
        "dataCadastro": 1426267785866,
        "aptoDoacao": true,
        "primeiraCausaMortis": {
          "id": 2157,
          "nome": "Gripe"
        },
        "segundaCausaMortis": {
          "id": 2159,
          "nome": ""
        },
        "setor": 2,
        "hospital": 1,
        "terceiraCausaMortis": {
          "id": 2160,
          "nome": ""
        },
        "quartaCausaMortis": {
          "id": 2158,
          "nome": ""
        },
        "tipoObito": "PCR",
        "corpoEncaminhamento": null,
        "idadePaciente": 30,
        "horasObito": 91
      },
      "entrevista": {
        "id": 553,
        "doacaoAutorizada": true,
        "entrevistaRealizada": true,
        "dataEntrevista": 1426593600000,
        "dataCadastro": 1426594054361,
        "responsavel": {
          "id": 499,
          "nome": "Responsavel Nome1",
          "dataNascimento": 315543600000,
          "nacionalidade": "Brasileiro",
          "profissao": "Sem profissao",
          "documentoSocial": {
            "documento": "65416521343",
            "tipoDocumentoComFoto": "RG"
          },
          "religiao": "Sem religião",
          "grauEscolaridade": "ANALFABETO",
          "estadoCivil": "SOLTEIRO",
          "sexo": "MASCULINO",
          "parentesco": "PAIS",
          "telefone": {
            "id": 4093,
            "numero": "(45)64165-4654"
          },
          "telefone2": {
            "id": 4094,
            "numero": "(54)54654-9849"
          },
          "endereco": {
            "id": 3477,
            "logradouro": "54579",
            "numero": "654564",
            "complemento": null,
            "bairro": 3506,
            "cidade": 2072,
            "estado": 8,
            "cep": "54156-469"
          }
        },
        "responsavel2": null,
        "testemunha1": {
          "id": 995,
          "documentoSocial": {
            "documento": "15498748",
            "tipoDocumentoComFoto": "CARTEIRA_DE_TRABALHO"
          },
          "nome": "Testemunha1",
          "telefone": null
        },
        "testemunha2": {
          "id": 996,
          "documentoSocial": {
            "documento": "6549879",
            "tipoDocumentoComFoto": "CONSELHO_REGIONAL"
          },
          "nome": "Testemunha2",
          "telefone": null
        },
        "funcionario": 2
      },
      "captacao": null,
      "dataAbertura": 1426267785866,
      "historico": [
        {
          "id": 1359,
          "estadoNotificacao": "AGUARDANDOANALISEOBITO",
          "dataAtualizacaos": 1426267785866,
          "funcionario": 1
        }, {
          "id": 1835,
          "estadoNotificacao": "AGUARDANDOANALISEENTREVISTA",
          "dataAtualizacaos": 1426594054361,
          "funcionario": 2
        }, {
          "id": 1363,
          "estadoNotificacao": "AGUARDANDOENTREVISTA",
          "dataAtualizacaos": 1426272672828,
          "funcionario": 3
        }, {
          "id": 1838,
          "estadoNotificacao": "AGUARDANDOCAPTACAO",
          "dataAtualizacaos": 1426594393776,
          "funcionario": 3
        }
      ],
      "codigo": "HUCAM212121212",
      "dataArquivamento": null,
      "arquivado": false,
      "notificador": 1,
      "causaNaoDoacao": null,
      "ultimoEstado": {
        "id": 1838,
        "estadoNotificacao": "AGUARDANDOCAPTACAO",
        "dataAtualizacaos": 1426594393776,
        "funcionario": 3
      }
    }, {
      "id": 262,
      "obito": {
        "id": 273,
        "paciente": {
          "id": 297,
          "nome": "Nome1 da Silva",
          "dataInternacao": 1424746800000,
          "dataNascimento": 631159200000,
          "profissao": "Sem profissão",
          "nomeMae": "Mãe do Nome1",
          "religiao": "Sem religião",
          "numeroProntuario": "36241651654324",
          "numeroSUS": "65146235465",
          "nacionalidade": "Brasileiro",
          "documentoSocial": {
            "documento": "13542354621",
            "tipoDocumentoComFoto": "PASSAPORTE"
          },
          "sexo": "MASCULINO",
          "telefone": null,
          "endereco": {
            "id": 1293,
            "logradouro": "1",
            "numero": "64",
            "complemento": null,
            "bairro": 2436,
            "cidade": 1828,
            "estado": 8,
            "cep": "65165-469"
          },
          "estadoCivil": "UNIAO_ESTAVEL"
        },
        "dataObito": 1424869200000,
        "dataCadastro": 1424871960000,
        "aptoDoacao": true,
        "primeiraCausaMortis": {
          "id": 1003,
          "nome": "causa1"
        },
        "segundaCausaMortis": {
          "id": 1005,
          "nome": "causa2"
        },
        "setor": 1,
        "hospital": 1,
        "terceiraCausaMortis": {
          "id": 1006,
          "nome": ""
        },
        "quartaCausaMortis": {
          "id": 1004,
          "nome": ""
        },
        "tipoObito": "PCR",
        "corpoEncaminhamento": null,
        "idadePaciente": 25,
        "horasObito": 479
      },
      "entrevista": {
        "id": 197,
        "doacaoAutorizada": true,
        "entrevistaRealizada": true,
        "dataEntrevista": 1424872200000,
        "dataCadastro": 1424872380000,
        "responsavel": {
          "id": 179,
          "nome": "Responsavel Nome1",
          "dataNascimento": 658202400000,
          "nacionalidade": "Brasileiro",
          "profissao": "Sem profissao",
          "documentoSocial": {
            "documento": "6546541387654",
            "tipoDocumentoComFoto": "RG"
          },
          "religiao": "Sem religião",
          "grauEscolaridade": "ENSINO_FUNDAMENTAL_COMPLETO",
          "estadoCivil": "SOLTEIRO",
          "sexo": "MASCULINO",
          "parentesco": "AVOS",
          "telefone": {
            "id": 1513,
            "numero": "(65)49841-9874"
          },
          "telefone2": {
            "id": 1514,
            "numero": "(65)87354-6951"
          },
          "endereco": {
            "id": 1292,
            "logradouro": "54579",
            "numero": "654564",
            "complemento": null,
            "bairro": 2435,
            "cidade": 1826,
            "estado": 8,
            "cep": "57543-547"
          }
        },
        "responsavel2": null,
        "testemunha1": {
          "id": 357,
          "documentoSocial": {
            "documento": "56749854954",
            "tipoDocumentoComFoto": "RG"
          },
          "nome": "Testemunha1",
          "telefone": null
        },
        "testemunha2": {
          "id": 358,
          "documentoSocial": {
            "documento": "495416549854",
            "tipoDocumentoComFoto": "CARTEIRA_DE_TRABALHO"
          },
          "nome": "Testemunha2",
          "telefone": null
        },
        "funcionario": 1
      },
      "captacao": null,
      "dataAbertura": 1424872016433,
      "historico": [
        {
          "id": 647,
          "estadoNotificacao": "AGUARDANDOANALISEOBITO",
          "dataAtualizacaos": 1424872016433,
          "funcionario": 1
        }, {
          "id": 648,
          "estadoNotificacao": "AGUARDANDOCORRECAOOBITO",
          "dataAtualizacaos": 1424872109700,
          "funcionario": 3
        }, {
          "id": 649,
          "estadoNotificacao": "AGUARDANDOANALISEOBITO",
          "dataAtualizacaos": 1424872281756,
          "funcionario": 1
        }, {
          "id": 650,
          "estadoNotificacao": "AGUARDANDOENTREVISTA",
          "dataAtualizacaos": 1424872313961,
          "funcionario": 3
        }, {
          "id": 651,
          "estadoNotificacao": "AGUARDANDOANALISEENTREVISTA",
          "dataAtualizacaos": 1424872420832,
          "funcionario": 2
        }, {
          "id": 652,
          "estadoNotificacao": "AGUARDANDOCORRECAOENTREVISTA",
          "dataAtualizacaos": 1424872547839,
          "funcionario": 3
        }, {
          "id": 654,
          "estadoNotificacao": "AGUARDANDOANALISEENTREVISTA",
          "dataAtualizacaos": 1424872827979,
          "funcionario": 1
        }, {
          "id": 1842,
          "estadoNotificacao": "AGUARDANDOCAPTACAO",
          "dataAtualizacaos": 1426594425480,
          "funcionario": 3
        }
      ],
      "codigo": "HUCAM36241651654324",
      "dataArquivamento": null,
      "arquivado": false,
      "notificador": 1,
      "causaNaoDoacao": null,
      "ultimoEstado": {
        "id": 1842,
        "estadoNotificacao": "AGUARDANDOCAPTACAO",
        "dataAtualizacaos": 1426594425480,
        "funcionario": 3
      }
    }
  ];

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
          controller: 'LoginCtrl'
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
    function LoginController($scope, $location, loginService) {
      this.$scope = $scope;
      this.$location = $location;
      this.loginService = loginService;
      this.$scope.login = (function(_this) {
        return function(dados) {
          return _this.loginService.login(dados).success(function(results) {});
        };
      })(this);
    }

    return LoginController;

  })();

  angular.module('sincap').controller('LoginCtrl', ['$scope', '$location', 'LoginService', LoginController]);

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

//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImFwcC5jb2ZmZWUiLCJkYXRhLmNvZmZlZSIsInJvdXRlcy5jb2ZmZWUiLCJjb250cm9sbGVycy9BcHBDb250cm9sbGVyLmNvZmZlZSIsImNvbnRyb2xsZXJzL0NhcHRhY2FvQ29udHJvbGxlci5jb2ZmZWUiLCJjb250cm9sbGVycy9Mb2dpbkNvbnRyb2xsZXIuY29mZmVlIiwiaW50ZXJzZXB0YWRvci9Ub2tlbkF1dGhJbnRlcmNlcHRvci5jb2ZmZWUiLCJpbnRlcnNlcHRhZG9yL1Rva2VuU3RvcmFnZS5jb2ZmZWUiLCJzZXJ2aWNlcy9DYXB0YWNhb1NlcnZpY2UuY29mZmVlIiwic2VydmljZXMvTG9naW5TZXJ2aWNlLmNvZmZlZSJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTtBQUFBLEVBQUEsT0FBTyxDQUFDLE1BQVIsQ0FBZSxRQUFmLEVBQXlCLENBQUMsT0FBRCxDQUF6QixDQUVBLENBQUMsTUFGRCxDQUVRLFNBQUMsYUFBRCxHQUFBO1dBQ04sYUFBYSxDQUFDLFlBQVksQ0FBQyxJQUEzQixDQUFnQyxzQkFBaEMsRUFETTtFQUFBLENBRlIsQ0FNQSxDQUFDLEdBTkQsQ0FNSyxTQUFDLGNBQUQsR0FBQTtXQUNILGNBQWMsQ0FBQyxLQUFmLENBQXFCLFNBQUEsR0FBQTtBQUNuQixNQUFBLElBQUcsTUFBTSxDQUFDLE9BQVAsSUFBbUIsTUFBTSxDQUFDLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBN0M7QUFDRSxRQUFBLE9BQU8sQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLHdCQUF6QixDQUFrRCxJQUFsRCxDQUFBLENBREY7T0FBQTtBQUVBLE1BQUEsSUFBRyxNQUFNLENBQUMsU0FBVjtlQUNFLFNBQVMsQ0FBQyxZQUFWLENBQUEsRUFERjtPQUhtQjtJQUFBLENBQXJCLEVBREc7RUFBQSxDQU5MLENBQUEsQ0FBQTtBQUFBOzs7QUNBQTtBQUFBLEVBQUEsTUFBTSxDQUFDLFFBQVAsR0FBa0I7SUFBQztBQUFBLE1BQUMsSUFBQSxFQUFLLEdBQU47QUFB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LENBQWdCLFFBQWhCLEVBSHNDO1FBQUEsRUFBQTtNQUFBLENBQUEsQ0FBQSxDQUFBLElBQUEsQ0FBeEMsRUFESztJQUFBLENBTFAsQ0FBQTs7QUFBQSwyQkFXQSxNQUFBLEdBQVEsU0FBQSxHQUFBO2FBQ04sSUFBQyxDQUFBLFlBQVksQ0FBQyxLQUFkLENBQUEsRUFETTtJQUFBLENBWFIsQ0FBQTs7d0JBQUE7O01BREYsQ0FBQTs7QUFBQSxFQWdCQSxPQUFPLENBQUMsTUFBUixDQUFlLFFBQWYsQ0FBd0IsQ0FBQyxPQUF6QixDQUFpQyxjQUFqQyxFQUFpRCxDQUFDLE9BQUQsRUFBVSxXQUFWLEVBQXVCLGNBQXZCLEVBQXVDLFlBQXZDLENBQWpELENBaEJBLENBQUE7QUFBQSIsImZpbGUiOiJhcHAuanMiLCJzb3VyY2VzQ29udGVudCI6WyJhbmd1bGFyLm1vZHVsZSAnc2luY2FwJywgWydpb25pYyddXG5cbi5jb25maWcoKCRodHRwUHJvdmlkZXIpIC0+XG4gICRodHRwUHJvdmlkZXIuaW50ZXJjZXB0b3JzLnB1c2goJ1Rva2VuQXV0aEludGVyY2VwdG9yJylcbilcblxuLnJ1biAoJGlvbmljUGxhdGZvcm0pIC0+XG4gICRpb25pY1BsYXRmb3JtLnJlYWR5IC0+XG4gICAgaWYgd2luZG93LmNvcmRvdmEgYW5kIHdpbmRvdy5jb3Jkb3ZhLnBsdWdpbnMuS2V5Ym9hcmRcbiAgICAgIGNvcmRvdmEucGx1Z2lucy5LZXlib2FyZC5oaWRlS2V5Ym9hcmRBY2Nlc3NvcnlCYXIgdHJ1ZVxuICAgIGlmIHdpbmRvdy5TdGF0dXNCYXJcbiAgICAgIFN0YXR1c0Jhci5zdHlsZURlZmF1bHQoKSIsIndpbmRvdy5kYXRhSnNvbiA9IFt7XCJpZFwiOjQ1OSxcIm9iaXRvXCI6e1wiaWRcIjo0NzcsXCJwYWNpZW50ZVwiOntcImlkXCI6NTIxLFwibm9tZVwiOlwiUGFjaWVudGUgVGVzdGVcIixcImRhdGFJbnRlcm5hY2FvXCI6MTQyMDA3NzYwMDAwMCxcImRhdGFOYXNjaW1lbnRvXCI6LTU2ODA3MjgwMDAwMCxcInByb2Zpc3Nhb1wiOlwiRXN0dWRhbnRlXCIsXCJub21lTWFlXCI6XCJqb3NlZmluYVwiLFwicmVsaWdpYW9cIjpcIkNhdG9saWNvXCIsXCJudW1lcm9Qcm9udHVhcmlvXCI6XCIxMjE2NTQ2NTQ5ODc1NjY3OTg3XCIsXCJudW1lcm9TVVNcIjpcIjQ1NDY1XCIsXCJuYWNpb25hbGlkYWRlXCI6XCJCcmFzaWxlaXJvXCIsXCJkb2N1bWVudG9Tb2NpYWxcIjp7XCJkb2N1bWVudG9cIjpcIjg5Nzk4NzdcIixcInRpcG9Eb2N1bWVudG9Db21Gb3RvXCI6XCJSR1wifSxcInNleG9cIjpcIk1BU0NVTElOT1wiLFwidGVsZWZvbmVcIjpudWxsLFwiZW5kZXJlY29cIjp7XCJpZFwiOjIxOTIsXCJsb2dyYWRvdXJvXCI6XCJydWFcIixcIm51bWVyb1wiOlwiNDVcIixcImNvbXBsZW1lbnRvXCI6bnVsbCxcImJhaXJyb1wiOjMzODEsXCJjaWRhZGVcIjoyMDYyLFwiZXN0YWRvXCI6OCxcImNlcFwiOm51bGx9LFwiZXN0YWRvQ2l2aWxcIjpcIlNPTFRFSVJPXCJ9LFwiZGF0YU9iaXRvXCI6MTQyMDQyNjg2MDAwMCxcImRhdGFDYWRhc3Ryb1wiOjE0MjUzMTU0MjA3MDEsXCJhcHRvRG9hY2FvXCI6dHJ1ZSxcInByaW1laXJhQ2F1c2FNb3J0aXNcIjp7XCJpZFwiOjE3NDIsXCJub21lXCI6XCJcIn0sXCJzZWd1bmRhQ2F1c2FNb3J0aXNcIjp7XCJpZFwiOjE3NDQsXCJub21lXCI6XCJcIn0sXCJzZXRvclwiOjEsXCJob3NwaXRhbFwiOjEsXCJ0ZXJjZWlyYUNhdXNhTW9ydGlzXCI6e1wiaWRcIjoxNzQ1LFwibm9tZVwiOlwiXCJ9LFwicXVhcnRhQ2F1c2FNb3J0aXNcIjp7XCJpZFwiOjE3NDMsXCJub21lXCI6XCJcIn0sXCJ0aXBvT2JpdG9cIjpcIlBDUlwiLFwiY29ycG9FbmNhbWluaGFtZW50b1wiOm51bGwsXCJpZGFkZVBhY2llbnRlXCI6NjMsXCJob3Jhc09iaXRvXCI6MTcxM30sXCJlbnRyZXZpc3RhXCI6e1wiaWRcIjozNDEsXCJkb2FjYW9BdXRvcml6YWRhXCI6dHJ1ZSxcImVudHJldmlzdGFSZWFsaXphZGFcIjp0cnVlLFwiZGF0YUVudHJldmlzdGFcIjoxNDIyODg5MjAwMDAwLFwiZGF0YUNhZGFzdHJvXCI6MTQyNTMyMTM5Njk0NixcInJlc3BvbnNhdmVsXCI6e1wiaWRcIjozMDksXCJub21lXCI6XCJSZXNwb25zYXZlbFwiLFwiZGF0YU5hc2NpbWVudG9cIjo1MzY0NjQ4MDAwMDAsXCJuYWNpb25hbGlkYWRlXCI6XCJCcmFzaWxlaXJvXCIsXCJwcm9maXNzYW9cIjpcIlRlY25pY29cIixcImRvY3VtZW50b1NvY2lhbFwiOntcImRvY3VtZW50b1wiOlwiMDEyMzEzMjE2NTRcIixcInRpcG9Eb2N1bWVudG9Db21Gb3RvXCI6XCJSR1wifSxcInJlbGlnaWFvXCI6XCJDYXRvbGljb1wiLFwiZ3JhdUVzY29sYXJpZGFkZVwiOlwiQU5BTEZBQkVUT1wiLFwiZXN0YWRvQ2l2aWxcIjpcIlNPTFRFSVJPXCIsXCJzZXhvXCI6XCJNQVNDVUxJTk9cIixcInBhcmVudGVzY29cIjpcIkFWT1NcIixcInRlbGVmb25lXCI6e1wiaWRcIjoyNTczLFwibnVtZXJvXCI6XCIoMjcpNzk4Ny05ODc0XCJ9LFwidGVsZWZvbmUyXCI6e1wiaWRcIjoyNTc0LFwibnVtZXJvXCI6XCJcIn0sXCJlbmRlcmVjb1wiOntcImlkXCI6MjE5MSxcImxvZ3JhZG91cm9cIjpcInJ1YVwiLFwibnVtZXJvXCI6XCI1NjQ5ODdcIixcImNvbXBsZW1lbnRvXCI6bnVsbCxcImJhaXJyb1wiOjI0NTcsXCJjaWRhZGVcIjoxODQxLFwiZXN0YWRvXCI6OCxcImNlcFwiOm51bGx9fSxcInJlc3BvbnNhdmVsMlwiOm51bGwsXCJ0ZXN0ZW11bmhhMVwiOntcImlkXCI6NjE3LFwiZG9jdW1lbnRvU29jaWFsXCI6e1wiZG9jdW1lbnRvXCI6XCI1NDQxNjUxNjU0NjdcIixcInRpcG9Eb2N1bWVudG9Db21Gb3RvXCI6XCJSR1wifSxcIm5vbWVcIjpcIlRlc3RlbXVuaGEgMVwiLFwidGVsZWZvbmVcIjpudWxsfSxcInRlc3RlbXVuaGEyXCI6e1wiaWRcIjo2MTgsXCJkb2N1bWVudG9Tb2NpYWxcIjp7XCJkb2N1bWVudG9cIjpcIjU0MTU0MTU2NDk4NDg5N1wiLFwidGlwb0RvY3VtZW50b0NvbUZvdG9cIjpcIlJHXCJ9LFwibm9tZVwiOlwiVGVzdGVtdW5oYSAyXCIsXCJ0ZWxlZm9uZVwiOm51bGx9LFwiZnVuY2lvbmFyaW9cIjoyfSxcImNhcHRhY2FvXCI6bnVsbCxcImRhdGFBYmVydHVyYVwiOjE0MjUzMTU0MjA3MDEsXCJoaXN0b3JpY29cIjpbe1wiaWRcIjoxMTE1LFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9BTkFMSVNFT0JJVE9cIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI1MzE1NDIwNzAxLFwiZnVuY2lvbmFyaW9cIjoxfSx7XCJpZFwiOjExMjIsXCJlc3RhZG9Ob3RpZmljYWNhb1wiOlwiQUdVQVJEQU5ET0FOQUxJU0VFTlRSRVZJU1RBXCIsXCJkYXRhQXR1YWxpemFjYW9zXCI6MTQyNTMyMTM5Njk0NixcImZ1bmNpb25hcmlvXCI6Mn0se1wiaWRcIjoxMTIzLFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9DQVBUQUNBT1wiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjUzMjE1MjUxNTUsXCJmdW5jaW9uYXJpb1wiOjN9LHtcImlkXCI6MTExOSxcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPRU5UUkVWSVNUQVwiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjUzMjA2NjE0MjIsXCJmdW5jaW9uYXJpb1wiOjN9XSxcImNvZGlnb1wiOlwiSFVDQU0xMjE2NTQ2NTQ5ODc1NjY3OTg3XCIsXCJkYXRhQXJxdWl2YW1lbnRvXCI6bnVsbCxcImFycXVpdmFkb1wiOmZhbHNlLFwibm90aWZpY2Fkb3JcIjoxLFwiY2F1c2FOYW9Eb2FjYW9cIjpudWxsLFwidWx0aW1vRXN0YWRvXCI6e1wiaWRcIjoxMTIzLFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9DQVBUQUNBT1wiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjUzMjE1MjUxNTUsXCJmdW5jaW9uYXJpb1wiOjN9fSx7XCJpZFwiOjU1MSxcIm9iaXRvXCI6e1wiaWRcIjo1NzUsXCJwYWNpZW50ZVwiOntcImlkXCI6ODU2LFwibm9tZVwiOlwiQW5kcsOpIEFndWlhclwiLFwiZGF0YUludGVybmFjYW9cIjoxNDIwMDc3NjAwMDAwLFwiZGF0YU5hc2NpbWVudG9cIjo2OTE1NTI4MDAwMDAsXCJwcm9maXNzYW9cIjpcIlNlbSBwcm9maXNzw6NvXCIsXCJub21lTWFlXCI6XCJtYWVcIixcInJlbGlnaWFvXCI6XCJTZW0gcmVsaWdpw6NvXCIsXCJudW1lcm9Qcm9udHVhcmlvXCI6XCIxMjIzNjY1OVwiLFwibnVtZXJvU1VTXCI6XCIwMTIxMTU1NFwiLFwibmFjaW9uYWxpZGFkZVwiOlwiQnJhc2lsZWlyb1wiLFwiZG9jdW1lbnRvU29jaWFsXCI6e1wiZG9jdW1lbnRvXCI6XCIzMjEyMzEzMjQ0NjVcIixcInRpcG9Eb2N1bWVudG9Db21Gb3RvXCI6XCJSR1wifSxcInNleG9cIjpcIk1BU0NVTElOT1wiLFwidGVsZWZvbmVcIjpudWxsLFwiZW5kZXJlY29cIjp7XCJpZFwiOjM0NzYsXCJsb2dyYWRvdXJvXCI6XCIxXCIsXCJudW1lcm9cIjpcIjY0XCIsXCJjb21wbGVtZW50b1wiOm51bGwsXCJiYWlycm9cIjozNTM1LFwiY2lkYWRlXCI6MjA3MixcImVzdGFkb1wiOjgsXCJjZXBcIjpcIjY1NDY1LTE2OVwifSxcImVzdGFkb0NpdmlsXCI6XCJVTklBT19FU1RBVkVMXCJ9LFwiZGF0YU9iaXRvXCI6MTQyMDEyNDQwMDAwMCxcImRhdGFDYWRhc3Ryb1wiOjE0MjU5MzE1MDAwMDAsXCJhcHRvRG9hY2FvXCI6dHJ1ZSxcInByaW1laXJhQ2F1c2FNb3J0aXNcIjp7XCJpZFwiOjIxMDEsXCJub21lXCI6XCIyMTIxXCJ9LFwic2VndW5kYUNhdXNhTW9ydGlzXCI6e1wiaWRcIjoyMTAzLFwibm9tZVwiOlwiMjEyM1wifSxcInNldG9yXCI6MyxcImhvc3BpdGFsXCI6MSxcInRlcmNlaXJhQ2F1c2FNb3J0aXNcIjp7XCJpZFwiOjIxMDQsXCJub21lXCI6XCIyMzEyMzFcIn0sXCJxdWFydGFDYXVzYU1vcnRpc1wiOntcImlkXCI6MjEwMixcIm5vbWVcIjpcIjIzMTIzXCJ9LFwidGlwb09iaXRvXCI6XCJQQ1JcIixcImNvcnBvRW5jYW1pbmhhbWVudG9cIjpudWxsLFwiaWRhZGVQYWNpZW50ZVwiOjIzLFwiaG9yYXNPYml0b1wiOjE3OTd9LFwiZW50cmV2aXN0YVwiOntcImlkXCI6NTUyLFwiZG9hY2FvQXV0b3JpemFkYVwiOnRydWUsXCJlbnRyZXZpc3RhUmVhbGl6YWRhXCI6dHJ1ZSxcImRhdGFFbnRyZXZpc3RhXCI6MTQyNjU5MzYwMDAwMCxcImRhdGFDYWRhc3Ryb1wiOjE0MjY1OTM5NTcyMzYsXCJyZXNwb25zYXZlbFwiOntcImlkXCI6NDk4LFwibm9tZVwiOlwiUmVzcG9uc2F2ZWwgTm9tZTFcIixcImRhdGFOYXNjaW1lbnRvXCI6MzE1NTQzNjAwMDAwLFwibmFjaW9uYWxpZGFkZVwiOlwiQnJhc2lsZWlyb1wiLFwicHJvZmlzc2FvXCI6XCJTZW0gcHJvZmlzc2FvXCIsXCJkb2N1bWVudG9Tb2NpYWxcIjp7XCJkb2N1bWVudG9cIjpcIjY1MTYyMTg5NTE2MlwiLFwidGlwb0RvY3VtZW50b0NvbUZvdG9cIjpcIlJHXCJ9LFwicmVsaWdpYW9cIjpcIlNlbSByZWxpZ2nDo29cIixcImdyYXVFc2NvbGFyaWRhZGVcIjpcIkVOU0lOT19GVU5EQU1FTlRBTF9DT01QTEVUT1wiLFwiZXN0YWRvQ2l2aWxcIjpcIlNPTFRFSVJPXCIsXCJzZXhvXCI6XCJNQVNDVUxJTk9cIixcInBhcmVudGVzY29cIjpcIlBBSVNcIixcInRlbGVmb25lXCI6e1wiaWRcIjo0MDkxLFwibnVtZXJvXCI6XCIoNTEpNDU0ODUtNDE4NVwifSxcInRlbGVmb25lMlwiOntcImlkXCI6NDA5MixcIm51bWVyb1wiOlwiKDk0KTU2NDkxLTk1MTZcIn0sXCJlbmRlcmVjb1wiOntcImlkXCI6MzQ3NSxcImxvZ3JhZG91cm9cIjpcIjU0NTc5XCIsXCJudW1lcm9cIjpcIjY1NDU2NFwiLFwiY29tcGxlbWVudG9cIjpudWxsLFwiYmFpcnJvXCI6MzI0NixcImNpZGFkZVwiOjIwNTIsXCJlc3RhZG9cIjo4LFwiY2VwXCI6XCIyMTEyNi0zMjFcIn19LFwicmVzcG9uc2F2ZWwyXCI6bnVsbCxcInRlc3RlbXVuaGExXCI6e1wiaWRcIjo5OTMsXCJkb2N1bWVudG9Tb2NpYWxcIjp7XCJkb2N1bWVudG9cIjpcIjU0NjUyMTY1MTY1MVwiLFwidGlwb0RvY3VtZW50b0NvbUZvdG9cIjpcIlJHXCJ9LFwibm9tZVwiOlwiVGVzdGVtdW5oYTFcIixcInRlbGVmb25lXCI6bnVsbH0sXCJ0ZXN0ZW11bmhhMlwiOntcImlkXCI6OTk0LFwiZG9jdW1lbnRvU29jaWFsXCI6e1wiZG9jdW1lbnRvXCI6XCI1NTU1NTU1NTU1NTVcIixcInRpcG9Eb2N1bWVudG9Db21Gb3RvXCI6XCJQQVNTQVBPUlRFXCJ9LFwibm9tZVwiOlwiVGVzdGVtdW5oYTJcIixcInRlbGVmb25lXCI6bnVsbH0sXCJmdW5jaW9uYXJpb1wiOjJ9LFwiY2FwdGFjYW9cIjpudWxsLFwiZGF0YUFiZXJ0dXJhXCI6MTQyNTkzMTUyODU4MCxcImhpc3Rvcmljb1wiOlt7XCJpZFwiOjEzMzQsXCJlc3RhZG9Ob3RpZmljYWNhb1wiOlwiQUdVQVJEQU5ET0FOQUxJU0VPQklUT1wiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjU5MzE5MTA1ODQsXCJmdW5jaW9uYXJpb1wiOjF9LHtcImlkXCI6MTMzMixcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPQU5BTElTRU9CSVRPXCIsXCJkYXRhQXR1YWxpemFjYW9zXCI6MTQyNTkzMTUyODU4MCxcImZ1bmNpb25hcmlvXCI6MX0se1wiaWRcIjoxODM0LFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9BTkFMSVNFRU5UUkVWSVNUQVwiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjY1OTM5NTcyMzYsXCJmdW5jaW9uYXJpb1wiOjJ9LHtcImlkXCI6MTgzNixcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPQ0FQVEFDQU9cIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI2NTk0Mzc2NDcyLFwiZnVuY2lvbmFyaW9cIjozfSx7XCJpZFwiOjEzNTMsXCJlc3RhZG9Ob3RpZmljYWNhb1wiOlwiQUdVQVJEQU5ET0VOVFJFVklTVEFcIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI2MDkxMDUwMDgxLFwiZnVuY2lvbmFyaW9cIjozfSx7XCJpZFwiOjEzMzMsXCJlc3RhZG9Ob3RpZmljYWNhb1wiOlwiQUdVQVJEQU5ET0NPUlJFQ0FPT0JJVE9cIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI1OTMxNTQ4ODA0LFwiZnVuY2lvbmFyaW9cIjozfV0sXCJjb2RpZ29cIjpcIkhVQ0FNMTIyMzY2NTlcIixcImRhdGFBcnF1aXZhbWVudG9cIjpudWxsLFwiYXJxdWl2YWRvXCI6ZmFsc2UsXCJub3RpZmljYWRvclwiOjEsXCJjYXVzYU5hb0RvYWNhb1wiOm51bGwsXCJ1bHRpbW9Fc3RhZG9cIjp7XCJpZFwiOjE4MzYsXCJlc3RhZG9Ob3RpZmljYWNhb1wiOlwiQUdVQVJEQU5ET0NBUFRBQ0FPXCIsXCJkYXRhQXR1YWxpemFjYW9zXCI6MTQyNjU5NDM3NjQ3MixcImZ1bmNpb25hcmlvXCI6M319LHtcImlkXCI6NTYwLFwib2JpdG9cIjp7XCJpZFwiOjU4OSxcInBhY2llbnRlXCI6e1wiaWRcIjo4NTcsXCJub21lXCI6XCJQYXVsb1wiLFwiZGF0YUludGVybmFjYW9cIjoxMzkyODY1MjAwMDAwLFwiZGF0YU5hc2NpbWVudG9cIjo0NjE4MTg4MDAwMDAsXCJwcm9maXNzYW9cIjpcIlNlbSBwcm9maXNzw6NvXCIsXCJub21lTWFlXCI6XCJzZWkgbmFvXCIsXCJyZWxpZ2lhb1wiOlwiU2VtIHJlbGlnacOjb1wiLFwibnVtZXJvUHJvbnR1YXJpb1wiOlwiMjEyMTIxMjEyXCIsXCJudW1lcm9TVVNcIjpcIjEyMTIxMjFcIixcIm5hY2lvbmFsaWRhZGVcIjpcIkJyYXNpbGVpcm9cIixcImRvY3VtZW50b1NvY2lhbFwiOntcImRvY3VtZW50b1wiOlwiMjEyMTIxXCIsXCJ0aXBvRG9jdW1lbnRvQ29tRm90b1wiOlwiQ0FSVEVJUkFfREVfVFJBQkFMSE9cIn0sXCJzZXhvXCI6XCJNQVNDVUxJTk9cIixcInRlbGVmb25lXCI6bnVsbCxcImVuZGVyZWNvXCI6e1wiaWRcIjozNDc4LFwibG9ncmFkb3Vyb1wiOlwiMVwiLFwibnVtZXJvXCI6XCI2NFwiLFwiY29tcGxlbWVudG9cIjpudWxsLFwiYmFpcnJvXCI6MzI0OCxcImNpZGFkZVwiOjIwNTIsXCJlc3RhZG9cIjo4LFwiY2VwXCI6XCI4NDU2OC01NDZcIn0sXCJlc3RhZG9DaXZpbFwiOlwiU09MVEVJUk9cIn0sXCJkYXRhT2JpdG9cIjoxNDI2MjY2MDAwMDAwLFwiZGF0YUNhZGFzdHJvXCI6MTQyNjI2Nzc4NTg2NixcImFwdG9Eb2FjYW9cIjp0cnVlLFwicHJpbWVpcmFDYXVzYU1vcnRpc1wiOntcImlkXCI6MjE1NyxcIm5vbWVcIjpcIkdyaXBlXCJ9LFwic2VndW5kYUNhdXNhTW9ydGlzXCI6e1wiaWRcIjoyMTU5LFwibm9tZVwiOlwiXCJ9LFwic2V0b3JcIjoyLFwiaG9zcGl0YWxcIjoxLFwidGVyY2VpcmFDYXVzYU1vcnRpc1wiOntcImlkXCI6MjE2MCxcIm5vbWVcIjpcIlwifSxcInF1YXJ0YUNhdXNhTW9ydGlzXCI6e1wiaWRcIjoyMTU4LFwibm9tZVwiOlwiXCJ9LFwidGlwb09iaXRvXCI6XCJQQ1JcIixcImNvcnBvRW5jYW1pbmhhbWVudG9cIjpudWxsLFwiaWRhZGVQYWNpZW50ZVwiOjMwLFwiaG9yYXNPYml0b1wiOjkxfSxcImVudHJldmlzdGFcIjp7XCJpZFwiOjU1MyxcImRvYWNhb0F1dG9yaXphZGFcIjp0cnVlLFwiZW50cmV2aXN0YVJlYWxpemFkYVwiOnRydWUsXCJkYXRhRW50cmV2aXN0YVwiOjE0MjY1OTM2MDAwMDAsXCJkYXRhQ2FkYXN0cm9cIjoxNDI2NTk0MDU0MzYxLFwicmVzcG9uc2F2ZWxcIjp7XCJpZFwiOjQ5OSxcIm5vbWVcIjpcIlJlc3BvbnNhdmVsIE5vbWUxXCIsXCJkYXRhTmFzY2ltZW50b1wiOjMxNTU0MzYwMDAwMCxcIm5hY2lvbmFsaWRhZGVcIjpcIkJyYXNpbGVpcm9cIixcInByb2Zpc3Nhb1wiOlwiU2VtIHByb2Zpc3Nhb1wiLFwiZG9jdW1lbnRvU29jaWFsXCI6e1wiZG9jdW1lbnRvXCI6XCI2NTQxNjUyMTM0M1wiLFwidGlwb0RvY3VtZW50b0NvbUZvdG9cIjpcIlJHXCJ9LFwicmVsaWdpYW9cIjpcIlNlbSByZWxpZ2nDo29cIixcImdyYXVFc2NvbGFyaWRhZGVcIjpcIkFOQUxGQUJFVE9cIixcImVzdGFkb0NpdmlsXCI6XCJTT0xURUlST1wiLFwic2V4b1wiOlwiTUFTQ1VMSU5PXCIsXCJwYXJlbnRlc2NvXCI6XCJQQUlTXCIsXCJ0ZWxlZm9uZVwiOntcImlkXCI6NDA5MyxcIm51bWVyb1wiOlwiKDQ1KTY0MTY1LTQ2NTRcIn0sXCJ0ZWxlZm9uZTJcIjp7XCJpZFwiOjQwOTQsXCJudW1lcm9cIjpcIig1NCk1NDY1NC05ODQ5XCJ9LFwiZW5kZXJlY29cIjp7XCJpZFwiOjM0NzcsXCJsb2dyYWRvdXJvXCI6XCI1NDU3OVwiLFwibnVtZXJvXCI6XCI2NTQ1NjRcIixcImNvbXBsZW1lbnRvXCI6bnVsbCxcImJhaXJyb1wiOjM1MDYsXCJjaWRhZGVcIjoyMDcyLFwiZXN0YWRvXCI6OCxcImNlcFwiOlwiNTQxNTYtNDY5XCJ9fSxcInJlc3BvbnNhdmVsMlwiOm51bGwsXCJ0ZXN0ZW11bmhhMVwiOntcImlkXCI6OTk1LFwiZG9jdW1lbnRvU29jaWFsXCI6e1wiZG9jdW1lbnRvXCI6XCIxNTQ5ODc0OFwiLFwidGlwb0RvY3VtZW50b0NvbUZvdG9cIjpcIkNBUlRFSVJBX0RFX1RSQUJBTEhPXCJ9LFwibm9tZVwiOlwiVGVzdGVtdW5oYTFcIixcInRlbGVmb25lXCI6bnVsbH0sXCJ0ZXN0ZW11bmhhMlwiOntcImlkXCI6OTk2LFwiZG9jdW1lbnRvU29jaWFsXCI6e1wiZG9jdW1lbnRvXCI6XCI2NTQ5ODc5XCIsXCJ0aXBvRG9jdW1lbnRvQ29tRm90b1wiOlwiQ09OU0VMSE9fUkVHSU9OQUxcIn0sXCJub21lXCI6XCJUZXN0ZW11bmhhMlwiLFwidGVsZWZvbmVcIjpudWxsfSxcImZ1bmNpb25hcmlvXCI6Mn0sXCJjYXB0YWNhb1wiOm51bGwsXCJkYXRhQWJlcnR1cmFcIjoxNDI2MjY3Nzg1ODY2LFwiaGlzdG9yaWNvXCI6W3tcImlkXCI6MTM1OSxcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPQU5BTElTRU9CSVRPXCIsXCJkYXRhQXR1YWxpemFjYW9zXCI6MTQyNjI2Nzc4NTg2NixcImZ1bmNpb25hcmlvXCI6MX0se1wiaWRcIjoxODM1LFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9BTkFMSVNFRU5UUkVWSVNUQVwiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjY1OTQwNTQzNjEsXCJmdW5jaW9uYXJpb1wiOjJ9LHtcImlkXCI6MTM2MyxcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPRU5UUkVWSVNUQVwiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjYyNzI2NzI4MjgsXCJmdW5jaW9uYXJpb1wiOjN9LHtcImlkXCI6MTgzOCxcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPQ0FQVEFDQU9cIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI2NTk0MzkzNzc2LFwiZnVuY2lvbmFyaW9cIjozfV0sXCJjb2RpZ29cIjpcIkhVQ0FNMjEyMTIxMjEyXCIsXCJkYXRhQXJxdWl2YW1lbnRvXCI6bnVsbCxcImFycXVpdmFkb1wiOmZhbHNlLFwibm90aWZpY2Fkb3JcIjoxLFwiY2F1c2FOYW9Eb2FjYW9cIjpudWxsLFwidWx0aW1vRXN0YWRvXCI6e1wiaWRcIjoxODM4LFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9DQVBUQUNBT1wiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjY1OTQzOTM3NzYsXCJmdW5jaW9uYXJpb1wiOjN9fSx7XCJpZFwiOjI2MixcIm9iaXRvXCI6e1wiaWRcIjoyNzMsXCJwYWNpZW50ZVwiOntcImlkXCI6Mjk3LFwibm9tZVwiOlwiTm9tZTEgZGEgU2lsdmFcIixcImRhdGFJbnRlcm5hY2FvXCI6MTQyNDc0NjgwMDAwMCxcImRhdGFOYXNjaW1lbnRvXCI6NjMxMTU5MjAwMDAwLFwicHJvZmlzc2FvXCI6XCJTZW0gcHJvZmlzc8Ojb1wiLFwibm9tZU1hZVwiOlwiTcOjZSBkbyBOb21lMVwiLFwicmVsaWdpYW9cIjpcIlNlbSByZWxpZ2nDo29cIixcIm51bWVyb1Byb250dWFyaW9cIjpcIjM2MjQxNjUxNjU0MzI0XCIsXCJudW1lcm9TVVNcIjpcIjY1MTQ2MjM1NDY1XCIsXCJuYWNpb25hbGlkYWRlXCI6XCJCcmFzaWxlaXJvXCIsXCJkb2N1bWVudG9Tb2NpYWxcIjp7XCJkb2N1bWVudG9cIjpcIjEzNTQyMzU0NjIxXCIsXCJ0aXBvRG9jdW1lbnRvQ29tRm90b1wiOlwiUEFTU0FQT1JURVwifSxcInNleG9cIjpcIk1BU0NVTElOT1wiLFwidGVsZWZvbmVcIjpudWxsLFwiZW5kZXJlY29cIjp7XCJpZFwiOjEyOTMsXCJsb2dyYWRvdXJvXCI6XCIxXCIsXCJudW1lcm9cIjpcIjY0XCIsXCJjb21wbGVtZW50b1wiOm51bGwsXCJiYWlycm9cIjoyNDM2LFwiY2lkYWRlXCI6MTgyOCxcImVzdGFkb1wiOjgsXCJjZXBcIjpcIjY1MTY1LTQ2OVwifSxcImVzdGFkb0NpdmlsXCI6XCJVTklBT19FU1RBVkVMXCJ9LFwiZGF0YU9iaXRvXCI6MTQyNDg2OTIwMDAwMCxcImRhdGFDYWRhc3Ryb1wiOjE0MjQ4NzE5NjAwMDAsXCJhcHRvRG9hY2FvXCI6dHJ1ZSxcInByaW1laXJhQ2F1c2FNb3J0aXNcIjp7XCJpZFwiOjEwMDMsXCJub21lXCI6XCJjYXVzYTFcIn0sXCJzZWd1bmRhQ2F1c2FNb3J0aXNcIjp7XCJpZFwiOjEwMDUsXCJub21lXCI6XCJjYXVzYTJcIn0sXCJzZXRvclwiOjEsXCJob3NwaXRhbFwiOjEsXCJ0ZXJjZWlyYUNhdXNhTW9ydGlzXCI6e1wiaWRcIjoxMDA2LFwibm9tZVwiOlwiXCJ9LFwicXVhcnRhQ2F1c2FNb3J0aXNcIjp7XCJpZFwiOjEwMDQsXCJub21lXCI6XCJcIn0sXCJ0aXBvT2JpdG9cIjpcIlBDUlwiLFwiY29ycG9FbmNhbWluaGFtZW50b1wiOm51bGwsXCJpZGFkZVBhY2llbnRlXCI6MjUsXCJob3Jhc09iaXRvXCI6NDc5fSxcImVudHJldmlzdGFcIjp7XCJpZFwiOjE5NyxcImRvYWNhb0F1dG9yaXphZGFcIjp0cnVlLFwiZW50cmV2aXN0YVJlYWxpemFkYVwiOnRydWUsXCJkYXRhRW50cmV2aXN0YVwiOjE0MjQ4NzIyMDAwMDAsXCJkYXRhQ2FkYXN0cm9cIjoxNDI0ODcyMzgwMDAwLFwicmVzcG9uc2F2ZWxcIjp7XCJpZFwiOjE3OSxcIm5vbWVcIjpcIlJlc3BvbnNhdmVsIE5vbWUxXCIsXCJkYXRhTmFzY2ltZW50b1wiOjY1ODIwMjQwMDAwMCxcIm5hY2lvbmFsaWRhZGVcIjpcIkJyYXNpbGVpcm9cIixcInByb2Zpc3Nhb1wiOlwiU2VtIHByb2Zpc3Nhb1wiLFwiZG9jdW1lbnRvU29jaWFsXCI6e1wiZG9jdW1lbnRvXCI6XCI2NTQ2NTQxMzg3NjU0XCIsXCJ0aXBvRG9jdW1lbnRvQ29tRm90b1wiOlwiUkdcIn0sXCJyZWxpZ2lhb1wiOlwiU2VtIHJlbGlnacOjb1wiLFwiZ3JhdUVzY29sYXJpZGFkZVwiOlwiRU5TSU5PX0ZVTkRBTUVOVEFMX0NPTVBMRVRPXCIsXCJlc3RhZG9DaXZpbFwiOlwiU09MVEVJUk9cIixcInNleG9cIjpcIk1BU0NVTElOT1wiLFwicGFyZW50ZXNjb1wiOlwiQVZPU1wiLFwidGVsZWZvbmVcIjp7XCJpZFwiOjE1MTMsXCJudW1lcm9cIjpcIig2NSk0OTg0MS05ODc0XCJ9LFwidGVsZWZvbmUyXCI6e1wiaWRcIjoxNTE0LFwibnVtZXJvXCI6XCIoNjUpODczNTQtNjk1MVwifSxcImVuZGVyZWNvXCI6e1wiaWRcIjoxMjkyLFwibG9ncmFkb3Vyb1wiOlwiNTQ1NzlcIixcIm51bWVyb1wiOlwiNjU0NTY0XCIsXCJjb21wbGVtZW50b1wiOm51bGwsXCJiYWlycm9cIjoyNDM1LFwiY2lkYWRlXCI6MTgyNixcImVzdGFkb1wiOjgsXCJjZXBcIjpcIjU3NTQzLTU0N1wifX0sXCJyZXNwb25zYXZlbDJcIjpudWxsLFwidGVzdGVtdW5oYTFcIjp7XCJpZFwiOjM1NyxcImRvY3VtZW50b1NvY2lhbFwiOntcImRvY3VtZW50b1wiOlwiNTY3NDk4NTQ5NTRcIixcInRpcG9Eb2N1bWVudG9Db21Gb3RvXCI6XCJSR1wifSxcIm5vbWVcIjpcIlRlc3RlbXVuaGExXCIsXCJ0ZWxlZm9uZVwiOm51bGx9LFwidGVzdGVtdW5oYTJcIjp7XCJpZFwiOjM1OCxcImRvY3VtZW50b1NvY2lhbFwiOntcImRvY3VtZW50b1wiOlwiNDk1NDE2NTQ5ODU0XCIsXCJ0aXBvRG9jdW1lbnRvQ29tRm90b1wiOlwiQ0FSVEVJUkFfREVfVFJBQkFMSE9cIn0sXCJub21lXCI6XCJUZXN0ZW11bmhhMlwiLFwidGVsZWZvbmVcIjpudWxsfSxcImZ1bmNpb25hcmlvXCI6MX0sXCJjYXB0YWNhb1wiOm51bGwsXCJkYXRhQWJlcnR1cmFcIjoxNDI0ODcyMDE2NDMzLFwiaGlzdG9yaWNvXCI6W3tcImlkXCI6NjQ3LFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9BTkFMSVNFT0JJVE9cIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI0ODcyMDE2NDMzLFwiZnVuY2lvbmFyaW9cIjoxfSx7XCJpZFwiOjY0OCxcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPQ09SUkVDQU9PQklUT1wiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjQ4NzIxMDk3MDAsXCJmdW5jaW9uYXJpb1wiOjN9LHtcImlkXCI6NjQ5LFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9BTkFMSVNFT0JJVE9cIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI0ODcyMjgxNzU2LFwiZnVuY2lvbmFyaW9cIjoxfSx7XCJpZFwiOjY1MCxcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPRU5UUkVWSVNUQVwiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjQ4NzIzMTM5NjEsXCJmdW5jaW9uYXJpb1wiOjN9LHtcImlkXCI6NjUxLFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9BTkFMSVNFRU5UUkVWSVNUQVwiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjQ4NzI0MjA4MzIsXCJmdW5jaW9uYXJpb1wiOjJ9LHtcImlkXCI6NjUyLFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9DT1JSRUNBT0VOVFJFVklTVEFcIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI0ODcyNTQ3ODM5LFwiZnVuY2lvbmFyaW9cIjozfSx7XCJpZFwiOjY1NCxcImVzdGFkb05vdGlmaWNhY2FvXCI6XCJBR1VBUkRBTkRPQU5BTElTRUVOVFJFVklTVEFcIixcImRhdGFBdHVhbGl6YWNhb3NcIjoxNDI0ODcyODI3OTc5LFwiZnVuY2lvbmFyaW9cIjoxfSx7XCJpZFwiOjE4NDIsXCJlc3RhZG9Ob3RpZmljYWNhb1wiOlwiQUdVQVJEQU5ET0NBUFRBQ0FPXCIsXCJkYXRhQXR1YWxpemFjYW9zXCI6MTQyNjU5NDQyNTQ4MCxcImZ1bmNpb25hcmlvXCI6M31dLFwiY29kaWdvXCI6XCJIVUNBTTM2MjQxNjUxNjU0MzI0XCIsXCJkYXRhQXJxdWl2YW1lbnRvXCI6bnVsbCxcImFycXVpdmFkb1wiOmZhbHNlLFwibm90aWZpY2Fkb3JcIjoxLFwiY2F1c2FOYW9Eb2FjYW9cIjpudWxsLFwidWx0aW1vRXN0YWRvXCI6e1wiaWRcIjoxODQyLFwiZXN0YWRvTm90aWZpY2FjYW9cIjpcIkFHVUFSREFORE9DQVBUQUNBT1wiLFwiZGF0YUF0dWFsaXphY2Fvc1wiOjE0MjY1OTQ0MjU0ODAsXCJmdW5jaW9uYXJpb1wiOjN9fV0iLCJhbmd1bGFyLm1vZHVsZSAnc2luY2FwJ1xuLmNvbmZpZyAoJHN0YXRlUHJvdmlkZXIsICR1cmxSb3V0ZXJQcm92aWRlcikgLT5cbiAgJHN0YXRlUHJvdmlkZXJcbiAgLnN0YXRlICdhcHAnLFxuICAgIHVybDogXCIvYXBwXCJcbiAgICBhYnN0cmFjdDogdHJ1ZVxuICAgIHRlbXBsYXRlVXJsOiBcInRlbXBsYXRlcy9tZW51Lmh0bWxcIlxuICAgIGNvbnRyb2xsZXI6ICdBcHBDdHJsJ1xuXG4gIC5zdGF0ZSAnYXBwLnNlYXJjaCcsXG4gICAgdXJsOiBcIi9zZWFyY2hcIlxuICAgIHZpZXdzOlxuICAgICAgJ21lbnVDb250ZW50JzpcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL3NlYXJjaC5odG1sXCJcblxuICAuc3RhdGUgJ2FwcC5jYXB0YWNvZXMnLFxuICAgIHVybDogXCIvY2FwdGFjb2VzLzplc3RhZG9cIlxuICAgIHZpZXdzOlxuICAgICAgJ21lbnVDb250ZW50JzpcbiAgICAgICAgdGVtcGxhdGVVcmw6IFwidGVtcGxhdGVzL2NhcHRhY2FvLmh0bWxcIlxuICAgICAgICBjb250cm9sbGVyOiAnQ2FwdGFjYW9DdHJsJ1xuICBcbiAgLnN0YXRlICdhcHAuc2luZ2xlJyxcbiAgICB1cmw6IFwiL2NhcHRhY29lcy86cHJvY2Vzc29JZFwiXG4gICAgdmlld3M6XG4gICAgICAnbWVudUNvbnRlbnQnOlxuICAgICAgICB0ZW1wbGF0ZVVybDogXCJ0ZW1wbGF0ZXMvZm9ybS5odG1sXCJcbiAgICAgICAgY29udHJvbGxlcjogJ0NhcHRhY2FvQ3RybCdcbiAgICAgICAgXG4gIC5zdGF0ZSAnYXBwLmxvZ2luJyxcbiAgICB1cmw6IFwiL2xvZ2luXCJcbiAgICB2aWV3czpcbiAgICAgICdtZW51Q29udGVudCc6XG4gICAgICAgIHRlbXBsYXRlVXJsOiBcInRlbXBsYXRlcy9sb2dpbi5odG1sXCJcbiAgICAgICAgY29udHJvbGxlcjogJ0xvZ2luQ3RybCdcblxuICAkdXJsUm91dGVyUHJvdmlkZXIub3RoZXJ3aXNlICcvYXBwL2xvZ2luJyIsImNsYXNzIEFwcENvbnRyb2xsZXJcbiAgY29uc3RydWN0b3I6IChAJHNjb3BlLCBAQ2FwdGFjYW9TZXJ2aWNlKSAtPlxuICAgIFJFQUxJWkFSID0gJ0FHVUFSREFORE9DQVBUQUNBTydcbiAgICBDT1JSSUdJUiA9ICAnQUdVQVJEQU5ET0NPUlJFQ0FPQ0FQVEFDQUNBTydcblxuICAgIEBDYXB0YWNhb1NlcnZpY2UucXVhbnRDYXB0YWNvZXNSZWFsaXphcihSRUFMSVpBUikudGhlbiAocmVzdWx0cykgPT5cbiAgICAgIEAkc2NvcGUucXVhbnRDYXB0YWNvZXNSZWFsaXphciA9IHJlc3VsdHNcbiAgICBAQ2FwdGFjYW9TZXJ2aWNlLnF1YW50Q2FwdGFjb2VzUmVhbGl6YXIoQ09SUklHSVIpLnRoZW4gKHJlc3VsdHMpID0+XG4gICAgICBAJHNjb3BlLnF1YW50Q2FwdGFjb2VzQ29ycmlnaXIgPSByZXN1bHRzXG5cbmFuZ3VsYXIubW9kdWxlKCdzaW5jYXAnKS5jb250cm9sbGVyICdBcHBDdHJsJywgWyckc2NvcGUnLCAnQ2FwdGFjYW9TZXJ2aWNlJywgQXBwQ29udHJvbGxlcl1cbiIsImNsYXNzIENhcHRhY2FvQ29udHJvbGxlclxuICBjb25zdHJ1Y3RvcjogKEAkc2NvcGUsIEAkc3RhdGVQYXJhbXMsIEBjYXB0YWNhb1NlcnZpY2UpIC0+XG4gICAgQCRzY29wZS5lc3RhZG8gPSBAJHN0YXRlUGFyYW1zLmVzdGFkb1xuXG4gICAgQGNhcHRhY2FvU2VydmljZS5jYXB0YWNhb1BvclRpcG8oQCRzY29wZS5lc3RhZG8pLnRoZW4gKHJlc3VsdHMpID0+XG4gICAgICBAJHNjb3BlLnByb2Nlc3NvcyA9IHt9XG4gICAgICBAJHNjb3BlLnByb2Nlc3NvcyA9IHJlc3VsdHNcblxuICAgIEAkc2NvcGUudGl0bGUgPSAnQ2FwdGHDp8O1ZXMnXG5cbmFuZ3VsYXIubW9kdWxlKCdzaW5jYXAnKS5jb250cm9sbGVyICdDYXB0YWNhb0N0cmwnLCBbJyRzY29wZScsICckc3RhdGVQYXJhbXMnLCAnQ2FwdGFjYW9TZXJ2aWNlJywgQ2FwdGFjYW9Db250cm9sbGVyXSIsImNsYXNzIExvZ2luQ29udHJvbGxlclxuICBjb25zdHJ1Y3RvcjogKEAkc2NvcGUsIEAkbG9jYXRpb24sIEBsb2dpblNlcnZpY2UpIC0+XG5cbiAgICBAJHNjb3BlLmxvZ2luID0gKGRhZG9zKSA9PlxuICAgICAgQGxvZ2luU2VydmljZS5sb2dpbihkYWRvcykuc3VjY2VzcyAocmVzdWx0cykgLT5cblxuXG5hbmd1bGFyLm1vZHVsZSgnc2luY2FwJykuY29udHJvbGxlciAnTG9naW5DdHJsJywgWyckc2NvcGUnLCAnJGxvY2F0aW9uJywgJ0xvZ2luU2VydmljZScsIExvZ2luQ29udHJvbGxlcl1cbiIsIlRva2VuQXV0aEludGVyY2VwdG9yID0gKCRxLCBUb2tlblN0b3JhZ2UpIC0+XG4gIHtcbiAgICByZXF1ZXN0OiAoY29uZmlnKSAtPlxuICAgICAgYXV0aFRva2VuID0gVG9rZW5TdG9yYWdlLnJldHJpZXZlKClcbiAgICAgIFxuICAgICAgaWYgKGF1dGhUb2tlbilcbiAgICAgICAgY29uZmlnLmhlYWRlcnNbJ1gtQVVUSC1UT0tFTiddID0gYXV0aFRva2VuXG4gICAgICBcbiAgICAgIGNvbmZpZ1xuXG4gICAgcmVzcG9uc2VFcnJvcjogKGVycm9yKSAtPlxuICAgICAgaWYgKGVycm9yLnN0YXR1cyBpcyA0MDEgb3IgZXJyb3Iuc3RhdHVzIGlzIDQwMylcbiAgICAgICAgVG9rZW5TdG9yYWdlLmNsZWFyKClcblxuICAgICAgJHEucmVqZWN0KGVycm9yKVxuXG4gIH1cblxuYW5ndWxhci5tb2R1bGUoJ3NpbmNhcCcpLmZhY3RvcnkgJ1Rva2VuQXV0aEludGVyY2VwdG9yJywgWyckcScsICdUb2tlblN0b3JhZ2UnLCBUb2tlbkF1dGhJbnRlcmNlcHRvcl0iLCJUb2tlblN0b3JhZ2UgPSAoKSAtPlxuICBzdG9yYWdlS2V5ID0gJydcbiAgXG4gIHtcbiAgc3RvcmU6ICh0b2tlbikgLT5cbiAgICBsb2NhbFN0b3JhZ2Uuc2V0SXRlbShzdG9yYWdlS2V5LCB0b2tlbilcblxuICByZXRyaWV2ZTogKCkgLT5cbiAgICBsb2NhbFN0b3JhZ2UuZ2V0SXRlbShzdG9yYWdlS2V5KVxuXG4gIGNsZWFyIDogKCkgLT5cbiAgICBsb2NhbFN0b3JhZ2UucmVtb3ZlSXRlbShzdG9yYWdlS2V5KVxuICB9XG4gIFxuXG5hbmd1bGFyLm1vZHVsZSgnc2luY2FwJykuZmFjdG9yeSAnVG9rZW5TdG9yYWdlJywgW1Rva2VuU3RvcmFnZV0iLCJjbGFzcyBDYXB0YWNhb1NlcnZpY2VcbiAgVVJMQkFTRSA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvbXNpbmNhcC9jYXB0YWNhbydcblxuICBjb25zdHJ1Y3RvcjogKEAkaHR0cCkgLT5cbiAgY2FwdGFjYW9Qb3JUaXBvOiAocXVlcnlTdHJpbmcpIC0+XG4gICAgQCRodHRwLmdldChVUkxCQVNFICsgJz9lc3RhZG89JyArIHF1ZXJ5U3RyaW5nKS50aGVuIChyZXN1bHRzKSAtPlxuICAgICAgcmVzdWx0cy5kYXRhXG5cbiAgcXVhbnRDYXB0YWNvZXNSZWFsaXphcjogKGVzdGFkbykgLT5cbiAgICBAJGh0dHAuZ2V0KFVSTEJBU0UgKyAnL3F1YW50aWRhZGUnICsgJz9lc3RhZG89JyArIGVzdGFkbykudGhlbiAocmVzdWx0cykgLT5cbiAgICAgIHJlc3VsdHMuZGF0YVxuXG5hbmd1bGFyLm1vZHVsZSgnc2luY2FwJykuc2VydmljZSAnQ2FwdGFjYW9TZXJ2aWNlJywgWyckaHR0cCcsIENhcHRhY2FvU2VydmljZV0iLCJjbGFzcyBMb2dpblNlcnZpY2VcbiAgdXJsQmFzZSA9ICdodHRwOi8vMTI3LjAuMC4xOjgwODAvbXNpbmNhcC9hcGkvbG9naW4nXG4gIG5leHRTdGVwID0gJ2FwcC9jYXB0YWNvZXMvQUdVQVJEQU5ET0NBUFRBQ0FPJ1xuXG4gIGNvbnN0cnVjdG9yOiAoQCRodHRwLCBAJGxvY2F0aW9uLCBAVG9rZW5TdG9yYWdlKSAtPlxuXG4gIGxvZ2luOiAoZGF0YSkgPT5cbiAgICBAJGh0dHAucG9zdChcIiN7dXJsQmFzZX1cIiwgZGF0YSkuc3VjY2VzcyAocmVzdWx0KSA9PlxuICAgICAgI0Akc2NvcGUuYXV0aGVudGljYXRlZCA9IHRydWVcbiAgICAgIEBUb2tlblN0b3JhZ2Uuc3RvcmUocmVzdWx0KVxuICAgICAgQCRsb2NhdGlvbi5wYXRoKG5leHRTdGVwKVxuXG4gIGxvZ29mZjogKCkgPT5cbiAgICBAVG9rZW5TdG9yYWdlLmNsZWFyKClcbiAgICAjJHNjb3BlLmF1dGhlbnRpY2F0ZWQgPSBmYWxzZVxuXG5hbmd1bGFyLm1vZHVsZSgnc2luY2FwJykuc2VydmljZSAnTG9naW5TZXJ2aWNlJywgWyckaHR0cCcsICckbG9jYXRpb24nLCAnVG9rZW5TdG9yYWdlJywgTG9naW5TZXJ2aWNlXVxuIl0sInNvdXJjZVJvb3QiOiIvc291cmNlLyJ9
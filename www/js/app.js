angular.module('sincap', ['ionic']).run(function($ionicPlatform) {
  return $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);
    }
    if (window.StatusBar) {
      return StatusBar.styleDefault();
    }
  });
});

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
    url: "/captacoes",
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
  });
  return $urlRouterProvider.otherwise('/app/captacoes');
});

var AppController;

AppController = (function() {
  function AppController($scope, $ionicModal, $timeout) {
    this.$scope = $scope;
    this.$ionicModal = $ionicModal;
    this.$timeout = $timeout;
  }

  return AppController;

})();

angular.module('sincap').controller('AppCtrl', ['$scope', AppController]);

var CaptacaoController;

CaptacaoController = (function() {
  function CaptacaoController($scope) {
    this.$scope = $scope;
    this.$scope.processos = window.dataJson;
    this.$scope.title = 'Captações';
  }

  return CaptacaoController;

})();

angular.module('sincap').controller('CaptacaoCtrl', ['$scope', CaptacaoController]);

var LoginController;

LoginController = (function() {
  function LoginController($scope1, $ionicModal, $timeout) {
    this.$scope = $scope1;
    this.$ionicModal = $ionicModal;
    this.$timeout = $timeout;
    this.$scope.loginData = {};
    this.$ionicModal.fromTemplateUrl('templates/login.html', {
      scope: $scope
    }).then(function(modal) {
      return $scope.modal = modal;
    });
  }

  LoginController.prototype.closeLogin = function() {
    return this.$scope.modal.hide();
  };

  LoginController.prototype.login = function() {
    return this.$scope.modal.show();
  };

  LoginController.prototype.doLogin = function() {
    console.log('Doing login', this.$scope.loginData);
    return this.$timeout(function() {
      return this.$scope.closeLogin();
    }, 1000);
  };

  return LoginController;

})();

angular.module('sincap').controller('LoginCtrl', ['$scope', LoginController]);

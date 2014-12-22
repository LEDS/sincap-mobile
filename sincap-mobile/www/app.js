'use strict';

(function() {
    var app = angular.module('sincap', []);

    app.controller('IndexController', function() {
        this.menu = false;
        this.sidebarOpt = 'home';

        this.isMenuSelected = function() {
            return this.menu;
        };

        this.changeMenuSelected = function() {
            this.menu = !this.menu;
        };

        this.isSidebarOptSelected = function(opt) {
            return opt === this.sidebarOpt;
        };

        this.changeSidebarOpt = function(opt) {
            this.sidebarOpt = opt;
        };
    });

    app.directive('cabecalho', function() {
        return {
            restrict: 'E',
            templateUrl: 'header.html'
        };
    });

    app.directive('sidebar', function() {
        return {
            restrict: 'E',
            templateUrl: 'sidebar.html'
        };
    });

    app.directive('listaAguardandoCaptacoes', function() {
        return {
            restrict: 'E',
            templateUrl: 'captacao/index.html'
        };
    });

})();

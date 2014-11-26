'use strict';

(function() {
    var app = angular.module('sincap', []);

    app.controller('IndexController', function() {
        this.menu = false;

        this.isMenuSelected = function() {
            return this.menu;
        };

        this.changeMenuSelected = function() {
            this.menu = !this.menu;
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

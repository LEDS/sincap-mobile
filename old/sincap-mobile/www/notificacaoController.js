(function() {
    angular
        .module('sincap')
        .controller('NotificacaoController', ["$http", NotificacaoController]);
    
    function NotificacaoController($http) {
        var notificacaoCtrl = this;
        
        notificacaoCtrl.listCaptacao = [];
        notificacaoCtrl.getListCaptacao = getListCaptacao;
        notificacaoCtrl.mostraCaptacao = mostraCaptacao;
        
        getListCaptacao();
        
        function getListCaptacao() {
           $http.get("http://localhost:8080/msincap/index").success(function(data) {
               notificacaoCtrl.listCaptacao = data;
           });
        }

        function mostraCaptacao(codigo) {
                angular.element( "#div_" + codigo ).toggle( "slow" );
        }
    }
    
})();

(function() {
    angular
        .module('sincap')
        .controller('NotificacaoController', ["$http", NotificacaoController]);
    
    function NotificacaoController($http) {
        var notificacaoCtrl = this;
        
        notificacaoCtrl.listCaptacao = [];
        notificacaoCtrl.listAspectosLogisticos = [];
        notificacaoCtrl.getListCaptacao = getListCaptacao;
        notificacaoCtrl.mostraCaptacao = mostraCaptacao;
        
        getListCaptacao();
        getListApectosLogisticos()
        
        function getListCaptacao() {
           $http.get("http://172.16.109.68:8080/msincap/captacao/getCaptacoes").success(function(data) {
               notificacaoCtrl.listCaptacao = data;
           });
        }
        
        function getListApectosLogisticos() {
            $http.get("http://172.16.109.68:8080/msincap/captacao/getAspectosLogisticos").success(function(data) {
               notificacaoCtrl.listAspectosLogisticos = data;
           });
        }

        function mostraCaptacao(codigo) {
                angular.element( "#div_" + codigo ).toggle( "slow" );
        }
    }
    
})();

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
           $http.get("http://localhost:8080/sincap/m/index").success(function(data) {
               notificacaoCtrl.listCaptacao = data;
           });
        }

        function mostraCaptacao(codigo) {
//            $( "a_" + codigo ).click(function() {
                $( "div_" + codigo ).toggle( "slow" );
//            });
        }
    }
    
})();

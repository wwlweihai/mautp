/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        '$stateProvider',
        '$urlRouterProvider',
        '$ionicConfigProvider',
        'RestangularProvider',
        config
]);
function config($stateProvider, $urlRouterProvider,$ionicConfigProvider,RestangularProvider) {
    //导航栏置底
    RestangularProvider.setBaseUrl("data");
    $urlRouterProvider.otherwise('/index');
    $stateProvider
    .state('index', {
        url: "/index",
        templateUrl: "modules/index/index.html",
        controller:'index'
    })
    ;
};

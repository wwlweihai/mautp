/**
 * Created by ww on 2015/3/24.
 */
angular.module('app', [
    'app.core',
    'app.value',
    'app.config',
    'app.directive',
    'app.controller'
]);
angular.module('app.core', [
    /*3rd-party modules*/
    //restful request tool
    'restangular'
    //auto grow textarea for chats/chat-detail（信息发送自增长舒适框）
]);
angular.module('app.value', []);
angular.module('app.config', ['ionic','app.value']);
angular.module('app.controller', []);
angular.module('app.directive', []);
AV.initialize("4n2gmgauas6z06yldyok9rxbmpheyvcnw98h977d311qhdsu", "5d6k8n19w0rx01hoz3taywaxalknezl09t4wtttqoj9ucpfy");

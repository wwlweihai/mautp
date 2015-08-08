/**
 * Created by ww on 2015/4/11.
 */
angular.module('app.config')
.config([
        '$stateProvider',
        config
]);

function config($stateProvider) {
    $stateProvider
    .state('tab.chats', {
        url: '/chats',
        views: {
            'tab-chats': {
                templateUrl: 'modules/chats/chats.html'
            }
        }
    })
    .state('tab.chats-detail', {
        url: '/chats/:chatId',
        views: {
            'tab-chats': {
                templateUrl: 'modules/chats/chat-detail/chat-detail.html'
                //controller: 'ChatDetailCtrl'
            }
        }
    })
    .state('tab.news', {
        url: '/news',
        views: {
            'tab-chats': {
                templateUrl: 'modules/chats/news/news.html'
            }
        }
    })
    .state('tab.boutique', {
        url: '/boutique',
        views: {
            'tab-chats': {
                templateUrl: 'modules/chats/boutique/boutique.html'
            }
        }
    });
}

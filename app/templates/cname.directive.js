angular.module('app.directive')
.directive('cname',cname);

function cname() {
    var directive = {
        link: link,
        templateUrl: '',
        scope: {

        },
        restrict: 'A'
    };
    return directive;

    function link(scope, element, attrs) {

    }
}



angular.module('app.controller')
.controller('index',index);
index.$inject = [
    '$window',
    'Restangular',
    '$scope'
];
function index($window,Restangular,$scope) {
    $scope.signUp = signUp;
    $scope.updateSelection = updateSelection;
    $scope.form = {};
    $scope.data = {};
    $scope.data.gifts = [];
    $scope.data.brandList = [];
    $scope.data.areaList = [
        {name:'成都市'},
        {name:'绵阳市'},
        {name:'自贡市'},
        {name:'攀枝花市'},
        {name:'泸州市'},
        {name:'德阳市'},
        {name:'广元市'},
        {name:'遂宁市'},
        {name:'乐山市'},
        {name:'内江市'},
        {name:'资阳市'},
        {name:'南充市'},
        {name:'达州市'},
        {name:'雅安市'},
        {name:'广安市'},
        {name:'巴中市'},
        {name:'眉山市'}
    ];


    $scope.form.area = $scope.data.areaList[0].name;
    //$scope.form.gift = $scope.data.gifts[0].name;
    var brandList = Restangular.one("cars.json");
    brandList.get().then(function(result){
        $scope.data.brandList = result.result;
        //$scope.data.brand = $scope.data.brandList[0];
    });
    $scope.brandSelect = function( ){
        var seriesList = [];
        $scope.form.brand = $scope.data.brand.N;
        angular.forEach($scope.data.brand.List, function(subBrand, index) {
            angular.forEach(subBrand.List, function(series, index) {
                seriesList.push({N:series.N});
            });
        });
        console.log(JSON.stringify(seriesList));
        $scope.data.seriesList = seriesList;
    }
    getGifts(function(results){
        for (var i = 0; i < results.length; i++) {
            var object = results[i].attributes;
            if(object.name != "")
                $scope.data.gifts.push(object);
        }
    });
    function signUp(){
        console.log(JSON.stringify($scope.form));
        var Applicant = AV.Object.extend("applicant");
        var applicant = new Applicant();
        applicant.save($scope.form, {
            success: function(object) {
                alert("报名成功！");
                //$window.location.href = "http://chengdu.auto.163.com/";
            }
        });

    }
     function updateSelection(position, entities) {
         $scope.form.gift = entities[position].name;
        angular.forEach(entities, function(subscription, index) {
            if (position != index)
                subscription.checked = false;
        });
    }
    function getGifts(callback){
        var Applicant = AV.Object.extend("gift");
        var applicant = new Applicant();
        var query = new AV.Query(Applicant);
        query.find({
            success: function(results) {
                $scope.$apply(function(){
                    callback(results);
                });
            },
            error: function(object, error) {
                $scope.err = true;
            }
        });
    }
};


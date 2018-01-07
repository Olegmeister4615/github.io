angular.module('app', []);

angular.module('app').factory('mainFactory',function($http){
    var service = {};
    service.getCourse = function(url, callback){
        $http.get(url).then(callback);
    }
    return service;
})

angular.module('app').controller('main', function($scope, mainFactory) {
    var bitfinex_url = 'https://api.bitfinex.com/v2/tickers?symbols=tBTCUSD';

    mainFactory.getCourse(bitfinex_url,function(data){
        $scope.price = (+data.data[0][7]);
    });
    $scope.lol = "lol";
    $scope.count = 1000;
    $scope.change = function(){
        console.log($scope.date);
        countLate = $scope.count/$scope.date.y;
        
        $scope.nowInBTC = ($scope.price * countLate).toFixed(0)+" $";
    }
    $scope.nowInBTC = $scope.count / $scope.date;
    mainFactory.getCourse("course",function(data){
        $scope.lol = data.data;
        console.log(data.data);
    })
})
//a.a.detkov@urfu.ru
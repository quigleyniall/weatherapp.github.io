weatherApp.controller('homeController', ['$scope', '$location', 'weatherService',  function($scope, $location, weatherService){

    $scope.city = weatherService.city;


    $scope.$watch('city', function(){
        weatherService.city = $scope.city;
        });

$scope.submit=function() {
    $location.path('/forcast');
}
$('body').css('background-image', 'url()');

}]);

weatherApp.controller('forecastController', ['$http', '$scope', '$resource', 'weatherService', function($http, $scope, $resource, weatherService){

    $scope.city = weatherService.city;

    $scope.convertToCelsius = function(degK) {
        return Math.round(degK - 273);
    };


    //    $scope.weatherAPI = $resource("http://api.openweathermap.org/data/2.5/weather?",{
    //     callback: "JSON_CALLBACK" }, {get: {method: "JSONP"}});
    //
    // $scope.weatherResult = $scope.weatherAPI.get({ q: $scope.city, appid: '921e5afc8e157d0a9c98033e4e14f16b' });
    // console.log($scope.weatherResult);


    $http.jsonp("https://api.openweathermap.org/data/2.5/weather?q="+$scope.city+"&APPID=921e5afc8e157d0a9c98033e4e14f16b&callback=JSON_CALLBACK").success(function(data) {
        $scope.weatherResult = data;
        console.log(data);

        //get screen width to determine to put picture in
            $(window).width();
            var x=(screen.width);
            console.log(x);
        if(x > 800) {
            if ($scope.weatherResult.weather[0].main == 'Clouds') {
                $('body').css('background-image', 'url(https://images.unsplash.com/photo-1421081177127-339f586c9b49?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=380980f0fdd19c7d4cd5a34384a8cff0&auto=format&fit=crop&w=749&q=80)');
            }
            if ($scope.weatherResult.weather[0].main == 'Rain') {
                $('body').css('background-image', 'url(https://images.unsplash.com/photo-1496034663057-6245f11be793?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=3e3facdc97ce74347933f68625491ed9&auto=format&fit=crop&w=750&q=80)');
            }
            if ($scope.weatherResult.weather[0].main == 'Clear') {
                $('body').css('background-image', 'url(https://images.unsplash.com/photo-1507004990372-a4364d297789?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=e1981cf566974d240459e7d9c12695ca&auto=format&fit=crop&w=666&q=80)');
            }
            if ($scope.weatherResult.weather[0].main == 'Snow') {
                $('body').css('background-image', 'url(https://images.unsplash.com/photo-1513210264448-4adf37672cb8?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=92450ce6c76e0d7d3dfd964a61530982&auto=format&fit=crop&w=667&q=80)');
            }
            if ($scope.weatherResult.weather[0].main == 'Mist') {
                $('body').css('background-image', 'url(https://images.unsplash.com/photo-1442606688842-a421432a776f?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=76428d1343c4aabe3eb9284f1d2923a1&auto=format&fit=crop&w=476&q=80)');
            }
            if ($scope.weatherResult.weather[0].main == 'Thunderstorm') {
                $('body').css('background-image', 'url(https://images.unsplash.com/photo-1482005253821-5d6a2c685879?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=ddad2e18d75348098633d2016efe1f0d&auto=format&fit=crop&w=998&q=80)');
            }
        }
        //    convert first letter to capital

        $scope.capitalizeFirstLetter = function (str)
        {
            return str.replace(/\w\S*/g, function(txt){return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();});
        }



    }).
    error(function() {
    });


}]);





var app = angular.module('MoveMate', ['ui.directives', 'oitozero.ngSweetAlert']);



app.controller('MoveMateController', function($scope,$filter,SweetAlert ) {

    $scope.alert = function(price){
        SweetAlert.swal(
            {
                title: "Your price estimate for "+ $scope.hours+" hours is\n $ " + $scope.price  ,
                confirmButtonText: 'OK',
                confirmButtonClass: 'confirm-button-class',
                confirmButtonColor: '#54d2db',
            }
        );
    }

    $scope.currentdate = $filter('date')(Date.now(),'yyyy-MM-dd');

    $scope.names = ["08:00 AM", "09:00 AM","12:00 PM", "02:00 PM"];
    $scope.isButtonEnabled = false;
    

    $scope.isweekend = function(mydate){
        if(!mydate){
            mydate = $scope.currentdate}
        var dateArray = mydate.split("-");
        var date = new Date(dateArray[0], dateArray[1] - 1, dateArray[2]);
        var day = date.getDay();
        return day === 0 || day === 6;
    }

    $scope.buttonClick = function(){
        if($scope.isweekend($scope.mydate)){
            $scope.price = $scope.hours * 150
        }else
        $scope.price = $scope.hours * 100 

        $scope.alert($scope.price)
        
    }

});

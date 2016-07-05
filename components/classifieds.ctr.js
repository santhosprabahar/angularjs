(function() {

    "use strict";

    angular
        .module("ngclassifieds")
        .controller("ngclassifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav) {
           
                classifiedsFactory.getClassifieds().then(function(classifieds) {
                    $scope.classifieds = classifieds.data;




                });

            


            $scope.openSidebar = function() {
                $mdSidenav('left').open();
            }

            $scope.closeSidebar = function() {
                $mdSidenav('left').close();
            }



            // console.log(classifieds);
        });



    // $scope.classifieds = {
    //     // name: "CR7",
    //     // description: "Cristiano Ronaldo dos Santos Aveiro, GOIH (Portuguese pronunciation: [kɾiʃ'tjɐnu ʁuˈnaɫdu], born 5 February 1985) is a Portuguese professional footballer who plays for Spanish club Real Madrid and the Portugal national team. He is a forward and serves as captain for Portugal. In 2008, he won his first Ballon d'Or and FIFA World Player of the Year awards. He then won the FIFA Ballon d'Or in 2013 and 2014. In 2015, Ronaldo scored his 500th senior career goal for club and country",
    //     // title: "UEFA 2016"
    // }





})();

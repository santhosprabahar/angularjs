(function() {

    "use strict";

    angular
        .module("ngclassifieds")
        .controller("ngclassifiedsCtrl", function($scope, $http, classifiedsFactory, $mdSidenav, $mdToast, $mdDialog) {

            classifiedsFactory.getClassifieds().then(function(classifieds) {
                $scope.classifieds = classifieds.data;

                 $scope.categories = getCategories($scope.classifieds);


            });




            $scope.openSidebar = function() {
                $mdSidenav('left').open();
            }

            $scope.closeSidebar = function() {
                $mdSidenav('left').close();
            }


            $scope.addClassified = function(classified) {
                if (classified) {
                    $scope.classifieds.push(classified);
                    $scope.classified = {};
                    $scope.closeSidebar();
                    showToast("classified added successfully");

                }
            }

            $scope.editClassified = function(editedClassified) {
                $scope.editing = true;
                $scope.openSidebar();
                $scope.classified = editedClassified;

            }

            $scope.saveEdit = function() {
                $scope.classified = {};
                $scope.closeSidebar();
                showToast("classified edited successfullys");
            }

            $scope.deleteClassified = function(event, classified) {
                var confirm = $mdDialog.confirm()
                    .title("Do you really want to remove " + classified.login + "?")
                    .ok('Yes')
                    .cancel('No')
                    .targetEvent(event);
                $mdDialog.show(confirm).then(function() {
                    var index = $scope.classifieds.indexOf(classified);
                    $scope.classifieds.splice(index, 1);
                }, function() {

                });
                // var index = $scope.classifieds.indexOf(classified);
                //    $scope.classifieds.splice(index, 1);

            }




            function showToast(msg) {
                $mdToast.show(
                    $mdToast.simple()
                    .content(msg)
                    .position('bottom, right')
                    .hideDelay(4000)
                    // .join('  ')
                );
            }

            function getCategories(classifieds) {
                var categories = [];

                angular.forEach(classifieds, function(item) {
                    angular.forEach(item.categories, function(category) {
                        categories.push(category);
                    });

                });

                return _.uniq(categories);

            }






            // console.log(classifieds);
        });



    // $scope.classifieds = {
    //     // name: "CR7",
    //     // description: "Cristiano Ronaldo dos Santos Aveiro, GOIH (Portuguese pronunciation: [kɾiʃ'tjɐnu ʁuˈnaɫdu], born 5 February 1985) is a Portuguese professional footballer who plays for Spanish club Real Madrid and the Portugal national team. He is a forward and serves as captain for Portugal. In 2008, he won his first Ballon d'Or and FIFA World Player of the Year awards. He then won the FIFA Ballon d'Or in 2013 and 2014. In 2015, Ronaldo scored his 500th senior career goal for club and country",
    //     // title: "UEFA 2016"
    // }





})();

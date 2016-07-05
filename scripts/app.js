angular.module("ngclassifieds", ["ngMaterial"])
    .config(function($mdThemingProvider) {

        $mdThemingProvider.theme('default')
            .primaryPalette('teal')
            .accentPalette('orange');
             // .backgroundPalette('white');

  

});


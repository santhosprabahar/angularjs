(function() {
        "use strict";

        angular.module('ngclassifieds')
            .factory('classifiedsFactory', function($http) {

            	function getClassifieds(){
                	return  $http.get('Data/classifieds.json');
            	}
                

                return { getClassifieds: getClassifieds }


            });

})();

angular.module('listings').controller('ListingsController', ['$scope', 'Listings', 
  function($scope, Listings) {
    $scope.listings = Listings;
    $scope.detailedInfo = undefined;

    /* 
      Implement these functions in the controller to make your application function 
      as described in the assignment spec. 
     */
    $scope.addListing = function () {
        if ($scope.code && $scope.name != '') {

            $scope.listings.push({

                code: $scope.code,
                name: $scope.name,
                latitude: $scope.latitude,
                longitude: $scope.longitude


            });
        
        $scope.code = '';
        $scope.name = '';

        }
    };
      /* deletes an item in list */

    $scope.deleteListing = function (index) {
        var course = $scope.listings.indexOf(index);
        $scope.listings.splice(course, 1);
        
    };
      /* will give information to the selected index*/

    $scope.showDetails = function (index) {

        $scope.detailedInfo = $scope.listings[index];
    };
  }
]);
app.controller('HomeController', function ($scope, $window, WordService) {
  $scope.content = '';
  var phrase = $scope.content;
  $scope.countWords = function(phrase) {
    WordService.pushWords(phrase);
    $window.location.href = '/#/cloud';
  }

})

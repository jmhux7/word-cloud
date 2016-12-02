app.controller('HomeController', function ($scope, WordService) {
  $scope.content = '';
  var phrase = $scope.content;
  $scope.countWords = function(phrase) {
    WordService.pushWords(phrase);
  }
})

app.controller('CloudController', function ($scope, WordService) {
  $scope.currentWords = WordService.currentWords;
  $scope.wordArr = WordService.wordArr[0];
  $scope.getStyle = function(index){
    var currentWord = WordService.currentWords[0][WordService.wordArr[0][index]];
    return "font-size:" + (currentWord * 14) + "px"
  }
})

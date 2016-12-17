app.controller('CloudController', function ($scope, WordService) {

  $scope.currentWords = WordService.currentWords;
  $scope.wordArr = WordService.wordArr[0];

  $scope.getStyle = function(index, word){
    var currentWord = WordService.currentWords[0][WordService.wordArr[0][index]];

    var wordIndex = Object.keys(WordService.currentWords[0]).indexOf(word);

    console.log(wordIndex);

    return `font-size: ${currentWord * 14}px; color: ${WordService.phraseColors[wordIndex]}`
  }

})

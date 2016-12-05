app.controller('CloudController', function ($scope, WordService) {
  var getWords = function() {
    return {
      currentWords: WordService.currentWords,
      wordArr: WordService.wordArr[0]
    }
  }
  getWords();
})

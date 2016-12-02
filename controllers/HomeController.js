app.controller('HomeController', function ($scope) {
  $scope.content = '';
  var phrase = $scope.content;
  $scope.countWords = function(phrase) {
    var wordArr = phrase.split(' ');
    var wordObj = {};
    for (var i = 0; i < wordArr.length; i++) {
      if(wordObj[wordArr[i]]) {
        wordObj[wordArr[i]]++;
      } else {
        wordObj[wordArr[i]] = 1;
      }
    }
    console.log(wordObj);
    return wordObj;
  }
})

app.service('WordService', function () {
  
  var currentWords = [];

  var pushWords = function(phrase) {
    var wordArr = phrase.split(' ');
    var wordObj = {};
    for (var i = 0; i < wordArr.length; i++) {
      if(wordObj[wordArr[i]]) {
        wordObj[wordArr[i]]++;
      } else {
        wordObj[wordArr[i]] = 1;
      }
    }
    currentWords.push(wordObj);
    console.log(currentWords);
  }

  return {
    pushWords: pushWords
  }

})

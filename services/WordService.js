app.service('WordService', function () {

  var currentWords = [];
  var currentPhrase = [];

  var pushWords = function(phrase) {
    wordArr = phrase.split(' ');
    var wordObj = {};
    for (var i = 0; i < wordArr.length; i++) {
      if(wordObj[wordArr[i]]) {
        wordObj[wordArr[i]]++;
      } else {
        wordObj[wordArr[i]] = 1;
      }
    }
    currentWords.push(wordObj);
    currentPhrase.push(wordArr);
    // console.log(currentWords);
  }

  return {
    pushWords: pushWords,
    currentWords: currentWords,
    wordArr: currentPhrase
  }

})

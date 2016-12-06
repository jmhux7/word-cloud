app.service('WordService', function () {

  var currentWords = [];
  var currentPhrase = [];
  var phraseColors = [];

  var pushWords = function(phrase) {
    wordArr = phrase.split(/[\s,]+/);
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
  }

  var getColors = function(phrase) {
    wordArr = phrase.split(/[\s,]+/);
    var letters = "0123456789ABCDEF".split("");
    var color = "#";
    for (var i = 0; i < wordArr.length; i++) {
      for (var j = 0; j < 6; j++ ) {
        color += letters[Math.floor(Math.random() * 16)];
      }
      phraseColors.push(color);
      color = "#";
    }
  }

  return {
    pushWords: pushWords,
    currentWords: currentWords,
    wordArr: currentPhrase,
    getColors: getColors,
    phraseColors: phraseColors
  }

})

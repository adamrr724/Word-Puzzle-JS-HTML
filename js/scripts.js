var hangman = function(userWord) {
  var vowels = ['a', 'e', 'i', 'o', 'u']
  var hiddenWord = userWord.split("");
// debugger;
  for(var i = 0; i < hiddenWord.length; i++) {
    for(var j = 0; j < vowels.length; j++) {
          if(hiddenWord[i] === vowels[j]) {
            hiddenWord[i] = '-';
          }
    }
  }
  hiddenWord = hiddenWord.join("")
  return hiddenWord;
};

// FASTER WAY TO DO THIS

// var hangman = function(userWord) {
//    var hiddenWord = userWord.replace(/[aeiou]/g,('-'));
//    return hiddenWord;
// };





$(document).ready(function(event) {
    $("form#hangman").submit(function(event){

      var word = $("input#message1").val();
      var result = hangman(word);

  $(".result").text(result);
  $("#result").show();
  event.preventDefault();

});
});

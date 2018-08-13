$(document).ready(function(event) {

  $("#goButton").click(function(event) {
    event.preventDefault();
    var words = $("#sentence").val().split(" ");
    var bigWords = [];

    words.forEach(function(word)
    {
      var wordLength = parseInt(word.length);
      console.log();
      if (wordLength >= 4 )
      {
        bigWords.push(word);
      }
    });
    bigWords.reverse();
    console.log(bigWords);
    answer = bigWords.join(" ");
    console.log(answer);

    $("#output").append("<li> " + answer + " </li>")
  });
});

// Create a form where users may enter a sentence.
// Turn that sentence into an array using the split method.
// Then, loop through this array to build a new array out of every word in the sentence that is 3 or more characters in length.
// Finally, reverse the order of the new array, join it back together into a string, and display it to the user.

/* 3. Add the JavaScript function upload() in the JS panel. This function should:

* Create a variable that gets the value of the text from the text input element, and
* Display this text in an alert. */

function upload() {
  //Get input from text input
  var fileinput = document.getElementById("finput");
  var filename = fileinput.value;

  //Alert dispaly text
  alert("You chose " + filename);
}

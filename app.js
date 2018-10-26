/*
listen for click event (add)
add text (with key) to localStorage
update display with text


listen for click event (edit)
update text in local storage (with key)
update display with new text value


listen for click event (del)
delete from local storage (with key)

 */

$(document).ready(function(){
  console.log("before\n", window.localStorage);
  $(".add-text-btn").on("click", function(){
    // add text (with key) to localStorage
    var curTextValue = $('#theKey').val(); // reading from <input>
    var curKeyValue = "theKey"; // change to dynamic key?
    localStorage.setItem(curKeyValue, curTextValue);
    console.log("...after", window.localStorage);
    // update display with text
  });
});
/*
listen for click event (edit)
update text in local storage (with key)
update display with new text value


 */

$(document).ready(function(){
  console.log("before\n", window.localStorage);

  // add event listener
  $(".add-text-btn").on("click", function(){
    $(".show-text").empty();
    var curTextValue = $('#theKey').val(); // reading from <input>
    var curKeyValue = "theKey"; // change to dynamic key?
    localStorage.setItem(curKeyValue, curTextValue);
    $(".show-text").append(curTextValue);
  });

  // remove item from app

  // listen for click event (del)
  $(".clear-cache-btn").on("click", function(){
    // clear local storage
    localStorage.clear();
    $(".show-text").empty();
  });

});
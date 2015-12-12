$(document).ready(function() {
  prompt("Ready! My lord.");
});

var listItems = $('li');
var secondListItem = listItems.eq(1);
secondListItem.remove();
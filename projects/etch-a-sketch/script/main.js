var gridSize = 70;
var $container = $('#container');


var constructGrid = function(incolor){
  var gridVal = (600/gridSize);
  for (var i=0; i<gridSize; i++)
    {
      $('<div class="gridRow"></div>').appendTo($container);
      $row = $('.gridRow:last-child');

      for(j=0; j<gridSize; j++)
        {
          $gridContent = $('<div class="gridContent"></div>');
          $gridContent.appendTo($row);
        }
    }



  $(".gridRow").css('height', gridVal);

  $(".gridContent").css({"width": gridVal, "height": gridVal});
}

constructGrid();

$('button').click(function(){
  gridSize = parseInt(prompt("How many boxes do ya want on each row/column? (300 or less)", gridSize));
  while(isNaN(gridSize) || gridSize>300){
    gridSize = prompt("Please enter a valid number. How many boxes do ya want on each row/column?? (300 or less)")
  }
  $container.empty();
  constructGrid();
})




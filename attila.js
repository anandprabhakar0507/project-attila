var inBackticks = false;
var characterToFind = "`"
var pattern = /`([()*+/0-9\s-]+)`$/;
var expressionArray=[];
var expression;
$("body").prepend ( `
  <style>
         #calculator { width: 33%; height: 10%; padding: 0.5em; background:#eee; z-index:100000;}
         #expression { float: left; width: 90%}
         #answer { float: right; width: 10%}
  </style>
  <div id="calculator" class="ui-widget-content">
    <div id="expression">
      1+1
    </div>
    <div id="answer">
      2
    </div>
  </div>
` );
$( function() {
    $( "#calculator" ).draggable().css("position", "absolute");
  } );
var calcDiv = document.getElementById("calculator");
var answerDiv = document.getElementById("answer");
var expressionDiv = document.getElementById("expression");
hideCalcDiv();
$(document.activeElement).on("keyup", function(event) {
  if (equationExists()){
    showCalcDiv();
  }
  else{
    hideCalcDiv();
  }
});
function equationExists(){
  console.log('check');
  var active = $(document.activeElement);
  var activeText = active.text();
  expressionArray = activeText.match(pattern);
  if(expressionArray!=null){
    console.log("hello")
    expression = expressionArray[0];
  }
  return expressionArray!=null;
}

function showCalcDiv(){
  expression = expression.substring(1, expression.length-1);
  expressionDiv.innerHTML = expression;
  answerDiv.innerHTML = "= " + eval(String(expression));
  console.log()
  calcDiv.style.display = 'block';
}

function hideCalcDiv(){
  calcDiv.style.display = 'none';
}

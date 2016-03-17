var myVar = setInterval(myTimer, 250);
var randtemp;

function myTimer() {
    var rand = Math.floor(Math.random() * 16 + 1);
  //  console.log(rand);
    while (rand == randtemp){
      rand = Math.floor(Math.random() * 16 + 1);
    }

    document.getElementById(rand).style.backgroundColor = getRandomColor();
    randtemp = rand;
}



var getRandomColor = function(){
  return  '#' +
    (function(color){
    return (color +=  '0123456789abcdef'[Math.floor(Math.random()*16)])
      && (color.length == 6) ?  color : arguments.callee(color);
  })('');
}

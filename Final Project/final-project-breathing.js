$('document').ready(function(){

  var min = 0;
  var sec = 0;
  var timer;
  $("#minutes").text(min);
  $("#seconds").text(sec);

  $("#start").click(function(){
    var timer = setTimeout(addASecond, 1000);
  })

  function addASecond() {
    sec = sec + 1;
    if (sec == 60) {
      sec = 0;
      min = min + 1;

    } else {
      sec = sec;
      min = min;
    }
    $("#minutes").text(min);
    $("#seconds").text(sec);
    var timer = setTimeout(addASecond, 1000);

    $("#stop").click(function(){
      clearTimeout(timer);

    })


    $("#reset").click(function(){
      $("#minutes").text(0);
      $("#seconds").text(0);
      clearTimeout(timer);
    })

  }

/* Used http://mrbool.com/how-to-create-a-stopwatch-in-javascript/26613 and Dr. K's help for the setTimeOut function and the if else statements */
//used https://www.w3schools.com/jsref/met_win_cleartimeout.asp for clearTimeout method.
})

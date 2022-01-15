function datehax() {
  var mydate = new Date()
  mydate.setDate(mydate.getDate());
  var year = mydate.getYear()
  if (year < 1000)
      year += 1900
  var day = mydate.getDay()
  var month = mydate.getMonth()
  var daym = mydate.getDate()
  if (daym < 10)
      daym = "0" + daym
  var dayarray = new Array("Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday")
  var montharray = new Array("January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December")
  return "" + montharray[month] + " " + daym + ", " + year + "";

}

function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
  setInterval(function() {
    minutes = parseInt(timer / 60, 10);
    seconds = parseInt(timer % 60, 10);

    minutes = minutes < 10 ? "" + minutes : minutes;
    seconds = seconds < 10 ? "0" + seconds : seconds;

    display.textContent = minutes + ":" + seconds;

    if (--timer < 0) {
      timer = duration;
    }
  }, 1000);
}
function updateClock() {
    var currentTime = new Date();
    var hours = currentTime.getHours();
    var currentMinutes = currentTime.getMinutes();
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is More or Less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // Picking "AM" or "PM" 12h clock if time is more or less than 12
    var timeOfDay = (hours < 12) ? "AM" : "PM";
    // transform clock to 12h version if needed
    hours = (hours > 12) ? hours - 12 : hours;
    // transform clock to 12h version after mid night
    hours = (hours == 0) ? 12 : hours;
    var currentTimeString = 'The local time is ' + hours + ":" + currentMinutes + ":" + currentSeconds + " " + timeOfDay;
    // print clock js in div #clock.
    $(".clocks").html(currentTimeString);
}
$(document).ready(function () {
    setInterval(updateClock, 1000);
});
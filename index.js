function updateClock() {
    var currentTime = new Date();
    // Operating System Clock Hours for 12h clock
    var currentHoursAP = currentTime.getHours();
    // Operating System Clock Hours for 24h clock
    var currentHours = currentTime.getHours();
    // Operating System Clock Minutes
    var currentMinutes = currentTime.getMinutes();
    // Operating System Clock Seconds
    var currentSeconds = currentTime.getSeconds();
    // Adding 0 if Minutes & Seconds is More or Less than 10
    currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
    currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
    // Picking "AM" or "PM" 12h clock if time is more or less than 12
    var timeOfDay = (currentHours < 12) ? "AM" : "PM";
    // display first 24h clock and after line break 12h version
    var currentTimeString = 'Your Local Time Is ' + currentHours + ":" + currentMinutes + ":" + currentSeconds + ":" + timeOfDay;
    // print clock js in div #clock.
    $(".clocks").html(currentTimeString);
}
$(document).ready(function () {
    setInterval(updateClock, 1000);
});
// TYPE WRITER TEXT -----------------------------------------
var test = document.getElementById("test");
var text = "Welcome To the Social Media landing page!"; //put your text here
var result = "";
//Press rerun button to see effect
window.addEventListener("load", () => {
    for (let i = 0; i < text.length; i++) {
        setTimeout(function () {
            result += text[i];
            test.innerHTML = result;
        }, 120 * i);
    }
});
// Will check the credentials for the sign in page


$(".signbutton").click(function () {
    var user = $('#username').val();
    var password = $('#password').val();
    var reset = '';
    if (user == 'tom' && password == 'tom') {
        alert('hello');
        var usernameReset = $('#username').val('');
        var passwordReset = $('#password').val('');
    } else {
        alert('Re-Enter Credentials');
        var usernameReset = $('#username').val('');
        var passwordReset = $('#password').val('');
    }
});
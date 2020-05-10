// TYPE WRITER TEXT -----------------------------------------
var test = document.getElementById("test");
var text = "Welcome To the Terms And Conditions Page!"; //put your text here
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
// Button and paragraph to Display the Time
var b = document.createElement("Button");
var p = document.createElement("P");
// Attaching The Button to the HTML
document.body.appendChild(b);
document.body.appendChild(p);
// Telling what Is on the Button
b.innerHTML = "Display The Time";
// An 'onclick' function to display the time
b.onclick = function(){bfunc();};
// The function that displays the time
function bfunc() {
    p.innerHTML = "----------------------------------" + "<br>" + new Date() + "<br>" + "----------------------------------";
}

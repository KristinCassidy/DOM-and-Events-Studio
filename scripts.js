// Write your JavaScript code here.
// Remember to pay attention to page loading!
window.onload

button.addEventListener("click", function() {
    window.confirm("Confirm that the shuttle is ready for takeoff.");
    let p = document.getElementById("flightStatus");
    p.innerHTML = "Shuttle in flight.";

    

}
"takeoff");



//when takeoff button is clicked, the following should happen
//  a. A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
//  b. The flight status should change to "Shuttle in flight."
//  c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
//  d. The shuttle height should increase by 10,000 miles.


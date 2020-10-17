// Write your JavaScript code here.
// Remember to pay attention to page loading!
//let p = null;
//let shuttleScreen = null;
//function () {
    //document.getElementById("spaceShuttleHeight").innerHTML = "Window is loaded.";
//};


button.addEventListener("click", function takeoff(event) {
    console.log(window.confirm("Confirm that the shuttle is ready for takeoff."));
   // p = document.getElementById("flightStatus");
   //p.innerHTML = "Shuttle in flight.";
    //shuttleScreen = document.getElementById("shuttleBackground");
   // shuttleScreen.style.background = "blue";
}

                        
//window.onload 

//when takeoff button is clicked, the following should happen
//  a. A window confirm should let the user know "Confirm that the shuttle is ready for takeoff." If the shuttle is ready for liftoff, then add parts b-d.
//  b. The flight status should change to "Shuttle in flight."
//  c. The background color of the shuttle flight screen (id = "shuttleBackground") should change from green to blue.
//  d. The shuttle height should increase by 10,000 miles.
//

// Write your JavaScript code here.
// Remember to pay attention to page loading!

let height = document.getElementById("spaceShuttleHeight");
let shuttleScreen = document.getElementById("shuttleBackground");
let p = document.getElementById("flightStatus");

function takeoff(event) {
   window.confirm("Confirm that the shuttle is ready for takeoff.");
   p.innerHTML = "Shuttle in flight.";
   shuttleScreen.style.background = "blue";
   height.innerHTML = 10000;
}

function landing(event) {
   window.alert("The shuttle is landing. Landing gear engaged."); 
   p.innerHTML = "The shuttle has landed.";
   shuttleScreen.style.background = "green";
   height.innerHTML = 0;
}

                        
//window.onload 

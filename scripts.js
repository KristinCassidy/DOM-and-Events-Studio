// Write your JavaScript code here.
// Remember to pay attention to page loading!

function takeoff(event) {
   window.confirm("Confirm that the shuttle is ready for takeoff.");
   let p = document.getElementById("flightStatus");
      p.innerHTML = "Shuttle in flight.";
   let shuttleScreen = document.getElementById("shuttleBackground");
      shuttleScreen.style.background = "blue";
   let height = document.getElementById("spaceShuttleHeight");
      height.innerHTML = 10000;
}

function landing(event) {
   window.alert("The shuttle is landing. Landing gear engaged."); 
}

                        
//window.onload 

// Write your JavaScript code here.
// Remember to pay attention to page loading!


function takeoff(event) {
   result = window.confirm("Confirm that the shuttle is ready for takeoff.");
   let p = document.getElementById("flightStatus");
   let shuttleScreen = document.getElementById("shuttleBackground");
   let height = document.getElementById("spaceShuttleHeight");
   if (result == true) {
      p.innerHTML = "Shuttle in flight.";
      shuttleScreen.style.background = "blue";
      height.innerHTML = 10000;
   }
}

function landing(event) {
   window.alert("The shuttle is landing. Landing gear engaged."); 
   let p = document.getElementById("flightStatus");
   p.innerHTML = "The shuttle has landed.";
   let shuttleScreen = document.getElementById("shuttleBackground");
   shuttleScreen.style.background = "green";
   let height = document.getElementById("spaceShuttleHeight");
   height.innerHTML = 0;
}

function abortMission(event) {
   result = window.confirm("Confirm that you want to abort the mission.");
   let p = document.getElementById("flightStatus");
   let shuttleScreen = document.getElementById("shuttleBackground");
   let height = document.getElementById("spaceShuttleHeight");
   if (result == true) {
      p.innerHTML = "Mission aborted.";
      shuttleScreen.style.background = "green";
      height.innerHTML = 0; 
   }
}

// function moveUp(event) {
//    let height = document.getElementById("spaceShuttleHeight");
//    height.innerHTML = 1;
// }
                          
// function moveDown(event) {
//    let height = document.getElementById("spaceShuttleHeight");
//    height.innerHTML = 1;
//    //let down = document.getElementsByID("rocket");
//    //down.style.top = 10 + 'px';
  
// }

function moveRight(event) {
   let height = document.getElementById("spaceShuttleHeight");
   height.innerHTML = 1;
}

// function moveLeft(event) {
//   let height = document.getElementById("spaceShuttleHeight");
//   height.innerHTML = 1;
// }


                        
//window.onload;

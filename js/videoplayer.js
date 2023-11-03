function videoplayeropen(name) {
  var video = name;

  document.getElementById("videoplayer").style.display = "block";
  
  //Extract what video in the grid was clicked.
  const number = name.split("-");

  //Pick the right link and name from the Array.
  document.getElementById("videoframe").src = videolinks[parseInt(number[1])];
  document.getElementById("videoframe").title = videotitles[number[1]];

  //Add the corresponding videodescription
  document.getElementById("videodescription").innerHTML =
    videodescriptions[parseInt(number[1])];
}

function videoplayerclose() {
  document.getElementById("videoplayer").style.display = "none";
  document.getElementById("videoframe").src = "";
  document.getElementById("filter").style.opacity = "0%";
  document.getElementById("filter").style.display = "none";
}

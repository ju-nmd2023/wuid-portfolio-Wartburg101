function videoplayeropen(name) {
  let video = name;

  document.getElementById("videoplayer").style.display = "block";
  
  //Extract what video in the grid was clicked.
  const number = name.split("-");

  //Pick the right link and name from the Array.
  document.getElementById("videoframe").src = videolinks[parseInt(number[1])];
  document.getElementById("videoframe").title = videotitles[number[1]];

  //Add the corresponding videodescription and title
  document.getElementById("videodescription").innerHTML =
  "<h1>" + videotitles[number[1]] + "</h1>" + "<br>" + videodescriptions[parseInt(number[1])];

  
  document.getElementById("navbar").style.display = "none";
}

function videoplayerclose() {
  document.getElementById("navbar").style.display = "grid";
  document.getElementById("videoplayer").style.display = "none";
  document.getElementById("videoframe").src = "";

}

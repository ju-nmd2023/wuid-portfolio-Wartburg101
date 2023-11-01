/*Arrays containing video information*/
const videolinks = [
  "https://www.youtube.com/embed/Uv4aJNAzdKc",
  "https://www.youtube.com/embed/gQAvFrmUyLI",
  "https://www.youtube.com/embed/vzIej6quGwY",
  "https://www.youtube.com/embed/LRlWCsXxZfk",
  "https://www.youtube.com/embed/UWsvgdCYpmM",
  "https://www.youtube.com/embed/w-3ZWHEKznI",
  "https://www.youtube.com/embed/XUNQyyZP4s8",
  "https://www.youtube.com/embed/8o0H47ZGihU",
  "https://www.youtube.com/embed/UlgO9yUHKew",
];

const titles = [
  "Spökjakt",
  "Orions Belt Promotion",
  "~WOOZY~",
  "Lightdance",
  "The Fat and The Furious",
  "Kafè Brädan Promotion",
  "dancinginmyroom",
  "All girls are the same",
  "2021",
];

const descriptions = [
  "A personal project with a horror theme and some crazy effects. Filmed and edited by me!",
  "A promotion video made for me and my friends clothing company 'Orions Belt UF' formed as a school project. I was in charge for all marketing.",
  "A trippy video made for testing some camera tracking and other effects. Filmed and edited by me.",
  "For this project i wanted to realistically add something animated into real footage. I filmed the footage by myself to later motion track it. I then drew the dancing character frame by frame and added a glow effect to him. When the character was added into the footage i made sure to perfect reflections and light play to make it look realistic",
  "222",
  "333",
  "444",
  "555",
  "677",
];

//Load Titles and images
function loadvideos() {
  //Get the parent element
  var parent = document.getElementById("workrightsection");

  //Collect all h2 elements in one array and divs in another
  var h2array = parent.getElementsByTagName("h2");
  var divarray = parent.getElementsByTagName("div");

  /*Go through each element in the array and assign with the corresponding title in
  the const titles array.*/
  for (let i = 0; i < 9; i++) {
    //assign titles
    let text = titles[i];
    h2array[i].innerText = text;

    //assign images
    let url = "url('../imgs/thumbnails/bild" + i + ".jpg')";
    divarray[i].style.backgroundImage = url;
  }
}

function videoplayeropen(name) {
  var video = name;

  document.getElementById("videoplayer").style.display = "block";

  //Extract what video in the grid was clicked.
  const number = name.split("-");

  //Pick the right link and name from the Array.
  document.getElementById("videoframe").src = videolinks[parseInt(number[1])];
  document.getElementById("videoframe").title = titles[number[1]];

  //Add the corresponding videodescription
  document.getElementById("videodescription").innerHTML =
    descriptions[parseInt(number[1])];

  //Effects

  //Blur filter add
  document.getElementById("filter").style.display = "block";
  document.getElementById("filter").style.opacity = "100%";
}

function videoplayerclose() {
  document.getElementById("videoplayer").style.display = "none";

  document.getElementById("filter").style.opacity = "0%";
  document.getElementById("filter").style.display = "none";
}

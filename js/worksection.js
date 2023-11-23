/*Arrays containing video information*/
const videolinks = [
  "https://www.youtube.com/embed/Uv4aJNAzdKc",
  "https://www.youtube.com/embed/gQAvFrmUyLI",
  "https://www.youtube.com/embed/vzIej6quGwY",
  "https://www.youtube.com/embed/LRlWCsXxZfk",
  "https://www.youtube.com/embed/UWsvgdCYpmM",
  "https://www.youtube.com/embed/w-3ZWHEKznI",
  "https://www.youtube.com/embed/F98sG6VOG88?list=PLIH-MdeoWPk149ce3pvoWjlxE3w5RI_0w",
  "https://www.youtube.com/embed/8o0H47ZGihU",
  "https://www.youtube.com/embed/UlgO9yUHKew",
];

const videotitles = [
  "Spökjakt",
  "Orions Belt Promotion",
  "~WOOZY~",
  "Lightdance",
  "The Fat and The Furious",
  "Kafè Brädan Promotion",
  "In the end (Version 1)",
  "All girls are the same",
  "2021",
];

const videodescriptions = [
  "A personal project with a horror theme and some crazy effects. Filmed and edited by me using After Effects, Premiere Pro and Photoshop",
  "A promotion video made for me and my friends clothing company 'Orions Belt UF' formed as a school project. I was in charge for all marketing and this was one of my works. A phostudio was rented for taking photos of the products, meanwhile i filmed this and edited in a punky grunge theme fitting to the product.",
  "A trippy video made for testing some camera tracking and other effects like face deformation. Filmed and edited by me.",
  "For this project i wanted to realistically add something animated into real footage. I filmed the footage by myself to later motion track it. I then drew the dancing character frame by frame and added a glow effect to him. When the character was added into the footage i made sure to perfect reflections and light play to make it look realistic before adding other effects like the text and particles.",
  "A random interaction between friends i happened to film, and then decided to edit. It tells the story of aggravation solved with a streetrace in an off-location in Jönköping.",
  "Promotion done for the fictional cafè 'Kafè Brädan' which was formed for a school project. An entire style guide was created which can be found under the 'Graphics' category, this video was made as an extra element to this brand. The footage in this project was not captured by me although everything else like logo, animation and editing was done by me.",
  "444",
  "555",
  "677",
];
/*Arrays containing video information*/

//Load Titles and images
function loadelements() {
  //Get the parent element
  let parent1 = document.getElementById("workrightsection1");

  let parent2 = document.getElementById("workrightsection2");

  let parent3 = document.getElementById("workrightsection3");

 /*Videos*/
  //Collect all h2 elements in one array and divs in another
  let h2array = parent1.getElementsByTagName("h2");
  let divarray = parent1.getElementsByTagName("div");

  /*Go through each element in the array and assign with the corresponding title in
    the const titles array.*/
  for (let i = 0; i < 9; i++) {
    //assign titles
    let text = videotitles[i];
    h2array[i].innerText = text;

    //assign images
    let url = "url('imgs/videos/bild" + i + ".jpg')";
    divarray[i].style.backgroundImage = url;
  }
  /*Videos*/

  /*Graphics*/

  let graphicdivarray = parent2.getElementsByTagName("div");

  for (let i = 0; i < 4; i++) {
    let url = "url('imgs/graphics/bild" + i + ".png')";
    graphicdivarray[i].style.backgroundImage = url;
  }
  /*Graphics*/

  /*Web*/

  let webdivarray = parent3.getElementsByTagName("div");

  for (let i = 0; i < 4; i++) {
    let url = "url('imgs/web/bild" + i + ".png')";
    webdivarray[i].style.backgroundImage = url;
  }
  /*Web*/

}

function changesection(clickedbutton) {
  if (clickedbutton == "clickfilm") {
    document.getElementById("workrightsection1").style.display = "grid";
    document.getElementById("workrightsection2").style.display = "none";
    document.getElementById("workrightsection3").style.display = "none";
  }
  if (clickedbutton == "clickgraphics") {
    document.getElementById("workrightsection1").style.display = "none";
    document.getElementById("workrightsection2").style.display = "grid";
    document.getElementById("workrightsection3").style.display = "none";
  }
  if (clickedbutton == "clickweb") {
    document.getElementById("workrightsection1").style.display = "none";
    document.getElementById("workrightsection2").style.display = "none";
    document.getElementById("workrightsection3").style.display = "grid";
  }
}

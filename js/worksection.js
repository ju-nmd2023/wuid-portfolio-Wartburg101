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
  
  const videotitles = [
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
  
  const videodescriptions = [
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
  /*Arrays containing video information*/

  //Load Titles and images
  function loadelements() {
    //Get the parent element
    var parent1 = document.getElementById("workrightsection1");
  
    var parent2 = document.getElementById("workrightsection2");

    /*Graphics*/

    var graphicdivarray = parent2.getElementsByTagName("div");

    for(let i = 0; i<4;i++){
        let url = "url('imgs/graphics/bild" + i + ".png')";
        graphicdivarray[i].style.backgroundImage = url
    }
    /*Graphics*/

    /*Videos*/
    //Collect all h2 elements in one array and divs in another
    var h2array = parent1.getElementsByTagName("h2");
    var divarray = parent1.getElementsByTagName("div");
  
    /*Go through each element in the array and assign with the corresponding title in
    the const titles array.*/
    for (let i = 0; i < 9; i++) {
      //assign titles
      let text = videotitles[i];
      h2array[i].innerText = text;
  
      //assign images
      let url = "url('imgs/thumbnails/bild" + i + ".jpg')";
      divarray[i].style.backgroundImage = url;
    }
    /*Videos*/
  }

  

function changesection (clickedbutton){

    if(clickedbutton == "clickfilm"){
       
        document.getElementById("workrightsection1").style.display = 'grid';
        document.getElementById("workrightsection2").style.display = 'none';
        document.getElementById("workrightsection3").style.display = 'none';
    }
    if(clickedbutton == "clickgraphics"){
        
        document.getElementById("workrightsection1").style.display = 'none';
        document.getElementById("workrightsection2").style.display = 'grid';
        document.getElementById("workrightsection3").style.display = 'none';
    }
    if (clickedbutton == "clickweb"){
        
        document.getElementById("workrightsection1").style.display = 'none';
        document.getElementById("workrightsection2").style.display = 'none';
        document.getElementById("workrightsection3").style.display = 'block';
    }
    
    
}
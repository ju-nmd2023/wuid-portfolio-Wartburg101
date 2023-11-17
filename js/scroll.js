let abouttitle = document.getElementById("abouttitle");
let aboutsubtext = document.getElementById("aboutsubtext");
let aboutbody = document.getElementById("aboutbodytext");

/*Navigation*/ 
let navbuttons = document.getElementsByClassName("navbuttons");

window.onscroll = function() {
    /*Aboutpage scroll */
let scrollLimit = 400;
if(window.scrollY >= scrollLimit){
    abouttitle.style.opacity = "100%"
    abouttitle.style.transform = "none"

    aboutsubtext.style.opacity = "100%"
    aboutsubtext.style.transform = "none"

    aboutbody.style.opacity = "100%"

    
}
else{
    abouttitle.style.opacity = "0%"
    abouttitle.style.transform = "translateX(-20%)"

    aboutsubtext.style.opacity = "0%"
    aboutsubtext.style.transform = "translateX(-20%)"

    aboutbody.style.opacity = "0%"
}
}
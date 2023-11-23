let abouttitle = document.getElementById("abouttitle");
let aboutsubtext = document.getElementById("aboutsubtext");
let aboutbody = document.getElementById("aboutbodytext");

/*Navindicator*/ 
let sectiontitle = document.getElementById("navindicator")



window.onscroll = function() {

let win = this;

let scrollLimit1;
let scrollLimit2;

    /*Check if user is on mobile or desktop*/
    if(window.innerWidth < 700){
        scrollLimit1 = 400;
        scrollLimit2 = 2000;
        }
        else{
        /*Aboutpage scroll */
        scrollLimit1 = 400;
        /*Workpage scroll*/
        scrollLimit2 = 1000;
        }
    

/*Find Out where the user is*/

if(window.scrollY >= scrollLimit2){
    scrollAnimations("work");
}
else if(window.scrollY >= scrollLimit1){
    scrollAnimations("about");
}
else{
    scrollAnimations("home");
}
}

function scrollAnimations(position){

    if(position == "home"){
        
        abouttitle.style.opacity = "0%"
        abouttitle.style.transform = "translateX(-20%)"
        aboutsubtext.style.opacity = "0%"
        aboutsubtext.style.transform = "translateX(-20%)"
        aboutbody.style.opacity = "0%"

        sectiontitle.style.transform = "translateY(0%)"
    }
    if(position == "about"){
        
        abouttitle.style.opacity = "100%"
        abouttitle.style.transform = "none"
        aboutsubtext.style.opacity = "100%"
        aboutsubtext.style.transform = "none"
        aboutbody.style.opacity = "100%"

        sectiontitle.style.transform = "translateY(-25%)"
    }
    if(position == "work"){
        "translateY(-50%)"
        abouttitle.style.opacity = "0%"
        abouttitle.style.transform = "translateX(-20%)"
        aboutsubtext.style.opacity = "0%"
        aboutsubtext.style.transform = "translateX(-20%)"
        aboutbody.style.opacity = "0%"

        sectiontitle.style.transform = "translateY(-50%)"
    }
    else{

    }
}
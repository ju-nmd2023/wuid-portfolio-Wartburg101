/*//Code for switching video partially taken from https://www.youtube.com/watch?v=ydeQbbF9jbw&ab_channel=%23SmartCode*/



const switchtv = document.getElementById("tvstatic");

let toggle = true;

//Listen for click
switchtv.addEventListener("click", function () {
  //Make toggle false if true, and true if false
  toggle = !toggle;
  if (!toggle) {
    document.getElementById("tvstatic").style.opacity = "0%";
    document.getElementById("tvshowreel").style.opacity = "100%";
    document.getElementById("tvshowreel").classList.remove('tvframeanimation');
    void document.getElementById("tvshowreel").offsetWidth;
    document.getElementById("tvshowreel").classList.add('tvframeanimation');
    
  } else {
    document.getElementById("tvstatic").style.opacity = "100%";
    document.getElementById("tvshowreel").style.opacity = "0%";
    switchtv.classList.remove('tvframeanimation');
    void switchtv.offsetWidth;
    switchtv.classList.add('tvframeanimation');
  }
});



/*//Code for switching video partially taken from https://www.youtube.com/watch?v=ydeQbbF9jbw&ab_channel=%23SmartCode*/



const switchtv = document.getElementById("tvstatic");

let toggle = true;

switchtv.addEventListener("click", function () {
  toggle = !toggle;
  if (!toggle) {
    document.getElementById("tvstatic").style.opacity = "0%";

    document.getElementById("tvshowreel").classList.remove('tvframeanimation');
    void document.getElementById("tvshowreel").offsetWidth;
    document.getElementById("tvshowreel").classList.add('tvframeanimation');
    
  } else {
    document.getElementById("tvstatic").style.opacity = "100%";
    
    switchtv.classList.remove('tvframeanimation');
    void switchtv.offsetWidth;
    switchtv.classList.add('tvframeanimation');

  }
});


switchtv.addEventListener("click", function(){

})

function removeClass() {
  let a = document.getElementById("tvshowreel");
  let b = document.getElementById("tvstatic");

  a.classList.remove("tvframeanimation");
  b.classList.remove("tvframeanimation");
  void a.offsetWidth;
  
}
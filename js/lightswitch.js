//Code for switching switch img taken from https://www.youtube.com/watch?v=ydeQbbF9jbw&ab_channel=%23SmartCode

//Select image element
const switchimg = document.getElementById('switch');
//Listen for click
//toggle variable
let toggle = true;

switchimg.addEventListener('click', function(){
//toggle
toggle = !toggle;
if(toggle){
    switchimg.style.backgroundImage = "url('../imgs/lightswitch_off.png')";
}else{
    switchimg.style.backgroundImage = "url('../imgs/lightswitch_on.png')";
}

})
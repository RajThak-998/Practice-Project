for(var i=0;i<7;i++){
    document.querySelectorAll("button")[i].addEventListener("click",handleclick);
}

document.addEventListener("keydown",handlekey);
// document.querySelector("h1").addEventListener("click",function(){
//     alert("hehe");
// }) // for the click to be assigned there is no need to have a button.



function handlekey(event){
    makesound(event.key);
    buttonanimation(event.key);
}


function handleclick(){

    makesound(this.innerHTML);
    buttonanimation(this.innerHTML);
   
}



function makesound(key){
    var clicked = key;

    switch(clicked){
        case "w":
            var tom1= new Audio("sounds/tom-1.mp3");
            tom1.play();
            break;
        
        case "a":
            var tom2= new Audio("sounds/tom-2.mp3");
            tom2.play();
            // this.style.color="white";
            break;
        case "s":
            var tom3= new Audio("sounds/tom-3.mp3");
            tom3.play();
            // this.style.color="white";
            break;
        case "d":
            var tom4= new Audio("sounds/tom-4.mp3");
            tom4.play();
            // this.style.color="white";
            break;
        case "j":
            var snare= new Audio("sounds/snare.mp3");
            snare.play();
            // this.style.color="white";
            break;
        case "k":
            var crash= new Audio("sounds/crash.mp3");
            crash.play();
            // this.style.color="white";
            break;
        case "l":
            var kickbass= new Audio("sounds/kick-bass.mp3");
            kickbass.play();
            // this.style.color="white";
            break;

        default: alert("This key is not assigned");
        
    }
}


function buttonanimation(currentkey)
{
    document.querySelector("."+currentkey).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+currentkey).classList.remove("pressed"); 
    },300);
}

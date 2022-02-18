var buttons=['w','a','s','d','j','k','l'];
var sounds=[new Audio('./sounds/crash.mp3'),
new Audio('./sounds/kick-bass.mp3'),
new Audio('./sounds/snare.mp3'),
new Audio('./sounds/tom-1.mp3'),
new Audio('./sounds/tom-2.mp3'),
new Audio('./sounds/tom-3.mp3'),
new Audio('./sounds/tom-4.mp3'),
]
for(let i=0;i<buttons.length;i+=1){
    document.querySelector("."+buttons[i]).addEventListener("click",function(){
        sounds[i].play();
        buttonAnimation(buttons[i]);
    });
}
document.addEventListener('keydown',function(event) {
    for(let i =0;i<buttons.length;i++){
        if(event.key==buttons[i]){
            sounds[i].play();
            buttonAnimation(event.key);
        }
    }
 } );
function buttonAnimation(key){
    document.querySelector("."+key).classList.add("pressed");

    setTimeout(function(){
        document.querySelector("."+key).classList.remove("pressed");
    },100);
}
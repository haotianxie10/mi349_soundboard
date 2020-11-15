



document.getElementById("ApplauseButtom").onclick = function Applause(){
    var Applause = document.getElementById("Applause");
    Applause.play();

}

document.getElementById("CryButtom").onclick = function Cry(){
    var Cry = document.getElementById("Cry");
    Cry.play();
}

document.getElementById("CheeringButtom").onclick = function Cheering(){
    var Cheering = document.getElementById("Cheering");
    Cheering.play();   
}

var audios = document.getElementsByTagName("audio");
function pauseAll() {
       var self = this;
       [].forEach.call(audios, function(x) {
           x !== self && x.pause();
       })
   }
   [].forEach.call(audios, function(x) {
       x.addEventListener("play", pauseAll.bind(x));
   })

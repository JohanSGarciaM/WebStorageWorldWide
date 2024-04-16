function Prueba(){
    this.size = 3;
    let slide1 = document.getElementById("slide1");
    let slide2 = document.getElementById("slide2");
    let slide3 = document.getElementById("slide3");
    let slide4 = document.getElementById("slide4");
    let slide5 = document.getElementById("slide5");
    let cambio = document.getElementById("cambio");
    let cambio1 = document.getElementById("cambio1");
}
Prueba.prototype.getSize = function(){
    return this.size;
}

slide1.addEventListener('click',function(){
    cambio.style.opacity = 0.3;
    cambio1.style.transform = "translateY("+(200)+"px)";
    
});

prueba.addEventListener('click',function(){
    prueba.style.opacity = 0.3;
});
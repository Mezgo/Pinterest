moves = {
    initial: {
        x: null, y: null
    },
    actual: {
        x: null, y: null
    }
};

window.onscroll = () => {

    if (window.innerWidth > 375){
        if (window.pageYOffset >= 50){
            let fakeMenu = document.querySelector("#fakeHeader");
            fakeMenu.style.top = "0px";
            fakeMenu.style.position = "fixed";
            fakeMenu.style.opacity = "1";
        }else{
            let fakeMenu = document.querySelector("#fakeHeader");
            fakeMenu.style.top = "-50px";
            fakeMenu.style.position = "fixed";
            fakeMenu.style.opacity = "0";
        }
    }else{
        let content  = document.querySelector("#content");
        content.ontouchstart = function(e){
                
            moves.initial = {
                x: e.changedTouches[0].clientX, 
                y: e.changedTouches[0].clientY
            };
                
        }
        content.ontouchend = function(e){
            console.log(moves);
        }
        content.ontouchmove = function(e){
            moves.actual = {
                x: e.changedTouches[0].clientX,
                y: e.changedTouches[0].clientY
            };

            if ( (moves.actual.y - moves.initial.y) < 100){
                console.log("ENTRÓ");
                    
                //ocultar
                let searchbar = document.querySelector("#searchbar");
                searchbar.classList.add("hide");
                let footer = document.querySelector("footer");
                footer.classList.add("hide");
            }

            if ( (moves.actual.y - moves.initial.y)> 100){
                console.log('SE SALIO');

                //mostrar
                let searchbar= document.querySelector("#searchbar");
                searchbar.classList.remove("hide");
                let footer= document.querySelector("footer");
                footer.classList.remove("hide");
            }

        }
    }
}


var expandir = function(){
    var clone= this.cloneNode();
    clone.classList.remove("scale");
    
    var ib= document.getElementById("ib-img");
    ib.innerHTML="";
    ib.appendChild(clone);
    
    ib= document.getElementById("ib-back");
    ib.classList.add("show");
}

window.addEventListener("load",function(){
   var images= document.getElementsByClassName("scale");
    if(images.length>0){
        for (var img of images){
            img.addEventListener("click",expandir);
        }
    }
    
    document.getElementById("ib-back").addEventListener("click",function(){
        this.classList.remove("show");
    })
});
























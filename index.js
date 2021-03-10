
//get checkbox value
var checkbox = document.getElementById("checkbox-header-menu-button");

//addEventListener
checkbox.addEventListener("change", function(){
    
    var header = document.getElementById("header");

    if(checkbox.checked){
        header.style.background = "black";
        header.style.position = "fixed";
    }else{
        header.style.background = "transparent";
        header.style.position ="static";
    }
})
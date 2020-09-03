var x = window.matchMedia("(min-width: 421px)");
widthCheck(x)
x.addListener(widthCheck);

var y = window.matchMedia("(max-width: 420px)");
widthCheck2(y)
y.addListener(widthCheck2);

function menuHide() {
var x = document.getElementById("hide");
    if (x.style.display === "flex") {
        x.style.display = "none";
    }
            
    else{
        x.style.display = "flex";
    }          
}
    
function menuHide2() {
    var x = document.getElementById("hide_blog");
    if (x.style.display === "flex") {
        x.style.display = "none";
    }
    
    else{
        x.style.display = "flex";
    }          
}
    
//moving to larger display
function widthCheck(x) {
    var z = document.getElementById("hide");
    if (x.matches) {
        z.style.display = "flex";
    }

}        

//moving to smaller display
function widthCheck2(y) {
    var z = document.getElementById("hide");
    if (y.matches && z.style.display === "none") {
        menuHide()
    }
    if (y.matches && z.style.display === "flex") {
        z.style.display = "none";
    }
}
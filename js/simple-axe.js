
var simpleAxe = (function(speed){
    
    var image = document.querySelectorAll(".simple-axe img"),
        speed = .5;

    // Set image properties

    for (i = 0; i < image.length; i++) {

        image[i].style.position = "absolute";
        image[i].style.width = "100%";
        image[i].style.top = "0px";
        image[i].style.left = "0px";
        image[i].style.zIndex = "-9999";

    }

    // Do the magic when scrolling        

    window.addEventListener("scroll", function(){

        var scrollPosition = window.scrollY;
        for (i = 0; i < image.length; i++) {
            image[i].style.top = ( ( scrollPosition - image[i].parentElement.offsetTop ) * speed ) + "px";
        }
    });
    
})();
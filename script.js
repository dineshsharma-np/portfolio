let back_to_top = document.getElementById("back-to-top");

window.onscroll = function(){
    scrollFunction();
};

function scrollFunction(){
    if(document.body.scrollTop >800 || document.documentElement.scrollTop >800){
        back_to_top.style.display = "block";
    }
    else{
        back_to_top.style.display = "none";

    }
}

   //# NOrmal back to top
// function backToTop(){
//     document.body.scrollTop = 0;
//     document.documentElement.scrollTop = 0;
// }

//smooth scrolling
function backToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' // Smooth scrolling animation
    });
}

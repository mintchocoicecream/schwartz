const getHeader = document.getElementById("header");
const logo = document.getElementById("logo");
const media = document.getElementById("media");

function scrollFunction(){
    if (document.body.scrollTop > 5 || document.documentElement.scrollTop > 5) {
        getHeader.style.height = "18px";
        getHeader.style.transition = ".3s ease-in-out";
        getHeader.style.boxShadow = "0 .2em .3em rgb(216, 216, 216)";
        media.style.display = "none";
        logo.style.fontSize = ".4em";
        getHeader.style.alignItems = "center";
      } else {
        getHeader.style.height = "80px";
        getHeader.style.transition = ".3s ease-in-out";
        getHeader.style.boxShadow = "none";
        media.style.display = "block";
        logo.style.fontSize = "1em";
        getHeader.style.alignItems = "flex-start";
      }
}

window.onscroll = function() {scrollFunction()};
const btnMenu = document.querySelector("button.button-menu-toggle");
const ul = document.querySelector(".nav-links");

const showList = () => {
  ul.classList.toggle("nav-links-responsive");
}

const hideList = () => {
  ul.classList.remove("nav-links-responsive");
}

btnMenu.addEventListener("click", showList);
window.addEventListener("resize", hideList);
/* document.querySelector("button.button-menu-toggle")
    .addEventListener("click", function() {
           document.querySelector(".nav-links").
                      classList.toggle("nav-links-responsive")}) */





// FOR TOGGLE SIDERBAR MENU
function toggleBar() {
    document.querySelector(".sidebar__part").classList.toggle("active");
    document.querySelector(".header__part").classList.toggle("active");
    document.querySelector(".header__left").classList.toggle("active");
    document.querySelector(".banner__part").classList.toggle("active");
    document.querySelector(".main").classList.toggle("active");
} 


let crossBtn = document.querySelector(".cross-btn");
let sideBar = document.querySelector(".sidebar__part");

crossBtn.addEventListener('click', function(){
    sideBar.style.left = "-220px";
});
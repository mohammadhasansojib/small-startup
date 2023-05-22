let openBtn = document.querySelector('.fa-bars');
let closeBtn = document.querySelector('.fa-xmark');

let menuBar = document.querySelector('.menu-bar');




openBtn.addEventListener('click', ()=>{
    openBtn.classList.toggle("hide");
    closeBtn.classList.toggle("hide");
    menuBar.classList.toggle("menu-bar-toggle");

})

closeBtn.addEventListener('click', ()=>{
    closeBtn.classList.toggle("hide");
    openBtn.classList.toggle("hide");
    menuBar.classList.toggle("menu-bar-toggle");
})

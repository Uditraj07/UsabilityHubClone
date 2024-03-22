let navBar=document.querySelector(".nav-bar");
let navLinks=document.getElementById("nav-links")
navBar.addEventListener("click",(e)=>{
    e.preventDefault();
    let res=navLinks.style.left
    if(res==='0px'){
        navBar.firstElementChild.remove();
        navBar.innerHTML='<i class="fa-solid fa-bars"></i>';
        navLinks.style.left='-100%'
    }
    else{
        navBar.firstElementChild.remove();
        navBar.innerHTML='<i class="fa-solid fa-xmark"></i>';
        navLinks.style.left='0'
    }
})
const date= (document.getElementById('date').innerHTML= new Date().getFullYear());

const navBtn = document.getElementById('nav-btn');
const navBar = document.getElementById('navbars');
const closeIcon = document.getElementById('close-icon');

navBtn.addEventListener("click", ()=>{
    navBar.classList.add('showNav');
});

closeIcon.addEventListener("click", ()=> {
    navBar.classList.remove("showNav");
})
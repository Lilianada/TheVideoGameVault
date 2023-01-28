// function toggleMenu() {
//     const toggle = document.querySelector('.nav-toggle');
//     const nav = document.querySelector('.navbar');
//     toggle.classList.toggle('change');
//     nav.classList.toggle('active');
// }


function toggleMenu(){
    showMenu('nav-toggle','navbar')
    document.querySelector("nav-toggle").classList.toggle("change") 
}

const showMenu =(toggleId, navId) =>{
    const toggle = document.querySelector(toggleId),
    nav = document.querySelector(navId)
    
    if(toggle && nav){
        nav.classList.toggle('active')
        }
    }
showMenu('nav-toggle','navbar')
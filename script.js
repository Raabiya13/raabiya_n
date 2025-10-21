window.addEventListener('load', () => {
  document.getElementById('shape1').classList.add('animate');
});


const hamburger=document.querySelector(".hamburger");

const navMenu =document.querySelector("#nav-part2");


hamburger.addEventListener("click",()=>{
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
})

document.querySelectorAll(".nav-link").forEach(
    n=> n.addEventListener("click",()=>{
        hamburger.classList.remove("active");
        navMenu.classList.remove("active");
    }))

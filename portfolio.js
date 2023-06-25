var spans = Array.from(document.getElementsByClassName('word'));
var currentIndex = 0;
var intervalId;

function showNextSpan() {
    var previousIndex = (currentIndex === 0) ? spans.length - 1 : currentIndex - 1;
    spans[previousIndex].style.display = 'none';
    spans[currentIndex].style.display = 'inline';
    currentIndex = (currentIndex + 1) % spans.length;
   spans[ currentIndex].style.opacity=".6";


}

intervalId = setInterval(showNextSpan, 1000);


// ------------- circle skill--------------------------------------

const circles = document.querySelectorAll(".circle");
circles.forEach(elem=>{
    var dots = elem.getAttribute('data-dots');
    var marked = elem.getAttribute('data-percent');
    var percent = Math.floor(dots*marked / 100);
    var points ="";
    var rotate = 360 / dots;
for (let i = 0; i < dots ; i++) {
    points += `<div class="points" style="--i:${i};--rot:${rotate}deg"> </div> `;
}
elem.innerHTML=points;


const pointsMarked = elem.querySelectorAll(".points");
for (let i = 0; i < percent; i++) {
pointsMarked[i].classList.add('marked')    
}

})


// -------  creating mixup--------------------------------------------------------------------

var mixer = mixitup('.portfoli-gallery');


// -------  active menu----------------------------------------------------------------------------

let menuLi = document.querySelectorAll('header ul li a');
let section = document.querySelectorAll('section');


function activeMenu(){
    let len = section.length;
    while(--len && window.scrollY + 97 < section[len].offsetTop){}
    menuLi.forEach(sec=> sec.classList.remove("active"))
    menuLi[len].classList.add("active");
}


activeMenu();
window.addEventListener("scroll",activeMenu);

// -------  skticy menu----------------------------------------------------------------------------
const header = document.querySelector("header");
window.addEventListener("scroll",function(){
    header.classList.toggle("sticky" , window.scrollY > 50)
})


// -------  toggle icon nav menu------------------------------------------------------------------------
 let menuIcon = document.querySelector("#menu-icon");
 let navlist = document.querySelector(".navlist");
 menuIcon.onclick=()=>{
    menuIcon.classList.toggle("bx-x");
    navlist.classList.toggle("open");
 };

 window.onscroll=()=>{
    menuIcon.classList.remove("bx-x");
    navlist.classList.remove("open");
 }; 


 // -------  scrool animation------------------------------------------------------------------------

 const observer = new IntersectionObserver((entries)=>{
    entries.forEach((entry)=>{
        if(entry.isIntersecting){
            entry.target.classList.add("show-items");

        } 
        else{
            entry.target.classList.remove("show-items");
        }
    });
 });

 const scrollScale = document.querySelectorAll(".scroll-scale");
 scrollScale.forEach((el)=>observer.observe(el));

 const scrollBottom = document.querySelectorAll(".scroll-bottom");
 scrollBottom.forEach((el)=>observer.observe(el));

 const scrollTop = document.querySelectorAll(".scroll-top");
 scrollTop.forEach((el)=>observer.observe(el));

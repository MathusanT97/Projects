//movement animation

const card = document.querySelector(".card");
const container = document.querySelector(".container");
//items
const weed = document.querySelector(".weed img")
const title =document.querySelector(".title")
const info = document.querySelector(".info h3")
//moving animantion event
container.addEventListener('mousemove', (e) => {
    let xAxis = (window.innerWidth / 2 - e.pageX)/ 40;
    let yAxis = (window.innerHeight / 2 - e.pageY)/ 40;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`
    
});

//Animate In
container.addEventListener("mouseenter", (e) => {
    card.style.transition = "none";
    //Popout
    title.style.transform = "translateZ(150px)"
    weed.style.transform= "translateZ(150px)"
    info.style.transform= "translateZ(150px)"


} );
//Animate Out
container.addEventListener("mouseleave", (e) => {
    card.style.transition = "all 0.5s ease";
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    //Popback
    title.style.transform = "translateZ(0px)"
    weed.style.transform= "translateZ(0px)"
    info.style.transform= "translateZ(0px)"

} );
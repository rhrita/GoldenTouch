// =========================
// BOOKING FORM
// =========================

const bookingForm = document.getElementById("bookingForm");

if (bookingForm) {

bookingForm.addEventListener("submit", function(event){

event.preventDefault();

const name = document.getElementById("name").value;

alert("Thank you " + name + "! Your booking request has been received.");

bookingForm.reset();

});

}

// =========================
// SMOOTH SCROLL
// =========================

document.querySelectorAll("nav a").forEach(link => {

link.addEventListener("click", function(e){

e.preventDefault();

const target = document.querySelector(this.getAttribute("href"));

target.scrollIntoView({

behavior:"smooth"

});

});

});

// =========================
// FADE IN ANIMATION
// =========================

const sections = document.querySelectorAll("section");

const observer = new IntersectionObserver(entries=>{

entries.forEach(entry=>{

if(entry.isIntersecting){

entry.target.style.opacity="1";

entry.target.style.transform="translateY(0px)";

}

});

});

sections.forEach(section=>{

section.style.opacity="0";

section.style.transform="translateY(40px)";

section.style.transition="1s";

observer.observe(section);

});

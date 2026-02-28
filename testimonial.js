document.addEventListener("DOMContentLoaded", function(){

const testimonials = document.querySelectorAll(".testimonial");
const slider = document.querySelector(".testimonial-slider");

if(testimonials.length === 0) return;

let index = 0;
let interval;

function showTestimonial(newIndex){
    testimonials[index].classList.remove("active");
    index = newIndex;
    testimonials[index].classList.add("active");
}

function nextTestimonial(){
    let newIndex = (index + 1) % testimonials.length;
    showTestimonial(newIndex);
}

function startSlider(){
    interval = setInterval(nextTestimonial, 3000);
}

function stopSlider(){
    clearInterval(interval);
}

startSlider();

if(slider){
slider.addEventListener("mouseenter", stopSlider);
slider.addEventListener("mouseleave", startSlider);
}

});

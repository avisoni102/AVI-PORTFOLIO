document.addEventListener("DOMContentLoaded", function(){

const testimonials = document.querySelectorAll(".testimonial");

if(testimonials.length === 0) return;

let index = 0;

setInterval(function(){
    testimonials[index].classList.remove("active");
    index = (index + 1) % testimonials.length;
    testimonials[index].classList.add("active");
}, 3000);

});

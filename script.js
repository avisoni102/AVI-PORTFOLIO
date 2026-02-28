// Typing Effect
const text = "Avi Soni";
let index = 0;
function typeEffect() {
    if (index < text.length) {
        document.getElementById("typing").innerHTML += text.charAt(index);
        index++;
        setTimeout(typeEffect, 100);
    }
}
typeEffect();

// Dark Light Toggle
document.getElementById("themeToggle").onclick = function(){
    document.body.classList.toggle("light");
}

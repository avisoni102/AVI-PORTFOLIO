let index = 0;
const feedbacks = document.querySelectorAll(".feedback");

function showFeedback() {
    feedbacks.forEach(f => f.classList.remove("active"));
    index++;
    if (index > feedbacks.length) { index = 1 }
    feedbacks[index - 1].classList.add("active");
}

setInterval(showFeedback, 3000);

document.addEventListener("DOMContentLoaded", () => {
    const text = "Cafe Para Todos";
    const title = document.querySelector("h1");
    let i = 0;

    function type() {
        if (i < text.length) {
            title.textContent += text.charAt(i);
            i++;
            setTimeout(type, 100);
        }
    }

    title.textContent = "";
    type ()
});

const fadeElements = document.querySelectorAll(".Cafe-1");

function checkFade() {
    const triggerBottom = window.innerHeight * 0.8;
    fadeElements.forEach(el => {
        const boxTop = el.getBoundingClientRect().top;
        if (boxTop < triggerBottom) {
            el.classList.add("show");
        } else {
            el.classList.remove("show");
        }
    });
}

WebTransportBidirectionalStream.addEventListener("scroll", checkFade);
checkFade();
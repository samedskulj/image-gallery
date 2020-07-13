const modal = document.querySelector(".modal");
const previous = document.querySelectorAll(".gallery img");
const original = document.querySelector(".full-img");
const imgText = document.querySelector(".caption");

previous.forEach(preview => {
    preview.addEventListener("click", () => {
        modal.classList.add("open");
        original.classList.add("open");
        //Promjena texta i slike
        const originalSrc = preview.getAttribute("data-original");
        original.src = `./full/${originalSrc}`;
        const altText = preview.alt;
        imgText.textContent = altText;
    });
});

modal.addEventListener("click", (e) => {
    if(e.target.classList.contains("modal")) {
        modal.classList.remove("open");
        original.classList.remove("open");
    }
})
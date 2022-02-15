const form = document.forms.send;
const divSend = document.querySelector(".send-form");
const inputHouse = form.elements.house;
const closeButton = document.querySelector(".close");
const submitButton = form.elements.sub;
const h3house = form.querySelector(".send-form-house");


const section = document.querySelector(".house-price");

section.addEventListener("click", call = (e) => {
    e.preventDefault()
    if (e.target.className == "chill-button" || e.target.className == "text-chill-button") {
        const parent = e.target.closest(".house-price-info");
        const title = parent.querySelector(".house-price-info-title");
        const titleValue = title.querySelector("p").innerHTML;
        divSend.classList.add("animate-send-form");
        h3house.innerHTML = "Выбран: " + titleValue;
        inputHouse.value = titleValue;
        console.log(titleValue);
    }
})

closeButton.addEventListener("click", call = (e) => {
    divSend.classList.remove("animate-send-form");
})
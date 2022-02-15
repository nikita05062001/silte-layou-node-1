const header = document.querySelector(".header");
const services = document.querySelector(".house-features");
services.setAttribute("name", "services");
const scrollEl = document.querySelector(".scroll-element");
const navEl = document.querySelector(".nav-list");
const navElA = navEl.querySelectorAll("a");


const housePrice = document.querySelector(".house-price-prewiev");
housePrice.setAttribute("name", "price");

const showplace = document.querySelector(".showplace");
showplace.setAttribute("name", "showplace");

const comments = document.querySelector(".comments");
comments.setAttribute("name", "comments");

const geolocation = document.querySelector(".geolocation");
geolocation.setAttribute("name", "geolocation");



function scrollCheck(element) {
    let elementH = element.getBoundingClientRect().top + window.pageYOffset - 1;
    if (window.pageYOffset >= elementH)
        scrollEl.classList.add("display-show");
    else {
        scrollEl.classList.remove("display-show");
    }
}

window.addEventListener('scroll', function () {
    scrollCheck(services);
});

document.body.addEventListener("click", call = (e) => {
    if (e.target.classList.contains("clicker"))
        Scrolling(housePrice);
})

scrollEl.addEventListener("click", function () {
    document.body.scrollIntoView({
        behavior: "smooth"
    });
    let header = document.querySelector(".header-content");
    burgerButton.classList.remove("_active");
    header.classList.remove("_active");
    scrollEl.classList.remove("_active");
})

for (let i = 0; i < navElA.length; i++) {
    navElA[i].addEventListener("click", (e) => {
        const elementScroll = document.getElementsByName(`${e.target.id}`)[0];
        Scrolling(elementScroll);
        let header = document.querySelector(".header-content");
        burgerButton.classList.remove("_active");
        header.classList.remove("_active");
        scrollEl.classList.remove("_active");
    });
}

function Scrolling(el) {
    let header = document.querySelector(".header-content");
    let headerH
    if (window.innerWidth < 1340)
        headerH = header.offsetHeight;
    else
        headerH = 0;
    let elementH = el.getBoundingClientRect().top + window.pageYOffset - headerH;
    window.scrollTo({
        top: elementH,
        behavior: "smooth"
    })
}

let burgerButton = document.querySelector(".burger");
burgerButton.addEventListener("click", (e) => {
    let header = document.querySelector(".header-content");
    burgerButton.classList.toggle("_active");
    header.classList.toggle("_active");
    scrollEl.classList.toggle("_active");
});
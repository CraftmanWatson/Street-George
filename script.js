const navBtn = document.querySelector(".nav-btn");
const navScreen = document.querySelector(".nav-screen");
const homeScreen = document.querySelector(".hero");
const aboutScreen = document.querySelector(".about");
const catalogueScreen = document.querySelector(".catalogue");
const testimonialScreen = document.querySelector(".testimonial");
const contactScreen = document.querySelector(".footer");

const homeBtn = document.querySelector(".home-btn");
const homeBtn2 = document.querySelector(".logo")
const aboutBtn = document.querySelector(".about-btn");
const aboutBtn2 = document.querySelector(".hero-cta");
const catalogueBtn = document.querySelector(".catalogue-btn");
const testimonialBtn = document.querySelector(".testimonial-btn");
const contactBtn = document.querySelector(".contact-btn");


const toCatalog1 = document.querySelector(".catalogue-card1");
const toCatalog2 = document.querySelector(".catalogue-card2");
const toCatalog3 = document.querySelector(".catalogue-card3");
const toCatalog4 = document.querySelector(".catalogue-card4");
const toCatalog5 = document.querySelector(".catalogue-card5");

const toInsta = document.querySelector(".insta-cta");
const toFb = document.querySelector(".fb-cta");

navBtn.addEventListener("click", function () {
    navScreen.classList.toggle("active");
    navBtn.classList.toggle("cross");
});


homeBtn.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
homeBtn2.addEventListener("click", function() {
    homeScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

aboutBtn.addEventListener("click", function() {
    aboutScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});
aboutBtn2.addEventListener("click", function() {
    aboutScreen.scrollIntoView({behavior: "smooth"});
});

catalogueBtn.addEventListener("click", function() {
    catalogueScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});


testimonialBtn.addEventListener("click", function() {
    testimonialScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});


contactBtn.addEventListener("click", function() {
    contactScreen.scrollIntoView({behavior: "smooth"});
    navBtn.classList.remove("cross");
    navScreen.classList.remove("active");
});

toCatalog1.addEventListener("click", function() {
    window.location.href = "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fmarketplace%2Fprofile%2F100000148310039%2F%3Fref%3Dpermalink%26tab%3Dlistings%26mibextid%3D6ojiHh%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUDzQr8bkbMuCrk90fSz9RLwRQTWlGuRN6STc46HD2lzrJ8JmzpM0FP3g0UkjzW_s3GTMQpZrRxuomrXMGGR3R8Dr74jX_kA4xrUQ00T5jghuQybA8FDfbpuxUBi2Rroufbhtl0O7TPmAZqmunXdKxw";
});
toCatalog2.addEventListener("click", function() {
    window.location.href = "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fmarketplace%2Fprofile%2F100000148310039%2F%3Fref%3Dpermalink%26tab%3Dlistings%26mibextid%3D6ojiHh%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUDzQr8bkbMuCrk90fSz9RLwRQTWlGuRN6STc46HD2lzrJ8JmzpM0FP3g0UkjzW_s3GTMQpZrRxuomrXMGGR3R8Dr74jX_kA4xrUQ00T5jghuQybA8FDfbpuxUBi2Rroufbhtl0O7TPmAZqmunXdKxw";
});
toCatalog3.addEventListener("click", function() {
    window.location.href = "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fmarketplace%2Fprofile%2F100000148310039%2F%3Fref%3Dpermalink%26tab%3Dlistings%26mibextid%3D6ojiHh%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUDzQr8bkbMuCrk90fSz9RLwRQTWlGuRN6STc46HD2lzrJ8JmzpM0FP3g0UkjzW_s3GTMQpZrRxuomrXMGGR3R8Dr74jX_kA4xrUQ00T5jghuQybA8FDfbpuxUBi2Rroufbhtl0O7TPmAZqmunXdKxw";
});
toCatalog4.addEventListener("click", function() {
    window.location.href = "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fmarketplace%2Fprofile%2F100000148310039%2F%3Fref%3Dpermalink%26tab%3Dlistings%26mibextid%3D6ojiHh%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUDzQr8bkbMuCrk90fSz9RLwRQTWlGuRN6STc46HD2lzrJ8JmzpM0FP3g0UkjzW_s3GTMQpZrRxuomrXMGGR3R8Dr74jX_kA4xrUQ00T5jghuQybA8FDfbpuxUBi2Rroufbhtl0O7TPmAZqmunXdKxw";
});
toCatalog5.addEventListener("click", function() {
    window.location.href = "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fmarketplace%2Fprofile%2F100000148310039%2F%3Fref%3Dpermalink%26tab%3Dlistings%26mibextid%3D6ojiHh%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUDzQr8bkbMuCrk90fSz9RLwRQTWlGuRN6STc46HD2lzrJ8JmzpM0FP3g0UkjzW_s3GTMQpZrRxuomrXMGGR3R8Dr74jX_kA4xrUQ00T5jghuQybA8FDfbpuxUBi2Rroufbhtl0O7TPmAZqmunXdKxw";
});

toInsta.addEventListener("click", function() {
    window.location.href = "https://www.instagram.com/stgeorgeliquidations?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw==";
});
toFb.addEventListener("click", function() {
    window.location.href = "https://l.instagram.com/?u=https%3A%2F%2Fwww.facebook.com%2Fmarketplace%2Fprofile%2F100000148310039%2F%3Fref%3Dpermalink%26tab%3Dlistings%26mibextid%3D6ojiHh%26utm_source%3Dig%26utm_medium%3Dsocial%26utm_content%3Dlink_in_bio&e=AUDzQr8bkbMuCrk90fSz9RLwRQTWlGuRN6STc46HD2lzrJ8JmzpM0FP3g0UkjzW_s3GTMQpZrRxuomrXMGGR3R8Dr74jX_kA4xrUQ00T5jghuQybA8FDfbpuxUBi2Rroufbhtl0O7TPmAZqmunXdKxw";
});



const sliders = document.querySelectorAll(
    '.catalogue-cards-group, .testimonial-cards-group, .catalogue-aisles-cards-group'
);

sliders.forEach((slider) => {
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
        isDown = true;
        startX = e.pageX - slider.offsetLeft;
        scrollLeft = slider.scrollLeft;
    });

    slider.addEventListener('mouseleave', () => {
        isDown = false;
    });

    slider.addEventListener('mouseup', () => {
        isDown = false;
    });

    slider.addEventListener('mousemove', (e) => {
        if (!isDown) return;
        e.preventDefault();
        const x = e.pageX - slider.offsetLeft;
        const walk = (x - startX) * 1; 
        slider.scrollLeft = scrollLeft - walk;
    });
});
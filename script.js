const slidesContainer = document.querySelector(".slides-container");
// const modalContainer = document.querySelector(".modal-container")
const slides = document.querySelectorAll(".slide");
const mainImage = document.querySelectorAll(".main-image");
const prevBtn = document.querySelector("#prevBtn");
const nextBtn = document.querySelector("#nextBtn");
const items = document.querySelectorAll(".item");
const imgIndex = document.querySelectorAll(".img-index");
const nextSlick = document.querySelector(".slick-next.slick-arrow");
// const bottomImage = document.querySelectorAll(".bottom-image")

// const modalWith = mainImage[0].clientWidth;

const slideWidth = slides[0].clientWidth;
let index = 0;

slidesContainer.insertAdjacentHTML('afterbegin',
    slides[slides.length - 1].outerHTML);

slidesContainer.insertAdjacentHTML('beforeend',
    slides[0].outerHTML);

slidesContainer.style.transform = `translateX(${-slideWidth}px)`;

// modalContainer.insertAdjacentHTML('afterbegin',
//     mainImage[mainImage.length - 1].outerHTML);

// modalContainer.insertAdjacentHTML('beforeend',
//     mainImage[0].outerHTML);

// modalContainer.style.transform = `translateX(${-modalWith}px)`;


nextBtn.addEventListener("click", () => {
    slidesContainer.style.transition = "all 0.3s ease-in-out";

    index++;
    slidesContainer.style.transform = `translateX(${
        -slideWidth * (index + 1)}px)`;

    items.forEach((item) => item.classList.remove("active"));

    if (index > slides.length - 1 && mainImage.length - 1) {
        setTimeout(() => {
            index = 0;
            slidesContainer.style.transform = `translateX(${-slideWidth}px)`;
            items[index].classList.add("active");
            slidesContainer.style.transition = "none";
        }, 300)
    } else {
        items[index].classList.add("active");
    }
});



nextSlick.addEventListener("click", () => {
    alert("hello");
});



prevBtn.addEventListener("click", () => {
    slidesContainer.style.transition = "all 0.3s ease-in-out";

    index--;
    slidesContainer.style.transform = `translateX(${
        -slideWidth * (index + 1)
    }px)`;

    items.forEach((item) => item.classList.remove("active"));


    if (index < 0) {
        setTimeout(() => {
            index = slides.length - 1;
            slidesContainer.style.transform = `translateX(${
                -slideWidth * (index + 1)}px)`;
            items[index].classList.add("active");
            slidesContainer.style.transition = "none";
        }, 300)
    } else {
        items[index].classList.add("active");
    }
});

items.forEach((item, img) => {
    item.addEventListener("click", () => {
        items.forEach((item) => item.classList.remove("active"));
        index = img;
        item.classList.add("active");
        slidesContainer.style.transition = "all 0.3s ease-in-out";

        item.classList.add("active");
        slidesContainer.style.transform = `translateX(${
            -slideWidth * (index + 1)}px)`;
    });
});

imgIndex.forEach((item) => {
    item.addEventListener("click", () => {
        imgIndex.forEach((item) => item.classList.remove("active"));
        item.classList.add("active");
    });
});

let images = ["./images/img1.jpg", "./images/img2.jpg", "./images/img3.jpg", "./images/img4.jpg", "./images/img5.jpg"];
let index = 0;

let slide = document.getElementById("slide");
let next = document.getElementById("next");
let prev = document.getElementById("prev");

function showImage() {
    slide.src = images[index];
}

next.onclick = function () {
    index++;
    if (index >= images.length) index = 0;
    showImage();
};

prev.onclick = function () {
    index--;
    if (index < 0) index = images.length - 1;
    showImage();
};

setInterval(function () {
    next.click();
}, 3000);

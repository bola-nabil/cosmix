let headerSection = document.getElementsByTagName("header")[0];
let homeSection = document.getElementsByClassName("home")[0];
let homeImgs = [
  'url("./imgs/home-page/meeting-1.png")',
  'url("./imgs/home-page/meeting-2.png")',
  'url("./imgs/home-page/meeting-3.png")',
];
let homeArrows = document.getElementsByClassName("arrows")[0];
let navLinks = document.querySelectorAll("nav ul li a");

addEventListener("scroll", () => {
  if (window.scrollY > 290) {
    headerSection.style.backgroundColor = "black";
  } else {
    headerSection.style.backgroundColor = "transparent";
  }
});

let currentIndex = 0;
let intervalId;
let isHovered = false;

function changeBackgroundImage() {
  if (!isHovered) {
    homeSection.style.backgroundImage = homeImgs[currentIndex];
    currentIndex = (currentIndex + 1) % homeImgs.length;
  }
}

function changeArrows() {
  if (!isHovered) {
    homeArrows.style.display = "none";
  } else {
    homeArrows.style.display = "block";
  }
}

changeBackgroundImage();

intervalId = setInterval(changeBackgroundImage, 3500);
intervalId = setInterval(changeArrows, 100);

homeSection.addEventListener("mouseenter", () => {
  isHovered = true;
});

homeSection.addEventListener("mouseleave", () => {
  isHovered = false;
});

function arrows() {
  homeSection.style.backgroundImage = homeImgs[currentIndex];
}

const nextButton = document.getElementsByClassName("right__arrows")[0];
nextButton.addEventListener("click", () => {
  nextButton.style.color = "black";
  prevButton.style.color = "white";
  currentIndex = (currentIndex + 1) % homeImgs.length; // Update index to the next image
  arrows();
});

const prevButton = document.getElementsByClassName("left__arrows")[0];
prevButton.addEventListener("click", () => {
  nextButton.style.color = "white";
  prevButton.style.color = "black";
  currentIndex = (currentIndex - 1 + homeImgs.length) % homeImgs.length; // Update index to the next image
  arrows();
});

navLinks.forEach((link) => {
  link.addEventListener("click", function () {
    navLinks.forEach((l) => l.classList.remove("active"));
    this.classList.add("active");
  });
});

// features
let myBtns = document.querySelectorAll(".features__icons ul li a");
let myBox = document.querySelectorAll(".content__box");
let myImage = document.querySelectorAll(".features__image");
let iconFeatures = document.querySelectorAll(".features__icons ul li a");

function activateFirstContent() {
  myBox[0].classList.add("click-active");
  myBtns[0].classList.add("active-border");
}

myBtns.forEach((btn) => {
  btn.addEventListener("click", function (event) {
    event.preventDefault();
    myBtns.forEach((b) => b.classList.remove("active-border"));
    this.classList.add("active-border");

    const targetId = this.getAttribute("data-target");

    myBox.forEach((box) => box.classList.remove("click-active"));

    const targetBox = document.getElementById(targetId);

    targetBox.classList.add("click-active");
  });
});

activateFirstContent();

// portfolio
let myLinks = document.querySelectorAll(".portfolio__links ul li a");
let portfolioImgs = document.querySelectorAll(
  ".portfolio-content .portfolio-images"
);

function activateFirstImages() {
  myLinks[0].classList.add("one");
  portfolioImgs[0].classList.add("show");
}

myLinks.forEach((link) => {
  link.addEventListener("click", function (event) {
    event.preventDefault();
    myLinks.forEach((l) => l.classList.remove("one"));
    this.classList.add("one");

    const targetId = this.getAttribute("data-target");

    portfolioImgs.forEach((img) => img.classList.remove("show"));

    const targetBox = document.getElementById(targetId);
    console.log(targetBox);

    targetBox.classList.add("show");
  });
});

activateFirstImages();

// team

let boxOne = document.getElementById("box-1");
let boxTwo = document.getElementById("box-2");
let boxThree = document.getElementById("box-3");

let bolltOne = document.getElementById("bollt-1");
let bolltTwo = document.getElementById("bollt-2");
let bolltThree = document.getElementById("bollt-3");

function showBoxs() {
  boxOne.style.display = "none";
  boxTwo.style.display = "none";
  boxThree.style.display = "none";

  setTimeout(() => {
    boxOne.style.display = "block";
    bolltOne.style.backgroundColor = "black";
    bolltThree.style.backgroundColor = "#e73131";
  }, 0);

  setTimeout(() => {
    boxTwo.style.display = "block";
    boxOne.style.display = "none";
    bolltTwo.style.backgroundColor = "black";
    bolltOne.style.backgroundColor = "#e73131";
  }, 3000);

  setTimeout(() => {
    boxThree.style.display = "block";
    boxTwo.style.display = "none";
    bolltThree.style.backgroundColor = "black";
    bolltTwo.style.backgroundColor = "#e73131";
  }, 6000);
}

function showRepeatBoxs() {
  showBoxs();
  setInterval(showBoxs, 9000);
}
showRepeatBoxs();

let currentYear = document.getElementById("footer-year");
currentYear.textContent = new Date().getFullYear();

const linksHeader = document.querySelectorAll("nav ul")[0];
let barIcon = document.getElementById("bars");

window.addEventListener("resize", () => {
  const viewportWidth = window.innerWidth;
  if (viewportWidth <= 852) {
    linksHeader.style.display = "none";
  }
});

barIcon.addEventListener("click", function () {
  if (linksHeader.style.display === "none") {
    linksHeader.style.display = "block";
  } else {
    linksHeader.style.display = "none";
  }
});

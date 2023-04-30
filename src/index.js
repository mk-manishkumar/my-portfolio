const resume = document.querySelector(".resume");
let iconDark = document.getElementById("icon-1");
let iconLight = document.getElementById("icon-2");
let icons = document.querySelectorAll(".icons");
const scrollUp = document.getElementById("scrollUp");

// after clicking resume button
resume.addEventListener("click", () => alert("Will Upload soon"));

// for dark/light theme
icons.forEach((icon) => {
  icon.addEventListener("click", () => {
    document.body.classList.toggle("dark-theme");
    if (document.body.classList.contains("dark-theme")) {
      iconDark.style.display = "none";
      iconLight.style.display = "block";
    } else {
      iconDark.style.display = "block";
      iconLight.style.display = "none";
    }
  });
});

// for scrollup
scrollUp.addEventListener("click", () => {
  window.scrollTo({
    top: 0,
    behavior: "smooth",
  });
});

// myName
let myName = document.getElementById("myName");
let chars = myName.innerHTML.split("");
myName.innerHTML = "";

for (let i = 0; i < chars.length; i++) {
  myName.innerHTML += "<span>" + chars[i] + "</span>";
}

let spans = myName.getElementsByTagName("span");
let delay = 50;
let interval = 1000;

function animate() {
  for (let i = 0; i < spans.length; i++) {
    setTimeout(function () {
      spans[i].style.opacity = "1";
    }, delay * i);
  }

  setTimeout(function () {
    for (let i = 0; i < spans.length; i++) {
      setTimeout(function () {
        spans[i].style.opacity = "0";
      }, delay * i);
    }
  }, interval);
}

animate();
setInterval(animate, interval * 2);

// Hamburger
const hamburger = document.querySelector(".hamburger");
const nav = document.querySelector(".nav");

hamburger.addEventListener("click", () => {
  hamburger.classList.toggle("active");
  nav.classList.toggle("active");
});

document.querySelectorAll(".nav a").forEach((n) =>
  n.addEventListener("click", () => {
    hamburger.classList.remove("active");
    nav.classList.remove("active");
  })
);

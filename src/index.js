const resume = document.querySelector(".resume");
let iconDark = document.getElementById("icon-1");
let iconLight = document.getElementById("icon-2");
let icons = document.querySelectorAll(".icons");
const scrollUp = document.getElementById("scrollUp");

// after clicking resume button
resume.addEventListener("click", () => {
  window.open("https://drive.google.com/file/d/1M0-YgixEayxSouphODpe76MqoWNN4cRv/view?usp=sharing", "_blank");
});

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

// Generate a unique ID

function generateUUID() {
  return "xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
    var r = (Math.random() * 16) | 0,
      v = c == "x" ? r : (r & 0x3) | 0x8;
    return v.toString(16);
  });
}

const userId = generateUUID();

// for sending email

document.addEventListener("DOMContentLoaded", () => {
  document.getElementById("sendMessage").addEventListener("click", (event) => {
    event.preventDefault();

    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const subject = document.getElementById("subject").value;
    const message = document.getElementById("message").value;

    if (name && email && subject && message) {
      emailjs
        .send("myService_test1", "template_ob04hza", {
          from_name: name,
          from_email: email,
          subject: subject,
          message: message,
        })
        .then(
          (response) => {
            alert("Message sent successfully!");
          },
          (error) => {
            alert("Failed to send message. Please try again later.");
          }
        );
    } else {
      alert("Please fill out all required fields.");
    }
  });
});

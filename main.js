document.querySelector("html").addEventListener("click", () => {
    alert("Ouch! Stop poking me!");
});


let myImage = document.querySelector("img");

myImage.onclick = () => {
const mySrc = myImage.getAttribute("src");
if (mySrc === "images/firefox-icon.png") {
    myImage.setAttribute("src", "images/firefox2.png");
} else {
    myImage.setAttribute("src", "images/firefox-icon.png");
}
};

let myButton = document.querySelector("button");
let myHeading = document.querySelector("h1");

function setUserName() {
    const myName = prompt("Please enter your name.");
    if (!myName) {
    setUserName();
    } else {
    localStorage.setItem("name", myName);
    myHeading.textContent = `Uriah Bileri Banawoye, ${myName}`;
    }
}

if (!localStorage.getItem("name")) {
    setUserName();
} else {
    const storedName = localStorage.getItem("name");
    myHeading.textContent = `Uriah Bileri Banawoye, ${storedName}`;
}

myButton.onclick = () => {
    setUserName();
};


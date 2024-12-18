// ts1
document.title = "Аскапов Арлан";
// ts2
const headerElement = document.getElementById("header");
const h1Element = headerElement.querySelector("h1");
h1Element.textContent = "Изучение JavaScript";
// ts3
const menuLinks = document.querySelectorAll(".menu-link");
console.log(menuLinks[0].textContent); 
console.log(menuLinks[1].textContent); 
console.log(menuLinks[2].textContent); 
// ts4
const featureItems = document.querySelectorAll(".features-list li");
featureItems[1].innerHTML = "Поддержка <b>API</b>"
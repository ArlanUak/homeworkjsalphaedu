// 1 ts
const getInfo = document.getElementById("info");
const ulElement = document.createElement("ul");
const li1 = document.createElement("li");
li1.textContent= "Введение в DOM";

const li2 = document.createElement("li");
li2.textContent= "Создание элементов";

const li3 = document.createElement("li");
li3.textContent= "Изменение атрибутов";

ulElement.appendChild(li1);
ulElement.appendChild(li2);
ulElement.appendChild(li3);

getInfo.appendChild(ulElement);

// 2 ts 
const headerGet = document.getElementById("header");
const aElement = document.createElement("a");
aElement.textContent="My profile in VK)";
aElement.href = "https://vk.com/uakuk";
aElement.target = "_blank";
headerGet.appendChild(aElement);

// 3 ts
const getMain = document.getElementById("main");

const sectionElement = document.createElement("section");
sectionElement.className = "dynamic";

const heading = document.createElement("h2");
heading.textContent = "Обучение JavaScript";

const paragraph = document.createElement("p");
paragraph.textContent = "Динамическое создание элементов позволяет улучшить интерфейс пользователя";

sectionElement.appendChild(heading);
sectionElement.appendChild(paragraph);

getMain.prepend(sectionElement);

// 4 ts
const firstP = getInfo.querySelector("p");
getInfo.removeChild(firstP);

// 5 ts
const getFooter = document.getElementById("footer");
getFooter.innerHTML = "";

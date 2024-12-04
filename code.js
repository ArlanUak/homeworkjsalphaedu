// Task 1
// let inputvremia = prompt("Введите время суток ((утро, день, вечер) ");
// if(typeof inputvremia !== "string" || inputvremia.trim() === "") {
//     alert("Ошибка: Введите корректное время суток (утро, день или вечер).");
// }
// else {
//     inputvremia = inputvremia.trim().toLowerCase();
//     let drink;
//     if(inputvremia === "утро") {
//         drink = "кофе";
//     }
//     else if(inputvremia === "день") {
//         drink = "чай";
//     }
//     else if(inputvremia === "вечер") {
//         drink = "горячий шоколад";
//     }
//     else {
//         alert("Ошибка: Введите одно из значений — утро, день или вечер.");
//     }
//     if(drink) {
//         alert(`Мы рекомендуем вам ${drink}`);
//     }
// }

// Task 2
// let student = {};

// student.name = prompt("Введите ваше имя:");
// student.age = +prompt("Введите ваш возраст:");
// student.subject = prompt("Введите ваш любимый предмет:");
// student.grade = +prompt("Введите вашу оценку по предмету:");

// console.log(student);

// student.age +=5;
// console.log(student);

// // Task 3 
// const movies = [
//     { title: "Начало", director: "Кристофер Нолан", year: 2010, genre: "фантастика" },
//     { title: "Форрест Гамп", director: "Роберт Земекис", year: 1994, genre: "драма" },
//     { title: "Криминальное чтиво", director: "Квентин Тарантино", year: 1994, genre: "боевик" },
//     { title: "Зеленая миля", director: "Фрэнк Дарабонт", year: 1999, genre: "триллер" },
//     { title: "Жизнь прекрасна", director: "Роберто Бениньи", year: 1997, genre: "комедия/драма" },
// ];
// console.log(movies[1].director);
// console.log(movies[3].genre);

// Task 4
const shop = ["яблоки", "бананы", "молоко", "сыр", "хлеб", "шоколад"];
shop.unshift("мука");
console.log(shop);
shop.pop()
console.log(shop);
shop.splice(2,2,"айран","кымыз");
console.log(shop);

// task 1
const numbers = [52, 31, 9, 85, 31, 45];
let sum = 0;
let i = 0;
while(i < numbers.length ) {
    sum += numbers[i];
    i++;
}

console.log(`Сумма чисел: ${sum}`); // 253

// task 2
const books = [
    { title: "To Kill a Mockingbird", author: "Harper Lee", numberOfPages: 281, genre: "Fiction", awards: ["Pulitzer Prize", "Brotherhood Award", "Paperback of the Year"] },
    { title: "1984", author: "George Orwell", numberOfPages: 328, genre: "Dystopian", awards: ["Prometheus Hall of Fame Award", "Time's Top 100 Novels"] },
    { title: "The Great Gatsby", author: "F. Scott Fitzgerald", numberOfPages: 180, genre: "Classic", awards: ["Modern Library's Top 100", "National Book Award Nominee"] },
    { title: "Moby Dick", author: "Herman Melville", numberOfPages: 635, genre: "Adventure", awards: ["Regarded as a Great American Novel", "Part of the Western Canon"] },
    { title: "Pride and Prejudice", author: "Jane Austen", numberOfPages: 432, genre: "Romance", awards: ["BBC's Big Read", "Guardian's 100 Best Novels"] }
  ];

  for (let book of books) {
        console.log(`Название: ${book.title} , Автор: ${book.author}, Количество страниц: ${book.numberOfPages} ,  Жанр: ${book.genre}`);
        console.log("Награды:");
        for (const award of book.awards ) {
            console.log(`- ${award}`);
        }
        console.log("------------")
  }
// 3 task
function calculateAveragePages (books ) {
    let totalPages = 0;

    for (const book of books) {
        totalPages+=book.numberOfPages;
    }

    return totalPages/books.length;
}
console.log(calculateAveragePages(books));

// task 4
function repeatString(str, n) {
    let result = "" ;
    for(let i = 0 ; i < n ; i++) {
        result+=str;
    }
    return result;
}
console.log(repeatString("hello",1));

// 5 task
function calculateAverage(numbers) {
    if(numbers.length === 0) return 0;
    let sum = 0;
    for (let num of numbers) {
        sum+=num;        
    }
    return sum/numbers.length;
}
console.log(calculateAverage([1, 2, 3, 4, 5]));

// task 6
function countEvenNumbers(numbers) {
    if(numbers.length === 0) return 0;
    let pls = [];
    for (let num of numbers) {
        if(num%2 === 0) {
            pls.push(num);  
        }      
    }
    return pls;
}
console.log(countEvenNumbers([1, 2, 3, 4, 5]));

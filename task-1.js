"use strict";
function isEnoughCapacity(products, containerSize) {}

console.log(isEnoughCapacity({ apples: 2, grapes: 3, carrots: 1 }, 8)); // true
console.log(isEnoughCapacity({ apples: 4, grapes: 6, lime: 16 }, 12)); // false
console.log(isEnoughCapacity({ apples: 1, lime: 5, tomatos: 3 }, 14)); // true
console.log(isEnoughCapacity({ apples: 18, potatos: 5, oranges: 2 }, 7)); // false

/*
//OBIEKTY

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  public: true,
  rating: 8.38,
};

const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};

const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};
const bookTitle = book.title;
console.log(bookTitle); // "The Last Kingdom"

const bookGenres = book.genres;
console.log(bookGenres); // ["historical prose", "adventure"]

const bookPrice = book.price;
console.log(bookPrice); // undefined


const user = {
  name: "Jacques Gluke",
  tag: "jgluke",
  location: {
    country: "Jamaica",
    city: "Ocho Rios",
  },
  hobbies: ["swimming", "music", "sci-fi"],
};

const location = user.location;
console.log(location); // {country: "Jamaica", city: "Ocho Rios"}

const country = user.location.country;
console.log(country); // "Jamaica"

const hobbies = user.hobbies;
console.log(hobbies); // ["swimming", "music", "sci-fi"]

const firstHobby = user.hobbies[0];
console.log(firstHobby); // "swimming"

const numberOfHobbies = user.hobbies.length;
console.log(numberOfHobbies); // 3


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

console.log(book.title); // "The Last Kingdom" 
console.log(book["title"]); // "The Last Kingdom" 

console.log(book.genres); // ["historical prose", "adventure"]
console.log(book["genres"]); // ["historical prose", "adventure"]

const propKey = "author";
console.log(book.propKey); // undefined
console.log(book[propKey]); // "Bernard Cornwell"


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.rating = 9;
book.isPublic = false;
book.genres.push("drama");

console.log(book.rating); // 9
console.log(book.isPublic); // false
console.log(book.genres); // ["historical prose", "adventure", "drama"]


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  isPublic: true,
  rating: 8.38,
};

book.pageCount = 836;
book.originalLanguage = "en";
book.translations = ["es", "pl"];
book.price = {
  hardcover: 39,
  softcover: 29,
};

console.log(book.pageCount); // 836
console.log(book.originalLanguage); // "en"
console.log(book.translations); // ["es", "pl"]


const name = "Henry Sibola";
const age = 25;

const user = {
  name: name,
  age: age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25


const name = "Henry Sibola";
const age = 25;

const user = {
  name,
  age,
};

console.log(user.name); // "Henry Sibola"
console.log(user.age); // 25

//ITERACJA OBIEKTU
const book = {
  title: "Ostatnie Królestwo",
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygoda"],
  rating: 8.38,
};

for (const key in book) {
  console.log(key); // Klucz
  console.log(book[key]);  // Wartość właściwości o takim kluczu
}


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  genres: ["historical prose", "adventure"],
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ['title', 'author', 'genres', 'rating']


const book = {
  author: "Bernard Cornwell",
  genres: ["proza historyczna", "przygoda"],
  rating: 8.38,
};
const keys = Object.keys(book);

for (const key of keys) {
  console.log(key); // Klucz
  console.log(book[key]); // Wartość właściwości
}


const book = {
  title: "The Last Kingdom",
  author: "Bernard Cornwell",
  rating: 8.38,
};
const keys = Object.keys(book);
console.log(keys); // ["title", "author", "genres", "rating"]

const values = Object.values(book);
console.log(values); // ["The Last Kingdom", "Bernard Cornwell", 8.38]


//TABLICA OBIEKTÓW
const books = [
  {
    title: "The Last Kingdom",
    author: "Bernard Cornwell",
    rating: 8.38,
  },
  {
    title: "Beside Still Waters",
    author: "Robert Sheckley",
    rating: 8.51,
  },
  {
    title: "The Dream of a Ridiculous Man",
    author: "Fyodor Dostoevsky",
    rating: 7.75,
  }
];


for (const book of books) {
  console.log(book); // Obiekt książki
  console.log(book.title); // Tytuł
  console.log(book.author); // Autor
  console.log(book.rating); // Ocena
}


const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell" },
  { title: "Beside Still Waters", author: "Robert Sheckley" },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky" }
];

const authorToSearchFor = "Robert Sheckley";

for (const book of books) {
	if(book.author === authorToSearchFor) {
		console.log(book);
		console.log(book.title)
		console.log(book.rating)
	}
}


const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", , rating: 6.8 }
];

const titles = [];

for (const book of books) {
	titles.push(book.title)
}

console.log(titles); // ["The Last Kingdom", "Beside Still Waters", "The Dream of a Ridiculous Man"]


const books = [
  { title: "The Last Kingdom", author: "Bernard Cornwell", rating: 8.2 },
  { title: "Beside Still Waters", author: "Robert Sheckley", rating: 9 },
  { title: "The Dream of a Ridiculous Man", author: "Fyodor Dostoevsky", , rating: 6.8 }
];

let totalRating = 0;

for (const book of books) {
  totalRating += book.rating;
}

const averageRating = totalRating / books.length;
console.log(averageRating); // 8

//METODY OBIETKÓW

const obj = {
	method(value) {
		console.log(`I'm a method with ${value}!`);
	}
};

obj.method(5); // "I'm a method with 5!"
obj.method(10); // "I'm a method with 10!"


// ✅ Logicznie i składniowo pogrupowane jednostki
const bookShelf = {
  books: ["Ostatnie Królestwo", "Strażnik Marzeń"],
  // To jest metoda obiektu
  getBooks() {
    return "Zwracam wszystkie książki";
  },
  // To jest metoda obiektu
  addBook(bookName) {
    return `Dodaję książkę ${bookName}`;
  },
};

// Wywołania metod
bookShelf.getBooks(); // zwróci "Zwracam wszystkie książki"
bookShelf.addBook("Nowa książka 1"); // zwróci "Dodaję książkę Nowa książka 1"
bookShelf.addBook("Nowa książka 2"); // zwróci "Dodaję książkę Nowa książka 2"


const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    console.log(this);
  },
};

bookShelf.getBooks(); // {books: ["The Last Kingdom", "The Mist"], getBooks: f}


const bookShelf = {
  books: ["The Last Kingdom", "The Mist"],
  getBooks() {
    return this.books;
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist"]


const bookShelf = {
  books: ["The Last Kingdom"],
};

bookShelf.books.push("The Mist");
console.log(bookShelf.books); // ["The Last Kingdom", "The Mist"]


const bookShelf = {
  books: ["The Last Kingdom"],
  getBooks() {
    return this.books;
  },
  addBook(bookName) {
    this.books.push(bookName);
  }
};

console.log(bookShelf.getBooks()); // ["The Last Kingdom"]
bookShelf.addBook("The Mist");
bookShelf.addBook("Dream Guardian");
console.log(bookShelf.getBooks()); // ["The Last Kingdom", "The Mist", "Dream Guardian"]


const bookShelf = {
  books: [
		{ title: "The Last Kingdom", rating: 8 }, 
		{ title: "The Mist", rating: 6 }
	],
  getBooks() {
    return this.books;
  },
  addBook(newBook) {
    this.books.push(newBook);
  }
};

bookShelf.addBook({ title: "Dream Guardian", rating: 9 });


const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
  getAvarageRating() {
    let totalRating = 0;

    for (const book of this.books) {
      totalRating += book.rating;
    }

    return totalRating / this.books.length;
  },
};

bookShelf.getAvarageRating(); // 7


const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
	}
};


const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
				// Znaleziono potrzebny obiekt po nazwie książki
			}
		}
	}
};


const bookShelf = {
  books: [
    { title: "The Last Kingdom", rating: 8 },
    { title: "The Mist", rating: 6 },
  ],
	changeRating(bookName, newRating) {
		for(const book of this.books) {
			if(book.title === bookName) {
				book.rating = newRating;
			}
		}
	}
};

changeRating("The Mist", 9);
changeRating("The Last Kingdom", 4);


//SKŁADNIA SPREAD I REST

function multiply() {
	console.log(arguments)
}

multiply(1, 2); // pseudotablica [1, 2]
multiply(1, 2, 3); // pseudotablica [1, 2, 3]
multiply(1, 2, 3, 4); // pseudotablica [1, 2, 3, 4]


function multiply(...args) {
  console.log(args);
}

multiply(1, 2); // [1, 2]
multiply(1, 2, 3); // [1, 2, 3]
multiply(1, 2, 3, 4); // [1, 2, 3, 4]






*/

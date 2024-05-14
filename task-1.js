"use strict";
function makeTransaction(quantity, pricePerDroid) {
    const totalPrice = quantity * pricePerDroid;
    console.log(`You ordered ${quantity} droids worth ${totalPrice} credits!`);
}

makeTransaction(5, 3000); // "You ordered 5 droids worth 15000 credits!"
makeTransaction(3, 1000); // "You ordered 3 droids worth 3000 credits!"
makeTransaction(10, 500); // "You ordered 10 droids worth 5000 credits!"
/*
console.log("JavaScript is awesome!");
console.log(10);

//const age = 20;
//console.log(age); // 20
//const username = "Mango";
//console.log(username); // "Mango"

//let username = "Mango";
//console.log(username); // "Mango"

//username = "Poly";
//console.log(username); // "Poly"
let username;
console.log(username); // undefined

username = "Mango";
console.log(username); // "Mango"

const isModalOpen = true;
const isLoggedIn = false;

const topSpeed = 160;
const distance = 617.54;
const login = "mango935";
const isOnline = true;
const isAdmin = false;

let value = null;
console.log(value); // null
let value2;
console.log(value2); // undefined

typeof operand;
const quantity = 17;
console.log(typeof quantity); // wyświetli "number"

const message1 = "JavaScript is awesome!";
console.log(typeof message1); // wyświetli "string"

const isSidebarOpen = false;
console.log(typeof isSidebarOpen); // wyświetli "boolean"

let username1;
console.log(typeof username); // wyświetli "undefined"

let status = null;
console.log(typeof status); // wyświetli "object"

const x = 8;
const y = 5;
console.log(x + y); // 13 dodawanie
console.log(x - y); // 3 odejmowanie
console.log(x * y); // 40 mnożenie
console.log(x / y); // 1.6 dzielenie
console.log(x % y); // 3 zwracanie reszty
console.log(x ** y); // 32768 potęgowanie

const pricePerItem = 3500;
const orderedQuantity = 4;

// Change code below this line
const totalPrice = pricePerItem * orderedQuantity;
console.log(totalPrice);

console.log(String(5)); // "5"
console.log(String(true)); // "true"
console.log(String(false)); // "false"
console.log(String(null)); // "null"
console.log(String(undefined)); // "undefined"
console.log("5" + 3); // "53"
console.log("5" + true); // "5true"
console.log("5" + false); // "5false"
console.log("5" + null); // "5null"
console.log("5" + undefined); // "5undefined"

const guestName = "Mango";
const roomNumber = 207;
const greeting = `Welcome ${guestName}, your room number is ${roomNumber}!`;
console.log(greeting); // "Welcome Mango, your room number is 207!"

const productName = "Repair droid";
// Jeśli w zmiennej jest przechowywany ciąg znaków
console.log(productName.length); // 12
// Jeśli literał łańcuchowy
console.log("Repair droid".length); // 12

const username2 = "Poly";
const message = `Username ${username2} is ${username2.length} characters long`;
console.log(message);

//const product = "Repair droid";
//console.log(product[0]); // 'R'
//console.log(product[5]); // 'r'
//console.log(product[11]); // 'd'

//const product = "Repair droid";
//const lastElementIndex = product.length - 1;
//console.log(product[lastElementIndex]); // 'd'

//const product = "Repair droid";
//console.log(product[product.length - 1]); // 'd'

let product = "Droid";
console.log(product); // "Droid"
product = "DrOid";
console.log(product); // "DrOid"

const a = 2;
const b = 5;

console.log(a > b); // false
console.log(b > a); // true
console.log(a >= b); // false
console.log(b >= a); // true

console.log(a < b); // true
console.log(b < a); // false
console.log(a <= b); // true
console.log(b <= a); // false

console.log(Number("5")); // 5
console.log(Number(true)); // 1
console.log(Number(false)); // 0
console.log(Number(null)); // 0
console.log(Number(undefined)); // NaN
console.log(Number("Jacob")); // NaN
console.log(Number("25px")); // NaN

console.log("5" * 2); // 10
console.log("10" - 5); // 5
console.log(5 + true); // 6
console.log(5 - true); // 4

console.log("10" > 5); // true
console.log(10 > "5"); // true
console.log(5 > true); // true
console.log(5 < true); // false
console.log("5" < true); // false

console.log(Number.parseInt("5")); // 5
console.log(Number.parseInt("5.5")); // 5
console.log(Number.parseInt("5cm")); // 5
console.log(Number.parseInt("12qwe74")); // 12
console.log(Number.parseInt("12.46qwe79")); // 12
console.log(Number.parseInt("cm5")); // NaN
console.log(Number.parseInt("")); // NaN
console.log(Number.parseInt("qweqwe")); // NaN

console.log(Number.parseFloat("5")); // 5
console.log(Number.parseFloat("5.5")); // 5.5
console.log(Number.parseFloat("3.14")); // 3.14
console.log(Number.parseFloat("5cm")); // 5
console.log(Number.parseFloat("5.5cm")); // 5.5
console.log(Number.parseFloat("12qwe74")); // 12
console.log(Number.parseFloat("12.46qwe79")); // 12.46
console.log(Number.parseFloat("cm5")); // NaN
console.log(Number.parseFloat("")); // NaN
console.log(Number.parseFloat("qweqwe")); // NaN

const value = "24.5px";
console.log(Number.parseFloat(value));
const numerical = Number.parseFloat(value);
console.log(numerical);

// Math.floor(num): zwraca najbliższą liczbę całkowitą, która jest mniejsza lub równa podanej liczbie num
console.log(Math.floor(1.3)); // 1
console.log(Math.floor(1.7)); // 1

//Math.ceil(num): zwraca najbliższą liczbę całkowitą, która jest większa lub równa podanej liczbie num
console.log(Math.ceil(1.3)); // 2
console.log(Math.ceil(1.7)); // 2

//Math.round(num): zwraca wartość liczby po zaokrągleniu do najbliższej liczby całkowitej
console.log(Math.round(1.3)); // 1
console.log(Math.round(1.7)); // 2

//Math.max(num1, num2, ...): zwraca największą liczbę ze zbioru przekazanych liczb
console.log(Math.max(20, 10, 50, 40)); // 50

//Math.min(num1, num2, ...): zwraca najmniejszą liczbę ze zbioru przekazanych liczb
console.log(Math.min(20, 10, 50, 40)); // 10

//Math.random(): zwraca liczbę losową z zakresu od 0 (włącznie) do 1 (z wyłączeniem)
console.log(Math.random()); // liczba losowa z przedziału od 0 do 1, na przykład 0,2 ... 0,9166353649342294

console.log(0.1 + 0.2 === 0.3); // false
console.log(0.1 + 0.2); // 0.30000000000000004
console.log(0.1 * 10 + 0.2 * 10); // 3
console.log((0.1 * 10 + 0.2 * 10) / 10); // 0.3

//Metoda toFixed() zwraca ciąg znaków reprezentujący liczbę z określoną liczbą miejsc dziesiętnych
console.log((0.1 + 0.2).toFixed(1)); // "0.3"
console.log((5).toFixed(2)); //  ”5.00”
console.log((8.762195).toFixed(4)); //  “8.7622”

//Funkcje

// Deklarowanie funkcji multiply
function doStuff() {
  // Treść funkcji
  console.log('Log inside multiply function');
}
// Wywołania funkcji multiply
doStuff(); // 'Log inside multiply function'

// Deklaracja parametrów x, y, z
function multiply(x, y, z) {
  console.log(`Result: ${x * y * z}`);
}
// Przekazywanie argumentów
multiply(2, 3, 5); // "Result: 30"
multiply(4, 8, 12); // "Result: 384"
multiply(17, 6, 25); // "Result: 2550"


function add(a, b, c) {
    console.log(`Addition result equals ${a + b + c}`);
}

add(15, 27, 10);
add(10, 20, 30);
add(5, 10, 15);


function multiply(x, y, z) {
  return x * y * z;
}
const result = multiply(2, 3, 5);
console.log(result); // 30

function multiply(x, y, z) {
	const product = x * y * z;
}
const result = multiply(2, 3, 5);
console.log(result); // undefined

function multiply(x, y, z) {
  console.log('The code before return is executed as usual');

  return x * y * z;

  console.log('This code is never executed because it is after return');
}
console.log(multiply(2, 3, 5)); // 30


function multiply(x, y, z) {
    console.log(`Result: ${x * y * z}`);
}
console.log("Log before multiply execution");
multiply(2, 3, 5); // "Result: 30"
console.log("Log after multiply execution");

// Zmienna globalna
const value = "I'm a global variable";

function foo() {
// Można odwołać się do zmiennej globalnej
	console.log(value); // "I'm a global variable"
}

foo();
// Można odwołać się do zmiennej globalnej
console.log(value); // "I'm a global variable"


function foo() {
	// Zmienna lokalna
	const value = "I'm a local variable";
	// Można odwołać się do zmiennej globalnej
	console.log(value); // "I'm a local variable"
}

foo();
  console.log(value); // ReferenceError: value is not defined
                      // Błąd: zmienna lokalna nie jest widoczna poza funkcją



*/

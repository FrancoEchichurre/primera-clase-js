console.log("Hola!!");

console.log("Este valor es un numero:", 11)

// Operadores Matematicos:

console.log("esta es una suma: ", 5 + 6)
console.log("esta es una resta: ", 5 - 6)
console.log("esta es una multiplicacion: ", 5 * 6)
console.log("esta es una division: ", 30 / 6)
console.log("esta es el modulo: ", 21 % 4)

console.log("ECMA script") 

// Variables

var saludo = "Hola como estas?" // Tipo string(cadena de caracteres)

console.log(saludo)

saludo = "Buenas noches a todos!"

console.log(saludo)

saludo = 11; // Tipo Number

console.log(saludo)

let resultado = 4 + 6;

console.log(resultado);

resultado = resultado + 5

console.log(resultado);

const horario = "19hs. a 22hs."

console.log(horario)

console.log(horario)

const condition = true; // Tipo Boolean
const notCondition = false; // Tipo Boolean

console.log(condition)
console.log(notCondition)

if (notCondition) {
    console.log("Hoy es Jueves")
} else {
    console.log("Hoy es otro dia de la semana")
} 

// Diferencia entre var y let

// var text; // undefined(indefinido)

// if (condition) {
//     text = "Hoy es jueves."
// } else {
//     text = "Hoy No es jueves."
// }

// console.log(text)

var text; // undefined(indefinido)

if (condition) {
    text = "Hoy es jueves."
} else {
    text = "Hoy No es jueves."
}

console.log(text)

// Operadores Logicos

const stg = "11"
const nmbr = 11;
const opIgual = stg == nmbr; //Operador no igual !=

if (opIgual) {
    console.log("Son iguales en valor", stg, nmbr)
}

const opExactIgual = stg === nmbr;//Operador no exactamente igual

if (opExactIgual) {
    console.log("Son iguales en valor", stg, nmbr)
} else {
    console.log("Son iguales en valor, pero no en tipo", stg, nmbr)
}

const a = 6;
const b = 4;
const c = 4;
console.log("a > b", a > b)
console.log("c > b", c < b)
console.log("c >= b", c >= b)
console.log("a < b", a < b)
console.log("c < b", c < b)
console.log("c <= b", c <= b)

// Quiero que a sea mayor "A" sea mayor a "B" y "B" sea igual a "C"

if (a > b && b === c) {
    console.log("Se cumplio la condicion")
}

// Quiero que "A" sea mayor a "B" o "B" sea menor a "C"

if (a > b || b < c) {
    console.log("Se cumplio la condicion 2")
}

// Operador Not ---> todo lo que es true pasa a false y todo lo que es false pasa a true

if (!(a > b && b === c)) {
    console.log("Se cumplio la condicion 3")
} else {
    console.log("Caimos en el else, por el operador NOT")
}

const saludo = window.prompt("Escriba un saludo:")


//index++ operador acumulable
for (let index = 0; index < 10; index++) {
    if (saludo !== null) {
        console.log(
            saludo.concat(
                " Alumno nº ".concat(index)
            )
        )
    }
}

let response;

while (response !=="8") {
    response = window.prompt("Adivine el numero entre 0 y 20:")
}

console.log("Has adivinado el numero")

function suma(a, b) {
    return a + b; 
}
// returns sirve para que reemplazar el "a" por "7" y "b" por "10" usando la funcion suma
const result = suma(7, 10)

const suma2 = (a, b) => a + b

const logger = param => {
    console.log(param)
}

logger( result )
logger( suma2(10, 8) )

const generarSaludo = () => {
    const saludo = window.prompt("Escriba un saludo:")
    logger(saludo)
}


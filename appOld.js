/* const initialArray = [
    {
     clave: "nombre",
     valor: "Sebastian",
    },
    {
     clave: "segundoNombre",
     valor: "Gabriel",
    },
    {
     clave: "apellido",
     valor: "Nieva",
    },
]

const reformatearArray = initialArray.map((objeto) =>{
    let obj = {};
    obj[objeto.clave] = objeto.valor;
    debugger
    return obj
})

console.log(reformatearArray) */

/* var numeroUno = "20"
var numeroDos = 10

var total =  numeroUno + numeroDos

console.log(typeof total, total) */


// Ejemplo simpe funcion asíncronicas

var name = null;

function obtenerName() {
    console.log("Obtencion comenzada")
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Sebastian")
        }, 2000)
    })
}

async function saludo() {
    let name = await obtenerName();
    console.log("Hola ", name)
}

saludo()
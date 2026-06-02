//ambito global 

let nombre = "Karol";
let edad = 36;
let estatura = 1.6;
let esProfesor = true;

console.log(nombre.toUpperCase());
console.log(edad.toString());
console.log(estatura.toFixed(5));
console.log(esProfesor.toString());

//{
// todo lo que este dentro de una {} es un bloque
//}
/*
// no da error
var apellido = "Leal";
var apellido = "Rojas";
*/
// da error por que let no permite redeclaracion
//let edad =  37;
/*
console.log(hobbies);
let hobbies = "fotografia";
*/
/*
if(true){
    //local
    let nombre = "Karol";
    console.log(nombre);
}

// global
let nombre = "Tatiana";
console.log(nombre);
*/

edad = 5;
const edadMayor = 18;
let mensaje = "";
if (edad >= edadMayor) {
    mensaje = "Es Mayor de edad";

} else {
    mensaje = "Es menor de edad";
}

console.log(mensaje);

//ternario cuando necesito asignar un valor nada mas

edad = 40;

mensaje = (edad >= edadMayor) ? "Es Mayor de edad" : "Es menor de edad";
console.log(mensaje);


let semaforo = "verde";

if (semaforo == "verde") {
    console.log("Siga!");
} else if (semaforo == "amarillo") {
    console.log("Cuidado!")
} else if (semaforo == "rojo") {
    console.log("Detengase!")
} else {
    console.log("El color no esta definido")
}

switch (semaforo) {
    case 'verde':
        console.log("Siga!");
        break;
    case 'amarillo':
        console.log("Cuidado!")
        break;
    case 'rojo':
        console.log("Detengase!")
        break;
    default:
        console.log("El color no esta definido")
        break;
}


for (let i = 0; i <= 10; i++) {
    console.log(i)
}

for (let i = 10; i > 0; i--) {
    console.log(i);
}

let listaFrutas = ["banano", "fresa", "melon"];


for (let i = 0; i < listaFrutas.length; i++) {
    console.log(listaFrutas[i]);
}


for (let i in listaFrutas) {
    console.log(listaFrutas[i]);
}

let nombreEstudiante = ["Mario", "Pedro", "Maria"];

for (let i in nombreEstudiante) {
    console.log(nombreEstudiante[i]);
}

let arreglos = [listaFrutas, nombreEstudiante];

arreglos.forEach(arreglo => {
    arreglo.forEach(data => {
        console.log(data)
    });
});
console.log(edad); //40

//Ciclo que se usa cuando yo necesito que se ejecute al menos una vez el bloque codigo,


while (edad < 45) {
    edad++
    console.log("WHILE");
    console.log(edad);
}
do {
    edad++
    console.log("DOWHILE");
    console.log(edad);
}
while (edad < 50)
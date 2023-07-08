//tipos de variable
//var, let y const

//Dato undefined
let variable;
//muestra el mensaje undefined porque tenemos la variable pero aun no esta definida.
console.log(variable);

//Datos booleanos
let MayorEdad = true;

if (MayorEdad) {
    console.log("Eres mayor de edad.");
} else {
    console.log("Eres menor de edad.");
}

let bool1 = true;
let bool2 = false;
console.log(bool1);
console.log(bool2);

//Dato tipo cadena de texto.
let producto1 = 'mesa grande circular';
//length es para mostrar el tamaña de una cadena de texto
console.log(producto1.length);
//includes es para determinar si una palabra se encuentra en la cadena de texto.
console.log(producto1.includes('mesa'));
//indexOf es para mostrar en que numero o posicion de la cadena de texto esta la palabra que buscamos
console.log(producto1.indexOf('circular'));

//Dato tipo numerico.
const numero1 = 100;
const numero2 = 50;
const cliente = 'Juan';
const cliente2 = 'Pablo';
//se realiza una suma de dos numeros
console.log(numero1 * numero2);
//muesta NAN cuando no son datos de tipo numerico.
console.log(cliente * cliente2);


//Dato tipo null
let numero = null;
//la variable esta definidad de manera vacia intencionalmente.
console.log(numero);

//Concatenacion
let nombre1 ='Sergio';
let nombre2 ='Danilo';
let apellido1 ='Bolvito'
let apellido2 = 'Rodriguez'
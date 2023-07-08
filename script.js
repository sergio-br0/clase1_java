//tipos de variable
//var, let y const

let producto1 = 'mesa grande circular';
//length es para mostrar el tamaña de una cadena de texto
console.log(producto1.length);
//includes es para determinar si una palabra se encuentra en la cadena de texto.
console.log(producto1.includes('mesa'));
//indexOf es para mostrar en que numero o posicion de la cadena de texto esta la palabra que buscamos
console.log(producto1.indexOf('circular'));


const numero1 = 100;
const numero2 = 50;
const cliente = 'Juan';
const cliente2 = 'Pablo';
//se realiza una suma de dos numeros
console.log(numero1 * numero2);
//muesta NAN cuando no son datos de tipo numerico.
console.log(cliente * cliente2);
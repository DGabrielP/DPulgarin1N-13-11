/*
let edad = Number (prompt ('ingrese la edad'));
let licencia = confirm ('Tiene licencia?');
if ( edad > 24 && licencia ) {
    alert ('Apto')
} else {
    alert ('No apto')
}


let nota = Number (prompt ('ingrese nota'));
let ingresos = Number (prompt ('ingresos'));
if (nota >= 8.5 && ingresos <= 600) {
    alert('aprobado');
} else {
    alert('desaprobado');
}


let apodo = prompt('ingrese su apodo');
if (apodo === null || apodo === '') {
    apodo = 'Anonymous'
}  
    alert('Su apodo es ' + apodo);

*/

let numero = Number (prompt('ingrese un numero'));
 while (numero % 2 === 0) {
    let mitad = numero / 2 ;
    alert('La mitad es ' + mitad);
 numero = mitad;
}

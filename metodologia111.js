/*
//EJERCICIO CONDUCTOR
let edad = Number (prompt ('ingrese la edad'));
let licencia = confirm ('Tiene licencia?');
if ( edad > 24 && licencia ) {
    alert ('Apto')
} else {
    alert ('No apto')
}

//EJERCICIO BECA
let nota = Number (prompt ('ingrese nota'));
let ingresos = Number (prompt ('ingresos'));
if (nota >= 8.5 && ingresos <= 600) {
    alert('aprobado');
} else {
    alert('desaprobado');
}

//EJERCICIO APODO
let apodo = prompt('ingrese su apodo');
if (apodo === null || apodo === '') {
    apodo = 'Anonymous'
}  
    alert('Su apodo es ' + apodo);


//EJERCICIO BUCLE (DIVIDIR UN NUMERO PARA DOS MENTRAS SE PAR)
//WHILE
let numero = Number (prompt('ingrese un numero'));
 while (numero % 2 === 0) {
    let mitad = numero / 2 ;
    alert('La mitad es ' + mitad);
 numero = mitad;
}

//FOR
let numero = Number(prompt('Ingrese un número'));

for (; numero % 2 === 0; numero = numero / 2) {
    let mitad = numero / 2;
    alert('La mitad es ' + mitad);
}

*/
//DO WHILE
do {
    numero = Number(prompt('Ingrese un número'));
    let mitad = numero / 2;
    alert('La mitad es ' + mitad);
} while (numero % 2 === 0);
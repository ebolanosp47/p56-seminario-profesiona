var nombreApellido = 'Javier Bolaños'
var edad = 35

//funcionn tipo declarativa
function imprimirEdad (nombre, edad) {
    console.log ( ' ${nombre} tienen la edad de $ {edad},')
}

//funcion flecha
var imprimirEdad2 = (nombre, edad) => {console.log ( ' ${nombre} tienen la edad de $ {edad},') 
}


//funcion expresiva
var imprimirEdad3 = function(nombre, edad) {
    console.log ( ' ${nombre} tiene la edad de $ {edad}.')
}

imprimirEdad( nombreApellido, edad)
imprimirEdad( 'Grilla botate', 1 )
imprimirEdad2( nombreApellido, edad )
imprimirEdad3( 'Andrea Bolaños', 4 )
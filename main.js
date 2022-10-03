
let anioNacimiento = parseInt (prompt ("Bienvenido a la inscripción de la Maratón de Colonia. Ingresa tu año de nacimiento"));

while (anioNacimiento >= 2022) {
    alert ("El año ingresado no es correcto.");
    anioNacimiento = parseInt (prompt ("Ingresa tu año de nacimiento"));
}

if (anioNacimiento < 2022 && anioNacimiento >= 2010) {
    let categoria = "NIÑOS";
    alert (`Puedes inscribirte en la categoría *${categoria}*`);
    console.log ("La categoría elegida es: " + categoria);
} else if (anioNacimiento < 2010 && anioNacimiento >= 2004) {
    let categoria = "ADOLESCENTES";
    alert (`Puedes inscribirte en la categoría *${categoria}*`);
    console.log ("La categoría elegida es: " + categoria);
} else if (anioNacimiento < 2004 && anioNacimiento >= 1992) {
    let categoria = "19 A 30 AÑOS";
    alert (`Puedes inscribirte en la categoría *${categoria}*`);
    console.log ("La categoría elegida es: " + categoria);
} else if (anioNacimiento < 1992 && anioNacimiento >= 1972) {
    let categoria = "31 A 50 AÑOS";
    alert (`Puedes inscribirte en la categoría *${categoria}*`);
    console.log ("La categoría elegida es: " + categoria);
} else {
    let categoria = "MAYORES A 50 AÑOS";
    alert (`Puedes inscribirte en la categoría *${categoria}*`);
    console.log ("La categoría elegida es: " + categoria);
}

let distanciaCarrera = parseInt (prompt ("Seleccione la distancia que desea correr (5K, 10K, 21K o 42K)"));

while (distanciaCarrera != 5 && distanciaCarrera != 10 && distanciaCarrera != 21 && distanciaCarrera != 42) {
    alert ("La distancia seleccionada no es correcta");
    distanciaCarrera = parseInt (prompt ("Seleccione la distancia que desea correr (5K, 10K, 21K o 42K)"));
}
    switch (distanciaCarrera) {
        case 5:
            alert ("La distancia seleccionada es 5K");
            console.log ("La distancia seleccionada es: " + distanciaCarrera + "Km");
            break;
        case 10:
            alert ("La distancia seleccionada es 10K");
            console.log ("La distancia seleccionada es: " + distanciaCarrera + "Km")
            break;
        case 21:
            alert ("La distancia seleccionada es 21K");
            console.log ("La distancia seleccionada es: " + distanciaCarrera + "Km")
            break;
        case 42:
            alert ("La distancia seleccionada es 42K");
            console.log ("La distancia seleccionada es: " + distanciaCarrera + "Km")
            break;
    }
    
function solicitarNombre () {
	let nombreIngresado = prompt ("Ingresar nombre y apellido");
	alert ("El nombre ingresado es " + nombreIngresado);
    console.log ("El nombre del participante es: " + nombreIngresado);
}

solicitarNombre ()




let anioNacimiento = parseInt (prompt ("Bienvenido a la inscripción de la Maratón de Colonia. Ingresa tu año de nacimiento"));

while (anioNacimiento >= 2022) {
    alert ("El año ingresado no es correcto.");
    anioNacimiento = parseInt (prompt ("Ingresa tu año de nacimiento"));
}

// Asignación de categoría
let categoria = " ";
if (anioNacimiento < 2022 && anioNacimiento >= 2010) {
    categoria = "NIÑOS";
    console.log ("La categoría elegida es: " + categoria);
} else if (anioNacimiento < 2010 && anioNacimiento >= 2004) {
    categoria = "ADOLESCENTES";
    console.log ("La categoría elegida es: " + categoria);
} else if (anioNacimiento < 2004 && anioNacimiento >= 1992) {
    categoria = "19 A 30 AÑOS";
    console.log ("La categoría elegida es: " + categoria);
} else if (anioNacimiento < 1992 && anioNacimiento >= 1972) {
    categoria = "31 A 50 AÑOS";
    console.log ("La categoría elegida es: " + categoria);
} else {
    categoria = "MAYORES A 50 AÑOS";
    console.log ("La categoría elegida es: " + categoria);
}

// Asignación de distancia seleccionada
let distanciaCarrera = parseInt (prompt ("Seleccione la distancia que desea correr (5K, 10K, 21K o 42K)"));

while (distanciaCarrera != 5 && distanciaCarrera != 10 && distanciaCarrera != 21 && distanciaCarrera != 42) {
    alert ("La distancia seleccionada no es correcta");
    distanciaCarrera = parseInt (prompt ("Seleccione la distancia que desea correr (5K, 10K, 21K o 42K)"));
}
    switch (distanciaCarrera) {
        case 5:
            console.log ("La distancia seleccionada es: " + distanciaCarrera + "Km");
            break;
        case 10:
            console.log ("La distancia seleccionada es: " + distanciaCarrera + "Km")
            break;
        case 21:
            console.log ("La distancia seleccionada es: " + distanciaCarrera + "Km")
            break;
        case 42:
            console.log ("La distancia seleccionada es: " + distanciaCarrera + "Km")
            break;
    }

// Función para ingreso de nombre del participante
let nombreIngresado = " ";
function solicitarNombre () {
	nombreIngresado = prompt ("Ingresar nombre y apellido");
    console.log ("El nombre del participante es: " + nombreIngresado);
}

solicitarNombre ()

// Objeto Participante

function Participante (nombre, categoria, distancia) {
    this.nombre = nombre.toUpperCase();
    this.categoria = categoria;
    this.distancia = distancia;
}

const participanteNuevo = new Participante(nombreIngresado, categoria, distanciaCarrera);

console.log (participanteNuevo);

const participante1 = new Participante("Fernando Cabrera", "31 A 50 AÑOS", 10);
const participante2 = new Participante("Maria Fernandez", "19 A 30 AÑOS", 42);
const participante3 = new Participante("Mario Carrero", "MAYORES A 50 AÑOS", 5);
const participante4 = new Participante("Ana Prada", "ADOLESCENTES", 21);
const participante5 = new Participante("Eduardo Mateo", "NIÑOS", 5);

const participantesInscriptos = [participante1, participante2, participante3, participante4, participante5];

console.log (participantesInscriptos);

let estaInscripto = false;
for (let i = 0; i < participantesInscriptos.length; i++) {
    if (participanteNuevo.nombre == participantesInscriptos[i].nombre && participanteNuevo.categoria == participantesInscriptos[i].categoria &&participanteNuevo.distancia == participantesInscriptos[i].distancia) {
        estaInscripto = true;
        break;
    }
}

if (estaInscripto == false) {
    participantesInscriptos.push(participanteNuevo)
} else {
    alert("El participante ya se encuentra inscripto");
}

console.log (participantesInscriptos);

// Aplicación de filtros

const participantesInscriptos5K = participantesInscriptos.filter ((inscripto) => inscripto.distancia == 5);
console.log (participantesInscriptos5K);

const participantesInscriptos10K = participantesInscriptos.filter ((inscripto) => inscripto.distancia == 10);
console.log (participantesInscriptos10K);

const participantesInscriptos21K = participantesInscriptos.filter ((inscripto) => inscripto.distancia == 21);
console.log (participantesInscriptos21K);

const participantesInscriptos42K = participantesInscriptos.filter ((inscripto) => inscripto.distancia == 42);
console.log (participantesInscriptos42K);
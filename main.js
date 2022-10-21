
// Declaración de variables

let nombre = " ";
let nacionalidad = " ";
let documento = 0;
let anioNacimiento = 0;
let email = " ";
let telefono = 0;
let genero = " ";
let distancia = 0;
let categoria = " ";


// Constructor Participante
function Participante (nombre, nacionalidad, documento, anioNacimiento, categoria, email, telefono, genero, distancia) {
    this.nombre = nombre.toUpperCase();
    this.nacionalidad = nacionalidad;
    this.documento = documento;
    this.anioNacimiento = anioNacimiento;
    this.categoria = categoria;
    this.email = email;
    this.telefono = telefono;
    this.genero = genero;
    this.distancia = distancia;
}

// Declaración de participante
let participante = new Participante(nombre, nacionalidad, documento, anioNacimiento, categoria, email, telefono, genero, distancia);
// Declaración de participante en JSON
let participanteEnJSON = JSON.stringify(participante);

// Declaración de algunos participantes
const participante1 = new Participante("Fernando Cabrera", "Uruguayo", 42561355, 1979, "31 A 50 AÑOS", "fcabrera@gmail.com", 099123456, "h", 10);
const participante2 = new Participante("Maria Fernandez", "Uruguayo", 39167524, 1993, "19 A 30 AÑOS", "mfernandez@gmail.com", 099321654, "m", 42);
const participante3 = new Participante("Mario Carrero", "Uruguayo", 18569435, 1959, "MAYORES A 50 AÑOS", "mcarrero@gmail.com", 091564876, "h",5);
const participante4 = new Participante("Ana Prada", "Uruguayo", 49861568, 2001, "ADOLESCENTES", "aprada@gmail.com", 098684524, "m", 21);

// Array de participantes inscriptos
const participantesInscriptos = [participante1, participante2, participante3, participante4];

let miFormulario = document.getElementById ("formulario");
miFormulario.addEventListener("submit", validarFormulario);

function validarFormulario(e) {
    e.preventDefault();
    let formulario = e.target;
    let nombre = formulario.nombre.value;
    let nacionalidad = formulario.nacionalidad.value;
    let documento = parseInt (formulario.documento.value);
    let anioNacimiento = parseInt (formulario.nacimiento.value);
    let email = formulario.email.value;
    let telefono = parseInt (formulario.telefono.value);
    let genero = formulario.genero.value;
    let distancia = parseInt (formulario.distancia.value);
    if (anioNacimiento >= 2022) {
        alert ("El año ingresado no es correcto.");
    } else {
        if (anioNacimiento < 2022 && anioNacimiento >= 2010) {
            categoria = "NIÑOS";
        } else if (anioNacimiento < 2010 && anioNacimiento >= 2004) {
            categoria = "ADOLESCENTES";
        } else if (anioNacimiento < 2004 && anioNacimiento >= 1992) {
            categoria = "19 A 30 AÑOS";
        } else if (anioNacimiento < 1992 && anioNacimiento >= 1972) {
            categoria = "31 A 50 AÑOS";
        } else {
            categoria = "MAYORES A 50 AÑOS";
        }
    }

    let participante = new Participante(nombre, nacionalidad, documento, anioNacimiento, categoria, email, telefono, genero, distancia);

    console.log (participante);

    let participanteEnJSON = JSON.stringify(participante);

    // Almacenado de participante en local storage
    localStorage.setItem ("participante", participanteEnJSON);   
    
    const participanteNuevo = JSON.parse(participanteEnJSON);

    // Verificación de participante inscripto por numero de documento
    let estaInscripto = false;
    for (let i = 0; i < participantesInscriptos.length; i++) {
        if (participanteNuevo.documento == participantesInscriptos[i].documento) {
            estaInscripto = true;
            break;
        }
    }

    if (estaInscripto == false) {
        participantesInscriptos.push(participanteNuevo);
    } else {
        alert("El participante ya se encuentra inscripto");
    }

    console.log (participantesInscriptos);

    const participantesInscriptos5K = participantesInscriptos.filter ((inscripto) => inscripto.distancia == 5);
    console.log ("Participantes inscriptos en 5K");
    console.log (participantesInscriptos5K);

    const participantesInscriptos10K = participantesInscriptos.filter ((inscripto) => inscripto.distancia == 10);
    console.log ("Participantes inscriptos en 10K");
    console.log (participantesInscriptos10K);

    const participantesInscriptos21K = participantesInscriptos.filter ((inscripto) => inscripto.distancia == 21);
    console.log ("Participantes inscriptos en 21K");
    console.log (participantesInscriptos21K);

    const participantesInscriptos42K = participantesInscriptos.filter ((inscripto) => inscripto.distancia == 42);
    console.log ("Participantes inscriptos en 42K");
    console.log (participantesInscriptos42K);
}







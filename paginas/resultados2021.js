const boton5 = document.querySelector("#btn5");
const boton10 = document.querySelector("#btn10");
const boton21 = document.querySelector("#btn21");
const boton42 = document.querySelector("#btn42");
const contenedor5 = document.querySelector(".fetch5");
const contenedor10 = document.querySelector(".fetch10");
const contenedor21 = document.querySelector(".fetch21");
const contenedor42 = document.querySelector(".fetch42");

const obtenerResultados5K = () => {
    fetch ("./resultados5K2021.json")
        .then (response => response.json())
        .then (result => {
            const resultados = result;
            resultados.forEach(element => {
                contenedor5.innerHTML += `
                <h5>${element.posicion} - ${element.nombre} - ${element.tiempo}<h5>`
            })
        })

}

const obtenerResultados10K = () => {
    fetch ("./resultados10K2021.json")
        .then (response => response.json())
        .then (result => {
            const resultados = result;
            resultados.forEach(element => {
                contenedor10.innerHTML += `
                <h5>${element.posicion} - ${element.nombre} - ${element.tiempo}<h5>`
            })
        })

}

const obtenerResultados21K = () => {
    fetch ("./resultados21K2021.json")
        .then (response => response.json())
        .then (result => {
            const resultados = result;
            resultados.forEach(element => {
                contenedor21.innerHTML += `
                <h5>${element.posicion} - ${element.nombre} - ${element.tiempo}<h5>`
            })
        })

}

const obtenerResultados42K = () => {
    fetch ("./resultados42K2021.json")
        .then (response => response.json())
        .then (result => {
            const resultados = result;
            resultados.forEach(element => {
                contenedor42.innerHTML += `
                <h5>${element.posicion} - ${element.nombre} - ${element.tiempo}<h5>`
            })
        })

}

boton5.onclick = () => {
    obtenerResultados5K()
}

boton10.onclick = () => {
    obtenerResultados10K()
}

boton21.onclick = () => {
    obtenerResultados21K()
}

boton42.onclick = () => {
    obtenerResultados42K()
}
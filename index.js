
/*let numero1 =10;
let numero2 = 20

console.log(numero1 + numero2);

var pelicula = {
    nombre: "IronMan",
    fechaEstreno: "2008-10-10",
    descripcion: "Pelicula de marvel"
}

var otraPelicula = {
    nombre: "Los vengadores",
    fechaEstreno: "2008-10-10",
    descripcion: "Pelicula de marvel"
}
pelicula.nombre = "Capitan America";

var misPeliculasFavoritas = [];
misPeliculasFavoritas.push(pelicula);
misPeliculasFavoritas.push(otraPelicula);

console.log(misPeliculasFavoritas);*/

//setTimeout(verMensaje,5000);

/*
setTimeout(() => {
    verMensaje();
},5000);

function verMensaje(){
    console.log("Soy el mensaje");
}
*/

var controlTiempo = false;

var pelicula = {
    nombre: "IronMan",
    fechaEstreno: "2008-10-10",
    descripcion: "Pelicula de marvel"
}

function testPromesa(){
    var promesa = new Promise((resolve,reject) => {
        setTimeout(() => {
            solucionPromesa(pelicula)
        },1000)
    });
    console.log("Estoy haciendo mas procesos");
    return promesa;
}

testPromesa().then((response) => {
    controlTiempo = true;
    console.log("La promesa respondio");
    console.log(response);
}).catch((error) => {
    controlTiempo = true;
    console.log("La promesa respondio error");
    console.log(error);
});

function solucionPromesa(data){
    controlTiempo = true;
}

imprimirContador();

function imprimirContador(){
    while(!controlTiempo){
        console.log("La promesa aun no se cumple");
    }
}
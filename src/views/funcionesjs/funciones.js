

let form = document.getElementById("formulario");
let field = document.getElementById("field")
let divA = document.getElementById("div-actores")
let contenedor = document.getElementById("con");

let director = document.getElementById("director");
let nompre_peli = document.getElementById("nombre-pelicula");
let lin = document.getElementById("link");
let reseña = document.getElementById("reseña");
let actores = document.getElementById("actores");
let año = document.getElementById("año");
let poster = document.getElementById("poster");

let ingresar = document.getElementById("ingresar");
let ingDiv = document.getElementById("agregar-div");

function añadir(){
    form.style.display = "flex";
}
function cerrarF(){
    form.style.display = "none";
}
$("#agregar").click(
function(){
    $("#formulario").show();
    }
);

$("#ingresar").click(
function(){
    $("#agregar-div").show();
    }
);

$("#div-poster").click(function(){
  $("#add-poster").trigger("click")
});

$("#añadirActor").click(function(){
    let div = document.createElement("div")
    let actor = document.createElement("input")
    actor.type = "text"
    actor.name = "actores"
    actor.id = "actores"
    actor.size = 25
    div.append(actor)
    divA.append(div)
})
$("#fullTspan").click(function(){
    $("#trailerDiv").hide()
})
function prueba(){
    alert("estoy llegando aqui")
}
function verTrailer(link,director,titulo,reseña,año,actor) {
    
    let divT = document.getElementById("trailerDiv")
    let trailer = document.getElementById("trailerV")

    let Director = document.getElementById("DirectorT")
    let Titulo = document.getElementById("TituloT")
    let Reseña = document.getElementById("ReseñaT")
    let Año = document.getElementById("AñoT") 
    let Actores = document.getElementById("ActoresT")

    Director.textContent = director
    Titulo.textContent = titulo
    Reseña.textContent = reseña
    Año.textContent = año
    Actores.textContent = actor

    trailer.src = link
    divT.style.display="flex"
    
}

function Buscarpeli(){
    let nombre = document.getElementById("NombrePeli")

    return nombre
}
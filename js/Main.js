/*Viligiardi Samuele 4B-IA */

//variabili grobali
let nInput          //Valore in input
let tentativi = 0
let numeroNascosto

//controllo esistenza record in local storage
if (localStorage.getItem("record") == null) {
    //quando una variabile inesistente viene ricercata si ottiene null
    //porto record a infinito per poterlo comparare con i tentativi
    localStorage.setItem("record",Infinity)
    console.info("\"record\" creato in local storage")
}
if(localStorage.getItem("record") == Infinity)
    document.getElementById("record").innerHTML = "..."
else document.getElementById("record").innerHTML = localStorage.getItem("record")

function setLocalStorage(){
    if(tentativi < localStorage.getItem("record")){
        localStorage.setItem("record",tentativi)
    }   
}

function creaRandom(){
    //Imposta il valore random
    numeroNascosto = parseInt(Math.random()*50 + 1)
    document.getElementById("numero").innerHTML = "Numero nascosto: " + numeroNascosto
    console.info("creaRandom() eseguito - Numero nascosto: " + numeroNascosto)
}
function setRandom(){
    //Salva il nuovo record se "tentativi < record"
    if(tentativi < localStorage.getItem("record")){
        localStorage.setItem("record",tentativi)
        document.getElementById("record").innerHTML = tentativi
    }
}

function compara(){
    var formInput = document.getElementById("input").value
    
    if(formInput < 1 || formInput > 50){
        console.warn("Valore non valido")
        document.getElementById("output").innerHTML = "Non valido"
    } else if (formInput == numeroNascosto) {
        document.getElementById("output").innerHTML = "Bravo hai indovinato!"
        setRandom()
        setLocalStorage()
        tentativi = 0
        document.getElementById("tentativi").innerHTML = tentativi
        creaRandom()
    } else if (formInput > numeroNascosto) {
        document.getElementById("output").innerHTML = "Più basso"
        tentativi++
        document.getElementById("tentativi").innerHTML = tentativi
    } else if (formInput < numeroNascosto) {
        document.getElementById("output").innerHTML = "Più alto"
        tentativi++
        document.getElementById("tentativi").innerHTML = tentativi
    } else console.warn("Errore nella comparazione")
    console.info("compara() eseguito")
}

function resetRecord(){
    localStorage.setItem("record",Infinity)
    document.getElementById("record").innerHTML = "..."
}
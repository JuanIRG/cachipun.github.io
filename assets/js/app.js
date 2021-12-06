"use strict"

document.getElementById("divJuego").style.display = 'none';
document.getElementById("sec-resul").style.display = 'none';

const btnPiedra = document.getElementById("btnPiedra");
const btnPapel = document.getElementById("btnPapel");
const btnTijera = document.getElementById("btnTijera");
var numJuegos = document.getElementById("cantJuegos").value;
var txtResultado = document.getElementById("resultados");
var userImg = document.getElementById("userImg");
var macImg = document.getElementById("macImg");

const piedra = 1;
const papel = 2;
const tijera = 3;

const empate = 0;
const perder = 1;
const ganar = 2;

var ganaste = 0;
var perdiste = 0;
var empataste = 0;


function inicio() {
    numJuegos = document.getElementById("cantJuegos").value;
    document.getElementById("secInicio").style.display = 'none';
    document.getElementById("divJuego").style.display = 'block';
    var jr = document.getElementById("juegosrestantes").innerHTML = numJuegos;
}
var jr = document.getElementById("juegosrestantes").innerHTML = numJuegos;
btnPiedra.addEventListener("click", () => {
    play(piedra)
});
btnPapel.addEventListener("click", () => {
    play(papel)
});
btnTijera.addEventListener("click", () => {
    play(tijera)
});


function verResultados() {
    document.getElementById("divJuego").style.display = 'none';
    document.getElementById("sec-resul").style.display = 'block';

    document.getElementById("p5").innerHTML = "ganaste " + ganaste + " veces" + " perdiste " + perdiste + " veces " + "empataste " + empataste + " veces";
}

function play(user, numJuegos) {
    numJuegos = document.getElementById("cantJuegos").value;
    if (numJuegos > 0) {
        numJuegos = numJuegos - 1;
        numJuegos = document.getElementById("cantJuegos").value = numJuegos;
        jr = document.getElementById("juegosrestantes").innerHTML = numJuegos;

        var opcmaquina = Math.floor(Math.random(1) * 3 + 1);
        userImg.src = "assets/img/" + user + ".png";

        txtResultado.innerHTML = "Pensando...";
        setTimeout(function () {
            var result = resultados(user, opcmaquina);
            macImg.src = "assets/img/" + opcmaquina + ".png";
            switch (result) {
                case empate:
                    setTimeout(function () {
                        txtResultado.innerHTML = "Haz Empatado!!!"
                    }, 500)
                    empataste = +empataste + 1;
                    document.getElementById("infoTie").innerHTML = empataste;

                    break;
                case ganar:
                    setTimeout(function () {
                        txtResultado.innerHTML = "Golpeaste duro! GANASTE!!"
                    }, 500)
                    ganaste = +ganaste + 1;
                    document.getElementById("infoWin").innerHTML = ganaste;

                    break;
                case perder:
                    setTimeout(function () {
                        txtResultado.innerHTML = "Te han golpeado! PERDISTE!!"
                    }, 500)
                    perdiste = perdiste + 1;
                    document.getElementById("infoLose").innerHTML = perdiste;


                    break;
            }
        }, 1500);
    } else {
        verResultados();
    }
}

function resultados(user, opcmaquina) {
    if (user == opcmaquina) {
        return empate;
    } else if (user === piedra) {
        if (opcmaquina === papel) return perder;
        if (opcmaquina === tijera) return ganar;
    } else if (user === papel) {
        if (opcmaquina === tijera) return perder;
        if (opcmaquina === piedra) return ganar;
    } else if (user == tijera) {
        if (opcmaquina === papel) return ganar;
        if (opcmaquina === piedra) return perder;
    }
}

function volver() {
    document.getElementById("secInicio").style.display = 'block';
    document.getElementById("divJuego").style.display = 'none';
}
var szinek = [
    "kek",
    "narancs",
    "sarga",
    "lila",
    "pink",
    "piros",
    "zold",
    "turkisz"
];

var tabla = [];
var sorok = 10;
var oszlopok = 10;
var eredmeny = 0;
var jelenlegi_mezo;
var cel_mezo;
var idoHatra = 60;
var piros = 0;
var narancs = 0;
var sarga = 0;
var zold = 0;
var turkisz = 0;
var kek = 0;
var lila = 0;
var pink = 0;
var zene = new Audio("hang/zene.mp3");
var streakHang = new Audio("hang/streak.mp3");
var szazHang = new Audio("hang/szaz.mp3")
var gombHang = new Audio("hang/gomb.mp3")
var startHang = new Audio("hang/start.mp3")
var vege = new Audio("hang/vege.mp3")
var toplista = window.localStorage;
let jatekosok = document.getElementById("lista");

function streak() {
    streakot();
    streaknegy();
    streakharom();
    document.getElementById("eredmeny").innerText = eredmeny.toString();
    document.getElementById("piros").innerText = piros.toString();
    document.getElementById("narancs").innerText = narancs.toString();
    document.getElementById("sarga").innerText = sarga.toString();
    document.getElementById("zold").innerText = zold.toString();
    document.getElementById("turkisz").innerText = turkisz.toString();
    document.getElementById("kek").innerText = kek.toString();
    document.getElementById("lila").innerText = lila.toString();
    document.getElementById("pink").innerText = pink.toString();
}

window.onload = function () {
    palyaBetoltes();
    toplistaFrissit();
    for (let i = 0; i <= 10; i++) {
        streak();
        frissit();
        ujKo();
        eredmeny = 0;
        piros = 0;
        narancs = 0;
        sarga = 0;
        zold = 0;
        turkisz = 0;
        kek = 0;
        lila = 0;
        pink = 0;
    }
}

function startJatek() {
    document.getElementById("jatekter").classList.remove('disabled');
    gombLenyomHang();
    document.getElementById("startGomb").classList.add('disabled');
    startHangJatsz();
    idoHatra=60;
    window.setInterval(function () {
        streak();
        szaz();
        frissit();
        ujKo();
    }, 70);


    let idozito = setInterval(function function1() {
        document.getElementById("ido").innerHTML = idoHatra + " s";

        if (--idoHatra < 0) {
            clearInterval(idozito);
            vegeHang();
            let jatekosNeve = getJatekosNeve();
            toplistahozAdd(jatekosNeve);
            document.getElementById("jatekter").classList.add('disabled');
            document.getElementById("startGomb").classList.remove('disabled');
        }
    }, 1000);
}

function szaz() {
    if (piros >= 10) {
        document.getElementById("piroskep").classList.remove('szaz');
        piros = 0;
        eredmeny += 100;
        idoHatra += 10;
        szazPontHang();
        document.getElementById("piroskep").classList.add('szaz');
    }
    if (narancs >= 10) {
        document.getElementById("narancskep").classList.remove('szaz');
        narancs = 0;
        eredmeny += 100;
        idoHatra += 10;
        szazPontHang();
        document.getElementById("narancskep").classList.add('szaz');
    }
    if (sarga >= 10) {
        document.getElementById("sargakep").classList.remove('szaz');
        sarga = 0;
        eredmeny += 100;
        idoHatra += 10;
        szazPontHang();
        document.getElementById("sargakep").classList.add('szaz');
    }
    if (zold >= 10) {
        document.getElementById("zoldkep").classList.remove('szaz');
        zold = 0;
        eredmeny += 100;
        idoHatra += 10;
        szazPontHang();
        document.getElementById("zoldkep").classList.add('szaz');
    }
    if (kek >= 10) {
        document.getElementById("kekkep").classList.remove('szaz');
        kek = 0;
        eredmeny += 100;
        idoHatra += 10;
        szazPontHang();
        document.getElementById("kekkep").classList.add('szaz');
    }
    if (turkisz >= 10) {
        document.getElementById("turkiszkep").classList.remove('szaz');
        turkisz = 0;
        eredmeny += 100;
        idoHatra += 10;
        szazPontHang();
        document.getElementById("turkiszkep").classList.add('szaz');
    }
    if (lila >= 10) {
        document.getElementById("lilakep").classList.remove('szaz');
        lila = 0;
        eredmeny += 100;
        idoHatra += 10;
        szazPontHang();
        document.getElementById("lilakep").classList.add('szaz');
    }
    if (pink >= 10) {
        document.getElementById("pinkkep").classList.remove('szaz');
        pink = 0;
        eredmeny += 100;
        idoHatra += 10;
        szazPontHang();
        document.getElementById("pinkkep").classList.add('szaz');
    }
}

function getJatekosNeve() {
    let alertUzenet = "Adja meg a nevét!"
    while (true) {
        let jatekosNeve = prompt(alertUzenet, "jatekos");
        if (toplista.getItem(jatekosNeve) === null) {
            return jatekosNeve;
        }
        alertUzenet = "A név foglalt, kérem adjon meg egy másikat!"
    }
}

function toplistahozAdd(nev) {
    toplista.setItem(nev, eredmeny + "");
    toplistaFrissit();
}

function toplistaFrissit() {
    let tomb = [];
    jatekosok.innerHTML = "";
    for (let i = 0; i < localStorage.length; i++) {
        tomb[i] = [localStorage.key(i), localStorage.getItem(localStorage.key(i))];
    }
    tomb.sort(function (a, b) {
        return b[1] - a[1];
    });

    for (let i = 0; i < tomb.length; i++) {
        uj = document.createElement("li");
        uj.innerText = tomb[i].toString().replaceAll(',', ': ');
        jatekosok.appendChild(uj);
    }
}

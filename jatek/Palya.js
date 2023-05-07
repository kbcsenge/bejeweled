function randomKo() {
    return szinek[Math.floor(Math.random() * szinek.length)];
}

function palyaBetoltes() {
    for (let i = 0; i < sorok; i++) {
        let sor = [];
        for (let j = 0; j < oszlopok; j++) {
            let mezo = document.createElement("img");
            mezo.id = i.toString() + "-" + j.toString();
            mezo.src = "./kepek/dragakovek/" + randomKo() + ".png";
            mezo.addEventListener("dragstart", dragStart);
            mezo.addEventListener("dragover", dragOver);
            mezo.addEventListener("dragenter", dragEnter);
            mezo.addEventListener("drop", dragDrop);
            mezo.addEventListener("dragend", dragEnd);

            document.getElementById("jatekter").append(mezo);
            sor.push(mezo);
        }
        tabla.push(sor);
    }
    console.log(tabla);
}

function frissit() {
    for (let i = 0; i < oszlopok; i++) {
        let index = sorok - 1;
        for (let j = oszlopok - 1; j >= 0; j--) {
            if (!tabla[j][i].src.includes("streaked")) {
                tabla[index][i].src = tabla[j][i].src;
                index -= 1;
            }
        }

        for (let z = index; z >= 0; z--) {
            tabla[z][i].src = "./kepek/egyeb/streaked.png";
        }
    }
}

function ujKo() {
    for (let i = 0; i < oszlopok; i++) {
        if (tabla[0][i].src.includes("streaked")) {
            tabla[0][i].src = "./kepek/dragakovek/" + randomKo() + ".png";
        }
    }
}
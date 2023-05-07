function dragStart() {
    jelenlegi_mezo = this;
}

function dragOver(eset) {
    eset.preventDefault();
}

function dragEnter(eset) {
    eset.preventDefault();
}

function dragDrop() {
    cel_mezo = this;
}

function dragEnd() {
    if (jelenlegi_mezo.src.includes("streaked") || cel_mezo.src.includes("streaked")) {
        return;
    }
    let jelen = jelenlegi_mezo.id.split("-");
    let s = parseInt(jelen[0]);
    let m = parseInt(jelen[1]);
    let otherCoords = cel_mezo.id.split("-");
    let ss = parseInt(otherCoords[0]);
    let mm = parseInt(otherCoords[1]);
    let balszomszed = mm === m - 1 && s === ss;
    let jobbszomszed = mm === m + 1 && s === ss;
    let felsoszomszed = ss === s - 1 && m === mm;
    let alsoszomszed = ss === s + 1 && m === mm;
    let szomszed = balszomszed || jobbszomszed || felsoszomszed || alsoszomszed;
    if (szomszed) {
        let ez = jelenlegi_mezo.src;
        jelenlegi_mezo.src = cel_mezo.src;
        cel_mezo.src = ez;
        let szabadlepni = helyesLepes();
        if (!szabadlepni) {
            let ez = jelenlegi_mezo.src;
            jelenlegi_mezo.src = cel_mezo.src;
            cel_mezo.src = ez;
        }
    }
}
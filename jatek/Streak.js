function streakharom() {
    for (let i = 0; i < sorok; i++) {
        for (let j = 0; j < oszlopok - 2; j++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i][j + 1];
            let jew3 = tabla[i][j + 2];
            if (jew1.src === jew2.src && jew2.src === jew3.src && !jew1.src.includes("streaked")) {
                switch (jew1.src.split(/[/]+/).pop()) {
                    case "piros.png":
                        piros += 3;
                        break
                    case "sarga.png":
                        sarga += 3;
                        break
                    case "narancs.png":
                        narancs += 3;
                        break
                    case "zold.png":
                        zold += 3;
                        break
                    case "turkisz.png":
                        turkisz += 3;
                        break
                    case "kek.png":
                        kek += 3;
                        break
                    case "lila.png":
                        lila += 3;
                        break
                    case "pink.png":
                        pink += 3;
                        break
                }
                streakHangJatsz();
                jew1.src = "./kepek/egyeb/streaked.png";
                jew2.src = "./kepek/egyeb/streaked.png";
                jew3.src = "./kepek/egyeb/streaked.png";
                eredmeny += 5;
            }
        }
    }

    for (let j = 0; j < oszlopok; j++) {
        for (let i = 0; i < sorok - 2; i++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i + 1][j];
            let jew3 = tabla[i + 2][j];
            if (jew1.src === jew2.src && jew2.src === jew3.src && !jew1.src.includes("streaked")) {
                switch (jew1.src.split(/[/]+/).pop()) {
                    case "piros.png":
                        piros += 3;
                        break
                    case "sarga.png":
                        sarga += 3;
                        break
                    case "narancs.png":
                        narancs += 3;
                        break
                    case "zold.png":
                        zold += 3;
                        break
                    case "turkisz.png":
                        turkisz += 3;
                        break
                    case "kek.png":
                        kek += 3;
                        break
                    case "lila.png":
                        lila += 3;
                        break
                    case "pink.png":
                        pink += 3;
                        break
                }
                streakHangJatsz();
                jew1.src = "./kepek/egyeb/streaked.png";
                jew2.src = "./kepek/egyeb/streaked.png";
                jew3.src = "./kepek/egyeb/streaked.png";
                eredmeny += 5;
            }
        }
    }
}

function streaknegy() {
    for (let i = 0; i < sorok; i++) {
        for (let j = 0; j < oszlopok - 3; j++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i][j + 1];
            let jew3 = tabla[i][j + 2];
            let jew4 = tabla[i][j + 3];
            if (jew1.src === jew2.src && jew2.src === jew3.src && jew3.src === jew4.src && !jew1.src.includes("streaked")) {
                switch (jew1.src.split(/[/]+/).pop()) {
                    case "piros.png":
                        piros += 4;
                        break
                    case "sarga.png":
                        sarga += 4;
                        break
                    case "narancs.png":
                        narancs += 4;
                        break
                    case "zold.png":
                        zold += 4;
                        break
                    case "turkisz.png":
                        turkisz += 4;
                        break
                    case "kek.png":
                        kek += 4;
                        break
                    case "lila.png":
                        lila += 4;
                        break
                    case "pink.png":
                        pink += 4;
                        break
                }
                streakHangJatsz();
                jew1.src = "./kepek/egyeb/streaked.png";
                jew2.src = "./kepek/egyeb/streaked.png";
                jew3.src = "./kepek/egyeb/streaked.png";
                jew4.src = "./kepek/egyeb/streaked.png";
                eredmeny += 10;
            }
        }
    }

    for (let j = 0; j < oszlopok; j++) {
        for (let i = 0; i < sorok - 3; i++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i + 1][j];
            let jew3 = tabla[i + 2][j];
            let jew4 = tabla[i + 3][j];
            if (jew1.src === jew2.src && jew2.src === jew3.src && jew3.src === jew4.src && !jew1.src.includes("streaked")) {
                switch (jew1.src.split(/[/]+/).pop()) {
                    case "piros.png":
                        piros += 4;
                        break
                    case "sarga.png":
                        sarga += 4;
                        break
                    case "narancs.png":
                        narancs += 4;
                        break
                    case "zold.png":
                        zold += 4;
                        break
                    case "turkisz.png":
                        turkisz += 4;
                        break
                    case "kek.png":
                        kek += 4;
                        break
                    case "lila.png":
                        lila += 4;
                        break
                    case "pink.png":
                        pink += 4;
                        break
                }
                streakHangJatsz();
                jew1.src = "./kepek/egyeb/streaked.png";
                jew2.src = "./kepek/egyeb/streaked.png";
                jew3.src = "./kepek/egyeb/streaked.png";
                jew4.src = "./kepek/egyeb/streaked.png";
                eredmeny += 10;
            }
        }
    }
}

function streakot() {
    for (let i = 0; i < sorok; i++) {
        for (let j = 0; j < oszlopok - 4; j++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i][j + 1];
            let jew3 = tabla[i][j + 2];
            let jew4 = tabla[i][j + 3];
            let jew5 = tabla[i][j + 4];
            if (jew1.src === jew2.src && jew2.src === jew3.src && jew3.src === jew4.src && jew4.src === jew5.src && !jew1.src.includes("streaked")) {
                switch (jew1.src.split(/[/]+/).pop()) {
                    case "piros.png":
                        piros += 5;
                        break
                    case "sarga.png":
                        sarga += 5;
                        break
                    case "narancs.png":
                        narancs += 5;
                        break
                    case "zold.png":
                        zold += 5;
                        break
                    case "turkisz.png":
                        turkisz += 5;
                        break
                    case "kek.png":
                        kek += 5;
                        break
                    case "lila.png":
                        lila += 5;
                        break
                    case "pink.png":
                        pink += 5;
                        break
                }
                streakHangJatsz();
                jew1.src = "./kepek/egyeb/streaked.png";
                jew2.src = "./kepek/egyeb/streaked.png";
                jew3.src = "./kepek/egyeb/streaked.png";
                jew4.src = "./kepek/egyeb/streaked.png";
                jew5.src = "./kepek/egyeb/streaked.png";
                eredmeny += 20;
            }
        }
    }

    for (let j = 0; j < oszlopok; j++) {
        for (let i = 0; i < sorok - 4; i++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i + 1][j];
            let jew3 = tabla[i + 2][j];
            let jew4 = tabla[i + 3][j];
            let jew5 = tabla[i + 4][j];
            if (jew1.src === jew2.src && jew2.src === jew3.src && jew3.src === jew4.src && jew4.src === jew5.src && !jew1.src.includes("streaked")) {
                switch (jew1.src.split(/[/]+/).pop()) {
                    case "piros.png":
                        piros += 5;
                        break
                    case "sarga.png":
                        sarga += 5;
                        break
                    case "narancs.png":
                        narancs += 5;
                        break
                    case "zold.png":
                        zold += 5;
                        break
                    case "turkisz.png":
                        turkisz += 5;
                        break
                    case "kek.png":
                        kek += 5;
                        break
                    case "lila.png":
                        lila += 5;
                        break
                    case "pink.png":
                        pink += 5;
                        break
                }
                streakHangJatsz();
                jew1.src = "./kepek/egyeb/streaked.png";
                jew2.src = "./kepek/egyeb/streaked.png";
                jew3.src = "./kepek/egyeb/streaked.png";
                jew4.src = "./kepek/egyeb/streaked.png";
                jew5.src = "./kepek/egyeb/streaked.png";
                eredmeny += 20;
            }
        }
    }
}

function helyesLepes() {
    for (let i = 0; i < sorok; i++) {
        for (let j = 0; j < oszlopok - 2; j++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i][j + 1];
            let jew3 = tabla[i][j + 2];
            if (jew1.src === jew2.src && jew2.src === jew3.src && !jew1.src.includes("streaked")) {
                return true;
            }
        }
    }

    for (let j = 0; j < oszlopok; j++) {
        for (let i = 0; i < sorok - 2; i++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i + 1][j];
            let jew3 = tabla[i + 2][j];
            if (jew1.src === jew2.src && jew2.src === jew3.src && !jew1.src.includes("streaked")) {
                return true;
            }
        }
    }

    for (let i = 0; i < sorok; i++) {
        for (let j = 0; j < oszlopok - 3; j++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i][j + 1];
            let jew3 = tabla[i][j + 2];
            let jew4 = tabla[i][j + 3];
            if (jew1.src === jew2.src && jew2.src === jew3.src && jew3.src === jew4.src && !jew1.src.includes("streaked")) {
                return true;
            }
        }
    }

    for (let j = 0; j < oszlopok; j++) {
        for (let i = 0; i < sorok - 3; i++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i + 1][j];
            let jew3 = tabla[i + 2][j];
            let jew4 = tabla[i + 3][j];
            if (jew1.src === jew2.src && jew2.src === jew3.src && jew3.src === jew4.src && !jew1.src.includes("streaked")) {
                return true;
            }
        }
    }

    for (let i = 0; i < sorok; i++) {
        for (let j = 0; j < oszlopok - 4; j++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i][j + 1];
            let jew3 = tabla[i][j + 2];
            let jew4 = tabla[i][j + 3];
            let jew5 = tabla[i][j + 4];
            if (jew1.src === jew2.src && jew2.src === jew3.src && jew3.src === jew4.src && jew4.src === jew5.src && !jew1.src.includes("streaked")) {
                return true;
            }
        }
    }

    for (let j = 0; j < oszlopok; j++) {
        for (let i = 0; i < sorok - 4; i++) {
            let jew1 = tabla[i][j];
            let jew2 = tabla[i + 1][j];
            let jew3 = tabla[i + 2][j];
            let jew4 = tabla[i + 3][j];
            let jew5 = tabla[i + 4][j];
            if (jew1.src === jew2.src && jew2.src === jew3.src && jew3.src === jew4.src && jew4.src === jew5.src && !jew1.src.includes("streaked")) {
                return true;
            }
        }
    }
    return false;
}
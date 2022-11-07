const check1 = document.getElementById("inlineCheckbox1");
const check2 = document.getElementById("inlineCheckbox2");
const check3 = document.getElementById("inlineCheckbox3");
const check4 = document.getElementById("inlineCheckbox4");
const check5 = document.getElementById("inlineCheckbox5");
const check6 = document.getElementById("inlineCheckbox6");
const check7 = document.getElementById("inlineCheckbox7");
const check8 = document.getElementById("inlineCheckbox8");
const check9 = document.getElementById("inlineCheckbox9");
const check10 = document.getElementById("inlineCheckbox10");
const check21 = document.getElementById("inlineCheckbox21");
const check22 = document.getElementById("inlineCheckbox22");
const check23 = document.getElementById("inlineCheckbox23");
const check24 = document.getElementById("inlineCheckbox24");
const check25 = document.getElementById("inlineCheckbox25");
const check26 = document.getElementById("inlineCheckbox26");
const check27 = document.getElementById("inlineCheckbox27");
const check28 = document.getElementById("inlineCheckbox28");
const check29 = document.getElementById("inlineCheckbox29");
const check210 = document.getElementById("inlineCheckbox210");
const check31 = document.getElementById("inlineCheckbox31");
const check32 = document.getElementById("inlineCheckbox32");
const check33 = document.getElementById("inlineCheckbox33");
const check34 = document.getElementById("inlineCheckbox34");
const check35 = document.getElementById("inlineCheckbox35");
const check36 = document.getElementById("inlineCheckbox36");
const check37 = document.getElementById("inlineCheckbox37");
const check38 = document.getElementById("inlineCheckbox38");
const check39 = document.getElementById("inlineCheckbox39");
const check310 = document.getElementById("inlineCheckbox310");
const check41 = document.getElementById("inlineCheckbox41");
const check42 = document.getElementById("inlineCheckbox42");
const check43 = document.getElementById("inlineCheckbox43");
const check44 = document.getElementById("inlineCheckbox44");
const check45 = document.getElementById("inlineCheckbox45");
const check46 = document.getElementById("inlineCheckbox46");
const check47 = document.getElementById("inlineCheckbox47");
const check48 = document.getElementById("inlineCheckbox48");
const check49 = document.getElementById("inlineCheckbox49");
const check410 = document.getElementById("inlineCheckbox410");
const check51 = document.getElementById("inlineCheckbox51");
const check52 = document.getElementById("inlineCheckbox52");
const check53 = document.getElementById("inlineCheckbox53");
const check54 = document.getElementById("inlineCheckbox54");
const check55 = document.getElementById("inlineCheckbox55");
const check56 = document.getElementById("inlineCheckbox56");
const check57 = document.getElementById("inlineCheckbox57");
const check58 = document.getElementById("inlineCheckbox58");
const check59 = document.getElementById("inlineCheckbox59");
const check510 = document.getElementById("inlineCheckbox510");
const check61 = document.getElementById("inlineCheckbox61");
const check62 = document.getElementById("inlineCheckbox62");
const check63 = document.getElementById("inlineCheckbox63");
const check64 = document.getElementById("inlineCheckbox64");
const check65 = document.getElementById("inlineCheckbox65");
const check66 = document.getElementById("inlineCheckbox66");
const check67 = document.getElementById("inlineCheckbox67");
const check68 = document.getElementById("inlineCheckbox68");
const check69 = document.getElementById("inlineCheckbox69");
const check610 = document.getElementById("inlineCheckbox610");

const btn = document.querySelector("[data-button-enviar]");
const resultado = document.querySelector("[data-div-resultado]");
const resc1 = document.querySelector("[data-div-resultado-checkbox1]");
const resc2 = document.querySelector("[data-div-resultado-checkbox2]");
const resc3 = document.querySelector("[data-div-resultado-checkbox3]");
const resc4 = document.querySelector("[data-div-resultado-checkbox4]");
const resc5 = document.querySelector("[data-div-resultado-checkbox5]");
const resc6 = document.querySelector("[data-div-resultado-checkbox6]");
let titulo = "FORMULARIO DE AVALIAÇÃO DO RECICASH";
let i2 = 0
// botao.style.visibility='visible';

function writeText2() {
    document.querySelector("[data-div-titulo]").innerText = titulo.slice(0, i2);
    i2++
    // if (i2 > titulo.length) {
    //     i2 = 0;
    // }
}
setInterval(writeText2, 79);

btn.addEventListener("click", () => {
    const nome = document.querySelector("[data-input-nome]").value;
    let text = "Obrigado " + nome + " pelo seu feedbeck feito, confira sua avaliação abaixo!";
    let i = 0;


    function writeText() {
        document.querySelector("[data-div-resultado]").innerText = text.slice(0, i);
        i++
        // if (i > text.length) {
        //     i = 0;
        // }
    }
    setInterval(writeText, 79);



    let r1 = 0;
    let r2 = 0;
    let r3 = 0;
    let r4 = 0;
    let r5 = 0;
    let r6 = 0;
    const bloco1 = (check) => {
        if (check.checked) {
            if (check1.checked) {
                r1 = 1;
            } else if (check2.checked) {
                r1 = 2;
            } else if (check3.checked) {
                r1 = 3;
            } else if (check4.checked) {
                r1 = 4;
            } else if (check5.checked) {
                r1 = 5;
            } else if (check6.checked) {
                r1 = 6;
            } else if (check7.checked) {
                r1 = 7;
            } else if (check8.checked) {
                r1 = 8;
            } else if (check9.checked) {
                r1 = 9;
            } else if (check10.checked) {
                r1 = 10;
            }
        }
        resc1.innerHTML = `<p> Na questão 1, foi selecionado <strong>${r1}</strong>.</p>`;
    }
    const bloco2 = (check) => {

        if (check.checked) {
            if (check21.checked) {
                r2 = 1;
            } else if (check22.checked) {
                r2 = 2;
            } else if (check23.checked) {
                r2 = 3;
            } else if (check24.checked) {
                r2 = 4;
            } else if (check25.checked) {
                r2 = 5;
            } else if (check26.checked) {
                r2 = 6;
            } else if (check27.checked) {
                r2 = 7;
            } else if (check28.checked) {
                r2 = 8;
            } else if (check29.checked) {
                r2 = 9;
            } else if (check210.checked) {
                r2 = 10;
            }
        }
        resc2.innerHTML = `<p> Na questão 2, foi selecionado <strong>${r2}</strong>.</p>`;
    }

    const bloco3 = (check) => {
        if (check.checked) {
            if (check31.checked) {
                r3 = 1;
            } else if (check32.checked) {
                r3 = 2;
            } else if (check33.checked) {
                r3 = 3;
            } else if (check34.checked) {
                r3 = 4;
            } else if (check35.checked) {
                r3 = 5;
            } else if (check36.checked) {
                r3 = 6;
            } else if (check37.checked) {
                r3 = 7;
            } else if (check38.checked) {
                r3 = 8;
            } else if (check39.checked) {
                r3 = 9;
            } else if (check310.checked) {
                r3 = 10;
            }
        }
        resc3.innerHTML = `<p> Na questão 3, foi selecionado <strong>${r3}</strong>.</p>`;

    }
    const bloco4 = (check) => {
        if (check.checked) {
            if (check41.checked) {
                r4 = 1;
            } else if (check42.checked) {
                r4 = 2;
            } else if (check43.checked) {
                r4 = 3;
            } else if (check44.checked) {
                r4 = 4;
            } else if (check45.checked) {
                r4 = 5;
            } else if (check46.checked) {
                r4 = 6;
            } else if (check47.checked) {
                r4 = 7;
            } else if (check48.checked) {
                r4 = 8;
            } else if (check49.checked) {
                r4 = 9;
            } else if (check410.checked) {
                r4 = 10;
            }
        }
        resc4.innerHTML = `<p> Na questão 4, foi selecionado <strong>${r4}</strong>.</p>`;

    }
    const bloco5 = (check) => {
        if (check.checked) {
            if (check51.checked) {
                r5 = 1;
            } else if (check52.checked) {
                r5 = 2;
            } else if (check53.checked) {
                r5 = 3;
            } else if (check54.checked) {
                r5 = 4;
            } else if (check55.checked) {
                r5 = 5;
            } else if (check56.checked) {
                r5 = 6;
            } else if (check57.checked) {
                r5 = 7;
            } else if (check58.checked) {
                r5 = 8;
            } else if (check59.checked) {
                r5 = 9;
            } else if (check510.checked) {
                r5 = 10;
            }
        }
        resc5.innerHTML = `<p> Na questão 5, foi selecionado <strong>${r5}</strong>.</p>`;

    }
    const bloco6 = (check) => {
        if (check.checked) {
            if (check61.checked) {
                r6 = 1;
            } else if (check62.checked) {
                r6 = 2;
            } else if (check63.checked) {
                r6 = 3;
            } else if (check64.checked) {
                r6 = 4;
            } else if (check65.checked) {
                r6 = 5;
            } else if (check66.checked) {
                r6 = 6;
            } else if (check67.checked) {
                r6 = 7;
            } else if (check68.checked) {
                r6 = 8;
            } else if (check69.checked) {
                r6 = 9;
            } else if (check610.checked) {
                r6 = 10;
            }
        }
        resc6.innerHTML = `<p> Na questão 6, foi selecionado <strong>${r6}</strong>.</p>`;
    }
    //bloco 1
    bloco1(check1);
    bloco1(check2);
    bloco1(check3);
    bloco1(check4);
    bloco1(check5);
    bloco1(check6);
    bloco1(check7);
    bloco1(check8);
    bloco1(check9);
    bloco1(check10);
    //bloco 2
    bloco2(check21);
    bloco2(check22);
    bloco2(check23);
    bloco2(check24);
    bloco2(check25);
    bloco2(check26);
    bloco2(check27);
    bloco2(check28);
    bloco2(check29);
    bloco2(check210);
    // bloco 3
    bloco3(check31);
    bloco3(check32);
    bloco3(check33);
    bloco3(check34);
    bloco3(check35);
    bloco3(check36);
    bloco3(check37);
    bloco3(check38);
    bloco3(check39);
    bloco3(check310);
    //block 4
    bloco4(check41);
    bloco4(check42);
    bloco4(check43);
    bloco4(check44);
    bloco4(check45);
    bloco4(check46);
    bloco4(check47);
    bloco4(check48);
    bloco4(check49);
    bloco4(check410);
    //block 5
    bloco5(check51);
    bloco5(check52);
    bloco5(check53);
    bloco5(check54);
    bloco5(check55);
    bloco5(check56);
    bloco5(check57);
    bloco5(check58);
    bloco5(check59);
    bloco5(check510);
    //bloco 6
    bloco6(check61);
    bloco6(check62);
    bloco6(check63);
    bloco6(check64);
    bloco6(check65);
    bloco6(check66);
    bloco6(check67);
    bloco6(check68);
    bloco6(check69);
    bloco6(check610);
    if (r1 == 0 || r2 == 0 || r3 == 0 || r4 == 00 || r5 == 0 || r6 == 0) {
        alert("Está faltando dados, preencha os campos corretamente!");
    }
    const heightPage = document.body.scrollHeight;
    window.scrollTo(0, heightPage);
});

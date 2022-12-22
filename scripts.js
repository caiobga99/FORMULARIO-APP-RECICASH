const btn = document.querySelector("[data-button-enviar]");
const resultado = document.querySelector("[data-div-resultado]");
const reset = document.querySelector("[data-button-reset]");
const titulo = "FORMULARIO DE AVALIAÇÃO DO RECICASH";
let index = 0;
let i = "";
const writeTittle = () => {
    document.querySelector("[data-div-titulo]").innerText = titulo.slice(0, index);
    index++;
}
setInterval(writeTittle, 79);
btn.addEventListener("click", () => {
    resultado.innerText = "";
    const checkboxes = document.querySelectorAll(".form-check-input:checked");
    const values = [];
    const nome = document.querySelector("[data-input-nome]").value;
    const text = "Obrigado " + nome + " pelo seu feedbeck feito, confira sua avaliação abaixo!";

    checkboxes.forEach((checkbox) => {
        values.push(checkbox.value);
        if (nome == false) {
            resultado.innerHTML += `<div class="quest-resultado"> <strong>${checkbox.value}</strong></div>`;
        } else {
            resultado.innerHTML += `<div class="quest-resultado"> <strong>${nome} Selecionou ${checkbox.value}</strong></div>`;
        }
    });
    if (values.length < 6) {
        alert("Sua avaliação não pode ser salva, Preencha os campos corretamente!")
        values.splice(0, values.length);
        resultado.innerHTML = `<div class="quest-resultado-erro">  Não consegui fazer sua avaliação, preencha todos os campos e tente novamente!</div>`;
    } else {
        i = 0;
        const writeText = () => {
            if (i > text.length) {
                return;
            }
            document.querySelector("[data-div-resultado-feedback]").innerText = text.slice(0, i);
            i++;
        }
        setInterval(writeText, 79);
    }
    const heightPage = document.body.scrollHeight;
    window.scrollTo(0, heightPage);
    console.log(values);
});  
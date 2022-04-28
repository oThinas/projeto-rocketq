import Modal from './modal.js'

const modal = Modal()
const modalTitulo = document.querySelector(".modal h2")
const modalParagrafo = document.querySelector(".modal p")
const modalConfirmar = document.querySelector(".modal button")

const marcarButtons = document.querySelectorAll(".acoes a.marcar")
marcarButtons.forEach(button => {
    button.addEventListener("click", click)
})

const deletarButton = document.querySelectorAll(".acoes a.apagar")
deletarButton.forEach(button => {
    // Aqui foi necessário passar a arrow function porque além do parâmetro event (que já é passado automaticamente), é passado o parâmetro "marcar" como "false"
    button.addEventListener("click", (event) => click(event, false))
})

function click(event, marcar = true) {
    modalTitulo.innerHTML = marcar ? "Marcar como lida" : "Excluir pergunta"
    modalParagrafo.innerHTML = marcar ? "Tem certeza que você deseja marcar esta pergunta como lida?" : "Tem certeza que você deseja excluir esta pergunta?"
    modalConfirmar.innerHTML = marcar ? "Sim, marcar" : "Sim, excluir"

    // TODO
    // Não funciona, pedir ajuda
    // if (check == true){
    //     modalConfirmar.classList.replace("red", "button")
    // } else {
    //     modalConfirmar.classList.replace("button", "red")
    // }
    modal.abrir()
}
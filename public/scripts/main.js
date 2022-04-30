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
    event.preventDefault()

    const salaId = document.querySelector("#sala-id").dataset.id
    const perguntaId = event.target.dataset.id
    const acao = marcar ? "marcar" : "apagar"
    const form = document.querySelector(".modal form")
    form.setAttribute("action", `/pergunta/${salaId}/${perguntaId}/${acao}`)

    const texto = marcar ? "marcar como lida" : "excluir"
    modalTitulo.innerHTML = marcar ? "Marcar como lida" : "Excluir pergunta"
    modalParagrafo.innerHTML = `Tem certeza que você deseja ${texto} esta pergunta?`
    modalConfirmar.innerHTML = `Sim, ${texto}`
    marcar ? modalConfirmar.classList.remove("red") : modalConfirmar.classList.add("red")

    modal.abrir()
}
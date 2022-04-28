import Modal from './modal.js'

const modal = Modal()

const marcarButtons = document.querySelectorAll(".acoes a.marcar")
marcarButtons.forEach(button => {
    button.addEventListener("click", () => {
        modal.abrir()
    })
})

const deletarButton = document.querySelectorAll(".acoes a.apagar")
deletarButton.forEach(button => {
    button.addEventListener("click", () => {
        modal.abrir()
    })
})
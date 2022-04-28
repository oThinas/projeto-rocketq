export default function Modal() {
    const modalBox = document.querySelector('.modal-box')
    const cancelarButton = document.querySelector(".button.cancelar")
    cancelarButton.addEventListener("click", fechar)

    function abrir() {
        modalBox.classList.add('ativa')
    }

    function fechar() {
        modalBox.classList.remove('ativa')
    }

    return {
        abrir,
        fechar
    }
}
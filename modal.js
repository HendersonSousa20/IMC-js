export const Modal = {

    Wrapper: document.querySelector('.modal-wrapper'),
    message: document.querySelector('.modal .title span'),
    buttonClose: document.querySelector('.modal button.close'),
  
  
    open() {
       Modal.Wrapper.classList.add('open')
    },
    close() {
       Modal.Wrapper.classList.remove('open')
    }
  }

  Modal.buttonClose.onclick = () => {
    Modal.close()
  }

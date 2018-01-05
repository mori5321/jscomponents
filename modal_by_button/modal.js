class Modal {
  constructor(modal, overlay) {
    this.overlay = overlay;
    this.modal = modal
    let closeButton = modal.querySelector('.button-close')

    closeButton.addEventListener('click', this.close.bind(this));

    overlay.addEventListener('click', e=> {
      if (e.srcElement.id === this.overlay.id) {
        this.close();
      }
    });
  }

  open() {
    this.overlay.classList.remove('is-hidden');
    this.modal.classList.remove('is-hidden')
  }

  close() {
    this.overlay.classList.add('is-hidden');
    this.modal.classList.add('is-hidden');
  }
}

var modal = document.querySelector('.modal');
var overlay = document.querySelector('.modal-overlay');
var modal = new Modal(modal, overlay);
window.openModal = modal.open.bind(modal);

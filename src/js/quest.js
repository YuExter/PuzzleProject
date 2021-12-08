export class Quest {
  constructor() {
    this.rebuses = [];
    this.rebusImage = null;
    this.form = null;
    this.variantInput = null;
    this.step = 0;
    this.isValidAnswer = false;
  }

  init(rebuses) {
    const rebusImage = document.getElementById('rebus-image');
    const form = document.getElementById('quest-form');
    const variantInput = document.getElementById('variant-field');

    this.rebuses = rebuses;
    this.rebusImage = rebusImage;
    this.form = form;
    this.variantInput = variantInput;

    this.subscribeOnFormChange();
    this.start();
  }

  start() {
    console.log('quest is started', this.rebuses);
  }

  subscribeOnFormChange() {
    if (!this.form) {
      return;
    }

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const variantValue = formData.fd.get('variant');

      if (!this.variantInput) {
        return;
      }

      this.validateAnswerField(variantValue);

      if (!this.isValidAnswer) {
        return;
      }

      this.nextStep();

      console.log('variantValue', variantValue);
    });
  }

  validateAnswerField(value) {
    if (value !== this.rebuses[this.step].answer) {
      this.variantInput.classList.remove('is-valid');
      this.variantInput.classList.add('is-invalid');

      this.isValidAnswer = false;
    } else {
      this.variantInput.classList.remove('is-invalid');
      this.variantInput.classList.add('is-valid');

      this.isValidAnswer = true;
    }
  }

  nextStep() {
    if (this.isLastStep()) {
      return;
    }

    this.step += 1;

    this.nextRebus();
  }

  nextRebus() {
    if (this.isLastStep()) {
      return;
    }

    this.rebusImage.src = this.rebuses[this.step].image;
  }

  isLastStep() {
    return this.step === this.rebuses.length;
  }
}

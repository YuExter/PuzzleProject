import { TIMER_DURATION } from '../constants/settings';
import { Timer } from './timer';
import successImage from '../../assets/success.png';

export class Quest {
  constructor() {
    this.startButton = null;
    this.countdown = null;
    this.questWrapper = null;
    this.rebuses = [];
    this.rebusImage = null;
    this.form = null;
    this.variantInput = null;
    this.progressWrapper = null;
    this.wastedWrapper = null;
    this.successWrapper = null;
    this.step = 0;
    this.isValidAnswer = false;

    this.timer = new Timer();
  }

  init(rebuses) {
    const startButton = document.getElementById('start-btn');
    const countdown = document.getElementById('countdown');
    const questWrapper = document.getElementById('quest');
    const rebusImage = document.getElementById('rebus-image');
    const form = document.getElementById('quest-form');
    const variantInput = document.getElementById('variant-field');
    const progressWrapper = document.getElementById('progress');
    const wastedWrapper = document.getElementById('wasted');
    const successWrapper = document.getElementById('success');

    this.startButton = startButton;
    this.countdown = countdown;
    this.questWrapper = questWrapper;
    this.rebuses = rebuses;
    this.rebusImage = rebusImage;
    this.form = form;
    this.variantInput = variantInput;
    this.progressWrapper = progressWrapper;
    this.wastedWrapper = wastedWrapper;
    this.successWrapper = successWrapper;

    this.start();
  }

  start() {
    this.subscribeStartButton();
    this.updateProgressBar();
    this.subscribeOnFormChange();
    this.subscribeTimeEnd();
  }

  subscribeTimeEnd() {
    document.addEventListener('countdownend', () => {
      this.hideQuest();
      this.wastedWrapper.classList.remove('invisible');
    });
  }

  subscribeStartButton() {
    if (!this.startButton) {
      return null;
    }

    this.startButton.addEventListener('click', (event) => {
      event.target.remove();
      this.showQuest();

      this.timer.start(TIMER_DURATION, (pretty) => this.timerHandler(pretty));
    });
  }

  timerHandler(pretty) {
    if (this.countdown) {
      this.countdown.textContent = pretty;
    }
  }

  subscribeOnFormChange() {
    if (!this.form) {
      return;
    }

    this.form.addEventListener('submit', (event) => {
      event.preventDefault();

      const formData = new FormData(event.target);
      const variantValue = formData.get('variant');

      if (!this.variantInput) {
        return;
      }

      this.validateAnswerField(variantValue);

      if (!this.isValidAnswer) {
        return;
      }

      this.nextStep();
      setTimeout(() => this.resetValidation(this.variantInput), 1000);
    });
  }

  validateAnswerField(value) {
    if (value.toLowerCase() !== this.rebuses[this.step].answer) {
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
    this.resetVariantInputValue();
    this.step += 1;
    this.updateProgressBar();

    if (this.isLastStep()) {
      this.timer.stop();
      this.hideQuest();
      this.showSuccessScreen();

      return;
    }

    this.nextRebus();
  }

  resetVariantInputValue() {
    if (!this.variantInput) {
      return;
    }

    this.variantInput.value = '';
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

  resetValidation(element) {
    if (!element) {
      return;
    }

    element.classList.remove('is-valid');
    element.classList.remove('is-invalid');
    this.isValidAnswer = false;
  }

  hideQuest() {
    this.questWrapper.classList.add('invisible');
  }

  showQuest() {
    this.questWrapper.classList.remove('invisible');
  }

  showSuccessScreen() {
    const image = document.createElement('img');
    const title = document.createElement('h6');
    const clue = document.createElement('mark');

    image.src = successImage;
    image.width = 760;
    image.height = 230;
    image.classList.add('img-fluid');

    title.textContent = '?????????????? ?????????? ?????????????? ???? ?????????????????? ????????';
    title.classList.add('display-6');

    clue.textContent = '?? ?? ?? ?? ??';
    clue.classList.add('badge');
    clue.classList.add('bg-success');

    this.successWrapper.appendChild(image);

    setTimeout(() => {
      image.remove();
      this.successWrapper.appendChild(title);
      this.successWrapper.appendChild(clue);
    }, 2000);
  }

  updateProgressBar() {
    const rebusesCount = this.rebuses.length;
    const field = document.getElementById('progress-field');
    const currentProgress = this.step / rebusesCount * 100;

    field.innerText = `${this.step === 0 ? 0 : this.step}/${rebusesCount}`;
    field.style.width = `${currentProgress}%`;
  }
}

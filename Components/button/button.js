export function Button() {
  // Show answer

  const buttons = document.querySelectorAll('[data-js="button"]');
  const answers = document.querySelectorAll('[data-js="answer"]');

  buttons.forEach((button, index) => {
    function onButtonClick() {
      const style = window.getComputedStyle(answers[index], null).display;
      console.log('current style: ' + style);

      if (style === 'block') {
        console.log('switch to style: none');
        answers[index].classList.replace('--show', '--hide');
        button.textContent = 'Show answer';
      } else {
        console.log('switch to style: block');
        answers[index].classList.replace('--hide', '--show');
        button.textContent = 'Hide answer';
      }
      console.log('-----');
    }

    button.addEventListener('click', onButtonClick);
  });
}

const showAnswerButton = document.querySelector(
  '[data-js="show-answer-button"]'
);

const answerContainer = document.querySelector('[data-js="answer-container"]');

let isShown = false;
showAnswerButton.addEventListener("click", () => {
  answerContainer.classList.toggle("--hidden");

  if (isShown) {
    showAnswerButton.innerText = "Hide Answer";
    console.log("isShown is now true");
  } else {
    showAnswerButton.innerText = "Show Answer";
    console.log("isShown is now false");
  }
});

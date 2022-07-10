//Show answer

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

function onButtonClick() {
    console.log("test");
}
button.addEventListener("click", onButtonClick);

// Bookmark Button

const bookmark = document.querySelector('[data-js="bookmark"]');
let fill = document.querySelector('[data-js="bookmark"]');

function onBookmark() {
    console.log("test");
}
bookmark.addEventListener("click", onBookmark);

//const showAnswerButton = document.querySelector(
// '[data-js="show-answer-button"]');
// const answerContainer = document.querySelector('[data-js="answer-container"]');
//  let isShown = false
// showAnswerButton.addEventListener("click", () => {
// isShown = !isShown;
// answerContainer.classList.toggle("--hidden");

// if (isShown) {showAnswerButton.innerText = "Hide Answer";console.log("isShown is now true");} else {showAnswerButton.innerText = "Show Answer";console.log("isShown is now false");}});
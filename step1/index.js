import { Bookmark } from "../components/bookmark/bookmark.js";
import { Button } from "../components/button/button.js";
Bookmark();
Button();

//Show answer

const button = document.querySelector('[data-js="button"]');
const answer = document.querySelector('[data-js="answer"]');

function onButtonClick() {
    console.log("test");
}
button.addEventListener("click", onButtonClick);

//const showAnswerButton = document.querySelector(
// '[data-js="show-answer-button"]');
// const answerContainer = document.querySelector('[data-js="answer-container"]');
//  let isShown = false
// showAnswerButton.addEventListener("click", () => {
// isShown = !isShown;
// answerContainer.classList.toggle("--hidden");

// if (isShown) {showAnswerButton.innerText = "Hide Answer";console.log("isShown is now true");} else {showAnswerButton.innerText = "Show Answer";console.log("isShown is now false");}});
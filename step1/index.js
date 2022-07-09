//Show answer
alert("test");
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

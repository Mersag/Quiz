export function Bookmark() {
    const bookmarks = document.querySelectorAll('[data-js="bookmark"]');
    //let fill = document.querySelector('[data-js="bookmark"]');

    bookmarks.forEach((bookmark, index) => {
        function onBookmark() {
            console.log("bookmark clicked");

            const fill = bookmark.querySelector('[data-js="fill"]');
            const style = window.getComputedStyle(fill, null).display;

            console.log("current style: " + style);

            if (style === "none") {
                fill.classList.replace("hide-fill", "show-fill");
            } else {
                fill.classList.replace("show-fill", "hide-fill");
            }
        }

        bookmark.addEventListener("click", onBookmark);
    });
}
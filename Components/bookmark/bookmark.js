export function Bookmark() {
  // Bookmark Button

  // Die Liste 'bookmarks' wird mit allen Bookmarks aus dem html-Dokument befüllt,
  // die mit data-js="bookmark" gekennzeichnet sind
  const bookmarks = document.querySelectorAll('[data-js="bookmark"]');

  // Für jedes Element 'bookmark' aus der Liste 'bookmarks'...
  bookmarks.forEach((bookmark, index) => {
    // ...wird das folgende definiert:

    function onBookmark() {
      console.log('bookmark clicked');

      // Die Variable 'fill' wird gesetzt, also der svg-path mit dem gefüllten Bookmark
      // (das ist der <path> im <svg>, der mit data-js="fill" gekennzeichnet ist)
      const fill = bookmark.querySelector('[data-js="fill"]');

      // Der display-Zustand von 'fill' wird ermittelt und in der Variablen 'style' gespeichert
      // (none / block bedeutet unsichtbar / sichtbar)
      const style = window.getComputedStyle(fill, null).display;

      console.log('current style: ' + style);

      if (style === 'none') {
        // Das gefüllte Bookmark-Icon ist unsichtbar, css-Klasse 'hide-fill' durch 'show-fill' ersetzen
        fill.classList.replace('hide-fill', 'show-fill');
      } else {
        // Das gefüllte Bookmark-Icon ist sichtbar, css-Klasse 'show-fill' durch 'hide-fill' ersetzen
        fill.classList.replace('show-fill', 'hide-fill');
      }

      // hide-fill und show-fill sind in bookmark.css definiert
    }

    // Funktion 'onBookmark' soll bei "click" auf bookmark ausgeführt werden:
    bookmark.addEventListener('click', onBookmark);
  });
}

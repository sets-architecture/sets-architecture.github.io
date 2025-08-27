// Safely set the current year if the element exists
(function () {
  var el = document.getElementById('year');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();

// Enable fullscreen viewing of images with the .can-fullscreen class
(function () {
  function enableFullscreenOn(selector) {
    document.addEventListener('click', function (e) {
      const img = e.target.closest(selector);
      if (!img) return;

      // Prefer the Fullscreen API
      if (img.requestFullscreen) {
        img.requestFullscreen().catch(function () {
          // Fallback: open in a new tab if fullscreen fails
          window.open(img.currentSrc || img.src, '_blank', 'noopener');
        });
      } else {
        // Fallback for very old browsers
        window.open(img.currentSrc || img.src, '_blank', 'noopener');
      }
    });
  }

  // Activate on images marked with .can-fullscreen
  enableFullscreenOn('img.can-fullscreen');
})();
// Safely set the current year if the element exists
(function () {
  var el = document.getElementById('year');
  if (el) {
    el.textContent = new Date().getFullYear();
  }
})();
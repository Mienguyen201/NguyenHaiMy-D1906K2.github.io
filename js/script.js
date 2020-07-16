// var Scrollbar = window.Scrollbar;
// Scrollbar.init(document.querySelector('#my-scrollbar'));

const scrollbar = Scrollbar.init(document.querySelector('body'), {
  damping: 0.05,
  renderByPixels: true,
});
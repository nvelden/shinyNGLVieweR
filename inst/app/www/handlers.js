$(document).ready(function() {
//Custom input handlers
$(document).on('click', '.example_link', function () {
Shiny.onInputChange('example_link_id', this.id);
});
$(document).on('click', '.selectionRemove', function () {
  Shiny.onInputChange('selectionRemove_id', this.id);
});
$(document).on('click', '.labelRemove', function () {
Shiny.onInputChange('labelRemove_id', this.id);
});
$(document).on('click', '.contactRemove', function () {
Shiny.onInputChange('contactRemove_id', this.id);
});
$(document).on('click', '.selectionLink', function () {
Shiny.onInputChange('selectionLink_id', this.id);
});
$(document).on('click', '.labelLink', function () {
Shiny.onInputChange('labelLink_id', this.id);
});
$(document).on('click', '.contactLink', function () {
Shiny.onInputChange('contactLink_id', this.id);
});

// NGL focuses its canvas on mousedown. Prevent that focus operation from
// scrolling the dashboard, without changing focus behaviour for other canvases.
var nglViewer = document.getElementById('NGLVieweROutput_ui_1-structure');

function protectNglCanvasFocus(canvas) {
  if (canvas.dataset.preventFocusScroll === 'true') return;

  var focus = canvas.focus.bind(canvas);
  canvas.focus = function(options) {
    focus(Object.assign({}, options, { preventScroll: true }));
  };
  canvas.dataset.preventFocusScroll = 'true';
}

function protectNglCanvases() {
  if (!nglViewer) return;
  nglViewer.querySelectorAll('canvas').forEach(protectNglCanvasFocus);
}

protectNglCanvases();
if (nglViewer) {
  new MutationObserver(protectNglCanvases).observe(nglViewer, {
    childList: true,
    subtree: true
  });
}

// Resize the viewer once a box (e.g. Sequence) has finished expanding/collapsing
$(document).on('click', '[data-widget=collapse]', function () {
  setTimeout(function () { $(window).trigger('resize'); }, 600);
});
});

$(function() {

  var	$window = $(window),
  $body = $('body');

  // Disable animations/transitions until the page has loaded.
  $body.addClass('is-loading');
  NProgress.start();
  $window.on('load', function() {
    $body.removeClass('is-loading');
    NProgress.done();
  });
})
;

$(document)
.ready(function() {
  // create sidebar and attach to menu open
  $('.ui.sidebar')
  .sidebar('attach events', '.toc.item')
  ;
  $('.ui.embed').embed();
  $('.ui.sticky')
  .sticky({
    context: '#main'
  })
  ;
})
;

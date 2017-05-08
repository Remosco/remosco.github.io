$(function() {
  console.log("repositionning the bar");
  $('#nprogress .bar').css ("visibility", "hidden");

  $('#nprogress .bar')
  .css ("top", "0")
  .css ("z-index", "100")
  .css ("height", "2px");
  $('#nprogress .bar').css ("visibility", "visible");
});
$( document ).ready(function() {
  $('.masthead')
  // fix menu when passed
  .visibility({
    once: false,
    onBottomPassed: function() {
      $('.fixed.menu').transition('fade in');
      $('#nprogress .bar')
      .css ("top", "40px")
      .css ("z-index", "10")
      .css ("height", "8px");
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');
      $('#nprogress .bar')
      .css ("top", "0")
      .css ("z-index", "100")
      .css ("height", "2px");
    }
  })
  // load splash

  $('.logo-container')
  .transition({
    animation  : 'scale in',
    duration   : '2000ms',
    onComplete : function() {
      new Vivus('logo', {
        type: 'oneByOne',
        start:'manual',
        animTimingFunction: Vivus.EASE_OUT,
        duration: 180,
        onReady: function () {
          console.log("actually starting");
          // Now I'm ready :) Let's play!
          $("#logo").css ("visibility","visible")
          this.play(function(){
            $('.subtitle').transition({
              animation : 'fade in',
              duration  : "800ms",
            });
          })
        }
      })
    }
  })



});

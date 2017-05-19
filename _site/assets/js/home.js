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
    },
    onBottomPassedReverse: function() {
      $('.fixed.menu').transition('fade out');

    }
  })

  // load splash only if coming from outside or refreshing home
  if (document.referrer&&document.referrer.startsWith(window.location.href)&&document.referrer!=window.location.href) {
    console.log("coming from this site, no animation");
    var myReferer = document.referrer;
    console.log("referer : " + myReferer);
    console.log("location : " + window.location.href);
    $('.logo-container')
    .transition({
      animation  : 'scale in',
      duration   : '1000ms',
      onComplete : function() {
              $('.subtitle, #logo').transition({
                animation : 'fade in',
                duration  : "800ms",
              });

      }
    })
  } else {
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
  }




});

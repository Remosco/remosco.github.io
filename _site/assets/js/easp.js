$( document ).ready(function() {
  $('.ui.dropdown')
  .dropdown({
    fullTextSearch:"exact",
     action: 'hide',
  })
  ;
  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

  function onYouTubeIframeAPIReady() {
    var $ = jQuery;
    var players = [];
    $('iframe').filter(function(){return this.src.indexOf('http://www.youtube.com/') == 0}).each( function (k, v) {
      console.alert("we got one");
      if (!this.id) { this.id='embeddedvideoiframe' + k }
      players.push(new YT.Player(this.id, {
        events: {
          'onStateChange': function(event) {
            if (event.data == YT.PlayerState.PLAYING) {
              $.each(players, function(k, v) {
                if (this.getIframe().id != event.target.getIframe().id) {
                  this.pauseVideo();
                }
              });
            }
          }
        }
      }))
    });
  }
});

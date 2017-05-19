$( document ).ready(function() {
  $('.ui.dropdown#author_filter, .ui.dropdown#title_filter')
  .dropdown({
    fullTextSearch:"exact",
     action: 'hide',
     onShow: function () {
    $(".content").addClass("dimmable dimmed")
     },
     onHide: function () {
     $(".content").removeClass("dimmable dimmed")
     }
  })
  ;
  var tag = document.createElement('script');
  tag.src = "//www.youtube.com/iframe_api";
  var firstScriptTag = document.getElementsByTagName('script')[0];
  firstScriptTag.parentNode.insertBefore(tag, firstScriptTag);

});

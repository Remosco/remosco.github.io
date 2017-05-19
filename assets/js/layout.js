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
  setTimeout(2000,
    function () {
      console.log("refresh");
      $('.ui.sticky')
      .sticky('refresh')
      ;
    } // recalculates offsets
  )
  $('.menu .dropdown')
  .dropdown({
    on:'hover',
    action: function(text, value) {
      console.log(text);
      console.log(value);
      // nothing built in occurs
    }
  })
  ;
  /*
  */
  $('#contact')
  .form({
    fields: {

      name:{
        identifier  : 'name',
        rules: [
          {
            type   : 'empty',
            prompt : "Merci d'entrer votre nom"
          }
        ]
      },
      message:{
        identifier  : 'message',
        rules: [
          {
            type   : 'empty',
            prompt : "Vous ne pouvez pas nous envoyer un message vide"
          }
        ]
      },
      email: {
        identifier  : 'email',
        rules: [
          {
            type   : 'email',
            prompt : 'Please enter a valid e-mail'
          }
        ]
      }
    }
  })

  $('#contact .submit.button')
  .api({
    url: 'https://formspree.io/cordelois.antoine+remosco@gmail.com',
    method : 'POST',
    serializeForm: true,
    beforeSend: function(settings) {
      console.log($('#contact form').form('is valid'));
      if (!$('#contact form').form('is valid')) {
        console.log("invalid form, let's  ancel");
        return false
      } else {
        return settings
      }
    },
    onSuccess: function(data) {
      console.log("form success with ");
      console.log(data);
      $('#contact form').addClass('success')

    }

  });
})
;

/*
 * AJAX Submission for Plug and Play Forms
 * Author: Steve Hickey - @stevehickeydsgn
 *
 * Multiple uses of $(document).ready are for copy/paste convenience only.
 * Don't worry, I wouldn't do that IRL.
 *
 */


// AJAX submission for signIn form ======================== //
$(document).ready(function(){
  $('button[name="signIn"]').click(function(){

    var emailAddress = $('input[name="emailAddress"]').val();
    var password = $('input[name="password"]').val();
    var remember = undefined;
    if ( $('input[name="remember"]').is(':checked') ) { var remember = true; }
    else { var remember = false; }
    var data = 'emailAddress=' + emailAddress + '&password=' + password + '&remember=' + remember;

    $('.loading').show();

    $.ajax({
      url: "../processSignIn.php",
      type: "POST",
      data: data,
      cache: false,
      success: function () {
        $('form.signIn').html('<p class="signedIn">You have successfully signed in.</p>');
      },
      error: function () {
        alert('Sorry, there was an error. Please try again.');
        $('.loading').hide();
      }
    });

    return false;

  });
});

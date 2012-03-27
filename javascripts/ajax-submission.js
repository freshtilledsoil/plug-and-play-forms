/*
 * AJAX Submission for Plug and Play Forms
 * Author: Steve Hickey - @stevehickeydsgn
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

    $('input').attr('disabled','true');

    $('.loading').show();

    $.ajax({ // I know this isn't doing jack yet. I'm getting to it
      url: "processSignIn.php",
      type: "POST",
      data: data,
      success: alert('success!')
    });

    return false;

  });
});

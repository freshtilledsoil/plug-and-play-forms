/* Demo Scripts for Plug and Play Forms
 * Author: Steve Hickey - @stevehickeydsgn */

$(document).ready(function(){

  // if user has javascript enabled, set up nav and hide all but first form
  $('nav').removeClass('hide');
  $('.formWrap').addClass('hide');
  $('.formWrap:first').addClass('show');

  // allow nav to hide and reveal rest of forms
  // will refactor the bejeezus out of this later
  $('#signInReveal').click(function() {
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.signInWrap').fadeIn();
    event.preventDefault();
  });
  $('#searchReveal').click(function() {
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.searchWrap').fadeIn();
    event.preventDefault();
  });
  $('#basicSignUpReveal').click(function() {
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.basicSignUpWrap').fadeIn();
    event.preventDefault();
  });
  $('#complexSignUpReveal').click(function() {
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.complexSignUpWrap').fadeIn();
    event.preventDefault();
  });
  $('#creditCardPaymentReveal').click(function() {
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.creditCardPaymentWrap').fadeIn();
    event.preventDefault();
  });

});

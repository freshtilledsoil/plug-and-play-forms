/*
 * Demo Scripts for Plug and Play Forms
 * Author: Steve Hickey - @stevehickeydsgn
 *
 */


$(document).ready(function(){

  // if user has javascript enabled, set up nav and hide all but first form
  $('nav').removeClass('hide');
  $('.formWrap').addClass('hide');
  $('.formWrap:first').addClass('show');

  // allow nav to hide and reveal rest of forms
  // will refactor the bejeezus out of this later
  $('#signInReveal').click(function() {
    event.preventDefault();
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.signInWrap').fadeIn();
  });
  $('#searchReveal').click(function() {
    event.preventDefault();
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.searchWrap').fadeIn();
  });
  $('#basicSignUpReveal').click(function() {
    event.preventDefault();
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.basicSignUpWrap').fadeIn();
  });
  $('#complexSignUpReveal').click(function() {
    event.preventDefault();
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.complexSignUpWrap').fadeIn();
  });
  $('#creditCardPaymentReveal').click(function() {
    event.preventDefault();
    $('nav a').removeClass('current');
    $(this).addClass('current');
    $('.formWrap').hide();
    $('.creditCardPaymentWrap').fadeIn();
  });

});

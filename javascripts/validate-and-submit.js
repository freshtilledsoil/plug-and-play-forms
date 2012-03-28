/*
 * AJAX Submission for Plug and Play Forms
 * Author: Steve Hickey - @stevehickeydsgn
 *
 * Multiple uses of $(document).ready are for copy/paste convenience only.
 * Don't worry, I wouldn't do that IRL.
 *
 */



// Imitate loading and prevent submission of forms until AJAX-ed ======================== //
$(document).ready(function(){
  $('button[name="signIn"], button[name="search"]').click(function(){
    $('.loading').show();
    return false;
  });
});



// basicSignUp form ===================================================================== //
$(document).ready(function(){

  $("form.basicSignUp").validate({
    rules: {
      emailAddress: {
        required: true,
        email: true
      },
      createPassword: {
        required: true,
        minlength: 8
      },
      confirmPassword: {
        required: true,
        equalTo: "form.basicSignUp li.createPassword input"
      }
    }
  });

  $('button[name="signUp"]').click(function(){
    $('.loading').show();
    return false;
  });

});



// complexSignUp form =================================================================== //
$(document).ready(function(){

  $("form.complexSignUp").validate({
    rules: {
      fullName: {
        required: true
      },
      userName: {
        required: true
      },
      emailAddress: {
        required: true,
        email: true
      },
      createPassword: {
        required: true,
        minlength: 8
      },
      confirmPassword: {
        required: true,
        equalTo: "form.complexSignUp li.createPassword input"
      }
    }
  });

  $('button[name="signUp"]').click(function(){
    $('.loading').show();
    return false;
  });

});



// creditCardPayment form =============================================================== //
$(document).ready(function(){

  $("form.creditCardPayment").validate({ // validate
    rules: {
      shippingName: {
        required: true
      },
      shippingStreetAddress: {
        required: true
      },
      shippingStreetAddressTwo: {
        required: true
      },
      shippingCity: {
        required: true
      },
      shippingState: {
        required: true
      },
      shippingZip: {
        required: true
      },
      billingName: {
        required: true
      },
      billingStreetAddress: {
        required: true
      },
      billingStreetAddressTwo: {
        required: true
      },
      billingCity: {
        required: true
      },
      billingState: {
        required: true
      },
      billingZip: {
        required: true
      },
      cardNumber: {
        required: true,
        creditcard: true
      },
      expMonth: {
        required: true
      },
      expYear: {
        required: true
      },
      csc: {
        required: true
      }
    }
  });

  $('button[name="purchase"]').click(function(){ // AJAX submit

    var shippingName =                $('input[name="shippingName"]').val();
    var shippingStreetAddress =       $('input[name="shippingStreetAddress"]').val();
    var shippingStreetAddressTwo =    $('input[name="shippingStreetAddressTwo"]').val();
    var shippingCity =                $('input[name="shippingCity"]').val();
    var shippingState =               $('input[name="shippingState"]').val();
    var shippingZip =                 $('input[name="shippingZip"]').val();
    var sameAsShipping =              undefined;
    if ( $('input[name="sameAsShipping"]').is(':checked') ) {
      var billingName =               shippingName;
      var billingStreetAddress =      shippingStreetAddress;
      var billingStreetAddressTwo =   shippingStreetAddressTwo;
      var billingCity =               shippingCity;
      var billingState =              shippingState;
      var billingZip =                shippingZip;
    } else {
      var billingName =               $('input[name="billingName"]').val();
      var billingStreetAddress =      $('input[name="billingStreetAddress"]').val();
      var billingStreetAddressTwo =   $('input[name="billingStreetAddressTwo"]').val();
      var billingCity =               $('input[name="billingCity"]').val();
      var billingState =              $('input[name="billingState"]').val();
      var billingZip =                $('input[name="billingZip"]').val();
    };
    var cardNumber =                  $('input[name="cardNumber"]').val();
    var expMonth =                    $('select[name="expMonth"]').val();
    var expYear =                     $('select[name="expYear"]').val();
    var csc =                         $('input[name="csc"]').val();

    var data = 'shippingName=' + shippingName + '&shippingStreetAddress=' + shippingStreetAddress + '&shippingStreetAddressTwo=' + shippingStreetAddressTwo + '&shippingCity=' + shippingCity + '&shippingState=' + shippingState + '&shippingZip=' + shippingZip + '&billingName=' + billingName + '&billingStreetAddress=' + billingStreetAddress + '&billingStreetAddressTwo=' + billingStreetAddressTwo + '&billingCity=' + billingCity + '&billingState=' + billingState + '&billingZip=' + billingZip + '&cardNumber=' + cardNumber + '&expMonth=' + expMonth + '&expYear=' + expYear + '&csc=' + csc;

    $('.loading').show();

    $.ajax({
      url: "../processCreditCardPayment.php",
      type: "POST",
      data: data,
      cache: false,
      success: function () {
        $('form.creditCardPayment').html('<p class="submitSuccess">You have successfully paid for this purchase.</p>');
      },
      error: function () {
        $('form.creditCardPayment').html('<p class="submitError">Sorry, there was an error. Please try again.</p>');
        $('.loading').hide();
      }
    });

    return false;

  });
});

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

  $('[name="sameAsShipping"]').change(function(){

    if ( $('[name="sameAsShipping"]').is(':checked') ) {
      $('[name="billingName"]').val( $('[name="shippingName"]').val() );
      $('[name="billingStreetAddress"]').val( $('[name="shippingStreetAddress"]').val() );
      $('[name="billingStreetAddressTwo"]').val( $('[name="shippingStreetAddressTwo"]').val() );
      $('[name="billingCity"]').val( $('[name="shippingCity"]').val() );
      $('[name="billingState"]').val( $('[name="shippingState"]').val() );
      $('[name="billingZip"]').val( $('[name="shippingZip"]').val() );
      $('fieldset.billingAddress ul').hide();
    } else {
      $('fieldset.billingAddress ul input').val('');
      $('fieldset.billingAddress ul').show();
    }
  });

  $('[name="purchase"]').click(function(){ // AJAX submit
    var shippingName =                $('[name="shippingName"]').val();
    var shippingStreetAddress =       $('[name="shippingStreetAddress"]').val();
    var shippingStreetAddressTwo =    $('[name="shippingStreetAddressTwo"]').val();
    var shippingCity =                $('[name="shippingCity"]').val();
    var shippingState =               $('[name="shippingState"]').val();
    var shippingZip =                 $('[name="shippingZip"]').val();
    var billingName =                 $('[name="billingName"]').val();
    var billingStreetAddress =        $('[name="billingStreetAddress"]').val();
    var billingStreetAddressTwo =     $('[name="billingStreetAddressTwo"]').val();
    var billingCity =                 $('[name="billingCity"]').val();
    var billingState =                $('[name="billingState"]').val();
    var billingZip =                  $('[name="billingZip"]').val();
    var cardNumber =                  $('[name="cardNumber"]').val();
    var expMonth =                    $('[name="expMonth"]').val();
    var expYear =                     $('[name="expYear"]').val();
    var csc =                         $('[name="csc"]').val();
    var data = 'shippingName=' + shippingName + '&shippingStreetAddress=' + shippingStreetAddress + '&shippingStreetAddressTwo=' + shippingStreetAddressTwo + '&shippingCity=' + shippingCity + '&shippingState=' + shippingState + '&shippingZip=' + shippingZip + '&billingName=' + billingName + '&billingStreetAddress=' + billingStreetAddress + '&billingStreetAddressTwo=' + billingStreetAddressTwo + '&billingCity=' + billingCity + '&billingState=' + billingState + '&billingZip=' + billingZip + '&cardNumber=' + cardNumber + '&expMonth=' + expMonth + '&expYear=' + expYear + '&csc=' + csc;

    $('.loading').show();

    alert(data);

    $.ajax({
      url: "../processCreditCardPayment.php",
      type: "POST",
      data: data,
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

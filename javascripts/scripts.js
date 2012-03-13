$(document).ready(function(){

  // validation rules for basic sign up form ======================== //
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

  // validation rules for complex sign up form ====================== //
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

  // validation rules for credit card payment form ================== //
  $("form.creditCardPayment").validate({
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

});

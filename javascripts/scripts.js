$(document).ready(function(){

  // validation rules for basic sign up form ======================== //
  $("form.basic-sign-up-form").validate({
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
        equalTo: ".createPassword"
      }
    }
  });

  // validation rules for complex sign up form ====================== //
  $("form.complex-sign-up-form").validate({
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
        equalTo: ".createPassword"
      }
    }
  });

});

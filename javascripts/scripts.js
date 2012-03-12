$(document).ready(function(){

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

});

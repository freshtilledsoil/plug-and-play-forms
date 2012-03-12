$(document).ready(function(){

  $("form.basic-sign-up-form").validate({
    rules: {
      emailAddress: "required",
      createPassword: "required",
      confirmPassword: "required",
    }
  });

});

$(document).ready(function() {
  $("#form").validate({
    messages: {
        email: {
        required: "Please enter a user Email-Id"
      },
      password: {
        required: "Please enter a valid password"
      },
   
    },
    rules: {
        email: "required",
      password: "required",
    },

  });

  $('#button').click(function() {
    if(
    $("#form").valid()){
    alert("Congratulations your are successfully Logged In");
    }
  });
});
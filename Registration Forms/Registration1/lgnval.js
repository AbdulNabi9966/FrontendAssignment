$(document).ready(function() {
    $("#createuser").validate({
      messages: {
          user: {
          required: "Please enter a user name"
        },
        testinput: {
          required: "Please enter a valid password"
        },
     
      },
      rules: {
          user: "required",
        testinput: "required",
      },

    });

    $('#button').click(function() {
      if(
      $("#createuser").valid()){
      alert("Congratulations your are successfully Logged In");
      }
    });
  });
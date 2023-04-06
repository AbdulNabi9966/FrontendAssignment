
    $(document).ready(function() {
          $("#createuser").validate({
            messages: {
                fname: {
                required: "Please enter a first name"
              },
              lname: {
                required: "Please enter a last name"
              },
              email: {
                required: "Please enter a valid email address"
              },
              phone: {
                required: "Please enter a valid phone number"
              },
              dob: {
                required: "Please enter a valid hire date"
              }
           
            },
            rules: {
                fname: "required",
              lname: "required",
    
              email: {
                required: true,
                email: true,
              },
    
              phone: {
                required: true,
                pattern: "^[0-9-+s()]*$",
              }
            },
    
          });
    
    
    
          $('#button').click(function() {
            if(
            $("#createuser").valid()){
            alert("Congratulations your form details are successfully submited");
            }
          });
        });
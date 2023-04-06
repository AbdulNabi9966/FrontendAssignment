
    $(document).ready(function() {
          $("#form").validate({
            messages: {
                validationCustom01: {
                required: "Please enter a first name"
              },
              lastName: {
                required: "Please enter a last name"
              },
              email: {
                required: "Please enter a valid email address"
              },
              phoneNumber: {
                required: "Please enter a valid phone number"
              },
              birthDate: {
                required: "Please enter a valid hire date"
              }
           
            },
            rules: {
                validationCustom01: "required",
              lastName: "required",
    
              email: {
                required: true,
                email: true,
              },
    
              phoneNumber: {
                required: true,
                pattern: "^[0-9-+s()]*$",
              }
            },
    
          });

		  $('#button').click(function() {
            if(
            $("#form").valid()){
            alert("Congratulations your form details are successfully submited");
            }
          });

        });

		
   
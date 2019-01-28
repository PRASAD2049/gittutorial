 $('#signupconsultantForm')
        .formValidation({
		
		//container:'.error_container',
           
        icon: {
            valid: 'glyphicon glyphicon-ok',
            invalid: 'glyphicon glyphicon-remove',
            validating: 'glyphicon glyphicon-refresh'
        },
 
            excluded: ':disabled',
			//live:'disabled',
            fields: {
				
				name: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Name',
                    },
					
                }
            	},
                semail: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Email',
                    },
					
                }
            	},
				 spassword: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter password',
                    },
					
                }
            	},
                srpassword: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Re-type password',
                    },
					
                }
            	},
				 agree: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Agree Terms and Conditions',
                    },
					
                }
            	},
				
			
				
			
				
            }
        }).on('success.form.fv', function(e,data) {
            // Prevent form submission
			
            e.preventDefault();
        $('#signupModal').modal('hide')
        $('#accountcreatedModal').modal('show')
            var $form = $(e.target),
                fv    = $form.data('formValidation');
             //   fv.disableSubmitButtons(false);


            // Use Ajax to submit form data
            $.ajax({
                url: $form.attr('action'),
                type: 'POST',
                data: $form.serialize(),
                success: function(result) {
                    // ... Process the result ...
					// $('.f_success').text(result)
                    
                    
                }
            });
        });
		

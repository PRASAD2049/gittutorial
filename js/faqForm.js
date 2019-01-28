 $('#faqForm')
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
				
				faqemail: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Email',
                    },
					
                }
            	},
				
				faqquery: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter  your Query'
                    },
                }
            	},
             
               
            }
        }).on('success.form.fv', function(e,data) {
            // Prevent form submission
			
            e.preventDefault();
        
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
		

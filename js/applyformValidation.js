 $('#applyForm')
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
				
				applyemail: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Email',
                    },
					
                }
            	},
				
				applyphone: {
                validators: {
                    notEmpty: {
                        message: 'Please Enter Phone Number'
                    },
                }
            	},
                applyfile: {
                validators: {
                    notEmpty: {
                        message: 'Please Upload Resume'
                    },
                    file: {
                        extension: 'doc,pdf',
                        type: 'application/msword,application/pdf',
                        maxSize: 209715200,   // 2048 * 1024
                        message: 'The select the file in .doc or .pdf format'
                    }

                }
            	},
                description: {
                validators: {
                    notEmpty: {
                        message: 'Please Describe yourself'
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
		

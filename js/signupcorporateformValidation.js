 $('#signupcorporateForm')
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
				
				cname: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Comapany Name',
                    },
					
                }
            	},
                clocation: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Company Location',
                    },
					
                }
            	},
				 industry: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Industry',
                    },
					
                }
            	},
                workemail: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Work Email',
                    },
					
                }
            	},
                 isd: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Select ISD',
                    },
					
                }
            	},
                mobile: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Mobile',
                    },
					
                }
            	},
				 username: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Username',
                    },
					
                }
            	},
                 designation: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Designation',
                    },
					
                }
            	},
                 scpassword: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Enter Password',
                    },
					
                }
            	},
                 scrpassword: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Confirm Password',
                    },
					
                }
            	},
                 agreeterms: {
					
                validators: {
                    notEmpty: {
                        message: 'Please Agree  Terms and Conditions',
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
		

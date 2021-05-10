// var gtmYTplayers = [];

// (function( $ ) {
    // 'use strict';

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var num_filter = /^\d+$/;

    // jQuery('.overlay-loader-blk').hide();
    // jQuery('.form-loader').hide();

    $(document).on("click", "#enquiry-form_submit", function(event){
    // jQuery("#enquiry-form").submit(function(event) {
        event.preventDefault();
        // $("#enquiry-form").submit(function(e){ e.preventDefault()})
        
        var $thisForm = $("#enquiry-form");
        var data = {};
        var fieldName = '';
        var popError = false;

        // var form_id = $("#enquiry-form").attr("id");

        $thisForm.find('span.error-message').remove();
        jQuery($thisForm).find('input, textarea').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'full_name') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            }else if (field.name == 'firstname') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            }else if (field.name == 'lastname') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'email') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message">Invalid email address</span>');
                    if (popError == false)
                        popError = true;
                }
            }else if (field.name == 'phone') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'company') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'website') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'refer_name') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'refer_email') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'checkbox') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            }
            else if (field.name == 'emp_name') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            }
            else if (field.name == 'emp_official_email') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            }
            else if (field.name == 'candidate_name') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            }
            else if (field.name == 'position_refer') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            }
            else if (field.name == 'candidate_resume' ) {
                var ext = jQuery('#fileupload').val().split('.').pop().toLowerCase();
                if(jQuery.inArray(ext, ['pdf','doc','docx']) == -1) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Invalid file type. Only PDF, DOC & DOCX files are allowed.</span>');
                    if (popError == false)
                        popError = true;
                }
            }           
        });

        if (popError == true) {
            $thisForm.addClass('invalid');
            jQuery(".error-message").show();
            return false;
        } else {

            $thisForm.removeClass('invalid');
            jQuery(".error-message").hide();
            var form = $thisForm.serialize();
            $("#enquiry-form").submit();
        }
    });

// })( jQuery );
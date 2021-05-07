var gtmYTplayers = [];

(function( $ ) {
    'use strict';

    var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    var num_filter = /^\d+$/;

    jQuery('.overlay-loader-blk').hide();
    jQuery('.form-loader').hide();

    jQuery(".contact-cat a").click(function (event) {
        event.preventDefault();
        var enquiryFor = jQuery(this).data('reason');
        jQuery("#enquiry_for").val(enquiryFor);
        jQuery(".contact-cat li.active").removeClass("active", 1000, 'linear');
        jQuery(this).parent().addClass("active", 1000, 'linear');
        jQuery("input[name='email']").attr('placeholder','Work Email*');

        switch(enquiryFor) {
            case "General Inquiries":
                jQuery(".field-callback, .field-careers, .field-quote").hide();
                jQuery(".field-general").show();
                break;
            case "Request a Quote":
                jQuery(".field-callback, .field-careers, .field-general").hide();
                jQuery(".field-quote").show();
                break;
            case "Request a Callback":
                jQuery(".field-quote, .field-careers, .field-general").hide();
                jQuery(".field-callback").show();
                break;
            case "Careers":
                jQuery(".field-quote, .field-callback, .field-general").hide();
                jQuery("input[name='email']").attr('placeholder','Email*');
                jQuery(".field-careers").show();
                break;
        }
    });

    function isDate(txtDate)
    {
        var currVal = txtDate;
        if(currVal == '')
            return false;
        
        var rxDatePattern = /^(\d{1,2})(\/)(\d{1,2})(\/)(\d{2}) (\d{1,2})(:)(\d{1,2})$/; //Declare Regex
        var dtArray = currVal.match(rxDatePattern); // is format OK?
        console.log(dtArray);

        if (dtArray == null) 
            return false;
        
        //Checks for mm/dd/yy format.
        var dtDay= dtArray[1];
        var dtMonth = dtArray[3];
        var dtYear = dtArray[5];        
        var dtHour = dtArray[6];        
        var dtMinute = dtArray[8];        
        
        if (dtMonth < 1 || dtMonth > 12) 
            return false;
        else if (dtDay < 1 || dtDay > 31) 
            return false;
        else if ((dtMonth==4 || dtMonth==6 || dtMonth==9 || dtMonth==11) && dtDay ==31) 
            return false;
        else if (dtMonth == 2) 
        {
            var isleap = (dtYear % 4 == 0 && (dtYear % 100 != 0 || dtYear % 400 == 0));
            if (dtDay> 29 || (dtDay ==29 && !isleap)) 
                    return false;
        } else if (dtHour < 0 || dtHour > 23) 
            return false;
        else if (dtMinute < 0 || dtMinute > 59)
            return false;
        return true;
    }

    /**************************************************/
    /*********  Contact Page form AJAX Submit  ********/
    /**************************************************/

    jQuery("#contact-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#contact-form').find('input').each(function(i, field) {
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
            } else if (field.name == 'phone') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if ( (jQuery("#enquiry_for").val() == "Request a Quote") && field.name == 'services' && field.value=='' ) {
                $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter service you are looking for.</span>');
                if (popError == false)
                    popError = true;
            } else if ( (jQuery("#enquiry_for").val() == "Request a Callback") && (field.name == 'callback_timeslots1' || field.name == 'callback_timeslots2' )) {
                if(field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please provide callback time slots.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if ( (jQuery("#enquiry_for").val() == "Careers") && field.name == 'cv_file' ) {
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: new FormData(this),
                dataType: 'json',
                contentType: false,
                cache: false,
                processData:false,
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });

    /*jQuery("#contact-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#contact-form').find('input').each(function(i, field) {
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
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });*/

    /**************************************************/
    /*********  Newsletter form AJAX Submit  ********/
    /**************************************************/

    jQuery("#newslater-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#newslater-form').find('input').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'email') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Enter Email Address.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message">Invalid email address</span>');
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });

    /**************************************************/
    /*********  Newsletter Popup form AJAX Submit  ********/
    /**************************************************/

    jQuery("#newslater-popup-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#newslater-popup-form').find('input').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'email') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message">Invalid email address</span>');
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });


    /**************************************************/
    /*********  Rate Card form AJAX Submit  ********/
    /**************************************************/


    function get_current_page_id() {
        var page_body = $('body.page');

        var id = 0;

        if(page_body) {
            var classList = page_body.attr('class').split(/\s+/);

            $.each(classList, function(index, item) {
                if (item.indexOf('page-id') >= 0) {
                    var item_arr = item.split('-');
                    id =  item_arr[item_arr.length -1];
                    return false;
                }
            });
        }
        return id;
    }
    jQuery("#rate_card-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#rate_card-form').find('input').each(function(i, field) {
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form+'&id='+get_current_page_id(),
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        // window.open(data.download, 'Download');                       

                        if(typeof data.download !== 'undefined')
                        {
                            setTimeout( startDownload(data.download), 2000);
                        }
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });

    /**************************************************/
    /*********  Enquiry Form AJAX Submit  ********/
    /**************************************************/

    jQuery("#rate_card_form, #employee-referral-form, #enquiry-form, #network-form, #callback-form, #popup-validation, .poc-form, #paid-form, #quotes-form, #covid-survey-form, #guide-to-building-offshore-teams, #offshore-regions-comparison-guide").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        var form_id = $(this).attr("id");

        $thisForm.find('span.error-message').remove();
        jQuery(this).find('input, textarea').each(function(i, field) {
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
            else if(field.name === 'level-commitment'){
                if($thisForm.find("input:radio[name="+field.name+"]:checked").length == 0){
                    if(!$(this).parent().parent().parent().hasClass('error')){
                        $(this).parent().parent().parent().addClass('error').append('<span class="error-message col-sm-12">Please fill in the required field.</span>');
                        if (popError == false)
                            popError = true;
                    }
                }
            }   
            else if(field.name === 'opt-in'){
                if($thisForm.find("input:checkbox[name="+field.name+"]:checked").length == 0){
                    if(!$(this).parent().parent().parent().hasClass('error')){
                        $(this).parent().parent().addClass('error').append('<span class="error-message">Please fill in the required field.</span>');
                        if (popError == false)
                            popError = true;
                    }
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

            if(form_id == "employee-referral-form") {
                var fd = new FormData();
                var file = jQuery(document).find('input[type="file"]');
                var individual_file = file[0].files[0];
                fd.append("candidate_resume", individual_file);
                fd.append("full_name", jQuery("input[name='full_name']").val());  
                fd.append("email", jQuery("input[name='email']").val());  
                fd.append("emp_id", jQuery("input[name='emp_id']").val());  
                fd.append("emp_official_email", jQuery("input[name='emp_official_email']").val());  
                fd.append("candidate_name", jQuery("input[name='candidate_name']").val());  
                fd.append("position_refer", jQuery("input[name='position_refer']").val());  
                fd.append("associated-clouru", jQuery("input[name='how_are_you_associated_with_clouru']:checked").val());  
                fd.append("candidate_phone", jQuery("input[name='phone']").val());  
                fd.append("page_title", jQuery("input[name='page_title']").val());  
                fd.append('action', 'employee_referral_form_ajax');              

                jQuery.ajax({
                    type: 'POST',
                    url: adminurl,
                    data: fd,
                    contentType: false,
                    dataType: 'json',
                    processData: false,
                    beforeSend: function() {
                        $thisForm.find('.form-loader').show();
                    },
                    success: function(data) {

                        console.log('success');

                        if (data.result == 'fail') {
                            console.log('success if');
                            $thisForm.find('.ajax-message').html(data.message);
                            $thisForm.find('.form-loader').hide();
                        } else {
                            console.log('success else'); 
                            $thisForm.find('.form-loader').hide();
                            $thisForm.find('.ajax-message').html(data.message);

                            if(typeof data.ebook !== 'undefined')
                            {
                                setTimeout(function(){
                                    window.open(data.ebook,'_blank');
                                }, 2000);
                            }
                            
                            $thisForm.trigger("reset");
                        }
                    },
                    error: function(err) {
                        alert("Error: There is some issue please try again.");
                        console.log(err);
                    }
                });

            } else {

                jQuery.ajax({
                    type: 'POST',
                    url: adminurl,
                    data: form,
                    dataType: 'json',
                    beforeSend: function() {
                        $thisForm.find('.form-loader').show();
                    },
                    success: function(data) {

                        console.log('success');

                        if (data.result == 'fail') {
                            console.log('success if');
                            $thisForm.find('.ajax-message').html(data.message);
                            $thisForm.find('.form-loader').hide();
                        } else {
                            console.log('success else'); 
                            $thisForm.find('.form-loader').hide();
                            $thisForm.find('.ajax-message').html(data.message);

                            if(typeof data.ebook !== 'undefined')
                            {
                                setTimeout(function(){
                                    window.open(data.ebook,'_blank');
                                }, 2000);
                            }

                            // console.log("book"+data.ebook);
                            // if(data.ebook !== null){
                            //  setTimeout(function(){
                            //      window.open(data.ebook,'_blank');
                            //  }, 2000);
                            // }

                            /*console.log('Test');
                            if ($("input[name='checkbox']").attr('checked'))
                            {
                                window.open("https://www.clouru.com/wp-content/uploads/2020/04/Clouru-HubSpot-US.pdf", 'Download');
                            }if ($("input[name='how_urgent_is_your_project_']").attr('checked'))
                            {
                                window.open("https://www.clouru.com/wp-content/uploads/2020/04/Clouru-HubSpot-US.pdf", 'Download');
                            }*/

                            if(form_id == "covid-survey-form"){ 
                                window.open("https://www.clouru.com/wp-content/themes/clouru/assets/pdf/The-Impact-of-COVID-19-on-Digital-Agencies-A-Survey-Report.pdf", 'Download');
                            }
                            else if(form_id == "guide-to-building-offshore-teams"){ 
                                window.open("https://www.clouru.com/offshore/A-guide-to-building-offshore-teams-in-2021.pdf", 'Download');
                            }
                            else if(form_id == "offshore-regions-comparison-guide"){ 
                                window.open("https://www.clouru.com/offshore/Offshore-regions-comparison-guide.pdf", 'Download');
                            }
                            
                            if(form_id == "rate_card_form"){ 
                                var download_url = jQuery('#download_url').val();
                                window.open(download_url, 'Download');
                            }
                            
                            $thisForm.trigger("reset");
                        }
                    },
                    error: function(err) {
                        alert("Error: There is some issue please try again.");
                        console.log(err);
                    }
                });
            }
        }
    });

    /**************************************************/
    /*********  Share requirement for ui ux Form AJAX Submit  ********/
    /**************************************************/

    jQuery("#share-requirement-foruiux-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        var form_id = $(this).attr("id");

        $thisForm.find('span.error-message').remove();
        $thisForm.find('.error').removeClass('error');
        jQuery(this).find('input, textarea').each(function(i, field) {
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
            }else if (field.name == 'email') {
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
            } else if (field.name == 'company_name') {
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
            }
            else if(field.name === 'level-commitment'){
                if($thisForm.find("input:radio[name="+field.name+"]:checked").length == 0){
                    if(!$(this).parent().parent().parent().hasClass('error')){
                        $(this).parent().parent().parent().addClass('error').append('<span class="error-message col-sm-12">Please select value.</span>');
                        if (popError == false)
                            popError = true;
                    }
                }
            }
            else if(field.name === 'need-designer'){
                if($thisForm.find("input:radio[name="+field.name+"]:checked").length == 0){
                    if(!$(this).parent().parent().parent().hasClass('error')){
                        $(this).parent().parent().parent().addClass('error');
                        $(this).parent().parent().parent().parent().append('<span class="error-message">Please select value.</span>');
                        if (popError == false)
                            popError = true;
                    }
                }
            }
            else if(field.name === 'exp-years'){
                if($thisForm.find("input:radio[name="+field.name+"]:checked").length == 0){
                    if(!$(this).parent().parent().parent().hasClass('error')){
                        $(this).parent().parent().parent().addClass('error');
                        $(this).parent().parent().parent().parent().append('<span class="error-message">Please select value.</span>');
                        if (popError == false)
                            popError = true;
                    }
                }
            }
            else if(field.name === 'onboard-designer'){
                if($thisForm.find("input:radio[name="+field.name+"]:checked").length == 0){
                    if(!$(this).parent().parent().parent().hasClass('error')){
                        $(this).parent().parent().parent().addClass('error').append('<span class="error-message col-sm-12">Please select value.</span>');
                        if (popError == false)
                            popError = true;
                    }
                }
            }
            // else if (field.name == 'share-jd' ) {
            //     var ext = $thisForm.find('input[name="' + field.name + '"]').val().split('.').pop().toLowerCase();
            //     if(jQuery.inArray(ext, ['pdf','doc','docx']) == -1) {
            //         $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Invalid file type. Only PDF, DOC & DOCX files are allowed.</span>');
            //         if (popError == false)
            //             popError = true;
            //     }
            // }       
        });

        if (popError == true) {
            $thisForm.addClass('invalid');
            jQuery(".error-message").show();
            return false;
        } else {
            $thisForm.removeClass('invalid');
            jQuery(".error-message").hide();

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: new FormData(this),
                dataType: 'json',
                contentType: false,
                cache: false,
                processData:false,
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);

                        if(typeof data.ebook !== 'undefined')
                        {
                            setTimeout(function(){
                                window.open(data.ebook,'_blank');
                            }, 2000);
                        }

                        $thisForm.trigger("reset");
                    }
                },
                error: function(err) {
                    alert("Error: There is some issue please try again.");
                    console.log(err);
                }
            });
        }
    });
    
    /*****************************************************************/
    /*********  Rate Card On Pricing Page Form Ajax  Submit  *********/
    /****************************************************************/

    jQuery("#rate_card-form1").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#rate_card-form1').find('input').each(function(i, field) {
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
            }else if (field.name == 'phone') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
                    if (popError == false)
                        popError = true;
                }
            }else if (field.name == 'email') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message">Invalid email address</span>');
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) { 

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {                        
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        
                        $thisForm.trigger("reset");

                        setCookie("popup_form_submitted", 'form_submitted', 180, 'admin');
                        setCookie("user_name", data.name, 180, 'admin');
                        setCookie("user_email", data.email, 180, 'admin');
                        setCookie("user_ratecard_phone", data.email, 180, 'admin');

                        jQuery('#rate_card-form2 #user_name').val(data.name);
                        jQuery('#rate_card-form2 #user_email').val(data.email);
                        jQuery('#rate_card-form2 #user_ratecard_phone').val(data.user_ratecard_phone);

                        jQuery('#all_service').attr('href', data.all_service);
                        jQuery('#seo_pkg').attr('href', data.seo_pkg);
                        jQuery('#dedicated_team_pkg').attr('href', data.dedicated_team_pkg);
                        jQuery('#website_pkg').attr('href', data.website_pkg);
                        jQuery('#sem_pkg').attr('href', data.sem_pkg);
                        jQuery('#email_pkg').attr('href', data.email_pkg);
                        jQuery('#design_pkg').attr('href', data.design_pkg);
                        jQuery('#landing_page_pkg').attr('href', data.landing_page_pkg);
                        jQuery('#dedicated_pkg').attr('href', data.dedicated_pkg);
                        jQuery('#display_pkg').attr('href', data.display_pkg);
                        jQuery('#ort_pkg').attr('href', data.ort_pkg);

                        jQuery('#all_service').attr('target', '_blank');
                        jQuery('#dedicated_team_pkg').attr('target', '_blank');
                        jQuery('#seo_pkg').attr('target', '_blank');
                        jQuery('#website_pkg').attr('target', '_blank');
                        jQuery('#sem_pkg').attr('target', '_blank');
                        jQuery('#email_pkg').attr('target', '_blank');
                        jQuery('#design_pkg').attr('target', '_blank');
                        jQuery('#landing_page_pkg').attr('target', '_blank');
                        jQuery('#dedicated_pkg').attr('target', '_blank');
                        jQuery('#display_pkg').attr('target', '_blank');
                        jQuery('#ort_pkg').attr('target', '_blank');

                        var downloadReferrer = jQuery("#rate_card-form1 #downloadReferrer").val();
                        // var linkHref = jQuery("#"+downloadReferrer).attr('href');
                        var linkHref = data[downloadReferrer];
                        // console.log("LHREF:"+linkHref);
                        jQuery("#dwld_file").attr('value',linkHref);

                        setTimeout(function(){
                            //jQuery('a.popup-click').off('click');
                            jQuery("#btnDownloadForm1").trigger('click');
                            jQuery('.close-popup').trigger('click');  
                        }, 5000);

                        // location.reload();

                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });

    /******************************************************************************/
    /*********  Rate Card On Pricing Update Infor Page Form Ajax Submit  *********/
    /******************************************************************************/
    

    /**************************************************/
    /*********  Dedicated Page form AJAX Submit  ********/
    /**************************************************/

    jQuery("#dedicated-form, #dedicated-form-1").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#dedicated-form, #dedicated-form-1').find('input, textarea').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            
            if (field.name == 'full_name' || field.name == 'Company') {
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
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
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
            
            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {


                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        console.log('Test');
                        if ($("input[name='download_ratecard']").attr('checked'))
                        {
                            var url      = window.location.href;     // Returns full URL (https://example.com/path/example.html)
                            if(url == "https://www.clouru.com/design-services/")
                            {
                                window.open("https://www.clouru.com/wp-content/uploads/2020/04/Clouru-Design-US.pdf", 'Download');
                            }else{
                                window.open("https://www.clouru.com/wp-content/uploads/2020/04/Clouru-HubSpot-US.pdf", 'Download');
                            }
                            
                        }

                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });
    
    /**************************************************/
    /*********  Proof of Concept form AJAX Submit  ********/
    /**************************************************/

    jQuery("#hide-from").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#hide-from').find('input, textarea').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'full_name' || field.name == 'website') {
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
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone6.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'brief') {
                if (field.value == '') {
                    $thisForm.find('textarea[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please fill in the required field.</span>');
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
            
            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });


    /**************************************************/
    /*********  Got Question form AJAX Submit  ********/
    /**************************************************/

    jQuery("#got-question-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#got-question-form').find('input, textarea').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'full_name' || field.name == 'Company') {
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
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'message') {
                if (field.value == '') {
                    $thisForm.find('textarea[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please fill in the required field.</span>');
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });


    /**************************************************/
    /*********  Got Question form AJAX Submit  ********/
    /**************************************************/

    jQuery("#dedicated-team-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#dedicated-team-form').find('input,textarea,select').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'full_name' || field.name == 'Company' || field.name == 'needmembers' ) {
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
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
                    if (popError == false)
                        popError = true;
                }
            }else if (field.name == 'message') {
                if (field.value == '') {
                    $thisForm.find('textarea[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                } 
            }
            else if (field.name == 'website') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please fill in the website url.</span>');
                    if (popError == false)
                        popError = true;
                } 
            } 
            else if (field.name == 'duration') {
                if (field.value == '') {
                    $thisForm.find('select[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please fill in the duration field.</span>');
                    if (popError == false)
                        popError = true;
                } 
            }else if (field.name == 'requirement') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please fill in the requirement field.</span>');
                    if (popError == false)
                        popError = true;
                } 
            }else if (field.name == 'hire') {
                if (field.value == '') {
                    $thisForm.find('select[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please fill in the hire field.</span>');
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });


    /**************************************************/
    /*********  Book an Appointment form AJAX Submit  ********/
    /**************************************************/
    
    jQuery("#book-appointment-form").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#book-appointment-form').find('input, select').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'full_name' || field.name == 'appointment_date') {
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
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
                    if (popError == false)
                        popError = true;
                }
            } else if (field.name == 'appointment_time') {
                if (field.value == '') {
                    $thisForm.find('select[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please select a time slot.</span>');
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

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });


    jQuery('a.popup-click').on('click', function(){
console.log('popup click form-validation');
        var $fileDownload = jQuery(this).attr('data-download');
        var $downloadReferrer = jQuery(this).attr('id');

        jQuery('#rate_card-form1 #fileDownload').val($fileDownload);
        jQuery('#rate_card-form1 #downloadReferrer').val($downloadReferrer);

    });


    jQuery('.downloadSubmitBtn').click(function(){
        console.log("download start");
        var hrefVal       = jQuery(this).attr('href');
        var $fileDownload = jQuery(this).attr('data-download');

        var $name         = jQuery('#rate_card-form2 #user_name').val();
        var $email        = jQuery('#rate_card-form2 #user_email').val();
        var $phone        = jQuery('#rate_card-form2 #user_ratecard_phone').val();
        var $action       = jQuery('#rate_card-form2 #formAction').val();

        if(hrefVal != 'javaScript:void(0);'){
            console.log("before ajax");
            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: {'action':$action, 'name':$name, 'email':$email, 'phone':$phone, 'fileDownload':$fileDownload, 'filePath': hrefVal },
                dataType: 'json',                
                success: function(data) {
                    if(data.result == 'success'){
                        console.log('downloaded');    
                    }
                }
            });
        } else {
            console.log('download else part');

            jQuery('.popup-main').toggleClass('open');
            jQuery('body').toggleClass('open-custom-popup');

            var $fileDownload = jQuery(this).attr('data-download');
            var $downloadReferrer = jQuery(this).attr('id');

            jQuery('#rate_card-form1 #fileDownload').val($fileDownload);
            jQuery('#rate_card-form1 #downloadReferrer').val($downloadReferrer);        


        }
            

    });


    /**************************************************/
    /*********  hire-dedicated-team form AJAX Submit  ********/
    /**************************************************/
    
    jQuery("#msform").submit(function(event) {
        event.preventDefault();
        var $thisForm = $(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        $thisForm.find('span.error-message').remove();
        jQuery('form#msform').find('input, textarea').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            
            if (field.name == 'full_name' || field.name == 'Company') {
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
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter Phone.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!num_filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message text-red">Please enter number only.</span>');
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
            
            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {


                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);
                        console.log('Test');                        
                        $thisForm.trigger("reset");
                    }
                },
                error: function() {
                    alert("Error: There is some issue please try again.")
                }
            });
        }
    });

    

})( jQuery );

function startDownload(url) {
    window.open(url, 'Download');
}


/**************************************************/
    /*********  Price calculation AJAX Submit  ********/
    /**************************************************/

    jQuery("#price-cal-form").submit(function(event) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        event.preventDefault();
        var $thisForm = jQuery(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        var form_id = jQuery(this).attr("id");

        $thisForm.find('span.error-message').remove();
        jQuery(this).find('input, textarea').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'name') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                }
            }else if (field.name == 'email') {
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
            } else if (field.name == 'message') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
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

            if(jQuery("#send-summary").is(":checked") &&  jQuery("#on-off-switch").is(":checked")){

                if(parseInt(jQuery('#count').html()) >=3)
                {
                    form = $thisForm.serialize()+'&summary='+priceCalculation(true);
                }else{
                    jQuery('.ajax-message').show();
                    jQuery('.ajax-message').html('<span class="error-message">Please select team length greater than 3 0r 3.</span>');
                    return false;
                }

            }
            

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);

                        if(typeof data.ebook !== 'undefined')
                        {
                            setTimeout(function(){
                                window.open(data.ebook,'_blank');
                            }, 2000);
                        }

                        $thisForm.trigger("reset");
                    }
                },
                error: function(err) {
                    alert("Error: There is some issue please try again.");
                    console.log(err);
                }
            });
        }
    });


    jQuery("#price-email-form").submit(function(event) {
        var filter = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/;
        event.preventDefault();
        var $thisForm = jQuery(this);
        var data = {};
        var fieldName = '';
        var popError = false;

        var form_id = jQuery(this).attr("id");

        $thisForm.find('span.error-message').remove();
        jQuery(this).find('input, textarea').each(function(i, field) {
            data[field.name] = field.value;
            fieldName = field.name;
            fieldName = fieldName.replace(/_/gi, " ");
            fieldName = fieldName.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });


            if (field.name == 'email') {
                if (field.value == '') {
                    $thisForm.find('input[name="' + field.name + '"]').addClass('error').after('<span class="error-message">Please fill in the required field.</span>');
                    if (popError == false)
                        popError = true;
                } else if (!filter.test(field.value)) {
                    $thisForm.find('input[name="' + field.name + '"]').val('').addClass('error').after('<span class="error-message">Invalid email address</span>');
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

            if(jQuery("#send-summary").is(":checked")){

                if(parseInt(jQuery('#count').html()) >=3)
                {   
                    form = $thisForm.serialize()+'&summary='+priceCalculation(true);

                }else{
                    jQuery('.ajax-message').show();
                    jQuery('.ajax-message').html('<span class="error-message">Please select team length greater than 3 0r 3.</span>');
                    return false;
                }
                
            }
            

            jQuery.ajax({
                type: 'POST',
                url: adminurl,
                data: form,
                dataType: 'json',
                beforeSend: function() {
                    $thisForm.find('.form-loader').show();
                },
                success: function(data) {

                    if (data.result == 'fail') {
                        $thisForm.find('.ajax-message').html(data.message);
                        $thisForm.find('.form-loader').hide();
                    } else {
                        $thisForm.find('.form-loader').hide();
                        $thisForm.find('.ajax-message').html(data.message);

                        if(typeof data.ebook !== 'undefined')
                        {
                            setTimeout(function(){
                                window.open(data.ebook,'_blank');
                            }, 2000);
                        }

                        $thisForm.trigger("reset");
                    }
                },
                error: function(err) {
                    alert("Error: There is some issue please try again.");
                    console.log(err);
                }
            });
        }
    });
/* ------------------------------------------------------------------------------
*
*  # Modal dialogs and extensions
*
*  Specific JS code additions for components_modals.html page
*
*  Version: 1.0
*  Latest update: Aug 1, 2015
*
* ---------------------------------------------------------------------------- */

$(function() {

    $( ".event-value" ).keyup(function() {
        show_risk();
    });
    $( ".vulnerability-value" ).keyup(function() {
        show_risk();
    });
    $(".impact-value" ).keyup(function() {
        show_risk();
    });

    $('.elastic').autosize();

    
    function show_risk()
    {
        var event_value = $( ".event-value" ).val();
        var vulnerability_value = $( ".vulnerability-value" ).val();
        var impact_value = $( ".impact-value" ).val();
        console.log(event_value);
        console.log(vulnerability_value);
        console.log(impact_value);
        var risk_defination = "Risk of " + event_value + " Due to " + vulnerability_value + " Resulting in " + impact_value;
        console.log(risk_defination);
        $('.risk-defination').val(risk_defination);
    }   
    $('.additional-data').on('click', '.dropdown_textarea', function(){
       $(this).closest('.data-list').remove();
    })

    $('#additional_data').on('click', function(){
        html = '';
        html += '<div class="data-list">';
        html += '<div class="col-md-2 additional-field">';
        html +='<div class="form-group">'; 
            html += '<label class="control-label" for="formInput41">Selected Additional Field</label>';     
                html += '<select id="formInput41" class="bootstrap-select" data-live-search="true" data-width="100%">'; 
                    html += '<option>Legal and Regulatory</option>';                                        
                    html += '<option>Operational</option>';                                                        
                    html += '<option>Strategic</option>';                                                        
                html += '</select>';
            html += '</div>';                                                 
        html += '</div>';
        html += '<div class="col-md-6 drop-textarea">';
        html +=  '<div class="input-group">';
        html +=  '<textarea class="form-control elastic" id="formInput29" rows="1"></textarea>';
        html +=  '<span  class="dropdown_textarea input-group-addon"><i class="icon-x"></i></span>';
        html +=   '</div></div><div class="clearfix"></div></div>';
        $('.additional-data').append(html);
        $('.bootstrap-select').selectpicker();
        $('.elastic').autosize();
    })

});


$(document.body)
.on('show.bs.modal', function () {
    if (this.clientHeight <= window.innerHeight) {
        return;
    }
    // Get scrollbar width
    var scrollbarWidth = getScrollBarWidth()
    if (scrollbarWidth) {
        $('.navbar-fixed-top').css('margin-right', scrollbarWidth);    
    }
})
.on('hide.bs.modal', function () {
    $('.navbar-fixed-top').css('margin-right', 0);
});

 
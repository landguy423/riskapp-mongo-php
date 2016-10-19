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
})
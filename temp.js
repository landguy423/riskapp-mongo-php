control_html = "";
control_html += '<div class="row" data-pg-name="Row : Controls">'; 
    control_html += '<div class="block_custome" id="accordion">'; 
    control_html +='<a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#collapse2">Control #334</a>'; 
        control_html += '<div id="collapse2" class="panel_body panel-collapse collapse in">'; 
            control_html += '<div class="row">'; 
                control_html += '<div class="col-md-6">'; 
                    control_html += '<div class="row">'; 
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Control ID</label>';                                                                 
                                control_html += '<input type="text" class="form-control" id="control_id">'; 
                            control_html += '</div>';                                                             
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Control Type</label>';                                                                 
                                control_html += '<div class="form-group">'; 
                                    control_html += '<select id="formInput41" class="control-type bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
                                       
                                                                                                   
                                    control_html += '</select>';                                                                     
                                control_html += '</div>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-9">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput57">Control Description</label>';                                                                 
                                control_html += '<a data-toggle="modal" data-target="#modal_control" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a>'; 
                                control_html += '<textarea class="control-description form-control elastic " rows="5"></textarea>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                    control_html += '</div>';                                                     
                control_html += '</div>';                                                 
                control_html += '<div class="col-md-6">'; 
                    control_html += '<div class="row">'; 
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Control Strategy</label>';                                                                 
                                control_html += '<div class="form-group">'; 
                                    control_html += '<select id="formInput41" class="control-strategy bootstrap-select bgClass" data-live-search="true" data-width="100%">' 
                                        
                                                                                                            
                                    control_html += '</select>';                                                                     
                                control_html += '</div>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-9">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput57">Control Strategy Justification</label>';                                                                 
                                 
                                control_html +='<textarea class="form-control elastic control-strategy-justification" rows="1">'
                                    
                                control_html += '</textarea>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                    control_html += '</div>';                                                     
                    control_html += '<div class="row">'; 
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Post Control Probability</label>';                                                                 
                                control_html += '<div class="form-group">'; 
                                    control_html += '<select id="formInput41" class="post-control-probability bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
                                                                                                                
                                                                                                           
                                    control_html += '</select>';                                                                     
                                control_html += '</div>';                                                                 
                            control_html += '</div>'                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Post Control Impact</label>';                                                                 
                                control_html += '<div class="form-group">'; 
                                    control_html += '<select id="formInput41" class="post-control-impact bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
                                            
                                    control_html += '</select>';                                                                     
                                control_html += '</div>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Post Control Risk</label>';                                                                 
                                control_html += '<div class="form-group" id="auto_calculator_post">'; 
                                    control_html += '<select id="formInput41" class="post-control-risk bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
                                                                                                             
                                                                                                            
                                    control_html += '</select>';                                                                     
                                control_html += '</div>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Post Control Risk Score</label>';                                                                 
                                control_html += '<div class="form-group">' 
                                    control_html += '<input type="text" class="form-control post-control-risk-score-value" id="formInput35">'; 
                                control_html +='</div>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                        
                    control_html += '</div>';                                                     
                control_html += '</div>';                                                 
            control_html += '</div>';                                             
            control_html += '<div class="row" data-pg-name="Row : Controls 2">'; 
                control_html += '<div class="col-md-6">'; 
                    control_html += '<div class="row">'; 
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Control Cost Capex ($)</label>';                                                                 
                                control_html += '<input type="text" class="form-control control_cost_capex" id="formInput35">'; 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-9">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput57">Capex Cost Calculation/ Justification </label>';                                                                 
                                control_html += '<textarea class="form-control elastic capex_cost_calculation-value" rows="1">';
                                control_html += '</textarea>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                    control_html += '</div>';                                                     
                control_html += '</div>';                                                 
                control_html += '<div class="col-md-6">'; 
                    control_html += '<div class="row">'; 
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Control Status</label>';                                                                 
                                control_html += '<div class="form-group">'; 
                                    control_html += '<select id="formInput41" class="control-status bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
                                                                                                          
                                                                                                            
                                    control_html += '</select>';                                                                     
                                control_html += '</div>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Control Completion Date</label>';                                                                 
                                control_html += '<div class="form-group">';
                                   
                                    control_html += '<input type="text" class="form-control pickadate-strings control-completion- date" placeholder="">';
                                control_html += '</div>';                                                             
                            control_html += '</div>';
                         
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Review Frequency</label>';                                                                 
                                control_html += '<div class="form-group">'; 
                                    control_html += '<select id="formInput41" class="review-frequency bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
                                       
                                    control_html += '</select>';                                                                     
                                control_html += '</div>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Control Next Review</label>';                                                                 
                                control_html += '<div class="form-group">';
                                   
                                    control_html += '<input type="text" class="form-control pickadate-strings control-next-review" placeholder="">';
                                control_html += '</div>';                                                                     
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                    control_html += '</div>';                                                     
                control_html += '</div>';                                                 
            control_html += '</div>';                                             
            control_html += '<div class="row" data-pg-name="Row : Controls 2">'; 
                control_html += '<div class="col-md-6">'; 
                    control_html += '<div class="row">'; 
                        control_html += '<div class="col-md-3">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput35">Control Cost Opex ($)</label>';                                                                 
                                control_html += '<input type="text" class="form-control control-cost-opex" id="formInput35">'; 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-9">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput57">Opex Cost Calculation/ Justification </label>';                                                                 
                                control_html += '<textarea class="form-control elastic opex-cost-calculation-justification" rows="1"></textarea>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                    control_html += '</div>';                                                     
                control_html += '</div>';                                                 
                control_html += '<div class="col-md-6">'; 
                    control_html += '<div class="row">'; 
                        control_html += '<div class="col-md-6">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput57">Control Owner</label>';                                                                 
                                control_html += '<a data-toggle="modal" data-target="#modal_owner" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a>'; 
                                control_html += '<textarea class="form-control elastic owner-value" rows="1"></textarea>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                        control_html += '<div class="col-md-6">'; 
                            control_html += '<div class="form-group">'; 
                                control_html += '<label class="control-label" for="formInput57">Control Reviewer</label>';                                                                 
                                control_html += '<a data-toggle="modal" data-target="#modal_reviewer" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a>'; 
                                control_html += '<textarea class="form-control elastic reviewer-value" rows="1"></textarea>';                                                                 
                            control_html += '</div>';                                                             
                        control_html += '</div>';                                                         
                    control_html += '</div>';                                                     
                control_html += '</div>';                                                 
            control_html += '</div>';                                                                                          
            control_html += '<div class="clearfix"></div>';                                             
        control_html += '</div>';                                         
    control_html += '</div>';                                     
control_html += '</div>';
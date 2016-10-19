$(document).ready(function(){

	var visible_add = 1;
	var visible_update = 0;
	var edit_row;
	var myDataTable = $('.datatable-basic').dataTable();
	

	var risk_number = $('#risk_id_generate').val();
	
	var delay_second = parseInt($("#delay_second").val()) * 1000;
	var notication_location = $("#notication_location").val();
	
	var success_color = $("#success_color").val();
	var failure_color = $("#failure_color").val();
	var alert_color = $("#alert_color").val();
	var information_color = $("#information_color").val();

	

	var stack_top_right = {"dir1": "down", "dir2": "right", "push": "top"};
	var stack_top_left = {"dir1": "down", "dir2": "right", "push": "top"};
    var stack_bottom_left = {"dir1": "right", "dir2": "up", "push": "top"};
    var stack_bottom_right = {"dir1": "up", "dir2": "left", "firstpos1": 25, "firstpos2": 25};
	



	function show_stack_top_right(type) {
	    var opts = {
	        title: "Over here",
	        text: "Check me out. I'm in a different stack.",
	        addclass: "stack-top-right bg-primary",
	        stack: stack_top_right,
	        delay: delay_second
	    };
	    switch (type) {
	        case 'alert':
		        opts.title = "Alert";
		        opts.text = "There are issues in inputing";
		        opts.addclass = "stack-top-right " + alert_color;
		        break;
	
	        case 'failsure':
		        opts.title = "Failsure";
		        opts.text = "Try again?";
		        opts.addclass = "stack-top-right " + failure_color;
		        break;

	        case 'Insert':
		        opts.title = "Risk Insert";
		        opts.text = "The risk data is inserted successfully.";
		        opts.addclass = "stack-top-right " + success_color;
		        opts.delay = delay_second;
		        
		        break;

	        case 'Update':
		        opts.title = "Risk Update";
		        opts.text = "The risk data is updated successfully.";
		        opts.addclass = "stack-top-right " + success_color;
		        opts.delay = delay_second;
		        break;

	        case 'clone':
		        opts.title = "Risk clone";
		        opts.text = "Risk data is cloned successfully.";
		        opts.addclass = "stack-top-right " + success_color;
		        break;

		     case 'delete':
		        opts.title = "Risk Delete";
		        opts.text = "Risk data is deleted successfully";
		        opts.addclass = "stack-top-right " + success_color;
	    }
	    new PNotify(opts);
	    $('.ui-pnotify-container').removeClass('alert-primary')
	}
	function show_stack_top_left(type) {
	    var opts = {
	        title: "Over here",
	        text: "Check me out. I'm in a different stack.",
	        addclass: "stack-top-left bg-primary",
	        stack: stack_top_left,
	        delay: delay_second
	    };
	    switch (type) {
	        case 'error':
		        opts.title = "Alert";
		        opts.text = "There are issues in inputing";
		        opts.addclass = "stack-top-left " + alert_color;
		        break;
	        
	        case 'failsure':
		        opts.title = "Failsure";
		        opts.text = "Try again?";
		        opts.addclass = "stack-top-left " + failure_color;
		        break;

	        case 'Insert':
		        opts.title = "Risk Insert";
		        opts.text = "The risk data is inserted successfully.";
		        opts.addclass = "stack-top-left " + success_color;
		        break;

	        case 'Update':
		        opts.title = "Risk Update";
		        opts.text = "The risk data is updated successfully.";
		        opts.addclass = "stack-top-left "+ success_color;
		        break;

	        case 'clone':
		        opts.title = "Risk clone";
		        opts.text = "Risk data is cloned successfully.";
		        opts.addclass = "stack-top-left " + success_color;
		        break;
		    case 'delete':
		        opts.title = "Risk Delete";
		        opts.text = "Risk data is deleted successfully";
		        opts.addclass = "stack-top-left " + success_color;
	        	break;
	    }
	    new PNotify(opts);
	    $('.ui-pnotify-container').removeClass('alert-primary');
	}

	function show_stack_bottom_left(type) {
	    var opts = {
	        title: "Over here",
	        text: "Check me out. I'm in a different stack.",
	        addclass: "stack-bottom-left bg-primary",
	        stack: stack_bottom_left,
	        delay: delay_second
	    };
	    switch (type) {
	        case 'error':
		        opts.title = "Alert";
		        opts.text = "There are issues in inputing";
		        opts.addclass = "stack-bottom-left " + alert_color;
		        break;
	       
	        case 'Failsure':
		        opts.title = "failsure";
		        opts.text = "Try again?";
		        opts.addclass = "stack-bottom-left "+ failure_color;
		        break;

	        case 'Insert':
		        opts.title = "Risk Insert";
		        opts.text = "The risk data is inserted successfully.";
		        opts.addclass = "stack-bottom-left " + success_color;
		       
		        break;

	        case 'Update':
		        opts.title = "Risk Update";
		        opts.text = "The risk data is updated successfully.";
		        opts.addclass = "stack-bottom-left "+ success_color;
		        
		        break;

	        case 'clone':
		        opts.title = "Risk clone";
		        opts.text = "Risk data is cloned successfully.";
		        opts.addclass = "stack-bottom-left "+ success_color;
		        
		        break;

		     case 'delete':
		        opts.title = "Risk Delete";
		        opts.text = "Risk data is deleted successfully";
		        opts.addclass = "stack-bottom-left "+ success_color;
		       
	        	break;
		    }
		    new PNotify(opts);
		    $('.ui-pnotify-container').removeClass('alert-primary');
	}

	function show_stack_bottom_right(type) {
	    var opts = {
	        title: "Over here",
	        text: "Check me out. I'm in a different stack.",
	        addclass: "stack-top-right bg-primary",
	        stack: stack_bottom_right,
	        delay: delay_second
	    };
	    switch (type) {
	        case 'error':
		        opts.title = "Alert";
		        opts.text = "There are issues in inputing";
		        opts.addclass = "stack-bottom-right "+alert_color;
		        
		        break;
	        
	        case 'Failsure':
		        opts.title = "Failsure";
		        opts.text = "Try again?";
		        opts.addclass = "stack-bottom-right "+failure_color;
		        
		        break;

	        case 'Insert':
		        opts.title = "Risk Insert";
		        opts.text = "The risk data is inserted successfully.";
		        opts.addclass = "stack-bottom-right "+success_color;
		        
		        break;

	        case 'Update':
		        opts.title = "Risk Update";
		        opts.text = "The risk data is updated successfully.";
		        opts.addclass = "stack-bottom-right "+success_color;
		        
		        break;

	        case 'clone':
		        opts.title = "Risk clone";
		        opts.text = "Risk data is cloned successfully.";
		        opts.addclass = "stack-bottom-right "+success_color;
		        
		        break;
		    case 'delete':
		        opts.title = "Risk Delete";
		        opts.text = "Risk data is deleted successfully";
		        opts.addclass = "stack-bottom-right "+success_color;
		        
	        	break;
	    }
	    new PNotify(opts);
	    $('.ui-pnotify-container').removeClass('alert-primary');
	}
	

	$('.event-modal-insert').click(function(){
		var event_value = $('#event_value').val();
		$('.event-value').val(event_value);
		show_risk();
		$('#modal_event').modal('hide');
		
	})

	$('.vulnerability-modal-insert').click(function(){
		var vulnerability_value = $('#vulnerability_value').val();
		$('.vulnerability-value').val(vulnerability_value);
		show_risk();
		$('#modal_vulnerability').modal('hide');
		
	})


	$('.impact-modal-insert').click(function(){
		var impact_value = $('#impact_value').val();
		$('.impact-value').val(impact_value);
		show_risk();
		$('#modal_impact').modal('hide');
		
	})


	$('.riskmanager-modal-insert').click(function(){
		var riskmanager_value = $('#riskmanager_value').val();
		$('.risk-manager').val(riskmanager_value);
		show_risk();
		$('#modal_riskmanager').modal('hide');
		
	})
	$('.riskcategory-modal-insert').click(function(){
		var riskmanager_value = $('#riskmanager_value').val();
		$('.risk-manager').val(riskmanager_value);
		show_risk();
		$('#modal_riskmanager').modal('hide');
		
	})

	$('#riskcategory_insert').click(function(){
		
		$('#modal_riskcategoryinfo').modal('hide');
		
	})
	
	$('#risk_identification_record_add').click(function(){
		

		var riskid_name = $('#riskid_name').val();
		var risk_category = $('#risk_category').val();
		var staus = document.querySelector('input[name="status"]:checked').value;
		var event_value = $('.event-value').val();
		var vulnerability_value = $('.vulnerability-value').val();
		var impact_value = $('.impact-value').val();
		var business_unit_value = $('#business_unit').val();
		var risk_manager_value = $('.risk-manager').val();
		var risk_defination_value = $('.risk-defination').val();

		var chkBox = document.getElementById('generated-defination');
		
		var indicate = "status-"+staus;
		var color_ref = $("."+indicate).attr('color');
		
		var additional_data = [];
		$( ".data-list" ).each(function() {
			var field_name = $(this).find('.field-name').val();
			var field_value = $(this).find('.field-value').val();
			additional_data.push(field_name + '||' + field_value);
		});

		var risk_title = $('.risk-title').val();
		
		$.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "json",
		          data: {'info' : {
						"riskid_name" : riskid_name, 
						"risk_category_name" : risk_category, 
						"staus" : staus, 
						"event_value" : event_value, 
						"vulnerability_value" : vulnerability_value, 
						"impact_value" : impact_value, 
						"business_unit_value" : business_unit_value, 
						"risk_manager_value" : risk_manager_value, 
						"risk_defination_value" : risk_defination_value,
						"fields":additional_data, 
						"risk_title": risk_title},
		          		'filter':'add_risk_identification'
		        	},
				success:function(response) {

					console.log(riskid_name);
					if (riskid_name)
						riskid_name = riskid_name;
					else
						riskid_name = '';
					if (risk_defination_value)
						risk_defination_value = risk_defination_value;
					else
						risk_defination_value = '';

					if (risk_category)
						risk_category = risk_category;
					else
						risk_category = '';

					if (business_unit_value)
						business_unit_value = business_unit_value;
					else
						business_unit_value = '';



					var business_unit_html = '<a href="#">' +business_unit_value+ '</a>';
					var staus_html;
					
					staus_html = '<span class="label" style="background-color:'+color_ref+'">' +staus+ '</span>';
					
					var action = '';
					action += '<ul class="icons-list text-center">';
					action += '<li class="id-check-view" id="'+response['id']['$id']+'">';
					action += '<button type="button" class="btn btn-default btn-xs">';
					action += '<i class="icon-eye2"></i>';
					action += '</button>';
					action += '</li>';
					action += '<li class="id-check-edit" id="'+response['id']['$id']+'">';
					action += '<button type="button" class="btn btn-default btn-xs">';
					action += '<i class="icon-database-edit2"></i>'
					action += '</button>';
					action += '</li>';
					action += '<li class="id-check-clone" id="'+response['id']['$id']+'">';
					action += '<button type="button" class="btn btn-default btn-xs">';
					action += '<i class="icon-copy3"></i>';
					action += '</button>';
					action += '</li>';
					action += '<li class="id-check-delete" id="'+response['id']['$id']+'" riskid="'+riskid_name+'">';
					action += '<button type="button" class="btn btn-danger btn-xs">';
					action += '<i class="icon-cross"></i>';
					action += '</button>';
					action += '</li>';
					action += '</ul>';
					
					myDataTable.fnAddData(['R'+response['risk_number'], risk_title + '<br>' + risk_defination_value, risk_category, business_unit_html, staus_html, action]);
					
					
					$('.event-value').val('');
					$('.vulnerability-value').val('');
					$('.impact-value').val('');
					$('.risk-manager').val('');
					$('.risk-defination').val('');
					$('.risk-title').val('');
					

					if (notication_location=="TopRight") {
						show_stack_top_right('Insert');	
					} else if(notication_location=="TopLeft"){
						show_stack_top_left('Insert');	
					} else if(notication_location=="BottomRight"){
						show_stack_bottom_right('Insert');	
					}else{
						show_stack_bottom_left('Insert');	
					}

					risk_insert_number = response['risk_number'] + 1;
					$('#riskid_name').val("R"+risk_insert_number);

					init_additional_data();
					
				},
				error:function(response) {
				    console.log('error');
				}
			});

		
	})

	$('#event_category').change(function(){

		var event_category = $('#event_category').val();
		 $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_event_value', 'event_category':event_category
		        	},
				success:function(response) {
					

				    ret = put_html(response);
				  
				    $('#event_value').html(ret);
				    $('#event_value').selectpicker('refresh');
				},
				error:function(response) {
				    console.log('error');
				}
			});
	})

	$('#risk-category').change(function(){
		
		var risk_category = $('#risk-category').val();
		 $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_risk_value', 'risk_category':risk_category
		        	},
				success:function(response) {
					
				    ret = put_html(response);
				   
				    $('#risk_value').html(ret);
				    $('#risk_value').selectpicker('refresh');
				},
				error:function(response) {
				    console.log('error');
				}
			});
	})



	$('#vulnerability_category').change(function(){

		var vulnerability_category = $('#vulnerability_category').val();
		 $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_vulnerability_value', 'vulnerability_category':vulnerability_category
		        	},
				success:function(response) {
					

				    ret = put_html(response);
				 
				    $('#vulnerability_value').html(ret);
				    $('#vulnerability_value').selectpicker('refresh');
				},
				error:function(response) {
				    console.log('error');
				}
			});
	})

	$('#impact-category').change(function(){

		var impact_category = $('#impact-category').val();
		 $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_impact_value', 'impact_category':impact_category
		        	},
				success:function(response) {
					

				    ret = put_html(response);
				  
				    $('#impact_value').html(ret);
				    $('#impact_value').selectpicker('refresh');
				},
				error:function(response) {
				    console.log('error');
				}
			});
	})


	$('#riskmanager-category').change(function(){

		var riskmanager_category = $('#riskmanager-category').val();
		
		 $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_riskmanager_value', 'riskmanager_category':riskmanager_category
		        	},
				success:function(response) {
					
				
				    ret = put_html(response);
				   
				    $('#riskmanager_value').html(ret);
				    $('#riskmanager_value').selectpicker('refresh');
				},
				error:function(response) {
				    console.log('error');
				}
			});
	})
	$('.table-body').on('click', '.id-check-view',  function(){
		var object_id = $(this).attr('id');
		
		 $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_risk_row', 'object_id':object_id
		        	},
				success:function(response) {
					for (var i = 0; i < response['status_color'].length; i = i+2) {
						if (response['row'][0]['staus'] == response['status_color'][i]){
					    	$('.risk-status').find('.checked').removeClass('checked');
					    	var indicate = "status-"+response['row'][0]['staus'];
					    	$("."+indicate).parent().addClass('checked');
					    }
					}

					
					additional_data = [];
					for (var i = 0; i < response['row'][0]['fields'].length; i++) {
						str = response['row'][0]['fields'][i];
						split_str = str.split("||");
						additional_data.push(split_str[0]);
						additional_data.push(split_str[1]);
					}
					show_additional_data(additional_data, 'view', response['addtional_data']);


				   	$('#riskid_name').val(response['row'][0]['riskid_name']);
					$('#risk_category').val(response['row'][0]['risk_category_name']);
				
					$('.event-value').val(response['row'][0]['event_value']);
					$('.vulnerability-value').val(response['row'][0]['vulnerability_value']);
					$('.impact-value').val(response['row'][0]['impact_value']);
					$('#business_unit').val(response['row'][0]['business_unit_value']);
					$('.risk-manager').val(response['row'][0]['risk_manager_value']);
					$('.risk-defination').val(response['row'][0]['risk_defination_value']);
					$('.risk-title').val(response['row'][0]['risk_title']);

					$('#risk_identification_record_add').css('display', 'none');
					$('#risk_identification_record_edit').css('display', 'none');

					
				    
				},
				error:function(response) {
				    console.log('error');
				}
			});

	})

	$('.table-body').on('click', '.id-check-edit',  function(){
		var object_id = $(this).attr('id');
		$('#risk_identification_record_edit').attr('object-id', object_id);
		$('#risk_identification_record_add').css('display', 'none');
		$('#risk_identification_record_edit').css('display', 'block');
		edit_row = $(this).closest("tr")[0];
		 $.ajax({
	          method: "POST",
	          url: "server/action.php",
	          dataType: "json",
	          data: {
	          		'filter':'get_risk_row', 'object_id':object_id
	        	},
			success:function(response) {
			
			    for (var i = 0; i < response['status_color'].length; i = i+2) {
					if (response['row'][0]['staus'] == response['status_color'][i]){
				    	
				    	$('.risk-status').find('.checked').removeClass('checked');
				    	var indicate = "status-"+response['row'][0]['staus'];
				    	$("."+indicate).parent().addClass('checked');
				    }
				}


				additional_data = [];
				for (var i = 0; i < response['row'][0]['fields'].length; i++) {
					str = response['row'][0]['fields'][i];
					split_str = str.split("||");
					additional_data.push(split_str[0]);
					additional_data.push(split_str[1]);
				}
				show_additional_data(additional_data, 'update', response['addtional_data']);


			   	$('#riskid_name').val(response['row'][0]['riskid_name']);
				$('#risk_category').val(response['row'][0]['risk_category_name']);
				//var staus = document.querySelector('input[name="status"]:checked').value;
				$('.event-value').val(response['row'][0]['event_value']);
				$('.vulnerability-value').val(response['row'][0]['vulnerability_value']);
				$('.impact-value').val(response['row'][0]['impact_value']);
				$('#business_unit').val(response['row'][0]['business_unit_value']);
				$('.risk-manager').val(response['row'][0]['risk_manager_value']);
				$('.risk-defination').val(response['row'][0]['risk_defination_value']);
				$('.risk-title').val(response['row'][0]['risk_title']);
			    
			},
			error:function(response) {
			    console.log('error');
			}
		});

	})

	$('.table-body').on('click', '.id-check-clone',  function(){
		var object_id = $(this).attr('id');
		
		$('#risk_identification_record_add').css('display', 'none');
		$('#risk_identification_record_edit').css('display', 'none');
		

		 $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "json",
		          data: {
		          		'filter':'clone_risk_row', 'object_id':object_id
		        	},
				success:function(response) {
					console.log('risk-name', response);
					var business_unit_html = '<a href="#">' +response['row']['business_unit_value']+ '</a>';
					var staus_html;

					var indicate = "status-"+response['row']['staus'];
					var color_ref = $("."+indicate).attr('color');

					staus_html = '<span class="label" style="background-color:'+ color_ref +'">' +response['row']['staus']+ '</span>';
						
					var action = '';
					action += '<ul class="icons-list text-center">';
					action += '<li class="id-check-view" id="'+response['_id']+'">';
					action += '<button type="button" class="btn btn-default btn-xs">';
					action += '<i class="icon-eye2"></i>';
					action += '</button>';
					action += '</li>';
					action += '<li class="id-check-edit" id="'+response['_id']+'">';
					action += '<button type="button" class="btn btn-default btn-xs">';
					action += '<i class="icon-database-edit2"></i>'
					action += '</button>';
					action += '</li>';
					action += '<li class="id-check-clone" id="'+response['_id']+'">';
					action += '<button type="button" class="btn btn-default btn-xs">';
					action += '<i class="icon-copy3"></i>';
					action += '</button>';
					action += '</li>';
					action += '<li class="id-check-delete" id="'+response['_id']+'" riskid="R'+response['risk_number']+'">';
					action += '<button type="button" class="btn btn-danger btn-xs">';
					action += '<i class="icon-cross"></i>';
					action += '</button>';
					action += '</li>';
					action += '</ul>';
					var new_risk_id = response['risk_number'];
					myDataTable.fnAddData(['R'+ response['risk_number'], response['row']['risk_title']+'<br>[copy]'+response['row']['risk_defination_value'], response['row']['risk_category_name'], business_unit_html, staus_html, action]);
					new_risk_id ++;
					$('#riskid_name').val('R'+ new_risk_id);
					
					if (notication_location=="TopRight") {
						show_stack_top_right('clone');	
					} else if(notication_location=="TopLeft"){
						show_stack_top_left('clone');	
					} else if(notication_location=="BottomRight"){
						show_stack_bottom_right('clone');	
					}else{
						show_stack_bottom_left('clone');	
					}



				},
				error:function(response) {
				    console.log('error');
				}
			});

	})

	$('#risk_identification_record_edit').click(function(){
		
		var object_id = $(this).attr('object-id');
		var riskid_name = $('#riskid_name').val();
		var risk_category = $('#risk_category').val();
		var staus = document.querySelector('input[name="status"]:checked').value;
		var event_value = $('.event-value').val();
		var vulnerability_value = $('.vulnerability-value').val();
		var impact_value = $('.impact-value').val();
		var business_unit_value = $('#business_unit').val();
		var risk_manager_value = $('.risk-manager').val();
		var risk_defination_value = $('.risk-defination').val();
		var risk_title = $('.risk-title').val();
		
		var additional_data = [];
		$( ".data-list" ).each(function() {
			var field_name = $(this).find('.field-name').val();
			var field_value = $(this).find('.field-value').val();
			additional_data.push(field_name + '||' + field_value);
		});
		
		  $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "text",
		          data: {'info' : {
		          		"_id" : object_id,
						"riskid_name" : riskid_name, 
						"risk_category_name" : risk_category, 
						"staus" : staus, 
						"event_value" : event_value, 
						"vulnerability_value" : vulnerability_value, 
						"impact_value" : impact_value, 
						"business_unit_value" : business_unit_value, 
						"risk_manager_value" : risk_manager_value, 
						"risk_defination_value" : risk_defination_value,
						"fields": additional_data,
						"risk_title": risk_title},
		          		'filter':'update_risk_identification'
		        	},
				success:function(response) {

					
					if (riskid_name)
						riskid_name = riskid_name;
					else
						riskid_name = '';
					if (risk_defination_value)
						risk_defination_value = risk_defination_value;
					else
						risk_defination_value = '';

					if (risk_category)
						risk_category = risk_category;
					else
						risk_category = '';

					if (business_unit_value)
						business_unit_value = business_unit_value;
					else
						business_unit_value = '';

					var business_unit_html = '<a href="#">' +business_unit_value+ '</a>';
					

					var staus_html;
					var indicate = "status-"+staus;
					var color_ref = $("."+indicate).attr('color');
					
					staus_html = '<span class="label" style="background-color:'+ color_ref +'">' +staus+ '</span>';
					

					myDataTable.fnUpdate(riskid_name, edit_row, 0);
					myDataTable.fnUpdate(risk_title + '<br>' +risk_defination_value, edit_row, 1);
					myDataTable.fnUpdate(risk_category, edit_row, 2);
					myDataTable.fnUpdate(business_unit_html, edit_row,3);
					myDataTable.fnUpdate(staus_html, edit_row, 4);
					
					if (notication_location=="TopRight") {
						show_stack_top_right('Update');	
					} else if(notication_location=="TopLeft"){
						show_stack_top_left('Update');	
					} else if(notication_location=="BottomRight"){
						show_stack_bottom_right('Update');	
					}else{
						show_stack_bottom_left('Update');	
					}

					
				},
				error:function(response) {
				    console.log('error');
				}
			});
		
	})
	
	$('.table-body').on('click', '.id-check-delete',  function(){
		var object_id = $(this).attr('id');
		var risk_name = $(this).attr('riskid');
		var delete_row = $(this).closest('tr')[0];
		 $.ajax({
		          method: "POST",
		          url: "server/action.php",
		          dataType: "text",
		          data: {
		          		'filter':'delete_risk_row', 'object_id':object_id, 'risk_name':risk_name
		        	},
				success:function(response) {
				   
			        myDataTable.fnDeleteRow( delete_row );
			        
			        if (notication_location=="TopRight") {
						show_stack_top_right('delete');	
					} else if(notication_location=="TopLeft"){
						show_stack_top_left('delete');	
					} else if(notication_location=="BottomRight"){
						show_stack_bottom_right('delete');	
					}else{
						show_stack_bottom_left('delete');	
					}

					$('#riskid_name').val("R"+response);
					init_additional_data();
				},
				error:function(response) {
				    console.log('error');
				}
			});



	})
	$('#new_add_risk').click(function(){
		
		$('#risk_identification_record_add').css('display', 'block');
		$('#risk_identification_record_edit').css('display', 'none');
		

		$('.event-value').val('');
		$('.vulnerability-value').val('');
		$('.impact-value').val('');
		$('.risk-manager').val('');
		$('.risk-defination').val('');
		init_additional_data();
	})
	
	$("#generated-defination").change(function() {
	    if(this.checked) {
	        show_risk();
	        $(".risk-defination").removeAttr("disabled"); 
		}
		else
			$(".risk-defination").attr('disabled','disabled'); 
	});
	$("#panel_reload").on('click', function(){
		$('.risk-title').val('');
		$('.event-value').val('');
		$('.vulnerability-value').val('');
		$('.impact-value').val('');
		$('.risk-manager').val('');
		$('.risk-defination').val('');
		$('.risk-title').val('');

	})

});


function put_html(Categoyarray){
	var html = "";
    for (var i = 0; i < Categoyarray.length; i++) {
    	html += "<option>"+ Categoyarray[i] +"</option>"
    }
    return html;
}
function show_risk()
{
    var event_value = $( ".event-value" ).val();
    var vulnerability_value = $( ".vulnerability-value" ).val();
    var impact_value = $( ".impact-value" ).val();
    var chkBox = document.getElementById('generated-defination');
    if (chkBox.checked == true){
	    if (event_value != '' | vulnerability_value != '' | impact_value !='' ){
		    var risk_defination = "Risk of " + event_value + " Due to " + vulnerability_value + " Resulting in " + impact_value;
		    $('.risk-defination').val(risk_defination);
		}
	}
}  

$(document).on('click', '.additional-data', function(){

	 $.ajax({
          method: "POST",
          url: "server/action.php",
          dataType: "json",
          data: {
          		'filter':'additional_add'
        	},
		success:function(response) {
			
			html = '';
			html += '<div class="data-list"><div class="row">';
			html += '<div class="col-md-3">';
			html +='<div class="form-group">';     
			html += '<select class="field-name bootstrap-select" data-live-search="true" data-width="100%">'; 
			for (var i = 0; i < response[0]['fields'].length; i++) {
				html += '<option>'+ response[0]['fields'][i] +'</option>'; 	
			}
			html += '</select>';
			html += '</div>';                                                 
			html += '</div>';
			html += '<div class="col-md-4">';
			html +='<div class="form-group">';  
			html +=  '<textarea class="field-value form-control elastic" rows="1" style="width:92%;display: inline-block;"></textarea><span class="delete_data btn-danger"><i class="icon-x"></i></span>';
			html += '</div>';
			html +=   '</div></div><div class="clearfix"></div></div>';
			$(html).appendTo('.additional_data_form');
			$('.bootstrap-select').selectpicker('refresh');
			$('.elastic').autosize();				
		},
		error:function(response) {
		    console.log('error');
		}
	});
	
});

function init_additional_data(){
	 $.ajax({
          method: "POST",
          url: "server/riskaction.php",
          dataType: "json",
          data: {
          		'filter':'additional_add'
        	},
		success:function(response) {
			$('.additional_data_form .data-list').remove();

			html = '';
			html += '<div class="data-list"><div class="row">';
			html += '<div class="col-md-3">';
			html +='<div class="form-group">';     
			html += '<select class="field-name bootstrap-select" data-live-search="true" data-width="100%">'; 
			for (var i = 0; i < response[0]['fields'].length; i++) {
				html += '<option>'+ response[0]['fields'][i] +'</option>'; 	
			}
			html += '</select>';
			html += '</div>';                                                 
			html += '</div>';
			html += '<div class="col-md-4">';
			html +='<div class="form-group">';  
			html +=  '<textarea class="field-value form-control elastic" rows="1" style="width:92%;display: inline-block;"></textarea><span class="additional-data delete_data1 btn-success"><i class="icon-database-edit2"></i></span>';
			html += '</div>';
			html +=   '</div></div><div class="clearfix"></div></div>';
			$(html).appendTo('.additional_data_form');
			$('.bootstrap-select').selectpicker('refresh');
			$('.elastic').autosize();				
		},
		error:function(response) {
		    console.log('error');
		}
	});
}

function show_additional_data(addtionaldata, format, entire_addition_data){
	$('.additional_data_form .data-list').remove();
	html = '';
	
	for (var i = 0; i < addtionaldata.length; i= i+2) {
		var compare_str = addtionaldata[i];
		if (i == 0) {
			html += '<div class="data-list"><div class="row">';
			html += '<div class="col-md-3">';
			html +='<div class="form-group">';     
			html += '<select class="field-name bootstrap-select" data-live-search="true" data-width="100%">'; 
			for (var j = 0; j < entire_addition_data[0]['fields'].length; j ++) {
				if (compare_str == entire_addition_data[0]['fields'][j])
					html += '<option selected>'+ entire_addition_data[0]['fields'][j] +'</option>';
				else
					html += '<option>'+ entire_addition_data[0]['fields'][j] +'</option>'; 	
			}
			html += '</select>';
			html += '</div>';                                                 
			html += '</div>';
			html += '<div class="col-md-4">';
			html +='<div class="form-group">';  
			html +=  '<textarea class="field-value form-control elastic" rows="1" style="width:92%;display: inline-block;">'+addtionaldata[i+1]+'</textarea>';
			if (format != 'view')
				html += '<span class="additional-data delete_data1 btn-success"><i class="icon-database-edit2"></i></span>';
			html += '</div>';
			html +=   '</div></div><div class="clearfix"></div></div>';
		}
		else{

			html += '<div class="data-list"><div class="row">';
			html += '<div class="col-md-3">';
			html +='<div class="form-group">';     
			html += '<select class="field-name bootstrap-select" data-live-search="true" data-width="100%">'; 
			for (var j = 0; j < entire_addition_data[0]['fields'].length; j ++) {
				if (compare_str == entire_addition_data[0]['fields'][j])
					html += '<option selected>'+ entire_addition_data[0]['fields'][j] +'</option>';
				else
					html += '<option>'+ entire_addition_data[0]['fields'][j] +'</option>'; 	
			}
			html += '</select>';
			html += '</div>';                                                 
			html += '</div>';
			html += '<div class="col-md-4">';
			html +='<div class="form-group">';  
			html +=  '<textarea class="field-value form-control elastic" rows="1" style="width:92%;display: inline-block;">'+addtionaldata[i+1]+'</textarea>';
			if (format != 'view')
				html += '<span class="delete_data btn-danger"><i class="icon-x"></i></span>';
			html += '</div>';
			html +=   '</div></div><div class="clearfix"></div></div>';

		}

	}

	$(html).appendTo('.additional_data_form');
	$('.bootstrap-select').selectpicker('refresh');
	$('.elastic').autosize();			

}

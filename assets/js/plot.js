

	var global_post_control_risk = [];
	var global_post_control_impact = [];
	var global_post_control_probability = [];
	var global_review_frequency = [];
	var global_control_status = [];
	var global_control_strategy = [];
	var global_control_type = [];

	var global_analysis;
	var global_control_number;
	var global_select_row;

	var data='';
	
	var vertical,horizontal,width,height;
	var sdata = {};
	var vertical = 5;
	var horizontal = 5; 
	var width = 45;
	var height = 45;
	var width1 = 45;
	var height1 = 45;
	var style_content;
	
	var cpGradient=false;
	var border_weight;
	var border_color;
	var width1 = 45;
	var height1 = 45;
	
	/*Get control section data from db*/
	getControlAllData();



	/* Risk Chart */	
	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_risk_chart_value'
	    	},
		success:function(response) {
			
			width = response['width'];
			height = response['height'];
			cpGradient = response['gradient_check'];
			style_content = response['content'];
			border_weight = response['border_weight'];
			border_color = response['border_color'];
			chart_data = response['chart_data'];

			
			var graph_container = getRiskChartHtml(chart_data, vertical, horizontal, cpGradient, style_content, border_weight, border_color, 'graph_container');
			
			var graph_container1 = getRiskChartHtml(chart_data, vertical, horizontal, cpGradient, style_content, border_weight, border_color, 'graph_container1');
			
			document.getElementById("graph_container").innerHTML = graph_container;
			
			document.getElementById("graph_container1").innerHTML = graph_container1;

			document.getElementById("x_axix").innerHTML = getxAxis(horizontal);
			document.getElementById("y_axix").innerHTML = getyAxis(vertical, height);
			

			document.getElementById("x_axix1").innerHTML = getxAxis(horizontal);
			document.getElementById("y_axix1").innerHTML = getyAxis(vertical, height);;

		},
		error:function(response) {
		    console.log('error');
		}
	})
	
	function getRiskChartHtml(sdata, vertical, horizontal, cpGradient, style_content, border_weight, border_color, container_tag_id)
	{
		
		data = [];
		//ip = vertical * horizontal;
		ip = 0;
		for(y = vertical; y >= 1; y--)
		{
			data+="<div class='graph_row axix-y-"+y+"'>";
			//count = ip - horizontal;
			for(x = 1; x <= horizontal; x++)
			{
				if(cpGradient == "true")
				{
					
					color = "#000";
					bg = 'transparent';
					document.getElementById(container_tag_id).setAttribute('style', style_content);
			
				}else{
					color = sdata[ip][0];
					bg = sdata[ip][1];
				}
			
				text = sdata[ip][2];
				
				badge = sdata[ip][3];
				badge_txt_color = sdata[ip][4];
				badge_bg_color = sdata[ip][5];

				if(cpGradient == "true")
				{
					data += "<div class='axix-x-"+x+"' style='border:"+border_weight+" solid "+border_color+"; width:"+width+"px;height:"+height+"px;color:"+color+";"+bg+";'><span>"+text+"</span>"+(badge != '' ? "<span class='badge' style=color:"+badge_txt_color+";background-color:"+badge_bg_color+">"+badge+"</span>":'')+"</div>";
				}else{
					data += "<div class='axix-x-"+x+"' style='border:"+border_weight+" solid "+border_color+"; width:"+width+"px;height:"+height+"px;color:"+color+";background:"+bg+";'><span>"+text+"</span>"+(badge != '' ? "<span class='badge' style=color:"+badge_txt_color+";background-color:"+badge_bg_color+">"+badge+"</span>":'')+"</div>";
				}
				ip ++;
				//count ++;
			}
			//ip -= vertical;
			data+="</div>";
			
			
		}
		return data;
	}
	
	function getxAxis(horizontal){
		var x_axix = '';
	
		for(x = 0; x <= horizontal; x++)
		{
			if(x==0)
			{
				x_axix += "<div style='width:2px;height:auto;'>"+x+"</div>";
			}else
			{
			x_axix += "<div style='width:"+width+"px;height:auto;'>"+x+"</div>";
			}
		}
		return x_axix;	
	}

	function getyAxis(vertical, height){

		var y_axix = '';
		for(y = vertical; y >= 0; y--)
		{
			if(y==0)
			{
				height=10;
			}
			y_axix += "<div style='height:"+height+"px;width:auto;'>"+y+"</div>";
		}
		return y_axix; 
	}
	

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
		        opts.title = "Risk Analysis Record Insert";
		        opts.text = "Risk analysis record is inserted successfully.";
		        opts.addclass = "stack-top-right " + success_color;
		        opts.delay = delay_second;
		        
		        break;

	        case 'Update':
		        opts.title = "Risk Analysis Record Update";
		        opts.text = "Risk analysis record is updated successfully.";
		        opts.addclass = "stack-top-right " + success_color;
		        opts.delay = delay_second;
		        break;
		    case 'ControlAdd':
		        opts.title = "Control Section Add";
		        opts.text = "Risk control section is added successfully";
		        opts.addclass = "stack-top-right " + success_color;
	        

		     case 'ControlRemove':
		        opts.title = "Control Section Delete";
		        opts.text = "Risk control section is deleted successfully";
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
		        opts.title = "Risk Analysis Record Insert";
		        opts.text = "Risk analysis record is inserted successfully.";
		        opts.addclass = "stack-top-left " + success_color;
		        break;

	        case 'Update':
		        opts.title = "Risk Analysis Record Update";
		        opts.text = "Risk analysis record is updated successfully.";
		        opts.addclass = "stack-top-left "+ success_color;
		        break;
		    case 'ControlAdd':
		        opts.title = "Control Section Add";
		        opts.text = "Risk control section is added successfully";
		        opts.addclass = "stack-top-right " + success_color;
	        
	        
		    case 'ControlRemove':
		        opts.title = "Control Section Delete";
		        opts.text = "Risk control section is deleted successfully";
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
		        opts.title = "Risk Analysis Record Insert";
		        opts.text = "Risk analysis record is inserted successfully.";
		        opts.addclass = "stack-bottom-left " + success_color;
		       
		        break;

	        case 'Update':
		        opts.title = "Risk Analysis Record Update";
		        opts.text = "Risk analysis record is updated successfully.";
		        opts.addclass = "stack-bottom-left "+ success_color;
		        
		        break;
		    case 'ControlAdd':
		        opts.title = "Control Section Add";
		        opts.text = "Risk control section is added successfully";
		        opts.addclass = "stack-top-right " + success_color;
	        
	        

		     case 'ControlRemove':
		        opts.title = "Control Section Delete";
		        opts.text = "Risk control section is deleted successfully";
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
		        opts.title = "Risk Analysis Record Insert";
		        opts.text = "Risk analysis record is inserted successfully.";
		        opts.addclass = "stack-bottom-right "+success_color;
		        
		        break;

	        case 'Update':
		        opts.title = "Risk Analysis Record Update";
		        opts.text = "Risk analysis record is updated successfully.";
		        opts.addclass = "stack-bottom-right "+success_color;
		        
		        break;

	        case 'ControlAdd':
		        opts.title = "Control Section Add";
		        opts.text = "Risk control section is added successfully";
		        opts.addclass = "stack-top-right " + success_color;
	        

		    case 'ControlRemove':
		        opts.title = "Risk control section Delete";
		        opts.text = "Risk control section is deleted successfully";
		        opts.addclass = "stack-bottom-right "+success_color;
		        
	        	break;
	    }
	    new PNotify(opts);
	    $('.ui-pnotify-container').removeClass('alert-primary');
	}

$(document).ready(function(){

	

	var auto_calculator = $('#auto_caluator_property').val();
	if (auto_calculator != "True"){
		$('.inherent-risk-score').removeAttr('disabled');
		$('.inherent-risk-score-value').removeAttr('disabled');
		$('.post-control-risk').removeAttr('disabled');			
		$('.post-control-risk-score-value').removeAttr('disabled');
	}
	var probability_justification = 0;
	var impact_justification = 0;

	var post_probability_justification = 0;
	var post_impact_justification = 0;

	var residual_probability_justification = 0;
	var residual_impact_justification = 0;
	
	/* Get inherent score*/
	$('.inherent-probability').on('change', function(){
		var temp_value = $(this).find(":selected").attr("inherent-value");
		var score_value = impact_justification * temp_value;
		var risk_id = $('#risk_name strong').text();
		probability_justification = temp_value
		if (auto_calculator == "True"){
			 $.ajax({
		          method: "POST",
		          url: "server/riskaction.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_score_value'
		        	},
				success:function(response) {
					autoCaulaterInherent(response, score_value);
					$('.inherent-risk-score').attr('disabled', 'disabled');			
					$('.inherent-risk-score-value').attr('disabled', 'disabled');	
				},
				error:function(response) {
				    console.log('error');
				}
			});
			clearPostion('inherent');
			$('.inherent-risk-score-value').val('Inherent Risk Score = '+score_value);
			if (impact_justification != 0){
				
				getPosition(temp_value, impact_justification, 'inherent', risk_id);
			}
		} 
	})
	
	$('.inherent-impact').on('change', function(){
		
		var temp_value = $(this).find(":selected").attr("inherent-impact-value");
		impact_justification = temp_value;
		var score_value = probability_justification * temp_value;
		var risk_id = $('#risk_name strong').text();
		if (auto_calculator == "True"){
			 $.ajax({
		          method: "POST",
		          url: "server/riskaction.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_score_value'
		        	},
				success:function(response) {
					autoCaulaterInherent(response, score_value);
					$('.inherent-risk-score').attr('disabled', 'disabled');			
					$('.inherent-risk-score-value').attr('disabled', 'disabled');			
				},
				error:function(response) {
				    console.log('error');
				}
			});
			clearPostion('inherent');
			$('.inherent-risk-score-value').val('Inherent Risk Score = '+score_value);
			if (probability_justification != 0){
				
				getPosition(probability_justification, temp_value, 'inherent', risk_id);
			}
		} 
	})

	/*Get post score*/
	$('#control_section').on('change', '.post-control-probability', function(){
		
		var temp_value = $(this).find(":selected").attr("post-value");
		var selectedrow = $(this).closest('.row-section-select');
		var score_value = post_impact_justification * temp_value;
		post_probability_justification = temp_value
		
		if (auto_calculator == "True"){
		 $.ajax({
	          method: "POST",
	          url: "server/riskaction.php",
	          dataType: "json",
	          data: {
	          		'filter':'get_post_score_value'
	        	},
			success:function(response) {
				
				autoCaulaterPost(response, score_value, selectedrow);
				// $('.post-control-risk').attr('disabled', 'disabled');			
				// $('.post-control-risk-score-value').attr('disabled', 'disabled');			
				selectedrow.find('.post-control-risk').attr('disabled', 'disabled');
				selectedrow.find('.post-control-risk-score-value').attr('disabled', 'disabled');
			},
			error:function(response) {
			    console.log('error');
			}
		});
		selectedrow.find('.post-control-risk-score-value').val('Post Risk Score = '+score_value);
		} 
	})
	
	$('#control_section').on('change', '.post-control-impact',function(){
		var temp_value = $(this).find(":selected").attr("post-impact-value");
		var selectedrow = $(this).closest('.row-section-select');
		post_impact_justification = temp_value;
		var score_value = post_probability_justification * temp_value;
		
		if (auto_calculator == "True"){
			 $.ajax({
		          method: "POST",
		          url: "server/riskaction.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_post_score_value'
		        	},
				success:function(response) {
					
					autoCaulaterPost(response, score_value, selectedrow);
					selectedrow.find('.post-control-risk').attr('disabled', 'disabled');			
					selectedrow.find('.post-control-risk-score-value').attr('disabled', 'disabled');			
				},
				error:function(response) {
				    console.log('error');
				}
			});
			selectedrow.find('.post-control-risk-score-value').val('Post Risk Score = '+score_value);
		} 
	})




	/*Get Residual score*/
	$('.residual-probability').on('change', function(){
		
		var temp_value = $(this).find(":selected").attr("inherent-value");
	
		var score_value = residual_impact_justification * temp_value;
		residual_probability_justification = temp_value;
		var risk_id = $('#risk_name strong').text();
		
		if (auto_calculator == "True"){
			 $.ajax({
		          method: "POST",
		          url: "server/riskaction.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_score_value'
		        	},
				success:function(response) {
					autoCaulaterResidual(response, score_value);
					$('.residual-risk-score').attr('disabled', 'disabled');			
					$('.residual-risk-description').attr('disabled', 'disabled');			
				},
				error:function(response) {
				    console.log('error');
				}
			});
			clearPostion('residual');
			$('.residual-risk-score-value').val('Residual Risk Score = '+score_value);

			if (residual_impact_justification != 0){
				
				getPosition(temp_value, residual_impact_justification, 'residual', risk_id);
			}
		} 
	})
	
	$('.residual-impact').on('change', function(){

		var temp_value = $(this).find(":selected").attr("inherent-impact-value");
		
		residual_impact_justification = temp_value;
		var score_value = residual_probability_justification * temp_value;
		var risk_id = $('#risk_name strong').text();
		
		if (auto_calculator == "True"){
			 $.ajax({
		          method: "POST",
		          url: "server/riskaction.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_score_value'
		        	},
				success:function(response) {
					autoCaulaterResidual(response, score_value);
					$('.residual-risk-score').attr('disabled', 'disabled');			
					$('.residual-risk-description').attr('disabled', 'disabled');			
				},
				error:function(response) {
				    console.log('error');
				}
			});
			clearPostion('residual');
			$('.residual-risk-score-value').val('Residual Risk Score = '+score_value);
			if (residual_probability_justification != 0){
				
				getPosition(residual_probability_justification, temp_value, 'residual', risk_id);
			}
		} 
	})



	$('.control-category').on('change', function(){
		var control_category =  $('.control-category').val();
		 $.ajax({
		          method: "POST",
		          url: "server/riskaction.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_category_value', 'control_category':control_category
		        	},
				success:function(response) {
					
					
				    
				    ret = put_html(response);
				    $('#control_category_value').html(ret);
				    $('#control_category_value').selectpicker('refresh');
				},
				error:function(response) {
				    console.log('error');
				}
			});
	})

	$('#control_owner').change(function(){

		var control_owner = $('#control_owner').val();
		
		 $.ajax({
		          method: "POST",
		          url: "server/riskaction.php",
		          dataType: "json",
		          data: {
		          		'filter':'get_owner_value', 'control_owner':control_owner
		        	},
				success:function(response) {
					
					
				    ret = put_html(response);
				   
				    $('#control_owner_value').html(ret);
				    $('#control_owner_value').selectpicker('refresh');
				},
				error:function(response) {
				    console.log('error');
				}
			});
	})

	$('#control_reviewer').change(function(){

	var control_owner = $('#control_reviewer').val();
	
	 $.ajax({
	          method: "POST",
	          url: "server/riskaction.php",
	          dataType: "json",
	          data: {
	          		'filter':'get_owner_value', 'control_owner':control_owner
	        	},
			success:function(response) {
				
				
			    ret = put_html(response);
			   
			    $('#control_reviewer_value').html(ret);
			    $('#control_reviewer_value').selectpicker('refresh');
			},
			error:function(response) {
			    console.log('error');
			}
		});
	})

	$('.control-category-modal-insert').click(function(){
		var control_category_value = $('#control_category_value').val();
		$('.control-description').val(control_category_value);
		$('#modal_control').modal('hide');
		
	})

	$('.control-owner-insert').click(function(){
		
		var control_owner = $('#control_owner_value').val();
		$('.owner-value').val(control_owner);
		$('#modal_owner').modal('hide');
		
	})

	$('.control-reviewer-insert').click(function(){
		var control_reviewer = $('#control_reviewer_value').val();
		$('.reviewer-value').val(control_reviewer);
		$('#modal_reviewer').modal('hide');
		
	})

	$('.control-strategy').on('change', function(){
		// var category_justification = $('.control-strategy').val();
		// $('.control-strategy-value').val(category_justification);	
	})








	/*Add control row */
	$('#add_another_control_row_record').on('click', function(){
		addControlSection();
		if (notication_location=="TopRight") {
			show_stack_top_right('ControlAdd');
			alret('adasdfasf');	
		} else if(notication_location=="TopLeft"){
			show_stack_top_left('ControlAdd');	
		} else if(notication_location=="BottomRight"){
			show_stack_bottom_right('ControlAdd');	
		}else{
			show_stack_bottom_left('ControlAdd');	
		}
		
	})
	$('#control_section').on('click', '.remove-control-section', function(){
		$(this).closest('.row-section-select').remove();
		if (notication_location=="TopRight") {
			show_stack_top_right('ControlRemove');	
		} else if(notication_location=="TopLeft"){
			show_stack_top_left('ControlRemove');	
		} else if(notication_location=="BottomRight"){
			show_stack_bottom_right('ControlRemove');	
		}else{
			show_stack_bottom_left('ControlRemove');	
		}
		global_control_number = parseInt(global_control_number) - 1; 
	})

	/* control save*/
	$('#save_record').on('click', function(){

			
		var i =1;
		var control_all_data = [];
		var risk_id = $('#risk_name strong').text();

		/* control data */
		$( "#control_section .row-section-select" ).each(function(e) {
			
			var obj={};
			
			obj['control_id'] = $(this).find('.control-id').val();

			obj['control_description'] = $(this).find('.control-description').val();
			obj['control_type'] = $(this).find('.control-type').val();
			obj['control_cost_capex'] = $(this).find('.control-cost-capex').val();
			obj['capex_cost_calculation_value'] = $(this).find('.capex-cost-calculation-value').val();
			obj['control_cost_opex'] = $(this).find('.control-cost-opex').val();
			obj['opex_cost_calculation_justification'] = $(this).find('.opex-cost-calculation-justification').val();
			obj['control_strategy'] = $(this).find('.control-strategy').val();
			obj['control_strategy_justification'] = $(this).find('.control-strategy-justification').val();
			obj['post_control_probability'] = $(this).find('.post-control-probability').val();
			obj['post_control_impact'] = $(this).find('.post-control-impact').val();
			obj['post_control_risk'] = $(this).find('.post-control-risk').val();
			obj['post_control_risk_score_value'] = $(this).find('.post-control-risk-score-value').val();
			obj['control_status'] = $(this).find('.control-status').val();
			obj['control_completion_date'] = $(this).find('.control-completion-date').val();
			obj['review_frequency'] = $(this).find('.review-frequency').val();
			obj['control_next_review'] = $(this).find('.control-next-review').val();
			obj['owner_value'] = $(this).find('.owner-value').val();
			obj['reviewer_value'] = $(this).find('.reviewer-value').val();
			
			obj['control_id_number'] = i;
			obj['risk_id'] = risk_id;
			obj['control_identify'] = $(this).attr('id');
			if (obj['control_type'] != 'Select Field')
				control_all_data.push(obj);
			i++;
			
			
		});
		/* exposure data */
		var exposure_value = $('.exposure').val();
		var exposure_calculation = $('.exposure-calculation').val();
		
		
		/* inherent data*/
		var inherentobj={};

		inherentobj['inherent_probability'] = $('.inherent-probability').val();
		inherentobj['inherent_impact'] = $('.inherent-impact').val();
		inherentobj['inherent_risk_score'] = $('.inherent-risk-score').val();
		inherentobj['inherent_probability_justification'] = $('.inherent-probability-justification').val();
		inherentobj['inherent_impact_justification'] = $('.inherent-impact-justification').val();
		inherentobj['inherent_risk_score_value'] = $('.inherent-risk-score-value').val();
		inherentobj['inherent_probability_value'] = $('.inherent-probability option:selected').attr('inherent-value');
		inherentobj['inherent_impact_value'] = $('.inherent-impact option:selected').attr('inherent-impact-value');

	
		
		/* residual data*/
		var residualobj={};
	
		residualobj['residual_probability'] = $('.residual-probability').val();
		residualobj['residual_impact'] = $('.residual-impact').val();
		residualobj['residual_risk_score'] = $('.residual-risk-score').val();
		residualobj['residual_probability_justification'] = $('.residual-probability-justification').val();
		residualobj['residual_impact_justification'] = $('.residual-impact-justification').val();
		residualobj['residual_risk_score_value'] = $('.residual-risk-score-value').val();
		residualobj['residual_probability_value'] = $('.residual-probability option:selected').attr('inherent-value');
		residualobj['residual_impact_value'] = $('.residual-impact option:selected').attr('inherent-impact-value');

		
		/* Addiational data*/
		var additional_data = [];
		$( ".data-list" ).each(function() {
			var field_name = $(this).find('.field-name').val();
			var field_value = $(this).find('.field-value').val();
			additional_data.push(field_name + '||' + field_value);
		});


		if (global_analysis =="false")
		{	
			$.ajax({
			      method: "POST",
			      url: "server/riskaction.php",
			      dataType: "json",
			      data: {
			      		'controlinfo' : control_all_data,
			      		'inherentinfo' : inherentobj,
			      		'residualinfo' : residualobj,
			      		'additional_data' : additional_data,
			      		'riskid': risk_id,
			      		'exposure':exposure_value,
			      		'exposure_calculation': exposure_calculation,
			      		'filter':'add_risk_analysis_section'
			    	},
				success:function(response) {
					
					changeRiskProgress(exposure_value, exposure_calculation, inherentobj, residualobj);

					
					if (notication_location=="TopRight") {
						show_stack_top_right('Insert');	
					} else if(notication_location=="TopLeft"){
						show_stack_top_left('Insert');	
					} else if(notication_location=="BottomRight"){
						show_stack_bottom_right('Insert');	
					}else{
						show_stack_bottom_left('Insert');	
					}
					
				},
				error:function(response) {
				    console.log('error');
				}
			})
		}
		else{
			$.ajax({
			      method: "POST",
			      url: "server/riskaction.php",
			      dataType: "json",
			      data: {
			      		'controlinfo' : control_all_data,
			      		'inherentinfo' : inherentobj,
			      		'residualinfo' : residualobj,
			      		'additional_data' : additional_data,
			      		'riskid': risk_id,
			      		'exposure':exposure_value,
			      		'exposure_calculation': exposure_calculation,
			      		'filter':'update_risk_analysis_section'
			    	},
				success:function(response) {
					
					changeRiskProgress(exposure_value, exposure_calculation, inherentobj, residualobj);

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
			})
		}

		
	})

	/* When clicked view*/
	$('#risk_table').on('click', '.id-check-view', function(){
		var risk_id = $(this).attr('riskid');
		$('#risk_name').html('<p><strong>'+risk_id+'</strong></p>');

		global_select_row = $(this).closest('tr').find('td:nth-child(3)');
		$('#add_another_control_row_record').css('display', 'block');
		$('#risk_analysis_record').css('display', 'block');
		$('#save_record').css('display', 'block');
		getRiskControlNumber(risk_id);

		/*show risk analysis control data */
		$.ajax({
		      method: "POST",
		      url: "server/riskaction.php",
		      dataType: "json",
		      data: {
		      		'filter':'get_control_data', 'riskid': risk_id
		    	},
			success:function(response) {
				removeRiskControl();
				if (response.length > 0){
					for (var i = 0; i < response.length; i++) {
						showControlSection(global_control_type, global_control_strategy, global_control_status, global_review_frequency, global_post_control_probability,
							global_post_control_impact, global_post_control_risk, risk_id, response[i], i);

					}
				}
				else{
					
					showControlSection(global_control_type, global_control_strategy, global_control_status, global_review_frequency, global_post_control_probability,
					global_post_control_impact, global_post_control_risk, risk_id, null, 0);					
				}

				

			},
			error:function(response) {
			    console.log('error');
			}
		})


		$.ajax({
		      method: "POST",
		      url: "server/riskaction.php",
		      dataType: "json",
		      data: {
		      		'filter':'get_all_data_analysis',
		      		'risk_id': risk_id
		    	},
			success:function(response) {
				$('.risk-description').html('<p>'+response['risk_identification'][0]['risk_title']+ '<br>'+response['risk_identification'][0]['risk_defination_value']+'</p>');
				changeRiskProgress(response['risk_analysis_data'][0]['exposure_value'], response['risk_analysis_data'][0]['exposure_calculation'], 
					response['risk_analysis_data'][0]['inherentinfo'], response['risk_analysis_data'][0]['residualinfo']);
				
				setAnalysisData(response['risk_analysis_data'], 'view', response['entire_addtional']);
				/*Show chart*/
				clearPostion('inherent');
				clearPostion('residual');
				if (response['risk_analysis_data'][0]){
					
					getPosition(response['risk_analysis_data'][0]['inherentinfo']['inherent_impact_value'], 
						response['risk_analysis_data'][0]['inherentinfo']['inherent_probability_value'], 'inherent', risk_id);
					getPosition(response['risk_analysis_data'][0]['residualinfo']['residual_impact_value'], 
						response['risk_analysis_data'][0]['residualinfo']['residual_probability_value'], 'residual', risk_id);

				}
				$('#add_another_control_row_record').css('display', 'none');
				$('#save_record').css('display', 'none');

			},
			error:function(response) {
			    console.log('error');
			}
		})

	})
	

	/* When clicked edit*/
	$('#risk_table').on('click', '.id-check-edit', function(){
		
		var risk_id = $(this).attr('riskid');
		$('#risk_analysis_record').css('display', 'block');
		$('#risk_name').html('<p><strong>'+risk_id+'</strong></p>');
		
		$('#add_another_control_row_record').css('display', 'block');
		$('#save_record').css('display', 'block');
		getRiskControlNumber(risk_id);

		global_select_row = $(this).closest('tr').find('td:nth-child(3)');
		
		/*show risk analysis control data */
		$.ajax({
		      method: "POST",
		      url: "server/riskaction.php",
		      dataType: "json",
		      data: {
		      		'filter':'get_control_data', 'riskid': risk_id
		    	},
			success:function(response) {

				removeRiskControl();
				if (response.length > 0)
				{	for (var i = 0; i < response.length; i++) {
						showControlSection(global_control_type, global_control_strategy, global_control_status, global_review_frequency, global_post_control_probability,
							global_post_control_impact, global_post_control_risk, risk_id, response[i], i);
						
						
					}
				}
				else
				{
					showControlSection(global_control_type, global_control_strategy, global_control_status, global_review_frequency, global_post_control_probability,
					global_post_control_impact, global_post_control_risk, risk_id, null, 0);
				}

			},
			error:function(response) {
			    console.log('error');
			}
		})

		/*control edit global_analysis*/
		$.ajax({
		      method: "POST",
		      url: "server/riskaction.php",
		      dataType: "json",
		      data: {
		      		'filter':'get_matching_risk', 'riskid': risk_id
		    	},
			success:function(response) {
				global_analysis = response;
			},
			error:function(response) {
			    console.log('error');
			}
		})

		/* show risk analysis data */
		$.ajax({
		      method: "POST",
		      url: "server/riskaction.php",
		      dataType: "json",
		      data: {
		      		'filter':'get_all_data_analysis',
		      		'risk_id': risk_id
		    	},
			success:function(response) {
				
				$('.risk-description').html('<p>'+response['risk_identification'][0]['risk_title']+ '<br>'+response['risk_identification'][0]['risk_defination_value']+'</p>');
				changeRiskProgress(response['risk_analysis_data'][0]['exposure_value'], response['risk_analysis_data'][0]['exposure_calculation'], 
					response['risk_analysis_data'][0]['inherentinfo'], response['risk_analysis_data'][0]['residualinfo']);
				setAnalysisData(response['risk_analysis_data'], 'edit', response['entire_addtional']);
				/*Show chart*/
				clearPostion('inherent');
				clearPostion('residual');
				if(response['risk_analysis_data'][0]){
					getPosition(response['risk_analysis_data'][0]['inherentinfo']['inherent_impact_value'], 
						response['risk_analysis_data'][0]['inherentinfo']['inherent_probability_value'], 'inherent', risk_id);
					getPosition(response['risk_analysis_data'][0]['residualinfo']['residual_impact_value'], 
						response['risk_analysis_data'][0]['residualinfo']['residual_probability_value'], 'residual', risk_id);

				}
			},
			error:function(response) {
			    console.log('error');
			}
		})

		

	})


	$(document).on('click', '.additional-data', function(){

		 $.ajax({
	          method: "POST",
	          url: "server/riskaction.php",
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
				html += '<div class="col-md-8">';
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
});
function getRiskControlNumber(risk_id){

	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_control_number',
	      		'riskid': risk_id
	    	},
		success:function(response) {
			
			if (response != 1)
				global_control_number = parseInt(response)+1;
			else 
				global_control_number = 1;
			$('#section_default .control-id').val(risk_id+'.C'+global_control_number);
		},
		error:function(response) {
		    console.log('error');
		}
	})
}


function setAnalysisData(analysis_data, mode, entire_addtional){
	
	/*exposure data show*/
	showExposure(analysis_data);

	/*inherent data show*/
	show_inherent_data(analysis_data);
	
	/*residual data show*/
	show_residual_data(analysis_data);
	

	var additional_data = [];
	if (analysis_data[0] != null)
	{	
		for (var i = 0; i < analysis_data[0]['additional_data'].length; i++) {
			str = analysis_data[0]['additional_data'][i];
			split_str = str.split("||");
			additional_data.push(split_str[0]);
			additional_data.push(split_str[1]);
		} 
		/*residual data show*/
		show_additional_data(additional_data, mode, entire_addtional);
	}
	else
	{
		init_additional_data()
	}
}

function showExposure(analysis_data){

	var exposure_value = (analysis_data[0] != null) ? analysis_data[0]['exposure'] : '';
	var exposure_calculation = (analysis_data[0] != null) ? analysis_data[0]['exposure_calculation'] : '';
	$('.exposure').val(exposure_value);
	$('.exposure-calculation').val(exposure_calculation);
	
}
function show_inherent_data(analysis_data){

	var split_str;
	var compare_str
	if (analysis_data[0] != null){

		compare_str = analysis_data[0]['inherentinfo']['inherent_probability'].replace(" ", "");
		split_str = compare_str.split("||");
		if ($("#auto_inherent_probability > div.inherent-probability button").hasClass("red"))
			$("#auto_inherent_probability > div.inherent-probability button").removeClass("red");
		if ($("#auto_inherent_probability > div.inherent-probability button").hasClass("green"))
			$("#auto_inherent_probability > div.inherent-probability button").removeClass("green");
		if ($("#auto_inherent_probability > div.inherent-probability button").hasClass("yellow"))
			$("#auto_inherent_probability > div.inherent-probability button").removeClass("yellow");

		$("#auto_inherent_probability > div.inherent-probability button").addClass(split_str[1]);
		$('.inherent-probability').selectpicker('val', compare_str);

		compare_str = analysis_data[0]['inherentinfo']['inherent_impact'].replace(" ", "");
		split_str = compare_str.split("||");
		if ($("#auto_inherent_impact > div.inherent-impact button").hasClass("red"))
			$("#auto_inherent_impact > div.inherent-impact button").removeClass("red");
		if ($("#auto_inherent_impact > div.inherent-impact button").hasClass("green"))
			$("#auto_inherent_impact > div.inherent-impact button").removeClass("green");
		if ($("#auto_inherent_impact > div.inherent-impact button").hasClass("yellow"))
			$("#auto_inherent_impact > div.inherent-impact button").removeClass("yellow");

		$("#auto_inherent_impact > div.inherent-impact button").addClass(split_str[1]);
		$('.inherent-impact').selectpicker('val', compare_str);

		compare_str = analysis_data[0]['inherentinfo']['inherent_risk_score'].replace(" ", "");
		split_str = compare_str.split("||");
		if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("red"))
			$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("red");
		if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("green"))
			$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("green");
		if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("yellow"))
			$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("yellow");

		$("#auto_calculator_inherent > div.inherent-risk-score button").addClass(split_str[1]);
		$('.inherent-risk-score').selectpicker('val', compare_str);

		$('.inherent-probability-justification').val(analysis_data[0]['inherentinfo']['inherent_probability_justification']);
		$('.inherent-impact-justification').val(analysis_data[0]['inherentinfo']['inherent_impact_justification']);
		$('.inherent-risk-score-value').val(analysis_data[0]['inherentinfo']['inherent_risk_score_value']);
	}
	else
	{
		$('.inherent-probability').selectpicker('deselectAll');
		if ($("#auto_inherent_probability > div.inherent-probability button").hasClass("red"))
			$("#auto_inherent_probability > div.inherent-probability button").removeClass("red");
		if ($("#auto_inherent_probability > div.inherent-probability button").hasClass("green"))
			$("#auto_inherent_probability > div.inherent-probability button").removeClass("green");
		if ($("#auto_inherent_probability > div.inherent-probability button").hasClass("yellow"))
			$("#auto_inherent_probability > div.inherent-probability button").removeClass("yellow");

		$('.inherent-impact').selectpicker('deselectAll');
		if ($("#auto_inherent_impact > div.inherent-impact button").hasClass("red"))
			$("#auto_inherent_impact > div.inherent-impact button").removeClass("red");
		if ($("#auto_inherent_impact > div.inherent-impact button").hasClass("green"))
			$("#auto_inherent_impact > div.inherent-impact button").removeClass("green");
		if ($("#auto_inherent_impact > div.inherent-impact button").hasClass("yellow"))
			$("#auto_inherent_impact > div.inherent-impact button").removeClass("yellow");

		$('.inherent-risk-score').selectpicker('deselectAll');
		if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("red"))
			$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("red");
		if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("green"))
			$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("green");
		if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("yellow"))
			$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("yellow");

		$('.inherent-probability-justification').val((analysis_data[0] != null) ? analysis_data[0]['inherentinfo']['inherent_probability_justification']:'');
		$('.inherent-impact-justification').val((analysis_data[0] != null) ? analysis_data[0]['inherentinfo']['inherent_impact_justification']:'');
		$('.inherent-risk-score-value').val((analysis_data[0] != null) ? analysis_data[0]['inherentinfo']['inherent_risk_score_value']:'');
	}
}
function show_residual_data(analysis_data){
	var split_str;
	var compare_str
	if (analysis_data[0] != null){

		compare_str = analysis_data[0]['residualinfo']['residual_probability'].replace(" ", "");
		split_str = compare_str.split("||");
		if ($("#auto_residual_probability > div.residual-probability button").hasClass("red"))
			$("#auto_residual_probability > div.residual-probability button").removeClass("red");
		if ($("#auto_residual_probability > div.residual-probability button").hasClass("green"))
			$("#auto_residual_probability > div.residual-probability button").removeClass("green");
		if ($("#auto_residual_probability > div.residual-probability button").hasClass("yellow"))
			$("#auto_residual_probability > div.residual-probability button").removeClass("yellow");

		$("#auto_residual_probability > div.residual-probability button").addClass(split_str[1]);
		$('.residual-probability').selectpicker('val', compare_str);

		compare_str = analysis_data[0]['residualinfo']['residual_impact'].replace(" ", "");
		split_str = compare_str.split("||");
		if ($("#auto_residual_impact > div.residual-impact button").hasClass("red"))
			$("#auto_residual_impact > div.residual-impact button").removeClass("red");
		if ($("#auto_residual_impact > div.residual-impact button").hasClass("green"))
			$("#auto_residual_impact > div.residual-impact button").removeClass("green");
		if ($("#auto_residual_impact > div.residual-impact button").hasClass("yellow"))
			$("#auto_residual_impact > div.residual-impact button").removeClass("yellow");

		$("#auto_residual_impact > div.residual-impact button").addClass(split_str[1]);
		$('.residual-impact').selectpicker('val', compare_str);

		compare_str = analysis_data[0]['residualinfo']['residual_risk_score'].replace(" ", "");
		split_str = compare_str.split("||");
		if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("red"))
			$("#auto_calculator_residual > div.residual-risk-score button").removeClass("red");
		if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("green"))
			$("#auto_calculator_residual > div.residual-risk-score button").removeClass("green");
		if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("yellow"))
			$("#auto_calculator_residual > div.residual-risk-score button").removeClass("yellow");

		$("#auto_calculator_residual > div.residual-risk-score button").addClass(split_str[1]);
		$('.residual-risk-score').selectpicker('val', compare_str);

		$('.residual-probability-justification').val(analysis_data[0]['residualinfo']['residual_probability_justification']);
		$('.residual-impact-justification').val(analysis_data[0]['residualinfo']['residual_impact_justification']);
		$('.residual-risk-score-value').val(analysis_data[0]['residualinfo']['residual_risk_score_value']);
	}
	else
	{
		$('.residual-probability').selectpicker('deselectAll');
		if ($("#auto_residual_probability > div.residual-probability button").hasClass("red"))
			$("#auto_residual_probability > div.residual-probability button").removeClass("red");
		if ($("#auto_residual_probability > div.residual-probability button").hasClass("green"))
			$("#auto_residual_probability > div.residual-probability button").removeClass("green");
		if ($("#auto_residual_probability > div.residual-probability button").hasClass("yellow"))
			$("#auto_residual_probability > div.residual-probability button").removeClass("yellow");

		$('.residual-impact').selectpicker('deselectAll');
		if ($("#auto_residual_impact > div.residual-impact button").hasClass("red"))
			$("#auto_residual_impact > div.residual-impact button").removeClass("red");
		if ($("#auto_residual_impact > div.residual-impact button").hasClass("green"))
			$("#auto_residual_impact > div.residual-impact button").removeClass("green");
		if ($("#auto_residual_impact > div.residual-impact button").hasClass("yellow"))
			$("#auto_residual_impact > div.residual-impact button").removeClass("yellow");

		$('.residual-risk-score').selectpicker('deselectAll');
		if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("red"))
			$("#auto_calculator_residual > div.residual-risk-score button").removeClass("red");
		if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("green"))
			$("#auto_calculator_residual > div.residual-risk-score button").removeClass("green");
		if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("yellow"))
			$("#auto_calculator_residual > div.residual-risk-score button").removeClass("yellow");

		$('.residual-probability-justification').val((analysis_data[0] != null) ? analysis_data[0]['residualinfo']['residual_probability_justification']:'');
		$('.residual-impact-justification').val((analysis_data[0] != null) ? analysis_data[0]['residualinfo']['residual_impact_justification']:'');
		$('.residual-risk-score-value').val((analysis_data[0] != null) ? analysis_data[0]['residualinfo']['residual_risk_score_value']:'');
	}
}
function show_additional_data(addtionaldata, format, entire_addtional){

	
	$('.additional_data_form .data-list').remove();
	html = '';
	
	for (var i = 0; i < addtionaldata.length; i= i+2) {
		var compare_str = addtionaldata[i];
		if (i == 0) {
			html += '<div class="data-list"><div class="row">';
			html += '<div class="col-md-3">';
			html +='<div class="form-group">';     
			html += '<select class="field-name bootstrap-select" data-live-search="true" data-width="100%">'; 
			for (var j = 0; j < entire_addtional[0]['fields'].length; j ++) {
				if (compare_str == entire_addtional[0]['fields'][j])
					html += '<option selected>'+ entire_addtional[0]['fields'][j] +'</option>';
				else
					html += '<option>'+ entire_addtional[0]['fields'][j] +'</option>'; 	
			}
			html += '</select>';
			html += '</div>';                                                 
			html += '</div>';
			html += '<div class="col-md-8">';
			html +='<div class="form-group">';  
			html +=  '<textarea class="field-value form-control elastic" rows="1" style="width:92%;display: inline-block;vertical-align: top;">'+addtionaldata[i+1]+'</textarea>';
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
			for (var j = 0; j < entire_addtional[0]['fields'].length; j ++) {
				if (compare_str == entire_addtional[0]['fields'][j])
					html += '<option selected>'+ entire_addtional[0]['fields'][j] +'</option>';
				else
					html += '<option>'+ entire_addtional[0]['fields'][j] +'</option>'; 	
			}
			html += '</select>';
			html += '</div>';                                                 
			html += '</div>';
			html += '<div class="col-md-8">';
			html +='<div class="form-group">';  
			html +=  '<textarea class="field-value form-control elastic" rows="1" style="width:92%;display: inline-block;">'+addtionaldata[i+1]+'</textarea>';
			if (format != 'view')
				html += '<span class="delete_data btn-danger"><i class="icon-x"></i></span>';
			html += '</div>';
			html +=   '</div></div><div class="clearfix"></div></div>';

		}

	}

	$(html).appendTo('.additional_data_form');
	$('.field-name').selectpicker('refresh');
	$('.elastic').autosize();			

}
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
			html += '<div class="col-md-8">';
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
function put_html(Categoyarray){
	var html = "";
    for (var i = 0; i < Categoyarray.length; i++) {
    	html += "<option>"+ Categoyarray[i] +"</option>"
    }
    return html;
}
function autoCaulaterInherent(response, score_value){
	var risk_score=[];
	for (var i = response.length - 1; i >= 0; i--) {
		split_str = response[i].split("||");
		split_range = split_str[3].split("-");
		first_value = split_range[0];
		last_value = split_range[1]
		if (first_value <= score_value && last_value  >= score_value){
			risk_score.push(split_str[0]);
			risk_score.push(split_str[1]);
			risk_score.push(split_str[2]);
			risk_score.push(split_str[3]);
		}

			
	}
	var selected_text = risk_score[0]+"||"+risk_score[2];
	
	$("#auto_calculator_inherent > div.inherent-risk-score span.filter-option div").remove();
	if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("red"))
		$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("red");
	if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("green"))
		$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("green");
	if ($("#auto_calculator_inherent > div.inherent-risk-score button").hasClass("yellow"))
		$("#auto_calculator_inherent > div.inherent-risk-score button").removeClass("yellow");

	$("#auto_calculator_inherent > div.inherent-risk-score button").addClass(risk_score[2]);
	$('.inherent-risk-score').selectpicker('val', selected_text.replace(" ", ""));
	
} 

function autoCaulaterPost(response, score_value, selectedrow){
	
	var risk_score=[];
	for (var i = response.length - 1; i >= 0; i--) {
		split_str = response[i].split("||");
		split_range = split_str[3].split("-");
		first_value = split_range[0];
		last_value = split_range[1]
		if (first_value <= score_value && last_value  >= score_value){
			risk_score.push(split_str[0]);
			risk_score.push(split_str[1]);
			risk_score.push(split_str[2]);
			risk_score.push(split_str[3]);
		}

			
	}
	var selected_text = risk_score[0]+"||"+risk_score[2];
	selectedrow.find(".auto-calculator-post > div.post-control-risk span.filter-option div").remove();
	if (selectedrow.find("auto-calculator-post > div.post-control-risk button").hasClass("red"))
		selectedrow.find(".auto-calculator-post > div.post-control-risk button").removeClass("red");
	if (selectedrow.find(".auto-calculator-post > div.post-control-risk button").hasClass("green"))
		selectedrow.find(".auto-calculator-post > div.post-control-risk button").removeClass("green");
	if (selectedrow.find(".auto-calculator-post > div.post-control-risk button").hasClass("yellow"))
		selectedrow.find(".auto-calculator-post > div.post-control-risk button").removeClass("yellow");

	selectedrow.find(".auto-calculator-post > div.post-control-risk button").addClass(risk_score[2]);
	selectedrow.find('.post-control-risk').selectpicker('val', selected_text.replace(" ", ""));
	
} 


function autoCaulaterResidual(response, score_value){
	var risk_score=[];
	for (var i = response.length - 1; i >= 0; i--) {
		split_str = response[i].split("||");
		split_range = split_str[3].split("-");
		first_value = split_range[0];
		last_value = split_range[1]
		if (first_value <= score_value && last_value  >= score_value){
			risk_score.push(split_str[0]);
			risk_score.push(split_str[1]);
			risk_score.push(split_str[2]);
			risk_score.push(split_str[3]);
		}
		
	}
	var selected_text = risk_score[0]+"||"+risk_score[2];
	
	
	$("#auto_calculator_residual > div.residual-risk-score span.filter-option div").remove();
	if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("red"))
		$("#auto_calculator_residual > div.residual-risk-score button").removeClass("red");
	if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("green"))
		$("#auto_calculator_residual > div.residual-risk-score button").removeClass("green");
	if ($("#auto_calculator_residual > div.residual-risk-score button").hasClass("yellow"))
		$("#auto_calculator_residual > div.residual-risk-score button").removeClass("yellow");

	$("#auto_calculator_residual > div.residual-risk-score button").addClass(risk_score[2]);
	$('.residual-risk-score').selectpicker('val', selected_text.replace(" ", ""));

}

function getContolType(){
	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_control_type'
	    	},
		success:function(response) {
			global_control_type = response;
		},
		error:function(response) {
		    console.log('error');
		}
	})
}
function getContolStrategy(){
	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_control_strategy'
	    	},
		success:function(response) {
			global_control_strategy = response;
			
		},
		error:function(response) {
		    console.log('error');
		}
	})
}

function getContolStatus(){
	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_control_status'
	    	},
		success:function(response) {
			global_control_status = response;
			
		},
		error:function(response) {
		    console.log('error');
		}
	})
}

function getReviewFrequency(){
	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_review_frequency'
	    	},
		success:function(response) {
			global_review_frequency = response;
		},
		error:function(response) {
		    console.log('error');
		}
	})
}
function getPostControlProbability(){
	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_post_control_probability'
	    	},
		success:function(response) {
			global_post_control_probability = response;
			
		},
		error:function(response) {
		    console.log('error');
		}
	})
}

function getPostControlImpact(){
	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_post_control_impact'
	    	},
		success:function(response) {
			global_post_control_impact = response;	
		},
		error:function(response) {
		    console.log('error');
		}
	})
}


function getPostControlRisk(){
	$.ajax({
	      method: "POST",
	      url: "server/riskaction.php",
	      dataType: "json",
	      data: {
	      		'filter':'get_post_control_risk'
	    	},
		success:function(response) {
			global_post_control_risk = response;
			
		},
		error:function(response) {
		    console.log('error');
		}
	})
}

function getControlAllData()
{
	getContolType();
	getContolStrategy();
	getContolStatus();
	getReviewFrequency();
	getPostControlProbability();
	getPostControlImpact();
	getPostControlRisk();
}

function controlSectionHtml(control_type, control_strategy, control_status, review_frequency, post_control_probability, post_control_impact, post_control_risk){


	var random_id = Math.floor((Math.random() * 1000000) + 1);
	var selected_id = Math.floor((Math.random() * 10000) + 11);
	var risk_id = $('#risk_name strong').text();

	var new_control_id;
	if (global_control_number == 1)
		global_control_number ++;
	new_control_id = risk_id + '.C' + global_control_number;
	global_control_number ++;
	
	control_html = "";
	control_html += '<div class="row row-section-select" id="'+selected_id+'" data-pg-name="Row : Controls">'; 
	    control_html += '<div class="block_custome" id="accordion">'; 
	    control_html +='<a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#'+random_id+'">Control '+new_control_id+'</a>'; 
	        control_html += '<div id="'+random_id+'" class="panel_body panel-collapse collapse in">'; 
	            control_html += '<div class="row">'; 
	                control_html += '<div class="col-md-6">'; 
	                    control_html += '<div class="row">'; 
	                        control_html += '<div class="col-md-3">'; 
	                            control_html += '<div class="form-group">'; 
	                                control_html += '<label class="control-label" for="formInput35">Control ID</label>';                                                                 
	                                control_html += '<input type="text" class="form-control control-id" value="'+new_control_id+'">'; 
	                            control_html += '</div>';                                                             
	                            control_html += '<div class="form-group">'; 
	                                control_html += '<label class="control-label" for="formInput35">Control Type</label>';                                                                 
	                                control_html += '<div class="form-group">'; 
	                                    control_html += '<select id="formInput41" class="control-type bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
	                                    	control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';   
	                                        for (var i = 0; i < control_type[0].length; i++) {
												control_html += '<option value="'+control_type[0][i]+'">'+ control_type[0][i] +'</option>';
												
											}                                                 
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
	                                        control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
	                                        for (var i = 0; i < control_strategy.length; i++) {
												control_html += '<option value="'+control_strategy[i]+'">'+ control_strategy[i] +'</option>';
												
											}                                                            
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
	                                control_html += '<div class="form-group auto-post-control-probability">'; 
	                                    control_html += '<select id="formInput41" class="post-control-probability bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
	                                        control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                   
	                                            for (var i = 0; i < post_control_probability.length; i += 4) {
													control_html += '<option value="'+post_control_probability[i].replace(" ", "")+'||'+post_control_probability[i+2]+'" post-value='+ post_control_probability[i+3]+' data-content="<div class=' + post_control_probability[i+2]+'>';
													control_html += post_control_probability[i]+'<br><p class=hid>'+ post_control_probability[i+1] +'</p></div>"';
													control_html += 'class="'+post_control_probability[i+2]+'"></option>';	
													
												}


	                                    control_html += '</select>';                                                                     
	                                control_html += '</div>';                                                                 
	                            control_html += '</div>'                                                             
	                        control_html += '</div>';                                                         
	                        control_html += '<div class="col-md-3">'; 
	                            control_html += '<div class="form-group">'; 
	                                control_html += '<label class="control-label" for="formInput35">Post Control Impact</label>';                                                                 
	                                control_html += '<div class="form-group auto-post-control-impact">'; 
	                                    control_html += '<select id="formInput41" class="post-control-impact bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
	                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
	                                       		for (var i = 0; i < post_control_impact.length; i += 4) {
													control_html += '<option value="'+post_control_impact[i].replace(" ", "")+'||'+post_control_impact[i+2]+'" post-impact-value='+ post_control_impact[i+3]+' data-content="<div class=' + post_control_impact[i+2]+'>';
													control_html += post_control_impact[i]+'<br><p class=hid>'+ post_control_impact[i+1] +'</p></div>"';
													control_html += 'class="'+post_control_impact[i+2]+'"></option>';	
													
												}

	                                    control_html += '</select>';                                                                     
	                                control_html += '</div>';                                                                 
	                            control_html += '</div>';                                                             
	                        control_html += '</div>';                                                         
	                        control_html += '<div class="col-md-3">'; 
	                            control_html += '<div class="form-group">'; 
	                                control_html += '<label class="control-label" for="formInput35">Post Control Risk</label>';                                                                 
	                                control_html += '<div class="form-group auto-calculator-post">'; 
	                                    control_html += '<select id="formInput41" class="post-control-risk bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
	                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                                                      
	                                           
	                                       		for (var i = 0; i < post_control_risk.length; i += 4) {
													control_html += '<option value="'+post_control_risk[i].replace(" ", "")+'||'+post_control_risk[i+2]+'" post-score-value='+ post_control_risk[i+3]+' data-content="<div class=' + post_control_risk[i+2]+'>';
													control_html += post_control_risk[i]+'<br><p class=hid>'+ post_control_risk[i+1] +'</p></div>"';
													control_html += 'class="'+post_control_risk[i+2]+'"></option>';	
													
												}


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
	                                control_html += '<input type="text" class="form-control control-cost-capex" id="formInput35">'; 
	                            control_html += '</div>';                                                             
	                        control_html += '</div>';                                                         
	                        control_html += '<div class="col-md-9">'; 
	                            control_html += '<div class="form-group">'; 
	                                control_html += '<label class="control-label" for="formInput57">Capex Cost Calculation/ Justification </label>';                                                                 
	                                control_html += '<textarea class="form-control elastic capex-cost-calculation-value" rows="1">';
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
	                                         control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                                           
	                                        for (var i = 0; i < control_status.length; i++) {
												control_html += '<option value="'+control_status[i]+'">'+ control_status[i] +'</option>';
												
											}  

	                                    control_html += '</select>';                                                                     
	                                control_html += '</div>';                                                                 
	                            control_html += '</div>';                                                             
	                        control_html += '</div>';                                                         
	                        control_html += '<div class="col-md-3">'; 
	                            control_html += '<div class="form-group">'; 
	                                control_html += '<label class="control-label" for="formInput35">Control Completion Date</label>';                                                                 
	                                control_html += '<div class="form-group">';
	                                   
	                                    control_html += '<input type="text" class="form-control pickadate-strings control-completion-date" placeholder="">';
	                                control_html += '</div>';                                                             
	                            control_html += '</div>';
	                         
	                        control_html += '</div>';                                                         
	                        control_html += '<div class="col-md-3">'; 
	                            control_html += '<div class="form-group">'; 
	                                control_html += '<label class="control-label" for="formInput35">Review Frequency</label>';                                                                 
	                                control_html += '<div class="form-group">'; 
	                                    control_html += '<select id="formInput41" class="review-frequency bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
	                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
	                                       for (var i = 0; i < review_frequency.length; i++) {
												control_html += '<option value="'+review_frequency[i]+'">'+ review_frequency[i] +'</option>';
												
											}

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
	            control_html += '<div class="row"><div class="form-group"><button type="button" class= "remove-control-section btn btn-default pull-right">Remove Control Section</button></div></div>';                                                                                        
	            control_html += '<div class="clearfix"></div>';                                             
	        control_html += '</div>';                                         
	    control_html += '</div>';                                     
	control_html += '</div>';
	return control_html;
}

function addControlSection(){		
	var control_html_content  =controlSectionHtml(global_control_type, global_control_strategy, global_control_status, global_review_frequency, global_post_control_probability,
	global_post_control_impact, global_post_control_risk);
	
	$("#control_section").append(control_html_content);
	$('.control-type').selectpicker('refresh');
	$('.control-strategy').selectpicker('refresh');
	$('.post-control-probability').selectpicker('refresh');
	$('.post-control-impact').selectpicker('refresh');
	$('.post-control-risk').selectpicker('refresh');
	$('.control-status').selectpicker('refresh');
	$('.review-frequency').selectpicker('refresh');
	
	$('.pickadate-strings').pickadate({
        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
        showMonthsShort: true
    });


}

function showControlSection(control_type, control_strategy, control_status, review_frequency, post_control_probability, 
	post_control_impact, post_control_risk, riskid, selectedData, btnflag){

	var random_id = Math.floor((Math.random() * 10000000) + 1);
	var selected_id = Math.floor((Math.random() * 100000) + 11);

	if (selectedData != null)
	{
		var identify = selectedData['control_identify'];

		control_html = "";
		control_html += '<div class="row row-section-select" id="'+identify+'" data-pg-name="Row : Controls">'; 
		    control_html += '<div class="block_custome" id="accordion">'; 
		    control_html +='<a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#'+random_id+'">Control '+selectedData['control_id']+'</a>'; 
		        control_html += '<div id="'+random_id+'" class="panel_body panel-collapse collapse in">'; 
		            control_html += '<div class="row">'; 
		                control_html += '<div class="col-md-6">'; 
		                    control_html += '<div class="row">'; 
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Control ID</label>';                                                                 
		                                control_html += '<input type="text" class="form-control control-id" value="'+selectedData['control_id']+'">'; 
		                            control_html += '</div>';                                                             
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Control Type</label>';                                                                 
		                                control_html += '<div class="form-group">'; 
		                                    control_html += '<select id="formInput41" class="control-type bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                    	control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';   
		                                        for (var i = 0; i < control_type[0].length; i++) {
													control_html += '<option value="'+control_type[0][i]+'">'+ control_type[0][i] +'</option>';
													
												}                                                 
		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-9">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput57">Control Description</label>';                                                                 
		                                control_html += '<a data-toggle="modal" data-target="#modal_control" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a>'; 
		                                control_html += '<textarea class="control-description form-control elastic " rows="5">'+selectedData['control_description']+'</textarea>';                                                                 
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
		                                        control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
		                                        for (var i = 0; i < control_strategy.length; i++) {
													control_html += '<option value="'+control_strategy[i]+'">'+ control_strategy[i] +'</option>';
													
												}                                                            
		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-9">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput57">Control Strategy Justification</label>';                                                                 
		                                 
		                                control_html +='<textarea class="form-control elastic control-strategy-justification" rows="1">'+selectedData['control_strategy_justification'];
		                                    
		                                control_html += '</textarea>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                    control_html += '</div>';                                                     
		                    control_html += '<div class="row">'; 
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Post Control Probability</label>';                                                                 
		                                control_html += '<div class="form-group auto-post-control-probability">'; 
		                                    control_html += '<select id="formInput41" class="post-control-probability bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                        control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                   
		                                            for (var i = 0; i < post_control_probability.length; i += 4) {
														control_html += '<option value="'+post_control_probability[i].replace(" ", "")+'||'+post_control_probability[i+2]+'" post-value='+ post_control_probability[i+3]+' data-content="<div class=' + post_control_probability[i+2]+'>';
														control_html += post_control_probability[i]+'<br><p class=hid>'+ post_control_probability[i+1] +'</p></div>"';
														control_html += 'class="'+post_control_probability[i+2]+'"></option>';	
														
													}


		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>'                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Post Control Impact</label>';                                                                 
		                                control_html += '<div class="form-group auto-post-control-impact">'; 
		                                    control_html += '<select id="formInput41" class="post-control-impact bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
		                                       		for (var i = 0; i < post_control_impact.length; i += 4) {
														control_html += '<option value="'+post_control_impact[i].replace(" ", "")+'||'+post_control_impact[i+2]+'" post-impact-value='+ post_control_impact[i+3]+' data-content="<div class=' + post_control_impact[i+2]+'>';
														control_html += post_control_impact[i]+'<br><p class=hid>'+ post_control_impact[i+1] +'</p></div>"';
														control_html += 'class="'+post_control_impact[i+2]+'"></option>';	
														
													}

		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Post Control Risk</label>';                                                                 
		                                control_html += '<div class="form-group auto-calculator-post">'; 
		                                    control_html += '<select id="formInput41" class="post-control-risk bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                                                      
		                                           
		                                       		for (var i = 0; i < post_control_risk.length; i += 4) {
														control_html += '<option value="'+post_control_risk[i].replace(" ", "")+'||'+post_control_risk[i+2]+'" post-score-value='+ post_control_risk[i+3]+' data-content="<div class=' + post_control_risk[i+2]+'>';
														control_html += post_control_risk[i]+'<br><p class=hid>'+ post_control_risk[i+1] +'</p></div>"';
														control_html += 'class="'+post_control_risk[i+2]+'"></option>';	
														
													}


		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Post Control Risk Score</label>';                                                                 
		                                control_html += '<div class="form-group">' 
		                                    control_html += '<input type="text" class="form-control post-control-risk-score-value" id="formInput35" value="'+selectedData['post_control_risk_score_value']+'">'; 
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
		                                control_html += '<input type="text" class="form-control control-cost-capex" id="formInput35" value="'+selectedData['control_cost_capex']+'">'; 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-9">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput57">Capex Cost Calculation/ Justification </label>';                                                                 
		                                control_html += '<textarea class="form-control elastic capex-cost-calculation-value" rows="1">'+selectedData['capex_cost_calculation_value'];
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
		                                         control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                                           
		                                        for (var i = 0; i < control_status.length; i++) {
													control_html += '<option value="'+control_status[i]+'">'+ control_status[i] +'</option>';
													
												}  

		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Control Completion Date</label>';                                                                 
		                                control_html += '<div class="form-group">';
		                                   
		                                    control_html += '<input type="text" class="form-control pickadate-strings control-completion-date" placeholder="" value="'+selectedData['control_completion_date']+'">';
		                                control_html += '</div>';                                                             
		                            control_html += '</div>';
		                         
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Review Frequency</label>';                                                                 
		                                control_html += '<div class="form-group">'; 
		                                    control_html += '<select id="formInput41" class="review-frequency bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
		                                       for (var i = 0; i < review_frequency.length; i++) {
													control_html += '<option value="'+review_frequency[i]+'">'+ review_frequency[i] +'</option>';
													
												}

		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Control Next Review</label>';                                                                 
		                                control_html += '<div class="form-group">';
		                                   
		                                    control_html += '<input type="text" class="form-control pickadate-strings control-next-review" placeholder="" value="'+selectedData['control_next_review']+'">';
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
		                                control_html += '<input type="text" class="form-control control-cost-opex" id="formInput35" value="'+selectedData['control_cost_opex']+'">'; 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-9">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput57">Opex Cost Calculation/ Justification </label>';                                                                 
		                                control_html += '<textarea class="form-control elastic opex-cost-calculation-justification" rows="1">'+selectedData['opex_cost_calculation_justification']+'</textarea>';                                                                 
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
		                                control_html += '<textarea class="form-control elastic owner-value" rows="1">'+selectedData['owner_value']+'</textarea>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-6">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput57">Control Reviewer</label>';                                                                 
		                                control_html += '<a data-toggle="modal" data-target="#modal_reviewer" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a>'; 
		                                control_html += '<textarea class="form-control elastic reviewer-value" rows="1">'+selectedData['reviewer_value']+'</textarea>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                    control_html += '</div>';                                                     
		                control_html += '</div>';                                                 
		            control_html += '</div>'; 
		            if (btnflag != 0){
		            	control_html += '<div class="row"><div class="form-group"><button type="button" class= "remove-control-section btn btn-default pull-right">Remove Control Section</button></div></div>';                                                                                        
		            }
		            control_html += '<div class="clearfix"></div>';                                             
		        control_html += '</div>';                                         
		    control_html += '</div>';                                     
		control_html += '</div>';
		$("#control_section").append(control_html);
		$('.control-type').selectpicker('refresh');
		$('.control-strategy').selectpicker('refresh');
		$('.post-control-probability').selectpicker('refresh');
		$('.post-control-impact').selectpicker('refresh');
		$('.post-control-risk').selectpicker('refresh');
		$('.control-status').selectpicker('refresh');
		$('.review-frequency').selectpicker('refresh');
		
		$('.pickadate-strings').pickadate({
	        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	        showMonthsShort: true
	    });

		$("#"+identify+" .control-type").selectpicker('val', selectedData['control_type']);
	    $("#"+identify+" .control-strategy").selectpicker('val', selectedData['control_strategy']);
	    $("#"+identify+" .control-status").selectpicker('val', selectedData['control_status']);
	    $("#"+identify+" .review-frequency").selectpicker('val', selectedData['review_frequency']);

	   
		
	   	compare_str = selectedData['post_control_probability'].replace(" ", "");
		split_str = compare_str.split("||");

		if ($("#"+identify+" .auto-post-control-probability > div.post-control-probability button").hasClass("red"))
			$("#"+identify+" .auto-post-control-probability > div.post-control-probability button").removeClass("red");
		if ($("#"+identify+" .auto-post-control-probability > div.post-control-probability button").hasClass("green"))
			$("#"+identify+" .auto-post-control-probability > div.post-control-probability button").removeClass("green");
		if ($("#"+identify+" .auto-post-control-probability > div.post-control-probability button").hasClass("yellow"))
			$("#"+identify+" .auto-post-control-probability > div.post-control-probability button").removeClass("yellow");

		$("#"+identify+" .auto-post-control-probability > div.post-control-probability button").addClass(split_str[1]);
		$("#"+identify+" .post-control-probability").selectpicker('val', compare_str);

		compare_str = selectedData['post_control_impact'].replace(" ", "");
		split_str = compare_str.split("||");
		
		if ($("#"+identify+" .auto-post-control-impact > div.post-control-impact button").hasClass("red"))
			$("#"+identify+" .auto-post-control-impact > div.post-control-impact button").removeClass("red");
		if ($("#"+identify+" .auto-post-control-impact > div.post-control-impact button").hasClass("green"))
			$("#"+identify+" .auto-post-control-impact > div.post-control-impact button").removeClass("green");
		if ($("#"+identify+" .auto-post-control-impact > div.post-control-impact button").hasClass("yellow"))
			$("#"+identify+" .auto-post-control-impact > div.post-control-impact button").removeClass("yellow");

		$("#"+identify+" .auto-post-control-impact > div.post-control-impact button").addClass(split_str[1]);
		$("#"+identify+" .post-control-impact").selectpicker('val', compare_str);

		compare_str = selectedData['post_control_risk'].replace(" ", "");
		split_str = compare_str.split("||");

		if ($("#"+identify+" .auto-calculator-post > div.post-control-risk button").hasClass("red"))
			$("#"+identify+" .auto-calculator-post > div.post-control-risk button").removeClass("red");
		if ($("#"+identify+" .auto-calculator-post > div.post-control-risk button").hasClass("green"))
			$("#"+identify+" .auto-calculator-post > div.post-control-risk button").removeClass("green");
		if ($("#"+identify+" .auto-calculator-post > div.post-control-risk button").hasClass("yellow"))
			$("#"+identify+" .auto-calculator-post > div.post-control-risk button").removeClass("yellow");

		$("#"+identify+" .auto-calculator-post > div.post-control-risk button").addClass(split_str[1]);
		$("#"+identify+" .post-control-risk").selectpicker('val', compare_str);
		return;
	}
	else{
		new_control_id = riskid+'.C1'
		control_html = "";
		control_html += '<div class="row row-section-select" id="default_control" data-pg-name="Row : Controls">'; 
		    control_html += '<div class="block_custome" id="accordion">'; 
		    control_html +='<a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#'+random_id+'">Control '+new_control_id+'</a>'; 
		        control_html += '<div id="'+random_id+'" class="panel_body panel-collapse collapse in">'; 
		            control_html += '<div class="row">'; 
		                control_html += '<div class="col-md-6">'; 
		                    control_html += '<div class="row">'; 
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Control ID</label>';                                                                 
		                                control_html += '<input type="text" class="form-control control-id" value="'+new_control_id+'">'; 
		                            control_html += '</div>';                                                             
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Control Type</label>';                                                                 
		                                control_html += '<div class="form-group">'; 
		                                    control_html += '<select id="formInput41" class="control-type bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                    	control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';   
		                                        for (var i = 0; i < control_type[0].length; i++) {
													control_html += '<option value="'+control_type[0][i]+'">'+ control_type[0][i] +'</option>';
													
												}                                                 
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
		                                        control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
		                                        for (var i = 0; i < control_strategy.length; i++) {
													control_html += '<option value="'+control_strategy[i]+'">'+ control_strategy[i] +'</option>';
													
												}                                                            
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
		                                control_html += '<div class="form-group auto-post-control-probability">'; 
		                                    control_html += '<select id="formInput41" class="post-control-probability bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                        control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                   
		                                            for (var i = 0; i < post_control_probability.length; i += 4) {
														control_html += '<option value="'+post_control_probability[i].replace(" ", "")+'||'+post_control_probability[i+2]+'" post-value='+ post_control_probability[i+3]+' data-content="<div class=' + post_control_probability[i+2]+'>';
														control_html += post_control_probability[i]+'<br><p class=hid>'+ post_control_probability[i+1] +'</p></div>"';
														control_html += 'class="'+post_control_probability[i+2]+'"></option>';	
														
													}


		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>'                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Post Control Impact</label>';                                                                 
		                                control_html += '<div class="form-group auto-post-control-impact">'; 
		                                    control_html += '<select id="formInput41" class="post-control-impact bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
		                                       		for (var i = 0; i < post_control_impact.length; i += 4) {
														control_html += '<option value="'+post_control_impact[i].replace(" ", "")+'||'+post_control_impact[i+2]+'" post-impact-value='+ post_control_impact[i+3]+' data-content="<div class=' + post_control_impact[i+2]+'>';
														control_html += post_control_impact[i]+'<br><p class=hid>'+ post_control_impact[i+1] +'</p></div>"';
														control_html += 'class="'+post_control_impact[i+2]+'"></option>';	
														
													}

		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Post Control Risk</label>';                                                                 
		                                control_html += '<div class="form-group auto-calculator-post">'; 
		                                    control_html += '<select id="formInput41" class="post-control-risk bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                                                      
		                                           
		                                       		for (var i = 0; i < post_control_risk.length; i += 4) {
														control_html += '<option value="'+post_control_risk[i].replace(" ", "")+'||'+post_control_risk[i+2]+'" post-score-value='+ post_control_risk[i+3]+' data-content="<div class=' + post_control_risk[i+2]+'>';
														control_html += post_control_risk[i]+'<br><p class=hid>'+ post_control_risk[i+1] +'</p></div>"';
														control_html += 'class="'+post_control_risk[i+2]+'"></option>';	
														
													}


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
		                                control_html += '<input type="text" class="form-control control-cost-capex" id="formInput35">'; 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-9">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput57">Capex Cost Calculation/ Justification </label>';                                                                 
		                                control_html += '<textarea class="form-control elastic capex-cost-calculation-value" rows="1">';
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
		                                         control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';                                                           
		                                        for (var i = 0; i < control_status.length; i++) {
													control_html += '<option value="'+control_status[i]+'">'+ control_status[i] +'</option>';
													
												}  

		                                    control_html += '</select>';                                                                     
		                                control_html += '</div>';                                                                 
		                            control_html += '</div>';                                                             
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Control Completion Date</label>';                                                                 
		                                control_html += '<div class="form-group">';
		                                   
		                                    control_html += '<input type="text" class="form-control pickadate-strings control-completion-date" placeholder="">';
		                                control_html += '</div>';                                                             
		                            control_html += '</div>';
		                         
		                        control_html += '</div>';                                                         
		                        control_html += '<div class="col-md-3">'; 
		                            control_html += '<div class="form-group">'; 
		                                control_html += '<label class="control-label" for="formInput35">Review Frequency</label>';                                                                 
		                                control_html += '<div class="form-group">'; 
		                                    control_html += '<select id="formInput41" class="review-frequency bootstrap-select bgClass" data-live-search="true" data-width="100%">'; 
		                                       control_html += '<option data-content="<div class=transparent>Select Field</div>" class="transparent">Select Field</option>';
		                                       for (var i = 0; i < review_frequency.length; i++) {
													control_html += '<option value="'+review_frequency[i]+'">'+ review_frequency[i] +'</option>';
													
												}

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
		$("#control_section").append(control_html);
		$('.control-type').selectpicker('refresh');
		$('.control-strategy').selectpicker('refresh');
		$('.post-control-probability').selectpicker('refresh');
		$('.post-control-impact').selectpicker('refresh');
		$('.post-control-risk').selectpicker('refresh');
		$('.control-status').selectpicker('refresh');
		$('.review-frequency').selectpicker('refresh');
		
		$('.pickadate-strings').pickadate({
	        weekdaysShort: ['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa'],
	        showMonthsShort: true
	    });
	}


}

function removeRiskControl(){
	$("#control_section > div.row-section-select" ).each(function(){
		$("#control_section > div.row-section-select" ).remove();
		
	})
}
function getPosition(axix_x, axix_y, score_type, riskid){

	var directive;
	if (score_type == 'inherent')
		directive = "#graph_container > div.axix-y-"+axix_y+" > div.axix-x-"+axix_x;
	else
		directive = "#graph_container1 > div.axix-y-"+axix_y+" > div.axix-x-"+axix_x;
	$(directive).append("<span class='badge' style='color:#fff;background-color:#000000'>"+riskid+"</span>");
}
function clearPostion(score_type){
	
	var directive;
	for (var i = 1; i <= 5 ; i++) {

		for (var j = 1; j <= 5; j++) {
			if (score_type =='inherent')
				directive = "#graph_container > div.axix-y-"+i+" > div.axix-x-"+j+" span";
			else
				directive = "#graph_container1 > div.axix-y-"+i+" > div.axix-x-"+j+" span";
			
			$(directive).remove();

				
		}
		
	}
}

function changeRiskProgress(exposure_value, exposure_calculation, inherentobj, residualobj)
{
	if (exposure_value !='' && exposure_calculation != '')
	{
		if (global_select_row.find('.check-exposure').hasClass('icon-cross2')){
			global_select_row.find('.check-exposure').removeClass('icon-cross2');
			global_select_row.find('.check-exposure').removeClass('text-danger');

			global_select_row.find('.check-exposure').addClass('icon-checkmark3');
			global_select_row.find('.check-exposure').addClass('text-success');
		}
	}
	else{
		if (global_select_row.find('.check-exposure').hasClass('icon-checkmark3')){
			global_select_row.find('.check-exposure').addClass('icon-cross2');
			global_select_row.find('.check-exposure').addClass('text-danger');

			global_select_row.find('.check-exposure').removeClass('icon-checkmark3');
			global_select_row.find('.check-exposure').removeClass('text-success');
		}
	}

	if (inherentobj['inherent_probability_justification'] !='' && inherentobj['inherent_impact_justification'] !=''
		&& inherentobj['inherent_risk_score_value'] !=''){
		if (global_select_row.find('.check-inherent').hasClass('icon-cross2')){
			global_select_row.find('.check-inherent').removeClass('icon-cross2');
			global_select_row.find('.check-inherent').removeClass('text-danger');

			global_select_row.find('.check-inherent').addClass('icon-checkmark3');
			global_select_row.find('.check-inherent').addClass('text-success');
		}
	}
	else
	{
		if (global_select_row.find('.check-inherent').hasClass('icon-checkmark3')){
			global_select_row.find('.check-inherent').removeClass('icon-checkmark3');
			global_select_row.find('.check-inherent').removeClass('text-success');

			global_select_row.find('.check-inherent').addClass('icon-cross2');
			global_select_row.find('.check-inherent').addClass('text-danger');
		}	
	}

	if (residualobj['residual_probability_justification'] !='' && residualobj['residual_impact_justification'] !=''
		&& residualobj['residual_risk_score_value'] !=''){
		if (global_select_row.find('.check-residual').hasClass('icon-cross2')){
			global_select_row.find('.check-residual').removeClass('icon-cross2');
			global_select_row.find('.check-residual').removeClass('text-danger');

			global_select_row.find('.check-residual').addClass('icon-checkmark3');
			global_select_row.find('.check-residual').addClass('text-success');
		}
	}
	else
	{
		if (global_select_row.find('.check-residual').hasClass('icon-checkmark3')){
			global_select_row.find('.check-residual').removeClass('icon-checkmark3');
			global_select_row.find('.check-residual').removeClass('text-success');

			global_select_row.find('.check-residual').addClass('icon-cross2');
			global_select_row.find('.check-residual').addClass('text-danger');
		}	
	}

}



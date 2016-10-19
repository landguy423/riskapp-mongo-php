<?php
	require_once("database_connect.php");
	$filter = $_REQUEST['filter'];

	switch ($filter) {
		case 'get_score_value':
			$collection = $db->Configuration;
		    $query = array('property' =>  'Inherent Risk Score');
		    $cursor = $collection->find($query);
		    $response=[];
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
		           	
		           	array_push($response, $document["values"][$i]);
		        }
		    }  

		    header("Content-Type: application/json", true);
		    
			echo json_encode($response);
	
			break;

		case 'get_post_score_value':
			$collection = $db->Configuration;
		    $query = array('property' =>  'Post Control Risk Score');
		    $cursor = $collection->find($query);
		    $response=[];
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
		           	
		           	array_push($response, $document["values"][$i]);
		        }
		    }  

		    header("Content-Type: application/json", true);
		    
			echo json_encode($response);
	
			break;
		
		case 'get_category_value':
			
			$response = $_REQUEST['control_category'];
			$collection = $db->Controls;
			if ($response == 'All'){
				$cursor = $collection->find();	
			}else 
			{
				$controlquery = array('control-category' => $response);
				$cursor = $collection->find($controlquery);
			}
		    $control_value = [];
		    foreach ($cursor as $document) {
		    	if (isset($document["control-value"]))
		      		array_push($control_value, $document["control-value"]);
		    }
		    
		    header("Content-Type: application/json", true);
			echo json_encode($control_value);
			break;


		case 'get_owner_value':
			
			$response = $_REQUEST['control_owner'];
			$collection = $db->User;
			if ($response == "All"){
				$cursor = $collection->find();	
			}else
			{
				$userquery = array('user-category' => $response);
				$cursor = $collection->find($userquery);
			}
		    $user_value = [];
		    foreach ($cursor as $document) {
		    	if(isset($document["user-name"]))
		     		array_push($user_value, $document["user-name"]);
		    }
		    
		    header("Content-Type: application/json", true);
			echo json_encode($user_value);
			break;

		case 'get_risk_chart_value':
			$collection = $db->Configuration;
		    $query = array('property' =>  'Risk Chart');
		    $cursor = $collection->find($query);
		    $response=[];
		    $ret=[];
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
		           	
		           	array_push($response, $document["values"][$i]);
		        }
		    }
		   
		    $temp_array = [];
		    
		    $temp_array = explode("||", $response[0]);
		    $chartbox_width = $temp_array[1];
		    
		    $temp_array = explode("||", $response[1]);
		    $chartbox_height = $temp_array[1];

		    $temp_array = explode("||", $response[2]);
			$chartbox_border_weight  = $temp_array[1];
			$chartbox_border_color = $temp_array[2];

		    $temp_array = explode("||", $response[3]);
		    $chart_gradient_check = $temp_array[1];

		    $temp_array = explode("||", $response[4]);
		    $style_file = $temp_array[1];

		    $chart_data_temp=[];
		    $chart_data=[];
			$style_content = file_get_contents('../assets/'.$style_file);
			for ($i=5; $i < count($response); $i++) { 
				$temp_array = explode("||", $response[$i]);
				for ($j=1; $j < 7; $j++) { 
					array_push($chart_data_temp, $temp_array[$j]);	
				}

				array_push($chart_data, $chart_data_temp);
				$chart_data_temp = [];
				
			}
			
			$ret['width'] = $chartbox_width;
			$ret['height'] = $chartbox_height;
			$ret['border_weight'] = $chartbox_border_weight;
			$ret['border_color'] = $chartbox_border_color;
			$ret['gradient_check'] = $chart_gradient_check;
			$ret['content'] = $style_content;
			$ret['chart_data'] = $chart_data;
		    

		    header("Content-Type: application/json", true);
		    
			echo json_encode($ret);
	
			break;

		case 'get_control_type':

			$collection = $db->Configuration;
		    $query = array('property' =>  'Control Category');
		    $cursor = $collection->find($query);
		    $control_category = [];
		    
		    foreach ($cursor as $document) {
		        if ($document["values"]){
		            array_push($control_category, $document["values"]);
		        }
		    }

			
		    header("Content-Type: application/json", true);
			echo json_encode($control_category);
			break;

		case 'get_control_strategy':

			$collection = $db->Configuration;
		    $query = array('property' =>  'Control Strategy');
		    $cursor = $collection->find($query);
		    $control_strategy = [];
		    
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i ++) { 
		        	$str = $document["values"][$i];
		        	$temp_value = explode("||", $str);
		           	array_push($control_strategy, $temp_value[0]);
		        }
		        
		    }
		    header("Content-Type: application/json", true);
			echo json_encode($control_strategy);
			break;

		case 'get_control_status':

			$collection = $db->Configuration;
		    $query = array('property' =>  'Control Status');
		    $cursor = $collection->find($query);
		    $control_status = [];
		    
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i ++) { 
		        	$str = $document["values"][$i];
		        	$temp_value = explode("||", $str);
		           	array_push($control_status, $temp_value[0]);
		        }
		        
		    }
		    header("Content-Type: application/json", true);
			echo json_encode($control_status);
			break;

		case 'get_review_frequency':

			$collection = $db->Configuration;
		    $query = array('property' =>  'Review Frequency');
		    $cursor = $collection->find($query);
		    $review_frequency = [];
		    
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i ++) { 
		        	$str = $document["values"][$i];
		        	$temp_value = explode("||", $str);
		           	array_push($review_frequency, $temp_value[0]);
		        }
		        
		    }
		    header("Content-Type: application/json", true);
			echo json_encode($review_frequency);
			break;
		
		case 'get_post_control_probability':

			$collection = $db->Configuration;
		    $query = array('property' =>  'Post Control Probability');
		    $cursor = $collection->find($query);
		  
		    $post_control_probability = [];
		    
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
		            $str = $document["values"][$i];
		            $temp_value = explode("||", $str);
		            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
		                array_push($post_control_probability, $temp_value[0]);
		                array_push($post_control_probability, $temp_value[1]);
		                array_push($post_control_probability, $temp_value[2]);
		                array_push($post_control_probability, $temp_value[3]);
		            	
		            }
		        }
		    }
		    header("Content-Type: application/json", true);
			echo json_encode($post_control_probability);
			break;

		case 'get_post_control_impact':

			$collection = $db->Configuration;
		    $query = array('property' =>  'Post Control Impact');
		    $cursor = $collection->find($query);
		  
		    $post_control_impact = [];
		    
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
		            $str = $document["values"][$i];
		            $temp_value = explode("||", $str);
		            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
		                array_push($post_control_impact, $temp_value[0]);
		                array_push($post_control_impact, $temp_value[1]);
		                array_push($post_control_impact, $temp_value[2]);
		                array_push($post_control_impact, $temp_value[3]);
		            	
		            }
		        }
		    }
		    header("Content-Type: application/json", true);
			echo json_encode($post_control_impact);
			break;

		case 'get_post_control_risk':

			$collection = $db->Configuration;
		    $query = array('property' =>  'Post Control Risk Score');
		    $cursor = $collection->find($query);
		  
		    $post_control_risk = [];
		    
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
		            $str = $document["values"][$i];
		            $temp_value = explode("||", $str);
		            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
		                array_push($post_control_risk, $temp_value[0]);
		                array_push($post_control_risk, $temp_value[1]);
		                array_push($post_control_risk, $temp_value[2]);
		                array_push($post_control_risk, $temp_value[3]);
		            	
		            }
		        }
		    }
		    header("Content-Type: application/json", true);
			echo json_encode($post_control_risk);
			break;

		case 'add_risk_analysis_section':

			$insert_control_data = array();
			$insert_analysis_data = array();
			
			$controlinfo =array();
			$inherentinfo =array();
			$residualinfo =array();
			$additional_data =array();
			if (isset($_REQUEST['controlinfo']))
				$controlinfo = $_REQUEST['controlinfo'];
			if (isset($_REQUEST['inherentinfo']))
				$inherentinfo = $_REQUEST['inherentinfo'];
			if (isset($_REQUEST['residualinfo']))
				$residualinfo = $_REQUEST['residualinfo'];
			if (isset($_REQUEST['additional_data']))
				$additional_data = $_REQUEST['additional_data'];
			
			// $controlinfo = $_REQUEST['controlinfo'];
			// $inherentinfo = $_REQUEST['inherentinfo'];
			// $residualinfo = $_REQUEST['residualinfo'];
			// $additional_data = $_REQUEST['additional_data'];
			// $riskid = $_REQUEST['riskid'];
			// $exposure = $_REQUEST['exposure'];
			// $exposure_calculation = $_REQUEST['exposure_calculation'];
			

			
			$collection = $db->Risk_Analysis_Control;

			
			foreach ($controlinfo as $variable ) {
				$id = new MongoId();
				$insert_data['_id'] = $id->{'$id'};
				$insert_data = $variable; 
				$insertResult = $collection->insert($insert_data);
				
			}

			$collection = $db->Risk_Analysis;
			$insert_analysis_data['inherentinfo'] = $inherentinfo;
			$insert_analysis_data['residualinfo'] = $residualinfo;
			$insert_analysis_data['additional_data'] = $additional_data;
			if (isset($_REQUEST['riskid']))
				$insert_analysis_data['riskid'] = $_REQUEST['riskid'];
			if (isset($_REQUEST['exposure']))
				$insert_analysis_data['exposure'] = $_REQUEST['exposure'];
			if (isset($_REQUEST['exposure_calculation']))
				$insert_analysis_data['exposure_calculation'] = $_REQUEST['exposure_calculation'];
			
			
			
			$id = new MongoId();
			$insert_analysis_data['_id'] = $id->{'$id'};
			$insertResult = $collection->insert($insert_analysis_data);

			
			header("Content-Type: application/json", true);
			echo json_encode("success");

			break;

		case 'update_risk_analysis_section':

			$insert_control_data = array();
			$update_analysis_data = array();
			$controlinfo =array();
			$inherentinfo =array();
			$residualinfo =array();
			$additional_data =array();
			if (isset($_REQUEST['controlinfo']))
				$controlinfo = $_REQUEST['controlinfo'];
			if (isset($_REQUEST['inherentinfo']))
				$inherentinfo = $_REQUEST['inherentinfo'];
			if (isset($_REQUEST['residualinfo']))
				$residualinfo = $_REQUEST['residualinfo'];
			if (isset($_REQUEST['additional_data']))
				$additional_data = $_REQUEST['additional_data'];
			
			$riskid = $_REQUEST['riskid'];
			$exposure = $_REQUEST['exposure'];
			$exposure_calculation = $_REQUEST['exposure_calculation'];
			

			
			$collection = $db->Risk_Analysis_Control;

			$collection->remove(array("risk_id"=> $riskid));
			if (isset($inherentinfo)){
				foreach ($controlinfo as $variable ) {
					$id = new MongoId();
					$insert_data['_id'] = $id->{'$id'};
					$insert_data = $variable; 
					$insertResult = $collection->insert($insert_data);
					
				}

			}
			$collection = $db->Risk_Analysis;
			$update_analysis_data['inherentinfo'] = $inherentinfo;
			$update_analysis_data['residualinfo'] = $residualinfo;
			$update_analysis_data['additional_data'] = $additional_data;
			$update_analysis_data['riskid'] = $riskid;
			$update_analysis_data['exposure'] = $exposure;
			$update_analysis_data['exposure_calculation'] = $exposure_calculation;
			
			$collection->update(array("riskid"=> $riskid), array('$set'=> $update_analysis_data));
			
			
			
			header("Content-Type: application/json", true);
			echo json_encode("success");

			break;

		case 'get_all_data_analysis':
			$risk_id = $_REQUEST['risk_id'];
			$risk_control = [];
			$risk_analysis_data = [];
			$ret = [];
			
			$collection = $db->Risk_Analysis_Control;
		    $query = array('risk_id' =>  $risk_id);
		    $cursor = $collection->find($query);
		    
		    foreach ($cursor as $document) {
		    	if (isset($document))
		    		array_push($risk_control, $document);
		    	
		    }
		    $ret['control_data'] = $risk_control;
		    
		    $collection = $db->Risk_Analysis;
		    $query = array('riskid' =>  $risk_id);
		    $cursor = $collection->find($query);

		    foreach ($cursor as $document) {
		    	if (isset($document))
		    		array_push($risk_analysis_data, $document);
		    	
		    }
		    $ret['risk_analysis_data'] = $risk_analysis_data;

			$collection = $db->Additiona_Data;
			$query = array('form' => 'Risk Analysis');
			$cursor = $collection->find($query);
		
		    $additional_add = [];
		    foreach ($cursor as $document) {
		    	if (isset($document))
		     		 array_push($additional_add, $document);
		    }
		    
		    $ret['entire_addtional'] = $additional_add;


		    $collection = $db->Risk_Identification;
			$query = array('riskid_name' => $risk_id);
			$cursor = $collection->find($query);
		    $select_risk_row = [];
		    foreach ($cursor as $document) {
		      if(isset($document))
		      	array_push($select_risk_row, $document);
		    }
		    $ret['risk_identification'] = $select_risk_row;

			header("Content-Type: application/json", true);
			echo json_encode($ret);
			break;
		case 'get_matching_risk':
			
			$risk_control =[];
			$risk_id = $_REQUEST['riskid'];
			
			$collection = $db->Risk_Analysis;
		    $query = array('riskid' =>  $risk_id);
		    $cursor = $collection->find($query);
		    $risk_control = [];
		    foreach ($cursor as $document) {
		    	if (isset($document))
		    		array_push($risk_control, $document);
		    	
		    }
		    if(count($risk_control) > 0)
		    	$ret = 'true';
		    else
		    	$ret = 'false';
		    header("Content-Type: application/json", true);
			echo json_encode($ret);
			break;
		case 'additional_add':
			$collection = $db->Additiona_Data;
			$query = array('form' => 'Risk Analysis');
			$cursor = $collection->find($query);
		
		    $additional_add = [];
		    foreach ($cursor as $document) {
		    	if (isset($document))
		     		 array_push($additional_add, $document);
		    }
		    
		    header("Content-Type: application/json", true);
			echo json_encode($additional_add);
			break;
		
		case 'get_control_data':
			$risk_id = $_REQUEST['riskid'];
			$collection = $db->Risk_Analysis_Control;
			$query = array('risk_id' =>  $risk_id);
			$cursor = $collection->find($query);
		
		    $control_datas = [];
		    foreach ($cursor as $document) {
		    	if (isset($document))
		     		 array_push($control_datas, $document);
		    }

		    header("Content-Type: application/json", true);
			echo json_encode($control_datas); 
			break;

		case 'get_control_number':
			$risk_id = $_REQUEST['riskid'];
			$collection = $db->Risk_Analysis_Control;
			$query = array('risk_id' =>  $risk_id);
		    $control_id_data=[];
		    $risk_number = 1;
		    try{
		        $cursor = $collection->find($query)->sort(array("control_id_number" => -1));
		        foreach ($cursor as $document) {
		          array_push($control_id_data, $document);
		          //print_r($control_id_data);
		        }
		        if(isset($control_id_data[0]['control_id_number']))
		        	$risk_number = $control_id_data[0]['control_id_number'];
		    }
		    catch(Exception $e) {

		    }

		    header("Content-Type: application/json", true);
			echo json_encode($risk_number); 
			break;
		default:
			
			break;
	}

	exit;


?>
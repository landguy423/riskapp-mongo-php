<?php
	require_once("database_connect.php");
	$filter = $_REQUEST['filter'];
	switch ($filter) {

		case 'add_risk_identification':
			$response = $_REQUEST['info'];
		   	$collection = $db->Risk_Identification;
			
			
		    $risk_number = 0;
		    $risk_id_data=[];
		    try{
		        $cursor = $collection->find()->sort(array("risk_number" => -1));
		        foreach ($cursor as $document) {
		          array_push($risk_id_data, $document);
		        }
		        if(isset($risk_id_data[0]['risk_number']))
		        	$risk_number = $risk_id_data[0]['risk_number'];
		    }
		    catch(Exception $e) {

		    }
		    $risk_number ++;
    
			$id = new MongoId();		
		  	// $response['_id'] = $id.$id; 
		  	
			
		  	$insert_data = array();

			$insert_data['_id'] = $id->{'$id'};
			$insert_data['risk_number'] = $risk_number;
			if (isset($response['riskid_name'])) {
				$insert_data['riskid_name'] = $response['riskid_name'];
			}
			if (isset($response['risk_category_name'])) {
				$insert_data['risk_category_name'] = $response['risk_category_name'];
			}
			if (isset($response['staus'])) {
				$insert_data['staus'] = $response['staus'];
			}
			if (isset($response['event_value'])) {
				$insert_data['event_value'] = $response['event_value'];
			}
			if (isset($response['vulnerability_value'])) {
				$insert_data['vulnerability_value'] = $response['vulnerability_value'];
			}
			if (isset($response['impact_value'])) {
				$insert_data['impact_value'] = $response['impact_value'];
			}if(isset($response['business_unit_value'])) {
				$insert_data['business_unit_value'] = $response['business_unit_value'];
			}
			if (isset($response['risk_manager_value'])) {
				$insert_data['risk_manager_value'] = $response['risk_manager_value'];
			}
			if (isset($response['risk_defination_value'])) {
				$insert_data['risk_defination_value'] = $response['risk_defination_value'];
			}
			if (isset($response['fields'])) {
				$insert_data['fields'] = $response['fields'];
			}
			if (isset($response['risk_title'])) {
				$insert_data['risk_title'] = $response['risk_title'];
			}
		  	$insertResult = $collection->insert($insert_data);
		  
			header("Content-Type: application/json", true);
			$ret = [];
			$ret['id'] = $id;
			$ret['risk_number'] = $risk_number;
			echo json_encode($ret);
			break;


		case 'update_risk_identification':
			
			$response = $_REQUEST['info'];
		   	$collection = $db->Risk_Identification;
		  	
			
		  	$update_data = array();
			
			if (isset($response['riskid_name'])) {
				$update_data['riskid_name'] = $response['riskid_name'];
			}
			if (isset($response['risk_category_name'])) {
				$update_data['risk_category_name'] = $response['risk_category_name'];
			}
			if (isset($response['staus'])) {
				$update_data['staus'] = $response['staus'];
			}
			if (isset($response['event_value'])) {
				$update_data['event_value'] = $response['event_value'];
			}
			if (isset($response['vulnerability_value'])) {
				$update_data['vulnerability_value'] = $response['vulnerability_value'];
			}
			if (isset($response['impact_value'])) {
				$update_data['impact_value'] = $response['impact_value'];
			}if (isset($response['business_unit_value'])) {
				$update_data['business_unit_value'] = $response['business_unit_value'];
			}
			if (isset($response['risk_manager_value'])) {
				$update_data['risk_manager_value'] = $response['risk_manager_value'];
			}
			if (isset($response['risk_defination_value'])) {
				$update_data['risk_defination_value'] = $response['risk_defination_value'];
			}
			if (isset($response['fields'])) {
				$update_data['fields'] = $response['fields'];
			}
			if (isset($response['risk_title'])) {
				$update_data['risk_title'] = $response['risk_title'];
			}
			$collection->update(array("_id"=> $response['_id']), 
			array('$set'=> $update_data));
			echo "success updated";
			break;


		case 'delete_risk_row' :

			$object_id = $_REQUEST['object_id'];
			$risk_name = $_REQUEST['risk_name'];
		
			$collection = $db->Risk_Identification;
			$collection->remove(array("_id"=> $object_id));
			/*Remove Risk_Analysis_Control data*/
			$collection = $db->Risk_Analysis_Control;
			$collection->remove(array("risk_id"=> $risk_name));
			/*Remove Risk_Analysis data*/
			$collection = $db->Risk_Analysis;
			$collection->remove(array("riskid"=> $risk_name));


			$risk_number = 0;
		    $risk_id_data=[];
		    try{
		        $cursor = $collection->find()->sort(array("risk_number" => -1));
		        foreach ($cursor as $document) {
		          array_push($risk_id_data, $document);
		        }
		        if(isset($risk_id_data[0]['risk_number']))
		        	$risk_number = $risk_id_data[0]['risk_number'];
		    }
		    catch(Exception $e) {

		    }
		    $risk_number ++;
   			echo $risk_number;
			break;


		case 'get_event_value':
			$response = $_REQUEST['event_category'];
			// $serach_text = substr($response ,0,-6);
			//$serach_text = $response;
			$collection = $db->Event;
			if ($response == 'All'){
				$cursor = $collection->find();	
			}else{
				$eventquery = array('event-category' => $response);
				$cursor = $collection->find($eventquery);		
			}
		    $event_value = [];
		    foreach ($cursor as $document) {
		    	if (isset($document["event-value"]))
		     		 array_push($event_value, $document["event-value"]);
		    }
		    
		    header("Content-Type: application/json", true);
			echo json_encode($event_value);
			break;

		case 'get_risk_value':
			$response = $_REQUEST['risk_category'];
			$collection = $db->Risk;
			if ($response == 'All'){
				$cursor = $collection->find();	
			}else{
				$riskquery = array('risk-category' => $response);
				$cursor = $collection->find($riskquery);
			}
		    $risk_value = [];
		    foreach ($cursor as $document) {
		    	if (isset($document["risk-value"]))
		     		 array_push($risk_value, $document["risk-value"]);
		    }
		    
		    header("Content-Type: application/json", true);
			echo json_encode($risk_value);
			break;

		case 'get_vulnerability_value':
			$response = $_REQUEST['vulnerability_category'];
			
			$collection = $db->Vulnerability;
			if ($response == 'All')
			{
				$cursor = $collection->find();	
			}else{

				$vulnerabilityquery = array('vulnerability-category' => $response);
				$cursor = $collection->find($vulnerabilityquery);
			}
		    $vulnerability_value = [];
		    foreach ($cursor as $document) {
		    	if (isset($document["vulnerability-value"]))
		      		array_push($vulnerability_value, $document["vulnerability-value"]);
		    }
		    
		    header("Content-Type: application/json", true);
			echo json_encode($vulnerability_value);
			break;


		case 'get_impact_value':
			
			$response = $_REQUEST['impact_category'];
			$collection = $db->Impact;
			if ($response == 'All'){
				$cursor = $collection->find();	
			}else 
			{
				$impactquery = array('impact-category' => $response);
				$cursor = $collection->find($impactquery);
			}
		    $impact_value = [];
		    foreach ($cursor as $document) {
		    	if (isset($document["impact-value"]))
		      		array_push($impact_value, $document["impact-value"]);
		    }
		    
		    header("Content-Type: application/json", true);
			echo json_encode($impact_value);
			break;


		case 'get_riskmanager_value':
			
			$response = $_REQUEST['riskmanager_category'];
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


		case 'get_risk_row':
			
			$response = $_REQUEST['object_id'];
			
			$collection = $db->Risk_Identification;
			$object_id = array('_id' => $response);
			$cursor = $collection->find($object_id);
		    $risk_row = [];
		    foreach ($cursor as $document) {
		      if(isset($document))
		      	array_push($risk_row, $document);
		    }
		    
		    $collection = $db->Configuration;
		    $query = array('property' =>  'Risk Status');
		    $cursor = $collection->find($query);
		   
		    $status_color = array();
		    $str = '';
		    foreach ($cursor as $document) {
		        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
		            $str = $document["values"][$i];
		            $temp_color = explode("||", $str);
		            if (isset($temp_color[1]) || isset($temp_color[1])){
		                array_push($status_color, $temp_color[0]);
		                array_push($status_color, $temp_color[1]);
		            }
		        }
		    }

		    $collection = $db->Additiona_Data;
			$query = array('form' => 'Risk Identify');
			$cursor = $collection->find($query);
		
		    $additional_add = [];
		    foreach ($cursor as $document) {
		    	if (isset($document))
		     		 array_push($additional_add, $document);
		    }

		    $ret['addtional_data'] = $additional_add;
		    $ret['status_color'] = $status_color;
		    $ret['row'] = $risk_row;
		    header("Content-Type: application/json", true);
			echo json_encode($ret);
			break;

		case 'clone_risk_row':

			$collection = $db->Risk_Identification;

			$risk_number = 0;
		    $risk_id_data=[];
		    try{
		        $cursor = $collection->find()->sort(array("risk_number" => -1));
		        foreach ($cursor as $document) {
		          array_push($risk_id_data, $document);
		        }
		        if(isset($risk_id_data[0]['risk_number']))
		        	$risk_number = $risk_id_data[0]['risk_number'];
		    }
		    catch(Exception $e) {

		    }
		    $risk_number ++;
			
			$response = $_REQUEST['object_id'];
			
			$object_id = array('_id' => $response);
			$cursor = $collection->find($object_id);
		    $risk_row = [];
		    $clone_row = [];
		    
		    foreach ($cursor as $document) {
		      	array_push($risk_row, $document);
		    }
		    
		  	$clone_row = $risk_row[0];
			
		  	$id = new MongoId();		
		  	$clone_data = array();
		  	

			$clone_data['_id'] = $id->{'$id'};
			$clone_data['risk_number'] = $risk_number;
			if (isset($clone_row['riskid_name'])) {
				$clone_data['riskid_name'] = 'R'.$risk_number;
			}
			if (isset($clone_row['risk_category_name'])) {
				$clone_data['risk_category_name'] = $clone_row['risk_category_name'];
			}
			if (isset($clone_row['staus'])) {
				$clone_data['staus'] = $clone_row['staus'];
			}
			if (isset($clone_row['event_value'])) {
				$clone_data['event_value'] = $clone_row['event_value'];
			}
			if (isset($clone_row['vulnerability_value'])) {
				$clone_data['vulnerability_value'] = $clone_row['vulnerability_value'];
			}
			if (isset($clone_row['impact_value'])) {
				$clone_data['impact_value'] = $clone_row['impact_value'];
			}if (isset($clone_row['business_unit_value'])) {
				$clone_data['business_unit_value'] = $clone_row['business_unit_value'];
			}
			if (isset($clone_row['risk_manager_value'])) {
				$clone_data['risk_manager_value'] = $clone_row['risk_manager_value'];
			}
			if (isset($clone_row['risk_defination_value'])) {
				$clone_data['risk_defination_value'] = '[copy]'.$clone_row['risk_defination_value'];
			}
			if (isset($clone_row['fields'])) {
				$clone_data['fields'] = $clone_row['fields'];
			}
			if (isset($clone_row['risk_title'])) {
				$clone_data['risk_title'] = $clone_row['risk_title'];
			}
		  	$insertResult = $collection->insert($clone_data);
		  
		  	$ret['_id'] = $id->{'$id'};
		  	$ret['row'] = $clone_row;
		  	$ret['risk_number'] = $risk_number;
		    header("Content-Type: application/json", true);
			echo json_encode($ret);
			
			break;
		case 'additional_add':
			$collection = $db->Additiona_Data;
			$query = array('form' => 'Risk Identify');
			$cursor = $collection->find($query);
		
		    $additional_add = [];
		    foreach ($cursor as $document) {
		    	if (isset($document))
		     		 array_push($additional_add, $document);
		    }
		    
		    header("Content-Type: application/json", true);
			echo json_encode($additional_add);
			break;
		
		default:
			
			break;
	}
	exit;


?>
<?php
    require_once("server/database_connect.php");
    

    $collection = $db->Configuration;
    $query = array('property' =>  'Event Category');
    $cursor = $collection->find($query);
    $event_category = [];
    foreach ($cursor as $document) {
        if(isset($document["values"]))
            array_push($event_category, $document["values"]);
    }

    $collection = $db->Configuration;
    $query = array('property' => 'Impact Category');
    $cursor = $collection->find($query);
    $impact_category = [];
    foreach ($cursor as $document) {
      if (isset($document["values"])) {
          array_push($impact_category, $document["values"]);
      }
    }

    $collection = $db->Configuration;
    $query = array('property' =>  'Vulnerability Category');
    $cursor = $collection->find($query);
    $vulnerability_category = [];
    foreach ($cursor as $document) {
      if (isset($document["values"]))
         array_push($vulnerability_category, $document["values"]);
    }

    $collection = $db->Configuration;
    $query = array('property' =>  'User Types');
    $cursor = $collection->find($query);
    $user_category = [];
    foreach ($cursor as $document) {
      if (isset($document["values"]))
        array_push($user_category, $document["values"]);
    }

    $collection = $db->Configuration;
    $query = array('property' =>  'Business Units');
    $cursor = $collection->find($query);
   
    $business_unit = [];
    foreach ($cursor as $document) {
      if (isset($document["values"]))
        array_push($business_unit, $document["values"]);
    }

    $collection = $db->Configuration;
    $query = array('property' =>  'Risk Category');
    $cursor = $collection->find($query);
   
    $risk_category = [];
    foreach ($cursor as $document) {
      if (isset($document["values"]))
        array_push($risk_category, $document["values"]);
    }
    

    $collection = $db->Configuration;
    $query = array('property' =>  'Notification Settings');
    $cursor = $collection->find($query);
   
    $notifications = array();
    $str = '';
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_notification = explode("||", $str);
            if (isset($temp_notification[0]) || isset($temp_notification[1])){
                array_push($notifications, $temp_notification[0]);
                array_push($notifications, $temp_notification[1]);
            }
        }
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
            if (isset($temp_color[0]) || isset($temp_color[1])){
                array_push($status_color, $temp_color[0]);
                array_push($status_color, $temp_color[1]);
            }
        }
    } 



    $collection = $db->Risk_Identification;
    $cursor = $collection->find();
    $all_data = [];
    foreach ($cursor as $document) {
      if (isset($document))
        array_push($all_data, $document);
    }


    $collection = $db->Additiona_Data;
    $query = array('form' => 'Risk Identify');
    $cursor = $collection->find($query);
    $field_data = [];
    foreach ($cursor as $document) {
      if (isset($document))
        array_push($field_data, $document);
    }



    $collection = $db->Risk_Identification;
    $risk_number = 0;
    $risk_id_data=[];
    try{
        $cursor = $collection->find()->sort(array("risk_number" => -1));

        foreach ($cursor as $document) {
          array_push($risk_id_data, $document);
        }
        if (isset($risk_id_data[0]['risk_number']))
            $risk_number = $risk_id_data[0]['risk_number'];
    
    }
    catch(Exception $e) {

    }
    $risk_number ++;
    
    
?>
<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1">
        <title>t h e m e l o c k . c o m</title>
        <!-- Global stylesheets -->
        <!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css"> -->
        <link href="assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css">
        <link href="assets/css//bootstrap.css" rel="stylesheet" type="text/css">
        <link href="assets/css//core.css" rel="stylesheet" type="text/css">
        <link href="assets/css//components.css" rel="stylesheet" type="text/css">
        <link href="assets/css/colors.css" rel="stylesheet" type="text/css">
        <link href="assets/css/box-style.css" rel="stylesheet" type="text/css">
        <!-- /global stylesheets -->
        <!-- Core JS files -->

        <script type="text/javascript" src="assets/js/plugins/loaders/pace.min.js"></script>
        <script type="text/javascript" src="assets/js/core/libraries/jquery.min.js"></script>
        <script type="text/javascript" src="assets/js/core/libraries/bootstrap.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/loaders/blockui.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/ui/nicescroll.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/ui/drilldown.js"></script>
        
        <script type="text/javascript" src="assets/js/plugins/tables/datatables/datatables.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/tables/datatables/extensions/tools.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/forms/selects/select2.min.js"></script>
        <script type="text/javascript" src="assets/js/pages/form_bootstrap_select.js"></script>
        <script type="text/javascript" src="assets/js/plugins/forms/selects/bootstrap_select.min.js"></script>
        <!-- /core JS files
        <!-- Theme JS files -->
        <script type="text/javascript" src="assets/js/plugins/visualization/d3/d3.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/visualization/d3/d3_tooltip.js"></script>
        <script type="text/javascript" src="assets/js/plugins/forms/styling/uniform.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/forms/selects/bootstrap_multiselect.js"></script>
        <script type="text/javascript" src="assets/js/plugins/ui/moment/moment.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/pickers/daterangepicker.js"></script>
        <script type="text/javascript" src="assets/js/pages/datatables_extension_tools.js"></script>
        <script type="text/javascript" src="assets/js/pages/form_bootstrap_select.js"></script>
        <script type="text/javascript" src="assets/js/plugins/forms/selects/bootstrap_select.min.js"></script>
        <!-- For Elastic textarea plugin-->
        <script type="text/javascript" src="assets/js/plugins/forms/inputs/autosize.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/forms/inputs/formatter.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/notifications/pnotify.min.js"></script>
        <script type="text/javascript" src="assets/js/core/app.js"></script>
        <!-- <script type="text/javascript" src="assets/js/plugins/notifications/bootbox.min.js"></script> -->
        <!-- <script type="text/javascript" src="assets/js/plugins/notifications/sweet_alert.min.js"></script> -->

        <script type="text/javascript" src="assets/js/pages/components_notifications_pnotify.js"></script>

        <script type="text/javascript" src="assets/js/modal.js"></script>
        
        <script type="text/javascript" src="assets/js/pages/datatables_basic.js"></script>
        <script type="text/javascript" src="assets/js/my_checkbox.js"></script>
        <script type="text/javascript" src="server/action.js"></script>  
        <script type="text/javascript">
		function Add(){ 
		$(".dynamicField").append('<div class="form-group"><select id="formInput41" class="bootstrap-select" data-live-search="true" data-width="100%"><option>Technology</option></select>'+'</div>');
		/*
		$(".dynamicField").append( '<div class="form-group">'+ '<select id="formInput51" class="bootstrap-select" data-live-search="true" data-width="100%">
														<option>Technology</option>                                                 
														<option>Human Resources</option>                                                 
														<option>Sales and Support</option>                                                 
													</select>'+ '<textarea class="form-control impact-value elastic" rows="1"></textarea>'+ '</div>'+ "<i class='btnDelete fa fa-trash'><i>"); $(".btnDelete").bind("click", Delete); */
		}
		
		function Delete(){ var par = $(this).parent().parent(); //tr 
			par.remove(); }
		</script>

        <!-- /theme JS files -->
    </head>
    <body>
        <!-- Main navbar -->
        <div class="navbar navbar-inverse">
            <div class="navbar-header">
                <a class="navbar-brand" href="index.html">
                    <img src="assets/images/logo_light.png" alt="">
                </a>
                <ul class="nav navbar-nav pull-right visible-xs-block">
                    <li>
                        <a data-toggle="collapse" data-target="#navbar-mobile"><i class="icon-tree5"></i></a>
                    </li>
                </ul>
            </div>
            <input type="hidden" id="delay_second" value="<?php echo $notifications[1]; ?>">
            <input type="hidden" id="notication_location" value="<?php echo $notifications[3];?>">
            <input type="hidden" id="success_color" value="<?php echo $notifications[5];?>">
            <input type="hidden" id="failure_color" value="<?php echo $notifications[7];?>">
            <input type="hidden" id="alert_color" value="<?php echo $notifications[9];?>">
            <input type="hidden" id="information_color" value="<?php echo $notifications[9];?>">
            <div class="navbar-collapse collapse" id="navbar-mobile">
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="#"><i class="icon-search4"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-help"></i></a>
                    </li>
                    <li>
                        <a href="#"><i class="icon-bell3"></i><span class="badge bg-warning-400">5</span></a>
                    </li>
                    <li class="dropdown">
                        <a href="#"><i class="icon-bubbles4"></i><span class="visible-xs-inline-block position-right">Messages</span><span class="badge bg-warning-400">2</span></a>
                    </li>
                    <li class="dropdown dropdown-user">
                        <a class="dropdown-toggle" data-toggle="dropdown">
                            <img src="assets/images/mary.png" alt="">
                            <span>Victoria Joe Baker</span>
                            <i class="caret"></i>
                        </a>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="#"><i class="icon-user-plus"></i> My profile</a>
                            </li>
                            <li>
                                <a href="#"><i class="icon-coins"></i> My balance</a>
                            </li>
                            <li>
                                <a href="#"><span class="badge badge-warning pull-right">58</span> <i class="icon-comment-discussion"></i> Messages</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#"><i class="icon-cog5"></i> Account settings</a>
                            </li>
                            <li>
                                <a href="#"><i class="icon-switch2"></i> Logout</a>
                            </li>
                        </ul>
                    </li>
                    <li>
                        <a href="#"><i class="icon-switch2"></i></a>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /main navbar -->
        <!-- Second navbar -->
        <div class="navbar navbar-default" id="navbar-second">
            <ul class="nav navbar-nav no-border visible-xs-block">
                <li>
                    <a class="text-center collapsed" data-toggle="collapse" data-target="#navbar-second-toggle"><i class="icon-menu7"></i></a>
                </li>
            </ul>
            <div class="navbar-collapse collapse" id="navbar-second-toggle">
                <ul class="nav navbar-nav">
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-strategy position-left"></i> Starter kit <span class="caret"></span></a>
                        <ul class="dropdown-menu width-200">
                            <li class="dropdown-header">Basic layouts</li>
                            <li class="dropdown-submenu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-grid2"></i> Columns</a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-header highlight">Options</li>
                                    <li>
                                        <a href="starters/1_col.html">One column</a>
                                    </li>
                                    <li>
                                        <a href="starters/2_col.html">Two columns</a>
                                    </li>
                                    <li class="dropdown-submenu">
                                        <a href="#">Three columns</a>
                                        <ul class="dropdown-menu">
                                            <li class="dropdown-header highlight">Sidebar position</li>
                                            <li>
                                                <a href="starters/3_col_dual.html">Dual sidebars</a>
                                            </li>
                                            <li>
                                                <a href="starters/3_col_double.html">Double sidebars</a>
                                            </li>
                                        </ul>
                                    </li>
                                    <li>
                                        <a href="starters/4_col.html">Four columns</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-submenu">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-paragraph-justify3"></i> Navbars</a>
                                <ul class="dropdown-menu">
                                    <li class="dropdown-header highlight">Fixed navbars</li>
                                    <li>
                                        <a href="starters/layout_navbar_fixed_main.html">Fixed main navbar</a>
                                    </li>
                                    <li>
                                        <a href="starters/layout_navbar_fixed_secondary.html">Fixed secondary navbar</a>
                                    </li>
                                    <li>
                                        <a href="starters/layout_navbar_fixed_both.html">Both navbars fixed</a>
                                    </li>
                                </ul>
                            </li>
                            <li class="dropdown-header">Optional layouts</li>
                            <li>
                                <a href="starters/layout_boxed.html"><i class="icon-align-center-horizontal"></i> Fixed width</a>
                            </li>
                            <li>
                                <a href="starters/layout_sidebar_sticky.html"><i class="icon-flip-vertical3"></i> Sticky sidebar</a>
                            </li>
                        </ul>
                    </li>
                </ul>
                <ul class="nav navbar-nav navbar-right">
                    <li>
                        <a href="changelog.html"><i class="icon-history position-left"></i>
						Changelog<span class="label label-inline position-right bg-success-400">1.0</span></a>
                    </li>
                    <li class="dropdown">
                        <a href="#" class="dropdown-toggle" data-toggle="dropdown"><i class="icon-cog3"></i><span class="visible-xs-inline-block position-right">Share</span><span class="caret"></span></a>
                        <ul class="dropdown-menu dropdown-menu-right">
                            <li>
                                <a href="#"><i class="icon-user-lock"></i> Account security</a>
                            </li>
                            <li>
                                <a href="#"><i class="icon-statistics"></i> Analytics</a>
                            </li>
                            <li>
                                <a href="#"><i class="icon-accessibility"></i> Accessibility</a>
                            </li>
                            <li class="divider"></li>
                            <li>
                                <a href="#"><i class="icon-gear"></i> All settings</a>
                            </li>
                        </ul>
                    </li>
                </ul>
            </div>
        </div>
        <!-- /second navbar -->
        <!-- Page header -->
        <div class="page-header">
            <div class="page-header-content">
                <div class="page-title">
                    <h4><i class="icon-stack2 position-left"></i><span class="text-semibold">Home</span> - Welcome<small class="display-block"></small></h4>
                </div>
                <div class="heading-elements">
                    <div class="heading-btn-group">
                        <a href="javascript:history.back()" class="btn btn-link btn-float has-text"><i class="icon-arrow-right6 text-primary"></i> <span>Back</span></a>
                    </div>
                </div>
            </div>
        </div>
        <!-- /page header -->
        <!-- Page container -->
        <div class="page-container">
            <!-- Page content -->
            <div class="page-content">
                <!-- Main content -->
                <div class="row">
                    <div class="col-md-12"> 
                        <div class="panel panel-flat">
                            <div class="panel-heading">
                                <h6 class="panel-title"><b>Manage Risk Identification</b></h6>
                                <div class="heading-elements">
                                    <ul class="icons-list">
                                        
                                        <li>
                                            <a data-action="collapse"></a>
                                        </li>
                                        <li>
                                            <a data-action="reload"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel-body">
                                Basic panel with panel controls
                                <!-- Basic TableTools example -->
                                <table class="table datatable-basic">
                                    <thead>
                                        <tr>
                                            <th class="col-md-1">Risk ID</th>
                                            <th class="col-md-4">Risk Defination</th>
                                            <th class="col-md-2">Risk Category</th>
                                            <th class="col-md-2">Business Unit</th>
                                            <th class="col-md-1">Status</th>
                                            <th class="col-md-1 text-center">Action</th>
                                        </tr>
                                    </thead>
                                    <tbody class="table-body">
                                        <?php foreach ($all_data as $row) {?>
                                          
                                        
                                        <tr class="<?php echo $row['_id'];?>">
                                            <td class="center"><?php if(!empty($row['riskid_name'])) echo $row['riskid_name']; else echo "";?></td>
                                            <td class="center"><?php if(!empty($row['risk_defination_value'])) 
                                                {
                                                    echo $row['risk_title'];
                                                    echo "<br>";
                                                    echo $row['risk_defination_value']; 
                                                }
                                                else
                                                {
                                                    echo $row['risk_title'];
                                                    echo "<br>";
                                                    echo "";
                                                }?>
                                            </td>
                                                
                                            <td class="center"><?php if(!empty($row['risk_category_name'])) echo $row['risk_category_name']; else echo "";?></td>
                                            <td class="center">
                                                <a href="#"><?php if(!empty($row['business_unit_value'])) echo $row['business_unit_value']; else echo "";?></a>
                                            </td>
                                             <td class="center">
                                                <?php for ($i=0; $i < count($status_color); $i= $i+2) { 
                                                   if ($row['staus'] == $status_color[$i]){ ?>
                                                    <span class="label" style="background-color:<?php echo $status_color[$i+1];?>;"><?php echo $row['staus'];?></span>
                                                   <?php } 
                                                } ?>
                                                
                                            </td>
                                            <td class="center">
                                                <ul class="icons-list text-center ">
                                                    <li class="id-check-view" id="<?php echo $row['_id'];?>">
                                                        <button type="button" class="btn btn-default btn-xs">
                                                            <i class="icon-eye2"></i>
                                                        </button>
                                                    </li>
                                                    <li class="id-check-edit" id="<?php echo $row['_id'];?>">
                                                        <button type="button" class="btn btn-default btn-xs">
                                                            <i class="icon-database-edit2"></i>
                                                        </button>
                                                    </li>
                                                    <li class="id-check-clone" id="<?php echo $row['_id'];?>">
                                                        <button type="button" class="btn btn-default btn-xs">
                                                            <i class="icon-copy3"></i>
                                                        </button>
                                                    </li>
                                                    <li class="id-check-delete" id="<?php echo $row['_id'];?>" riskid="<?php echo $row['riskid_name'];?>">
                                                        <button type="button" class="btn btn-danger btn-xs">
                                                            <i class="icon-cross"></i>
                                                        </button>
                                                    </li>
                                                </ul>
                                            </td>
                                        </tr>
                                    <?php } ?>
                                    </tbody>
                                </table>
                                <!-- /basic TableTools example -->
                            </div>
                        </div>
                    </div>
                </div>
                <!-- /main content -->
                <div class="row">
                    <div class="col-md-12">
                        <div class="panel panel-flat">
                            <div class="panel-heading">
                                <h6 class="panel-title"><b>Risk Identification Record</b></h6>
                                <div class="heading-elements">
                                    <ul class="icons-list">
                                         <li>
                                            <a id="new_add_risk"><i class="icon-plus22"></i></a>
                                        </li>
                                        <li>
                                            <a data-action="collapse"></a>
                                        </li>
                                        <li id="panel_reload">
                                            <a data-action="reload"></a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                            <div class="panel-body">
                                <div class="row">
                                    <div class="col-md-7">
                                        <div class="row">
                                            <div class="col-md-2">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Risk ID</label>
                                                    <input type="text" class="form-control" id="riskid_name" value="R<?php echo $risk_number;?>">
                                                </div>                                                 
                                            </div>
                                            <div class="col-md-10">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Risk Category</label>                                                     
                                                <a data-toggle="modal" data-target="#modal_riskcategoryinfo" style="color:#333333;"><i class="icon-help pull-right"></i></a>
                                                    <select id="risk_category" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                          <?php for ($i=0; $i < count($risk_category[0]); $i++) {?> 
                                                            <option><?php echo $risk_category[0][$i]; ?></option>
                                                        <?php } ?>                                                          
                                                    </select>
                                                </div>                                                 
                                            </div>
                                        </div>
                                        <div class="form-group"> 
                                            <label class="control-label" for="formInput57">Risk Title</label> 
                                            <textarea class="form-control elastic risk-title" rows="1"></textarea>
                                        </div>
                                        <style type="text/css">
                                            .event-textarea{
                                                margin-top: 26px;
                                            }
                                            .risk-status{
                                                margin-top: 9px;
                                            }
                                        </style>
                                         <div class="form-group">
                                            <label class="control-label ">Risk Status</label>
                                            <div class="risk-status">
                                               
                                                <?php
                                                    
                                                    for ($i=0; $i < count($status_color);) { 
                                                        if ($i == 0){ ?> 
                                                           
                                                           <label class="radio-inline">
                                                                <input type="radio" name="status" class="styled status-<?php echo $status_color[$i];?>" checked="checked" color="<?php echo $status_color[$i+1];?>" value="<?php echo $status_color[$i];?>">
                                                               <?php echo $status_color[$i];?> 
                                                            </label>
                                                        <?php } else { ?>
                                                              <label class="radio-inline">
                                                                <input type="radio" name="status" class="styled status-<?php echo $status_color[$i];?>" color="<?php echo $status_color[$i+1];?>" value="<?php echo $status_color[$i];?>">
                                                               <?php echo $status_color[$i];?> 
                                                            </label>
                                                        <?php } ?>
                                                    <?php $i += 2; } ?>
                                                 
                                               
                                            </div>             
                                        </div>
                                     
                                    
                                        <div class="form-group event-textarea"> 
                                            <label class="control-label" for="formInput57">Event </label>                                             
                                            <a data-toggle="modal" data-target="#modal_event" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a>
                                            <textarea class="form-control elastic event-value" rows="1"></textarea>
                                        </div>
                                        <div class="form-group"> 
                                            <label class="control-label" for="formInput58">Vulnerability</label>                                             
                                            <a data-toggle="modal" data-target="#modal_vulnerability" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a>
                                            <textarea class="form-control vulnerability-value elastic" rows="1"></textarea>
                                        </div>
                                        <div class="form-group"> 
                                            <label class="control-label" for="formInput57">Impact</label>                                             
                                            <a data-toggle="modal" data-target="#modal_impact" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a> 
                                            <textarea class="form-control impact-value elastic" rows="1"></textarea>
                                        </div>
                                       
                                    </div>
                                    <div class="col-md-5">
                                        <div class="form-group"> 
                                            <label class="control-label" for="formInput51">Select Business Unit</label>                                             
                                            <select id="business_unit" class="bootstrap-select" data-live-search="true" data-width="100%">
                                            <?php for ($i=0; $i < count($business_unit[0]); $i++) {?> 
                                                <option><?php echo $business_unit[0][$i]; ?></option>
                                            <?php } ?>                                 
                                            </select>
                                        </div>
                                        
                                         <div class="form-group"> 
                                            <label class="control-label" for="formInput57">Risk Manager</label>                                             
                                            <a data-toggle="modal" data-target="#modal_riskmanager" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a> 
                                            <textarea class="form-control impact-value elastic risk-manager" rows="1" disabled></textarea>
                                        </div>
                                        
                                         
                                        
                                        
                                        <div class="form-group">
                                            <label class="control-label" for="formInput29">Risk Defination</label>
                                            <textarea class="form-control elastic risk-defination" id="formInput29" rows="5" disabled="false"></textarea>
                                            <div class="checkbox">
												<label>
													<input type="checkbox" id="generated-defination" class="styled">
													Override auto generated defination
												</label>
											</div>
                                    	</div>
                                       
                                    </div>
									
                                </div>
							    <div class="additional_data_form">
                                    <label class="control-label" for="formInput51">Additional Data</label>
                                    <div class="data-list">
                                        <div class="row">
                                            <div class="col-md-3">
                                                <div class="form-group">     
                                                    <select class="field-name bootstrap-select" data-live-search="true" data-width="100%"> 
                                                        <?php for ($i=0; $i < count($field_data[0]['fields']); $i++) { ?>
                                                            <option><?php echo $field_data[0]['fields'][$i]; ?></option>                                        
                                                        <?php } ?>
                                                        
                                                    </select>
                                                </div>                                                 
                                            </div>
                                            <div class="col-md-4">
                                                <div class="form-group">
                                                    <textarea class="field-value form-control elastic" rows="1" style="width:92%;display: inline-block;vertical-align: top;"></textarea>
                                                    <span type="button" class="additional-data delete_data1 btn-success">
                                                        <i class="icon-database-edit2"></i>
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                        <div class="clearfix"></div>
                                    </div>            
                                </div>
								<div class="form-group">
										
										<button type="button" id="risk_identification_record_add" style="display:block" class="btn btn-default pull-right">Save Record</button>
                                        <button type="button" id="risk_identification_record_edit" style="display:none" class="btn btn-default pull-right">Edit Record</button>
								
								</div>
                                
                              
                                
                                
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /page content -->
            <!-- Footer -->
            <div class="footer text-muted">
                &copy; 2015. 
                <a href="#">Limitless Web App Kit</a> by 
                <a href="http://themeforest.net/user/Kopyov" target="_blank">Eugene Kopyov</a>
            </div>
            <!-- /footer -->
            <!-- Basic modal -->
            <div id="modal_event" class="modal fade">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h5 class="modal-title">Event Knowledgebase</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                            <div class="col-md-12">
                                    <div class="form-group"> 
                                        <label class="control-label" for="formInput41">Event Category</label>
                                        <select id="event_category" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            <?php for ($i=0; $i < count($event_category[0]); $i++) {?> 
                                                <option><?php echo $event_category[0][$i]; ?></option>
                                            <?php } ?>
                                        </select>
                                    </div>                                                 
                                </div>
                             </div>
                                                        <div class="row">

                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Events</label>                                                     

                                                    <select id="event_value" class="bootstrap-select select-event" data-live-search="true" data-width="100%"> 
                                                   


                                                    </select>
                                                </div>                                                 
                                            </div>
                                                                                                        </div>

                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default event-modal-insert">Insert</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /basic modal -->
            <!-- Basic modal -->
            <div id="modal_vulnerability" class="modal fade">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h5 class="modal-title">Vulnerability Knowledgebase</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Vulnerability Category</label>                                                     

                                                    <select id="vulnerability_category" class="bootstrap-select" data-live-search="true" data-width="100%">
                                                        <?php for ($i=0; $i < count($vulnerability_category[0]); $i++) {?> 
                                                            <option><?php echo $vulnerability_category[0][$i]; ?></option>
                                                        <?php } ?>
                                                                                                                
                                                    </select>
                                                </div>                                                 
                                            </div>
                             </div>
                                                        <div class="row">

                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Vulnerability</label>                                                     

                                                    <select id="vulnerability_value" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                                                                        
                                                    </select>
                                                </div>                                                 
                                            </div>
                                        </div>

                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default vulnerability-modal-insert">Insert</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /basic modal -->
        <!-- Basic modal -->
            <div id="modal_impact" class="modal fade">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h5 class="modal-title">Impact Knowledgebase</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Impact Category</label>                                                     

                                                    <select id="impact-category" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                        <?php for ($i=0; $i < count($impact_category[0]); $i++) {?> 
                                                            <option><?php echo $impact_category[0][$i]; ?></option>
                                                        <?php } ?>
                                                                                                                 
                                                    </select>
                                                </div>                                                 
                                            </div>
                             </div>
                                                        <div class="row">

                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Impact</label>                                                     

                                                    <select id="impact_value" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                                                                        
                                                    </select>
                                                </div>                                                 
                                            </div>
                                                                                                        </div>

                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default impact-modal-insert">Insert</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /basic modal -->
            
            <!-- Basic modal -->
            <div id="modal_riskcategoryinfo" class="modal fade">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h5 class="modal-title">Risk Category Information</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Impact Category</label>                                                     

                                                    <select id="risk-category" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                       <?php for ($i=0; $i < count($risk_category[0]); $i++) {?> 
                                                            <option><?php echo $risk_category[0][$i]; ?></option>
                                                        <?php } ?>                                                         
                                                    </select>
                                                </div>                                                 
                                            </div>
                             </div>
                                                        <div class="row">

                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Impact</label>                                                     

                                                    <select id="risk_value" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                                                                                 
                                                    </select>
                                                </div>                                                 
                                            </div>
                                                                                                        </div>

                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default" id="riskcategory_insert">Insert</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /basic modal -->
            
            
            
            <!-- Basic modal -->
            <div id="modal_riskmanager" class="modal fade">
                <div class="modal-dialog modal-lg">
                    <div class="modal-content">
                        <div class="modal-header">
                            <button type="button" class="close" data-dismiss="modal">&times;</button>
                            <h5 class="modal-title">Select User</h5>
                        </div>
                        <div class="modal-body">
                            <div class="row">
                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">User Category</label>                                                     

                                                    <select id="riskmanager-category" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                        <?php for ($i=0; $i < count($user_category[0]); $i++) {?> 
                                                            <option><?php echo $user_category[0][$i]; ?></option>
                                                        <?php } ?>
                                                     
                                                    </select>
                                                </div>                                                 
                                            </div>
                             </div>
                                                        <div class="row">

                            <div class="col-md-12">
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">User</label>                                                     

                                                    <select id="riskmanager_value" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                                                                            
                                                    </select>
                                                </div>                                                 
                                            </div>
                                                                                                        </div>

                            
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>
                            <button type="button" class="btn btn-default riskmanager-modal-insert">Insert</button>
                        </div>
                    </div>
                </div>
            </div>
            <!-- /basic modal -->
            
            
            <style type="text/css">
                .bootstrap-select.btn-group .dropdown-menu > li > a .text {
                   
                    white-space: normal;
                }
            </style>
        <!-- /page container -->
	
<script>

</script>
    </body>
</html>
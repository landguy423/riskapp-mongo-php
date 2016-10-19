<?php
    require_once("server/database_connect.php");
    /*Get Inherent Probability from document 9*/
    $collection = $db->Configuration;
    $query = array('property' =>  'Risk Analysis Probability');
    $cursor = $collection->find($query);
    $inherent_title = [];
    $inherent_content = [];
    $inherent_background_color = [];
    $inherent_value = [];
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
                array_push($inherent_title, $temp_value[0]);
                array_push($inherent_content, $temp_value[1]);
                array_push($inherent_background_color, $temp_value[2]);
                array_push($inherent_value, $temp_value[3]);
            }
        }
    }

    /*Get Inherent Impact from document 10 */
    $collection = $db->Configuration;
    $query = array('property' =>  'Risk Analysis Impact');
    $cursor = $collection->find($query);
    $inherent_impact_title = [];
    $inherent_impact_content = [];
    $inherent_impact_background_color = [];
    $inherent_impact_value = [];
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
                array_push($inherent_impact_title, $temp_value[0]);
                array_push($inherent_impact_content, $temp_value[1]);
                array_push($inherent_impact_background_color, $temp_value[2]);
                array_push($inherent_impact_value, $temp_value[3]);
            }
        }
    }  


    /*Get auto caulation option  from document 11*/
    $collection = $db->Configuration;
    $query = array('property' =>  'Risk Score Auto Calculation');
    $cursor = $collection->find($query);
    
    foreach ($cursor as $document) {
        $auto_caluator = $document['Value'];
    }
    
    /*Get Inherent Risk Score from document 12 */
    
    $collection = $db->Configuration;
    $query = array('property' =>  'Inherent Risk Score');
    $cursor = $collection->find($query);
    $inherent_score_title = [];
    $inherent_score_content = [];
    $inherent_score_background_color = [];
    $inherent_score_value = [];
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
                array_push($inherent_score_title, $temp_value[0]);
                array_push($inherent_score_content, $temp_value[1]);
                array_push($inherent_score_background_color, $temp_value[2]);
                array_push($inherent_score_value, $temp_value[3]);
            }
        }
    }  

    $collection = $db->Configuration;
    $query = array('property' =>  'Control Type');
    $cursor = $collection->find($query);
    $control_type_title = [];
    $control_type_content = [];
    $control_type_background_color = [];
    
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
                array_push($control_type_title, $temp_value[0]);
                array_push($control_type_content, $temp_value[1]);
                array_push($control_type_background_color, $temp_value[2]);
                
            }
        }
    }



    $collection = $db->Configuration;
    $query = array('property' =>  'Control Category');
    $cursor = $collection->find($query);
    $control_category = [];
    
    foreach ($cursor as $document) {
        if ($document["values"]){
            array_push($control_category, $document["values"]);
        }
    }

    

    $collection = $db->Configuration;
    $query = array('property' =>  'Control Strategy');
    $cursor = $collection->find($query);
    $control_strategy_values = [];
    $control_strategy_background_color = [];
    
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1])){
                array_push($control_strategy_values, $temp_value[0]);
                array_push($control_strategy_background_color, $temp_value[1]);
            }
        }
    }


    $collection = $db->Configuration;
    $query = array('property' =>  'Control Status');
    $cursor = $collection->find($query);
    $control_status_values = [];
    $control_status_background_color = [];
    
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1])){
                array_push($control_status_values, $temp_value[0]);
                array_push($control_status_background_color, $temp_value[1]);
            }
        }
    }
    
    $collection = $db->Configuration;
    $query = array('property' =>  'Review Frequency');
    $cursor = $collection->find($query);
    $review_frequency_values = [];
    $review_frequency_background_color = [];
    
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1])){
                array_push($review_frequency_values, $temp_value[0]);
                array_push($review_frequency_background_color, $temp_value[1]);
            }
        }
    }


    $collection = $db->Configuration;
    $query = array('property' =>  'User Types');
    $cursor = $collection->find($query);
    $user_category = [];
    foreach ($cursor as $document) {
      if (isset($document["values"]))
        array_push($user_category, $document["values"]);
    }
    


        /*Get Post Probability from document 18*/
    $collection = $db->Configuration;
    $query = array('property' =>  'Post Control Probability');
    $cursor = $collection->find($query);
    $post_control_title = [];
    $post_control_content = [];
    $post_control_background_color = [];
    $post_control_value = [];
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
                array_push($post_control_title, $temp_value[0]);
                array_push($post_control_content, $temp_value[1]);
                array_push($post_control_background_color, $temp_value[2]);
                array_push($post_control_value, $temp_value[3]);
            }
        }
    }

    /*Get Post Impact from document 19 */
    $collection = $db->Configuration;
    $query = array('property' =>  'Post Control Impact');
    $cursor = $collection->find($query);
    $post_control_impact_title = [];
    $post_control_impact_content = [];
    $post_control_impact_background_color = [];
    $post_control_impact_value = [];
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
                array_push($post_control_impact_title, $temp_value[0]);
                array_push($post_control_impact_content, $temp_value[1]);
                array_push($post_control_impact_background_color, $temp_value[2]);
                array_push($post_control_impact_value, $temp_value[3]);
            }
        }
    }  
    
    $collection = $db->Additiona_Data;
    $query = array('form' => 'Risk Analysis');
    $cursor = $collection->find($query);
    $field_data = [];
    foreach ($cursor as $document) {
      if (isset($document))
        array_push($field_data, $document);
    }



    /*Get Post Risk Score from document 20 */
    
    $collection = $db->Configuration;
    $query = array('property' =>  'Post Control Risk Score');
    $cursor = $collection->find($query);
    $post_control_score_title = [];
    $post_control_score_content = [];
    $post_control_score_background_color = [];
    $post_control_score_value = [];
    foreach ($cursor as $document) {
        for ($i=0; $i < sizeof($document["values"]) ; $i++) { 
            $str = $document["values"][$i];
            $temp_value = explode("||", $str);
            if (isset($temp_value[0]) || isset($temp_value[1]) || isset($temp_value[2]) ||isset($temp_value[3])){
                array_push($post_control_score_title, $temp_value[0]);
                array_push($post_control_score_content, $temp_value[1]);
                array_push($post_control_score_background_color, $temp_value[2]);
                array_push($post_control_score_value, $temp_value[3]);
            }
        }
    }


    $collection = $db->Risk_Identification;
    $cursor = $collection->find();
    $risk_data = [];
    foreach ($cursor as $document) {
      if (isset($document))
        array_push($risk_data, $document);
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
   
    function Removeescape($string){
        $result_string = str_replace(' ', '', $string);
        return $result_string;
    }



?>

<!DOCTYPE html> 
<html lang="en"> 
    <head> 
        <meta charset="utf-8"> 
        <meta http-equiv="X-UA-Compatible" content="IE=edge"> 
        <meta name="viewport" content="width=device-width, initial-scale=1"> 
        <title>t h e m e l o c k . c o m</title>         
        <!-- Global stylesheets -->         
        <!-- <link href="https://fonts.googleapis.com/css?family=Roboto:400,300,100,500,700,900" rel="stylesheet" type="text/css">  -->
        <link href="assets/css/icons/icomoon/styles.css" rel="stylesheet" type="text/css"> 
        <link href="assets/css/bootstrap.css" rel="stylesheet" type="text/css"> 
        <link href="assets/css/core.css" rel="stylesheet" type="text/css"> 
        <link href="assets/css/components.css" rel="stylesheet" type="text/css"> 
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
        <!-- <script type="text/javascript" src="assets/js/pages/datatables_basic.js"></script>          -->
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
        <script type="text/javascript" src="assets/js/core/libraries/jquery_ui/datepicker.min.js"></script> 
        
        <script type="text/javascript" src="assets/js/plugins/notifications/pnotify.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/pickers/anytime.min.js"></script>
        <script type="text/javascript" src="assets/js/plugins/pickers/pickadate/picker.js"></script>
        <script type="text/javascript" src="assets/js/plugins/pickers/pickadate/picker.date.js"></script>
        <script type="text/javascript" src="assets/js/plugins/pickers/pickadate/picker.time.js"></script>
        <script type="text/javascript" src="assets/js/plugins/pickers/pickadate/legacy.js"></script>

        <script type="text/javascript" src="assets/js/pages/picker_date.js"></script>       
        <!-- For Elastic textarea plugin-->         
        <script type="text/javascript" src="assets/js/plugins/forms/inputs/autosize.min.js"></script>         
        <script type="text/javascript" src="assets/js/plugins/forms/inputs/formatter.min.js"></script>         
        <script type="text/javascript" src="assets/js/core/app.js"></script>         
        <script type="text/javascript" src="assets/js/plugins/notifications/bootbox.min.js"></script>         
        <script type="text/javascript" src="assets/js/plugins/notifications/sweet_alert.min.js"></script>         
        <script type="text/javascript" src="assets/js/modal.js"></script>         
        <script type="text/javascript" src="assets/js/my_checkbox.js"></script>
        
        <link href="assets/css/plot.css" rel="stylesheet" type="text/css"> 
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
        <input type="hidden" id="auto_caluator_property" value="<?php echo $auto_caluator; ?>" name="">
        
        <input type="hidden" id="delay_second" value="<?php echo $notifications[1]; ?>">
        <input type="hidden" id="notication_location" value="<?php echo $notifications[3];?>">
        <input type="hidden" id="success_color" value="<?php echo $notifications[5];?>">
        <input type="hidden" id="failure_color" value="<?php echo $notifications[7];?>">
        <input type="hidden" id="alert_color" value="<?php echo $notifications[9];?>">
        <input type="hidden" id="information_color" value="<?php echo $notifications[9];?>">
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
                                <h6 class="panel-title"><b>Manage Risk Analysis</b></h6> 
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
                                <table class="table" id="risk_table"> 
                                    <thead> 
                                        <tr> 
                                            <th class="col-md-1">Risk ID</th> 
                                            <th class="col-md-4">Risk Defination</th> 
                                            <th class="col-md-2">Progress</th> 
                                            <th class="col-md-2">Business Unit</th> 
                                            <th class="col-md-1">Status</th> 
                                            <th class="col-md-1 text-center">Action</th> 
                                        </tr>                                         
                                    </thead>                                     
                                    <tbody>
                                        <?php foreach ($risk_data as $row) {?>
                                          
                                        <?php 
                                            $risk_analysis_data = [];
                                            $collection = $db->Risk_Analysis;
                                            $query = array('riskid' =>  $row['riskid_name']);
                                            $cursor = $collection->find($query);

                                            foreach ($cursor as $document) {
                                                if (isset($document))
                                                    array_push($risk_analysis_data, $document);
                                                
                                            }
                                            print_r($risk_analysis_data[0]['exposure']);

                                        ?>
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
                                                
                                            <td class="center">
                                                <?php if (!empty($risk_analysis_data[0]['exposure']) && !empty($risk_analysis_data[0]['exposure_calculation'])){?>
                                                <i class="check-exposure icon-checkmark3 text-success"></i> Risk Quantification</br>
                                                <?php } else { ?>
                                                <i class="check-exposure icon-cross2 text-danger"></i> Risk Quantification</br>   
                                                <?php } ?>  
                                                <?php
                                                    if (isset($risk_analysis_data[0]['inherentinfo'])){
                                                        $inherentinfo = $risk_analysis_data[0]['inherentinfo'];
                                                    
                                                        if (!empty($inherentinfo['inherent_probability']) && 
                                                            !empty($inherentinfo['inherent_impact']) &&
                                                            !empty($inherentinfo['inherent_risk_score']) &&
                                                            !empty($inherentinfo['inherent_probability_justification']) &&
                                                            !empty($inherentinfo['inherent_impact_justification']) &&
                                                            !empty($inherentinfo['inherent_risk_score_value'])){ ?>
                                                <i class="check-inherent icon-checkmark3 text-success"></i> Inherent Risk Analysis</br>
                                                <?php } else { ?>
                                                <i class="check-inherent icon-cross2 text-danger"></i> Inherent Risk Analysis</br>
                                                <?php } } else { ?> 
                                                <i class="check-inherent icon-cross2 text-danger"></i> Inherent Risk Analysis</br>
                                                <?php }?>

                                                <i class="check-mitigation icon-checkmark3 text-success"></i> Risk Mitigation</br>
                                                
                                                <?php
                                                    if (isset($risk_analysis_data[0]['residualinfo'])){
                                                        $residualinfo = $risk_analysis_data[0]['residualinfo'];
                                                        if (!empty($residualinfo['residual_probability']) && 
                                                            !empty($residualinfo['residual_impact']) &&
                                                            !empty($residualinfo['residual_risk_score']) &&
                                                            !empty($residualinfo['residual_probability_justification']) &&
                                                            !empty($residualinfo['residual_impact_justification']) &&
                                                            !empty($residualinfo['residual_risk_score_value'])){ ?>
                                                <i class="check-residual icon-checkmark3 text-success"></i> Residual Risk Analysis</br>
                                                <?php } else { ?>
                                                <i class="check-residual icon-cross2 text-danger"></i> Residual Risk Analysis</br>
                                                <?php } } else { ?>
                                                <i class="check-residual icon-cross2 text-danger"></i> Residual Risk Analysis</br>
                                                <?php } ?>
                                                <i class="check-acceptance icon-cross2 text-danger"></i> Risk Acceptance </br>
                                            </td>
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
                                                    <li class="id-check-view" id="<?php echo $row['_id'];?>" riskid="<?php echo $row['riskid_name'];?>">
                                                        <button type="button" class="btn btn-default btn-xs">
                                                            <i class="icon-eye2"></i>
                                                        </button>
                                                    </li>
                                                    <li class="id-check-edit" id="<?php echo $row['_id'];?>" riskid="<?php echo $row['riskid_name'];?>">
                                                        <button type="button" class="btn btn-default btn-xs">
                                                            <i class="icon-database-edit2"></i>
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
                <div class="row" id="risk_analysis_record" style="display:none"> 
                    <div class="col-md-12"> 
                        <div class="panel panel-flat"> 
                            <div class="panel-heading"> 
                                <h6 class="panel-title"><b>Risk Analysis Record</b></h6> 
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
                                <div class="row"> 
                                    <div class="col-md-6"> 
                                        <div class="row" style="height: 180px;"> 
                                            <div class="col-md-3"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Risk ID</label>                                                     
                                                    <div id="risk_name"> 
                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                            <div class="col-md-9"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput41">Risk Description</label>                                                     
                                                    <div class="risk-description">
                                                        
                                                        <p>Te esse philosophia sit, laudem invidunt conclusionemque te eam, quo constituto sententiae et. Pro in inani laudem, in sed esse case mandamus. Id aeque splendide est. Cu est quem assum argumentum. Aliquando expetendis eu his, error appareat ne pri, no mel detracto lucilius oportere.</p> 
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                        <div class="row"> 
                                            <div class="col-md-3"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Exposure ($)</label>                                                     
                                                    <input type="text" class="form-control exposure"> 
                                                </div>                                                 
                                            </div>                                             
                                            <div class="col-md-9"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput57">Exposure Calculation/ Justification </label>                                                     
                                                    <textarea class="form-control elastic exposure-calculation" rows="1"></textarea>                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                    </div>                                     
                                    <div class="col-md-3"> 
                                        <div class="main_content"> 
											<div class="block text-uppercase text-center">Inherent Risk Profile</div>
                                            <div class="block_container active"> 
                                                <div class="blockbox"> 
                                                    <div id="graph_container"></div>                                                     
                                                </div>                                                 
                                                <div id="x_axix"></div>                                                 
                                                <div id="y_axix"></div>                                                 
                                            </div>                                             
                                                                                         
                                            <div class="y-title">Impact</div>                                             
                                        </div> <div class="x-title">Probability</div>                                        
                                    </div>                                     
                                    <div class="col-md-3"> 
                                        <div class="main_content">
											<div class="block text-uppercase text-center">Residual Risk Profile</div> 
                                            <div class="block_container active"> 
                                                <div class="blockbox"> 
                                                    <div id="graph_container1"></div>                                                     
                                                </div>                                                 
                                                <div id="x_axix1"></div>                                                 
                                                <div id="y_axix1"></div>                                                 
                                            </div>                                             
                                                                                       
                                            <div class="y-title">Impact</div>                                             
                                        </div>  <div class="x-title">Probability</div>                                         
                                    </div>                                     
                                </div>                                 
                                <div class="row" data-pg-name="Row : Inherent Risk"> 
                                    <div class="block_custome" id="accordion"> 
                                        <a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#collapse1">Inherent/ Gross Risk</a> 
                                        <div id="collapse1" class="panel_body panel-collapse collapse in"> 
                                    <div class="col-md-6"> 
                                        <div class="row"> 
                                            <div class="col-md-3"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Inherent Probability</label>                                                     
                                                    <div class="form-group" id="auto_inherent_probability"> 
                                                        <select id="formInput41" class="inherent-probability bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option>
                                                        <?php
                                                            for ($i=0; $i < count($inherent_title); $i++) {?> 
                                                            <option value="<?php echo Removeescape($inherent_title[$i]);?>||<?php echo $inherent_background_color[$i];?>" inherent-value="<?php echo $inherent_value[$i]; ?>" data-content="<div class=<?php echo $inherent_background_color[$i];?>><?php echo $inherent_title[$i];?><br><p class=hid><?php echo $inherent_content[$i];?></p></div>" class="<?php echo $inherent_background_color[$i];?>"></option>
                                                        <?php }
                                                        ?>
                                 
                                                        </select>                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                            <div class="col-md-9"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput57">Inherent Probability Justification</label>                                                     
                                                    <input type="text" class="inherent-probability-justification form-control" placeholder="">                                              
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                        <div class="row"> 
                                            <div class="col-md-3"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Inherent Impact</label>                                                     
                                                    <div class="form-group" id="auto_inherent_impact"> 
                                                        <select id="formInput41" class="inherent-impact bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option>                                                             
                                                            
                                                        <?php
                                                            for ($i=0; $i < count($inherent_impact_title); $i++) {?> 
                                                            <option value="<?php echo Removeescape($inherent_impact_title[$i]);?>||<?php echo $inherent_impact_background_color[$i];?>" inherent-impact-value="<?php echo $inherent_impact_value[$i]; ?>" data-content="<div class=<?php echo $inherent_impact_background_color[$i];?>><?php echo $inherent_impact_title[$i];?><br><p class=hid><?php echo $inherent_impact_content[$i];?></p></div>" class="<?php echo $inherent_impact_background_color[$i];?>"></option>
                                                        <?php }
                                                        ?>
                                                                                                
                                                        </select>                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                            <div class="col-md-9"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput57">Inherent Impact Justification</label>                                                     
                                                    
                                                     <input type="text" class="form-control inherent-impact-justification" placeholder="">                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                        <div class="row"> 
                                            <div class="col-md-3"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Inherent Risk Score</label>                                                     
                                                    <div class="form-group" id="auto_calculator_inherent"> 
                                                        <select id="formInput41" class="inherent-risk-score bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option> 
                                                            <?php
                                                                for ($i=0; $i < count($inherent_score_title); $i++) {?> 
                                                                <option value="<?php echo Removeescape($inherent_score_title[$i]);?>||<?php echo $inherent_score_background_color[$i];?>" score-value="<?php echo $inherent_score_value[$i]; ?>" data-content="<div class=<?php echo $inherent_score_background_color[$i];?>><?php echo $inherent_score_title[$i];?><br><p class=hid><?php echo $inherent_score_content[$i];?></p></div>" class="<?php echo $inherent_score_background_color[$i];?>"></option>
                                                            <?php }
                                                            ?>
                                         
                                                        </select>                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                            <div class="col-md-9"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput57">Inherent Risk Description</label>                                                     
                                                    <textarea class="form-control elastic inherent-risk-score-value" rows="1"></textarea>                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                    </div>                                     
                                    <div class="col-md-6"> 
                                        Inherent Risk: The risk that an activity would pose if no controls or other mitigating factors were in place (the gross risk or risk before controls)
                                        Lorem ipsum dolor sit amet, an duo euismod perfecto sententiae, ut est commune philosophia. Est dicunt intellegat te, vide electram ei vim. Ea quo aperiam repudiandae, mutat eripuit scriptorem eu sit, quod urbanitas disputationi sea no. Nec feugiat maiorum invidunt ei. Graeco verear albucius cu pro, ius assum singulis expetendis in, illud legere at nec.
                                        In cum habeo gloriatur honestatis. Nostro volutpat ei eum, adipisci voluptatum at nec, mollis quaeque ius ex. Sit an verear eleifend, mei falli congue blandit et, sint senserit deterruisset at sit. Ad mentitum maluisset sea.
                                        Ei illud elitr est, et his antiopam posidonium. Mei id munere graece docendi, ne oratio similique necessitatibus sed. Per id suas facilis, fugit altera euismod has ex. Eu ferri perfecto accusata duo, partem latine tacimates et vel, vim erant dolor ex. Vitae atomorum ne vix, ei sed zril fierent cotidieque.
                                    </div>                                     
                                    <div class="col-md-6"> 
                                        Placeholder
                                    </div>                                     
                                    <div class="clearfix"></div>                                             
                                        </div>                                         
                                    </div>     
                                </div>                                 
                                <div id="control_section">
                                    <div class="row row-section-select" id="default_control" data-pg-name="Row : Controls"> 
                                        <div class="block_custome" id="accordion"> 
                                            <a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#collapse2">Control Blank</a> 
                                            <div id="collapse2" class="panel_body panel-collapse collapse in"> 
                                                <div class="row"> 
                                                    <div class="col-md-6"> 
                                                        <div class="row"> 
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Control ID</label>                                                                 
                                                                    <input type="text" class="form-control control-id"> 
                                                                </div>                                                             
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Control Type</label>                                                                 
                                                                    <div class="form-group"> 
                                                                        <select id="formInput41" class="control-type bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option> 
                                                                            <?php for ($i=0; $i < count($control_type_title); $i++) {?> 
                                                                                <option value="<?php echo $control_type_title[$i];?>"><?php echo $control_type_title[$i];?></option>
                                                                            <?php } ?>                                          
                                                                                                                                       
                                                                        </select>                                                                     
                                                                    </div>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-9"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput57">Control Description</label>                                                                 
                                                                    <a data-toggle="modal" data-target="#modal_control" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a> 
                                                                    <textarea class="control-description form-control elastic " rows="5"></textarea>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                        </div>                                                     
                                                    </div>                                                 
                                                    <div class="col-md-6"> 
                                                        <div class="row"> 
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Control Strategy</label>                                                                 
                                                                    <div class="form-group"> 
                                                                        <select id="formInput41" class="control-strategy bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option>
                                                                             <?php for ($i=0; $i < count($control_strategy_values); $i++) {?> 
                                                                                <option value="<?php echo $control_strategy_values[$i];?>"><?php echo $control_strategy_values[$i];?></option>
                                                                            <?php } ?>  

                                                                                                                                                
                                                                        </select>                                                                     
                                                                    </div>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-9"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput57">Control Strategy Justification</label>             
                                                                    <textarea class="form-control elastic control-strategy-justification" rows="1">
                                                                    </textarea>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                        </div>                                                     
                                                        <div class="row"> 
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Post Control Probability</label>                                                                 
                                                                    <div class="form-group auto-post-control-probability"> 
                                                                        <select id="formInput41" class="post-control-probability bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option> 

                                                                             <?php
                                                                                for ($i=0; $i < count($post_control_title); $i++) {?> 
                                                                                <option value="<?php echo Removeescape($post_control_title[$i]);?>||<?php echo $post_control_background_color[$i];?>" post-value="<?php echo $post_control_value[$i]; ?>" data-content="<div class=<?php echo $post_control_background_color[$i];?>><?php echo $post_control_title[$i];?><br><p class=hid><?php echo $post_control_content[$i];?></p></div>" class="<?php echo $post_control_background_color[$i];?>"></option>
                                                                            <?php }
                                                                            ?>                                                                        
                                                                                                                                               
                                                                        </select>                                                                     
                                                                    </div>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Post Control Impact</label>                                                                 
                                                                    <div class="form-group auto-post-control-impact" > 
                                                                        <select id="formInput41" class="post-control-impact bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option>

                                                                             <?php
                                                                                for ($i=0; $i < count($post_control_impact_title); $i++) {?> 
                                                                                <option value="<?php echo Removeescape($post_control_impact_title[$i]);?>||<?php echo $post_control_impact_background_color[$i];?>" post-impact-value="<?php echo $post_control_impact_value[$i]; ?>" data-content="<div class=<?php echo $post_control_impact_background_color[$i];?>><?php echo $post_control_impact_title[$i];?><br><p class=hid><?php echo $post_control_impact_content[$i];?></p></div>" class="<?php echo $post_control_impact_background_color[$i];?>"></option>
                                                                            <?php }
                                                                            ?>                                                                 
                                                                                
                                                                        </select>                                                                     
                                                                    </div>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Post Control Risk</label>                                                                 
                                                                    <div class="form-group auto-calculator-post"> 
                                                                        <select id="formInput41" class="post-control-risk bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option> 

                                                                             <?php
                                                                                for ($i=0; $i < count($post_control_score_title); $i++) {?> 
                                                                                <option value="<?php echo Removeescape($post_control_score_title[$i])?>||<?php echo $post_control_score_background_color[$i];?>" post-score-value="<?php echo $post_control_score_value[$i]; ?>" data-content="<div class=<?php echo $post_control_score_background_color[$i];?>><?php echo $post_control_score_title[$i];?><br><p class=hid><?php echo $post_control_score_content[$i];?></p></div>" class="<?php echo $post_control_score_background_color[$i];?>"></option>
                                                                            <?php }
                                                                            ?>                                                                     
                                                                                                                                                
                                                                        </select>                                                                     
                                                                    </div>                                                                 
                                                                </div>                                                             
                                                            </div>
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Post Control Risk Score</label>                                                                 
                                                                    <div class="form-group"> 
                                                                        <input type="text" class="form-control post-control-risk-score-value" > 
                                                                    </div>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                        </div>                                                     
                                                    </div>                                                 
                                                </div>                                             
                                                <div class="row" data-pg-name="Row : Controls 2"> 
                                                    <div class="col-md-6"> 
                                                        <div class="row"> 
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Control Cost Capex ($)</label>                                                                 
                                                                    <input type="text" class="form-control control-cost-capex" > 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-9"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput57">Capex Cost Calculation/ Justification </label>                                                                 
                                                                    <textarea class="form-control elastic capex-cost-calculation-value" rows="1">
                                                                    </textarea>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                        </div>                                                     
                                                    </div>                                                 
                                                    <div class="col-md-6"> 
                                                        <div class="row"> 
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Control Status</label>                                                                 
                                                                    <div class="form-group"> 
                                                                        <select id="formInput41" class="control-status bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option>

                                                                            <?php for ($i=0; $i < count($control_status_values); $i++) {?> 
                                                                                <option value="<?php echo $control_status_values[$i]?>"><?php echo $control_status_values[$i]?></option>
                                                                            <?php } ?>                                                                     
                                                                                                                                                
                                                                        </select>                                                                     
                                                                    </div>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Control Completion Date</label>                                                                 
                                                                    <div class="form-group">
                                                                       
                                                                        <input type="text" class="form-control pickadate-strings control-completion-date" placeholder="">
                                                                    </div>                                                             
                                                                </div>
                                                             
                                                            </div>                                                         
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Review Frequency</label>                                                                 
                                                                    <div class="form-group"> 
                                                                        <select id="formInput41" class="review-frequency bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option>                                                                         
                                                                           <?php for ($i=0; $i < count($review_frequency_values); $i++) {?> 
                                                                                <option value="<?php echo $review_frequency_values[$i]; ?>"><?php echo $review_frequency_values[$i]; ?></option>
                                                                              
                                                                            <?php } ?>                                                                    
                                                                        </select>                                                                     
                                                                    </div>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Control Next Review</label>                                                                 
                                                                    <div class="form-group">
                                                                       
                                                                        <input type="text" class="form-control pickadate-strings control-next-review" placeholder="">
                                                                    </div>                                                                     
                                                                </div>                                                             
                                                            </div>                                                         
                                                        </div>                                                     
                                                    </div>                                                 
                                                </div>                                             
                                                <div class="row" data-pg-name="Row : Controls 2"> 
                                                    <div class="col-md-6"> 
                                                        <div class="row"> 
                                                            <div class="col-md-3"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput35">Control Cost Opex ($)</label>                                                                 
                                                                    <input type="text" class="form-control control-cost-opex" > 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-9"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput57">Opex Cost Calculation/ Justification </label>                                                                 
                                                                    <textarea class="form-control elastic opex-cost-calculation-justification" rows="1"></textarea>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                        </div>                                                     
                                                    </div>                                                 
                                                    <div class="col-md-6"> 
                                                        <div class="row"> 
                                                            <div class="col-md-6"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput57">Control Owner</label>                                                                 
                                                                    <a data-toggle="modal" data-target="#modal_owner" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a> 
                                                                    <textarea class="form-control elastic owner-value" rows="1"></textarea>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                            <div class="col-md-6"> 
                                                                <div class="form-group"> 
                                                                    <label class="control-label" for="formInput57">Control Reviewer</label>                                                                 
                                                                    <a data-toggle="modal" data-target="#modal_reviewer" style="color:#333333;"><i class="icon-plus-circle2 pull-right"></i></a> 
                                                                    <textarea class="form-control elastic reviewer-value" rows="1"></textarea>                                                                 
                                                                </div>                                                             
                                                            </div>                                                         
                                                        </div>                                                     
                                                    </div>                                                 
                                                </div>                                                                                          
                                                <div class="clearfix"></div>                                             
                                            </div>                                         
                                        </div>                                     
                                    </div>
                                </div>
                                
                                
                                
                                
                                
                                <div class="row" data-pg-name="Row : Residual Risk"> 
                                    <div class="block_custome" id="accordion"> 
                                        <a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#collapse4">Residual/ Net Risk</a> 
                                        <div id="collapse4" class="panel_body panel-collapse collapse in"> 
                                    <div class="col-md-6"> 
                                        <div class="row"> 
                                            <div class="col-md-3"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Residual Probability</label>                                                     
                                                    <div class="form-group" id="auto_residual_probability"> 
                                                        <select  class="residual-probability bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option> 
                                                            <?php
                                                                for ($i=0; $i < count($inherent_title); $i++) {?> 
                                                                <option value="<?php echo Removeescape($inherent_title[$i]);?>||<?php echo $inherent_background_color[$i];?>" inherent-value="<?php echo $inherent_value[$i]; ?>" data-content="<div class=<?php echo $inherent_background_color[$i];?>><?php echo $inherent_title[$i];?><br><p class=hid><?php echo $inherent_content[$i];?></p></div>" class="<?php echo $inherent_background_color[$i];?>"></option>
                                                            <?php }
                                                            ?>                                                           
                                                                                                                        
                                                        </select>                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                            <div class="col-md-9"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput57">Residual Probability Justification</label>                                                     
                                                    <input type="text" class="form-control residual-probability-justification" placeholder="">                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                        <div class="row"> 
                                            <div class="col-md-3"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Residual Impact</label>                                                     
                                                    <div class="form-group" id="auto_residual_impact"> 
                                                        <select  class="residual-impact bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option> 

                                                            <?php
                                                                for ($i=0; $i < count($inherent_impact_title); $i++) {?> 
                                                                <option value="<?php echo Removeescape($inherent_impact_title[$i]);?>||<?php echo $inherent_impact_background_color[$i];?>" inherent-impact-value="<?php echo $inherent_impact_value[$i]; ?>" data-content="<div class=<?php echo $inherent_impact_background_color[$i];?>><?php echo $inherent_impact_title[$i];?><br><p class=hid><?php echo $inherent_impact_content[$i];?></p></div>" class="<?php echo $inherent_impact_background_color[$i];?>"></option>
                                                            <?php }
                                                            ?>                                                                 
                                                                                                                        
                                                        </select>                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                            <div class="col-md-9"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput57">Residual Impact Justification</label>                                                     
                                                    
                                                    <input type="text" class="form-control residual-impact-justification" placeholder="">                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                        <div class="row"> 
                                            <div class="col-md-3"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput35">Residual Risk Score</label>                                                     
                                                    <div class="form-group" id="auto_calculator_residual"> 
                                                        <select  class="residual-risk-score bootstrap-select bgClass" data-live-search="true" data-width="100%"> 
                                                            <option data-content="<div class=transparent>Select Field</div>" class='transparent'>Select Field</option> 

                                                            <?php
                                                                for ($i=0; $i < count($inherent_score_title); $i++) {?> 
                                                                <option value="<?php echo Removeescape($inherent_score_title[$i]);?>||<?php echo $inherent_score_background_color[$i];?>" score-value="<?php echo $inherent_score_value[$i]; ?>" data-content="<div class=<?php echo $inherent_score_background_color[$i];?>><?php echo $inherent_score_title[$i];?><br><p class=hid><?php echo $inherent_score_content[$i];?></p></div>" class="<?php echo $inherent_score_background_color[$i];?>"></option>
                                                            <?php }
                                                            ?>                                                           
                                                                                                                        
                                                        </select>                                                         
                                                    </div>                                                     
                                                </div>                                                 
                                            </div>                                             
                                            <div class="col-md-9"> 
                                                <div class="form-group"> 
                                                    <label class="control-label" for="formInput57">Residual Risk Description</label>                                                     
                                                    <textarea class="form-control elastic residual-risk-score-value" rows="1"></textarea>                                                     
                                                </div>                                                 
                                            </div>                                             
                                        </div>                                         
                                    </div>                                     
                                    <div class="col-md-6"> 
                                        Inherent Risk: The risk that an activity would pose if no controls or other mitigating factors were in place (the gross risk or risk before controls)
                                        Lorem ipsum dolor sit amet, an duo euismod perfecto sententiae, ut est commune philosophia. Est dicunt intellegat te, vide electram ei vim. Ea quo aperiam repudiandae, mutat eripuit scriptorem eu sit, quod urbanitas disputationi sea no. Nec feugiat maiorum invidunt ei. Graeco verear albucius cu pro, ius assum singulis expetendis in, illud legere at nec.
                                        In cum habeo gloriatur honestatis. Nostro volutpat ei eum, adipisci voluptatum at nec, mollis quaeque ius ex. Sit an verear eleifend, mei falli congue blandit et, sint senserit deterruisset at sit. Ad mentitum maluisset sea.
                                        Ei illud elitr est, et his antiopam posidonium. Mei id munere graece docendi, ne oratio similique necessitatibus sed. Per id suas facilis, fugit altera euismod has ex. Eu ferri perfecto accusata duo, partem latine tacimates et vel, vim erant dolor ex. Vitae atomorum ne vix, ei sed zril fierent cotidieque.
                                </div>                                     
                                    <div class="col-md-6"> 
                                        Placeholder
                                    </div>                                     
                                    <div class="clearfix"></div>                                             
                                        </div>                                         
                                    </div>     
                                </div>  
                                
                                
                                
                                
                                
                                  <div class="row" data-pg-name="Row : Additional Data"> 
                                    <div class="block_custome" id="accordion"> 
                                        <a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#collapse5">Additional Data</a> 
                                        <div id="collapse5" class="panel_body panel-collapse collapse in"> 
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
                                                        <div class="col-md-8">
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
                                        </div>                                         
                                    </div>     
                                </div>  
                                

                                <div class="row" data-pg-name="Row : Risk Acceptance"> 
                                    <div class="block_custome" id="accordion"> 
                                        <a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#collapse6">Risk Acceptance</a> 
                                        <div id="collapse6" class="panel_body panel-collapse collapse in"> 
                                            This is Risk Acceptance section.
                                        </div>                                         
                                    </div>     
                                </div>  
                                <div class="row" data-pg-name="Row : Alerts"> 
                                    <div class="block_custome" id="accordion"> 
                                        <a data-toggle="collapse" class="block-title" data-parent="#accordion" href="#collapse7">Alerts</a>
                                        <div id="collapse7" class="panel_body panel-collapse collapse in"> 
                                            This is Alerts section.
                                        </div>                                         
                                    </div>     
                                </div>  
                                
                                
                                
                                
                                
                                
                                
                                
                                
                                <div class="row">
									<div class="form-group"> 
										<button type="button" id="save_record" class="btn btn-default pull-right" style="display: none;">Save Record
                                        </button>
										<button type="button" id="add_another_control_row_record" class="btn btn-default pull-right" style="display: none;">Add Another Control Row Record</button>  
									</div>   
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
            <div id="modal_control" class="modal fade"> 
                <div class="modal-dialog modal-lg"> 
                    <div class="modal-content"> 
                        <div class="modal-header"> 
                            <button type="button" class="close" data-dismiss="modal">&times;</button>                             
                            <h5 class="modal-title">Control Knowledgebase</h5> 
                        </div>                         
                        <div class="modal-body"> 
                            <div class="row"> 
                                <div class="col-md-12"> 
                                    <div class="form-group"> 
                                        <label class="control-label" for="formInput41">Control Category</label>                                         
                                        <select  class="control-category bootstrap-select" data-live-search="true" data-width="100%"> 
                                            
                                            <?php for ($i=0; $i < count($control_category[0]); $i++) { ?>
                                                <option><?php echo $control_category[0][$i]; ?></option>
                                            <?php } ?>
                                             
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                            <div class="row"> 
                                <div class="col-md-12"> 
                                    <div class="form-group"> 
                                        <label class="control-label" for="formInput41">Controls</label>                                         
                                        <select id="control_category_value" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            

                                                                               
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="modal-footer"> 
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>                             
                            <button type="button" class="control-category-modal-insert btn btn-default">Insert</button>                             
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
                                        <select  class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            <option>Legal and Regulatory</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Strategic</option>                                             
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                            <div class="row"> 
                                <div class="col-md-12"> 
                                    <div class="form-group"> 
                                        <label class="control-label" for="formInput41">Vulnerability</label>                                         
                                        <select  class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            <option>Legal and Regulatory</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Operational lorem dfsf  sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sd sdf df sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf 444 fdg sdfg sdfg sdfg sdfg sdfg sdfg sdfgsdfg sdfg sdfg 55 dfadf gsdfg sfdg s55</option>                                             
                                            <option>Strategic</option>                                             
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="modal-footer"> 
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>                             
                            <button type="button" class="btn btn-default">Insert</button>                             
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
                                        <select  class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            <option>Legal and Regulatory</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Strategic</option>                                             
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                            <div class="row"> 
                                <div class="col-md-12"> 
                                    <div class="form-group"> 
                                        <label class="control-label" for="formInput41">Impact</label>                                         
                                        <select  class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            <option>Legal and Regulatory</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Operational lorem dfsf  sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sd sdf df sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf 444 fdg sdfg sdfg sdfg sdfg sdfg sdfg sdfgsdfg sdfg sdfg 55 dfadf gsdfg sfdg s55</option>                                             
                                            <option>Strategic</option>                                             
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="modal-footer"> 
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>                             
                            <button type="button" class="btn btn-default">Insert</button>                             
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
                                        <select  class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            <option>Legal and Regulatory</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Strategic</option>                                             
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                            <div class="row"> 
                                <div class="col-md-12"> 
                                    <div class="form-group"> 
                                        <label class="control-label" for="formInput41">Impact</label>                                         
                                        <select  class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            <option>Legal and Regulatory</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Operational</option>                                             
                                            <option>Operational lorem dfsf  sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sd sdf df sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf sdf 444 fdg sdfg sdfg sdfg sdfg sdfg sdfg sdfgsdfg sdfg sdfg 55 dfadf gsdfg sfdg s55</option>                                             
                                            <option>Strategic</option>                                             
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="modal-footer"> 
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>                             
                            <button type="button" class="btn btn-default">Insert</button>                             
                        </div>                         
                    </div>                     
                </div>                 
            </div>             
            <!-- /basic modal -->             
            <!-- Basic modal -->             
            <div id="modal_owner" class="modal fade"> 
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
                                        <select id="control_owner" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            
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
                                        <select id="control_owner_value" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                    
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="modal-footer"> 
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>                             
                            <button type="button" class="control-owner-insert btn btn-default">Insert</button>                             
                        </div>                         
                    </div>                     
                </div>                 
            </div> 

             <div id="modal_reviewer" class="modal fade"> 
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
                                        <select id="control_reviewer" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                            
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
                                        <select id="control_reviewer_value" class="bootstrap-select" data-live-search="true" data-width="100%"> 
                                                    
                                        </select>                                         
                                    </div>                                     
                                </div>                                 
                            </div>                             
                        </div>                         
                        <div class="modal-footer"> 
                            <button type="button" class="btn btn-link" data-dismiss="modal">Close</button>                             
                            <button type="button" class="control-reviewer-insert btn btn-default">Insert</button>                             
                        </div>                         
                    </div>                     
                </div>                 
            </div>             
            <!-- /basic modal -->             
            <style type="text/css"> 
.bootstrap-select.btn-group .dropdown-menu > li > a .text {
    white-space: normal;
}
button.btn.btn-default.pull-right:last-child {
    margin-right: 10px;
}
button.btn.dropdown-toggle.btn-default:focus,button.btn.dropdown-toggle.btn-default:hover,.dropdown-menu > li > a:focus,.dropdown-menu > li > a:hover,
.btn-group.open .dropdown-toggle.btn-default {
    background: transparent;
	box-shadow:none;
}

</style>             
            <!-- /page container -->             
            <script type="text/javascript" src="assets/js/plot.js"></script>             
    </body>     
</html>
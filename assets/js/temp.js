global_post_control_risk
global_post_control_impact
global_post_control_probability
global_review_frequency
global_control_status
global_control_strategy
global_control_type

getContolType();
getContolStrategy();
getContolStatus();
getReviewFrequency();
getPostControlProbability();
getPostControlImpact();
getPostControlRisk();

control-strategy
post-control-probability
post-control-impact
post-control-risk
control-status
review-frequency

id="control_id"
textarea: control-description
select-box : control-type
textarea :control-cost-capex
textarea :capex-cost-calculation-value
tesxtarea: control-cost-opex
tesxtarea :opex-cost-calculation-justification
select-box : control-strategy
textarea : control-strategy-justification
select-box : post-control-probability
select-box : post-control-impact
select-box : post-control-risk

textarea : post-control-risk-score-value

select-box : control-status
datapicker : control-completion-date
select-box : review-frequency
datapicker : control-next-review
textarea : owner-value
textarea : reviewer-value

var control_id ;
var control_description;
var control_type;
var control_cost_capex;
var capex_cost_calculation_value;
var control_cost_opex;
var opex_cost_calculation_justification;

var control_strategy;
var control_strategy_justification;
var post_control_probability;
var post_control_impact;
var post_control_risk;
var post_control_risk_score_value;
var control_status;
var control_completion_date;
var review_frequency;
var control_next_review;
var owner_value;
var reviewer_value;

control_id = $('#control_id').val();
control_description = $('.control-description').val();
control_type = $('.control-type').val();
control_cost_capex = $('.control-cost-capex').val();
capex_cost_calculation_value = $('.capex-cost-calculation-value').val();
control_cost_opex = $('.control-cost-opex').val();
opex_cost_calculation_justification = $('.opex-cost-calculation-justification').val();
control_strategy = $('.control-strategy').val();
control_strategy_justification = $('.control-strategy-justification').val();
post_control_probability = $('.post-control-probability').val();
post_control_impact = $('.post-control-impact').val();
post_control_risk = $('.post-control-risk').val();
post_control_risk_score_value = $('.post-control-risk-score-value').val();
control_status = $('.control-status').val();
control_completion_date = $('.control-completion-date').val();
review_frequency = $('.review-frequency').val();
control_next_review = $('.control-next-review').val();
owner_value = $('.owner-value').val();
reviewer_value = $('.reviewer-value').val();
identifyId = $(this).attr('id');

http://37.60.233.209/~voxomax/


(function process(/*RESTAPIRequest*/ request, /*RESTAPIResponse*/ response ) {

	var gr, data, slackActionData, slackCmdData, cmd, actionData;
	slackActionData = request.queryParams.payload;
	slackCmdData = request.queryParams;

	// slack action data
	if (slackActionData){
		actionData = JSON.parse(slackActionData);
		cmd = actionData.type;
		getSlackPayload(actionData);
		return;
	}
	// slack command data
	if(slackCmdData) {
		gs.info(slackCmdData);
		cmd = slackCmdData.command.toString();
		getSlackPayload(slackCmdData);
		return;
	}

	function getSlackPayload(payloadType){
		gr = new GlideRecord('x_174545_slackcomm_handles_slack_message');
		data = JSON.stringify(payloadType);
		gr.initialize();
		gr.slack_payload = data;
		gr.u_slack_command = cmd;
		gr.insert();
	}
	response.setStatus(200);
})(request, response);

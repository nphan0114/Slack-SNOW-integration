(function process(g_request, g_response, g_processor) {
	//gs.getSession().impersonate('admin');
	//var app = "slack slash";
	var tablename = 'u_slack_commands';
	//var token = "cEHGvJkzJQO5kqPtqGhInfGH";



	var record = new GlideRecord(tablename);
	//if(g_request.getParameter('token') == token) {
	var urlParamList = g_request.getParameterNames();
	gs.info(urlParamList);
// 	while(urlParamList.hasMoreElements()){
// 		var param = urlParamList.nextElement();
// 		var value = g_request.getParameter(param);
// 		gs.info("Param "+param + " value "+value);
// 		//gs.info("value "+value);
// 		//record.setValue(formatToSNStandards(param),value);
// 	}

// 	var urlheaderList = g_request.getHeaderNames();
// 	while(urlheaderList.hasMoreElements()){
// 		var header = urlheaderList.nextElement();
// 		var headerValue = g_request.getHeader(header);
// 		record.setValue(formatToSNStandards(header),headerValue);
// 	}
	record.insert();
	//} else {
	//	gs.log("Un-authorized token! Request cancelled.");
	//	return false;
	//}
	// Add your code here
	g_response.setStatus(200);

})(g_request, g_response, g_processor);

function formatToSNStandards(string){
	string=string.replace("-","_");
	return "u_"+string;
}

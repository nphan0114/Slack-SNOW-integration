var SlackMessage = Class.create();

SlackMessage.prototype = {
    'initialize': function() {
//         if (gs.getProperty('slack_message.default_icon_url') != '') {
//             this.payload.icon_url = gs.getProperty('slack_message.default_icon_url');
//         }
//         else if (gs.getProperty('slack_message.default_icon_emoji') != '') {
//             this.payload.icon_emoji = gs.getProperty('slack_message.default_icon_emoji');
//         }
    },

    'send': function (text, channel) {
        // Set the text and channel (or fall back to defaults)
        this.payload.text = text || this.payload.text;
        this.payload.channel = channel || this.payload.channel;

        // Encode the payload as JSON
        var SNJSON = JSON; // Workaround for JSLint warning about using JSON as a constructor
        var myjson = new SNJSON();
        var encoded_payload = myjson.encode(this.payload);

        // Create and send the REST Message
        var msg = new sn_ws.RESTMessageV2();
		msg.setEndpoint(this.endpoint);
		msg.setHttpMethod(this.method);
		msg.setRequestBody(encoded_payload);
		var res = msg.execute();
		return res;
    },

    'endpoint': gs.getProperty('slack_message.default_endpoint'),
    'method': 'post',
    'payload': {
        'channel': gs.getProperty('slack_message.default_channel'),
        'username': gs.getProperty('slack_message.default_username'),
        'text': '',
        'attachments': []
    },

    'type': 'SlackMessage'
};

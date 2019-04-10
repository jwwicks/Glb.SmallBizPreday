// JavaScript Document
// Load Google Search Library
//google.load("search", "1");
// Load Google Feed Library
//google.load("feeds", "1");

/*
function OnLoad(){
	var searchControl = new google.search.SearchControl();
	var searchOptions = new google.search.SearcherOptions();
	var smbSearch = new google.search.WebSearch();
	var csrSearch = new google.search.WebSearch();
	var sbtSearch = new google.search.WebSearch();
	
	searchOptions.setExpandMode(google.search.SearchControl.EXPAND_MODE_CLOSED);
	
	sbtSearch.setUserDefinedLabel("SmallBizThoughts");
	sbtSearch.setSiteRestriction("smallbizthoughts.com");
	searchControl.addSearcher(sbtSearch, searchOptions);
		
	smbSearch.setUserDefinedLabel("SMBBooks.com");
	smbSearch.setSiteRestriction("smbbooks.com");
	searchControl.addSearcher(smbSearch, searchOptions);
	
	csrSearch.setUserDefinedLabel("CloudServicesRoundtable.com");
	csrSearch.setSiteRestriction("cloudservicesroundtable.com");
	searchControl.addSearcher(csrSearch, searchOptions);
	
	searchControl.draw(document.getElementById("searchcontrol"));
	searchControl.execute("Cloud Services");
}

google.setOnLoadCallback(OnLoad);

function initsbtFeed(){
	var sbtFeed = new google.feeds.FeedControl();
	sbtFeed.addFeed("http://blog.smallbizthoughts.com/feeds/posts/default");
	sbtFeed.draw(document.getElementById("sbtFeed"));
	
	var csrFeed = new google.feeds.Feed("http://www.cloudservicesroundtable.com/cloud-services-roundtable-blog.feed?type=rss");
	csrFeed.load(function(result){
		if(!result.error){
			var container = document.getElementById("csrFeed");
			var lenFeed = result.feed.entries.length;
			for (var i =0; i < lenFeed; ++i){
				var entry = result.feed.entries[i];
				var attributes = ["title", "link", "publishedDate", "contentSnippet"];
				var lenAttr = attributes.length;
				for (var j =0; j < lenAttr; ++j){
					var div = document.createElement("div");
					div.appendChild(document.createTextNode(entry[attributes[j]]));
					container.appendChild(div);
				}
			}
		}
	});

}
google.setOnLoadCallback(initsbtFeed);

*/


$(document).ready(function(){
	var flashvars = {};
	var params = {};
	var attributes = {};
	attributes.id = "flashAlternative";
	params.wmode = "transparent";
	params.movie = "http://smbpreday.com/images/728x90_LeaderboardAd.swf";
	params.allowNetworking = "all";
	params.allowFullScreen = "false";
	params.allowscriptaccess = "always";
	swfobject.embedSWF("http://smbpreday.com/images/728x90_LeaderboardAd.swf", "flashAlternative", "728", "90", "8.0.0", "http://smbpreday.com/libs/expressInstall.swf", flashvars, params, attributes);
});


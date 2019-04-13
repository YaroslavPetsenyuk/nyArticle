var term = $(this).attr("data-name");
var queryURL ="https://api.nytimes.com/svc/search/v2/articlesearch.json?q=" + term + "&api-key=kWP7dYJR56taDTNsaasgnB3caqvojv6o";
console.log(queryURL);
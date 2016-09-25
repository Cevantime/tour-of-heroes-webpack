var HeroSearchService = ng.core.Class({
	constructor : [ng.http.Http, function(http){
		this.http = http;
		this.searchUrl = 'http://51.255.36.188/toh-server/?search=';
	}],

	search : function(term) {
		return this.http.get(this.searchUrl+encodeURIComponent(term)).map(function(rep){
			return rep.json().data;
		});
	}
});

module.exports = HeroSearchService;
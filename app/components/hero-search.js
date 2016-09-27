var HeroSearchService = require('../services/hero-search');
var subject = require('rxjs/Subject');
var observable = require('rxjs/Observable');

var HeroSearchComponent = ng.core.Component({
	selector: 'hero-search',
	templateUrl: 'templates/hero-search.html',
	styleUrls: ['styles/hero-search.css'],
	providers: [HeroSearchService]
}).Class({
	constructor : [
		HeroSearchService,
		ng.router.Router,
		function(heroSearchService, router) {
			this.heroSearchService = heroSearchService;
			this.router = router;
			this.heroes = [];
			this.searchTerms = new subject.Subject();
		}
	],
	
	search : function(term) {
		this.searchTerms.next(term);
	},
	
	gotoDetail : function(hero) {
		var link = ['/detail', hero.id];
		this.router.navigate(link);
	}
});


HeroSearchComponent.prototype.ngOnInit = function() {
	var those = this;
	this.heroes = this.searchTerms
		.debounceTime(300)
		.distinctUntilChanged()
		.switchMap(function(term){
			return term ? those.heroSearchService.search(term) : observable.Observable.of([]);
		})
		.catch(function(error) {
			console.log(error);
			return observable.Observable.of([]);
		});
	
};

module.exports = HeroSearchComponent;
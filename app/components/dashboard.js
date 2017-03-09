var HeroService = require('services/hero');

var DashboardComponent = ng.core.Component({
	selector: 'my-dashboard',
	templateUrl: 'templates/dashboard.html',
	styleUrls: [
		'styles/dashboard.css'
	]
}).Class({
	constructor: [HeroService, ng.router.Router, function (heroService, router) {
		this.heroService = heroService;
		this.router = router;
	}],
	gotoDetail: function (hero) {
		var link = ['/detail', hero.id];
		this.router.navigate(link);
	}
});

DashboardComponent.prototype.ngOnInit = function () {
	var those = this;
	this.heroService.getHeroes()
		.then(function (heroes) {
			console.log(heroes);
			those.heroes = heroes.slice(1, 5);
		});
};

module.exports = DashboardComponent;
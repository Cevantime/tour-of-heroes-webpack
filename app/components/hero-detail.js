var HeroService = require('services/hero');
var HeroDetailComponent =
		ng.core.Component({
			selector: 'my-hero-detail',
			templateUrl: 'templates/hero-detail.html',
			styleUrls: [
				'styles/hero-detail.css'
			]
		})
		.Class({
			constructor: [HeroService, ng.router.ActivatedRoute, function (heroService, route) {
					this.heroService = heroService;
					this.route = route;
					this.hero = null;
				}],
			goBack: function () {
				window.history.back();
			},
			save: function () {
				this.heroService.update(this.hero)
						.then(this.goBack);
			}
		});

HeroDetailComponent.prototype.ngOnInit = function () {
	var those = this;
	this.route.params.forEach(function (params) {
		var id = parseInt(params['id']);
		those.heroService.getHero(id).then(function (hero) {
			those.hero = hero;
		});
	});
}

module.exports = HeroDetailComponent;
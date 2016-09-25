var HeroService = require('../services/hero');

var HeroesComponent =
		ng.core.Component({
			selector: 'my-heroes',
			templateUrl: 'templates/heroes.html',
			styleUrls: [
				'styles/heroes.css'
			]
		})
		.Class({
			constructor: [HeroService, ng.router.Router, function (heroService, router) {
					this.title = 'Tour of Heroes';
					this.selectedHero = null;
					this.heroService = heroService;
					this.router = router;
					this.heroes = [];
				}],
			getHeroes: function () {
				var obj = this;
				this.heroService.getHeroes().then(function (heroes) {
					obj.heroes = heroes;
				});
			},
			onSelect: function (hero) {
				this.selectedHero = hero;
			},
			gotoDetail: function () {
				this.router.navigate(['detail', this.selectedHero.id]);
			},
			add: function (name) {
				name = name.trim();
				if (!name) {
					return;
				}
				var those = this;
				this.heroService.create(name)
					.then(function (hero) {
						those.heroes.push(hero);
						those.selectedHero = null;
					});
			},
			
			delete: function(hero) {
				var those = this;
				this.heroService.del(hero.id)
					.then(function(){
						those.heroes = those.heroes.filter(function(h){
							return h !== hero;
						});
						if(this.selectedHero === hero) {
							this.selectedHero = null;
						}
					});
			},
			
		});

HeroesComponent.prototype.ngOnInit = function () {
	this.getHeroes();
}

module.exports = HeroesComponent;
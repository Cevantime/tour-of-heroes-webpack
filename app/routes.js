var HeroesComponent = require('./components/heroes');
var HeroDetailComponent = require('./components/hero-detail');
var DashboardComponent = require('./components/dashboard');

var ROUTES = [
	{
		path: 'heroes',
		component: HeroesComponent
	},
	{
		path: 'dashboard',
		component: DashboardComponent
	},
	{
		path: '',
		redirectTo: '/dashboard',
		pathMatch: 'full'
	},
	{
		path: 'detail/:id',
		component: HeroDetailComponent
	}
];

module.exports = ng.router.RouterModule.forRoot(ROUTES);
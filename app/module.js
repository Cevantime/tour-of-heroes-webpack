var AppComponent = require('./components/app');
var HeroesComponent = require('./components/heroes');
var HeroDetailComponent = require('./components/hero-detail');
var DashboardComponent = require('./components/dashboard');
var HeroSearchComponent = require('./components/hero-search');

var HeroService = require('./services/hero');

var routing = require('./routes');

require('./rxjs-extensions');

module.exports =
	ng.core.NgModule({
		imports: [
			ng.platformBrowser.BrowserModule,
			ng.forms.FormsModule,
			ng.http.HttpModule,
			routing
		],
		declarations: [
			AppComponent,
			HeroesComponent,
			HeroDetailComponent,
			DashboardComponent,
			HeroSearchComponent
		],
		bootstrap: [AppComponent],
		providers: [HeroService]
	})
	.Class({
		constructor: function () {
			
		}
	});
	
var HeroService =
		ng.core.Class({
			constructor: [ng.http.Http, function (http) {
				this.http = http;
				this.heroesUrl = 'http://51.255.36.188/toh-server/';
				this.headers = new ng.http.Headers();
				this.headers.append('Content-Type', 'application/x-www-form-urlencoded');
			}],
			getHeroes: function () {
				return this.http.get(this.heroesUrl)
						.toPromise()
						.then(function (response) {
							return response.json().data
						})
						.catch(this.handleError);

			},
//		getHeroesSlowly: function () {
//			return new Promise(function (resolve) {
//				setTimeout(function () {
//					resolve(HEROES)
//				}, 2000)
//			});
//		},
			getHero: function (id) {
				return this.getHeroes().then(function (heroes) {
					return heroes.find(function (hero) {
						return hero.id == id;
					});
				});
			},
			handleError: function (error) {
				console.error('An error occurred', error); // for demo purposes only
				return Promise.reject(error.message || error);
			},
			update : function(hero) {
				var url = this.heroesUrl;
				console.log(encodeURIComponent(hero.name));
				var data ='id='+hero.id+'&name='+encodeURIComponent(hero.name);
				return this.http.post(url, data, {headers: this.headers})
						.toPromise()
						.then(function() {return hero;})
						.catch(this.handleError);
			},
			
			create : function(name) {
				var data = 'name='+encodeURIComponent(name);
				return this.http.post(this.heroesUrl, data, {headers : this.headers})
						.toPromise()
						.then(function(res){
							return res.json().data;
						})
						.catch(this.handleError);
			},
			
			del : function(id) {
				var url = this.heroesUrl+'?del='+id;
				return this.http.get(url, {headers: this.headers})
						.toPromise()
						.then(function() {
							return null;
						})
						.catch(this.handleError);
			} 
			
		});

module.exports = HeroService;

Tour of heroes version Webpack
===================
Ce projet a été réalisé dans le cadre de la formation Angular 2 des apprenants de l'école WebForce 3

Il s'agit grossièrement d'un portage en Ecmascript 5 (Javascript) du [tutoriel Tour of Heroes](https://angular.io/docs/ts/latest/tutorial/) de Google lequel offre une bonne initiation au monde d'Angular. À noter que le projet utilise Webpack pour la gestion des dépendances.

----------

Installation
---------------
L'installation du projet se fait en deux étapes

1. En ligne de commande, le placer dans le répertoire du projet.

    cd /chemin/vers/mon/répertoire

2. Installer les dépendances Javascript grâce à npm.

    npm install

3. Lancer le serveur de dev. Ceci aura pour effet de regrouper tout le code Javascript dans un seul fichier bundle/app.js, d'ouvrir une fenêtre dans le navigateur qui se rafraichira automatiquement à tout changement du code.

    npm start

Différences avec le tutoriel de Google
--------------------------------------------------

En plus du fait que cette version est écrite en Ecmascript et non en Typscript comme le tutoriel d'origine, plusieurs différences sont à noter avec ce dernier : 

 - La présence de webpack qui autorise la l'utilisation de la méthode *require()* pour appeler les dépendances du projet (bien plus pratique que l'inclusion à la main des dépendances dans le fichier index.html). L'usage de Webpack est d'ailleurs quasiment incontournable à partir du chapitre sur Http.
 - Le répertoire **/app** est divisé en plusieurs sous-dossiers (components, services, structs) ce qui permet de mieux s'organiser et d'éviter les noms à rallonge du style *app.component.js*
 - Les fichiers css et html sont systématiquement placés dans des répertoires respectivement nommés **/styles** et **/templates** et jamais dans les composants en eux-mêmes
 - Le chapitre sur le **Http** est abordé différemment dans cette version que dans celle d'origine puisque il fait appel à un serveur réel et non à un faux serveur ce qui change un peu le code. La raison de ce changement est que je n'ai pas encore réussi à faire fonctionner l'*api in memory web* d'Angular avec Webpack. Peut-être ce point évoluera-t-il à l'avenir mais rien n'est moins sûr !

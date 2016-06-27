var app = angular.module("MyApp", ["ngRoute"]);

app.config(function($routeProvider) {
    $routeProvider
    .when('/auteurs', {
        templateUrl : 'app/views/auteurs.html',
        controller : 'auteursController'
    })
    .when('/auteur/:id_auteur', {
        templateUrl : 'app/views/auteur.html',
        controller : 'auteurController'
    })
    .when('/auteur/formulaire/:id_auteur',{
      templateUrl : 'app/views/formulaire.html',
    controller : 'formController' 
    })
    .when('/auteurs/formulaire/addAuteur',{
      templateUrl : 'app/views/formulaire.html',
    controller : 'formController' 
    })	
   .otherwise({
        redirectTo : '/auteurs'
    })


})
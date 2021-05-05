var app = angular.module("myApp", ["ngRoute"]);
app.config(function($routeProvider) {
  $routeProvider
  .when("/", {
    templateUrl : "management.html",
  })
  .when("/form", {
    templateUrl : "form.html"
    });
});


angular.module('myapp', ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){

      $urlRouterProvider.otherwise("/home");

      $stateProvider
          .state('root', {
              abstract: true,
              url:''
          })
          .state('root.home', {
              url: '/home',
              templateUrl: 'views/home.html',
              onEnter: function(){
                  console.log("enter contacts.detail");
              }
          }).state('root.home.company', {
              url: '/company',
              templateUrl: 'views/company/companyPanel.html',
              //controller:'CompanyCtrl'
              onEnter: function(){
                  console.log("enter contacts.detail");
              }
          }).state('root.home.employee', {
              url: '/employee',
              templateUrl: 'views/employee/employeePanel.html',
              onEnter: function(){
                  console.log("enter contacts.detail");
              }
          });
    });

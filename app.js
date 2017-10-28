angular.module('myapp', ["ui.router"])
    .config(function($stateProvider, $urlRouterProvider){

			$stateProvider
			.state('root', {
				abstract: true,
				url:''
			})
      .state('root.home', {
				url: '/home',
				templateUrl: 'view/home.html',
        controller: 'homeCtrl',
			})

      .state('root.login', {
				url: '/login',
				templateUrl: 'view/login.html',
        controller: 'loginCtrl',
			})
      .state('root.signup', {
				url: '/signup',
				templateUrl: 'view/signup.html',
        controller:'loginCtrl',
			})
      .state('root.logout', {
				url: '/logout',
				templateUrl: 'view/logout.html',
			})

      .state('root.home.profile',{
        url:'/profile',
        templateUrl:'view/profile.html',
        controller:'loginCtrl',
      })

      .state('root.home.mycart',{
        url:'/mycart',
        templateUrl:'view/mycart.html',
        controller:'homeCtrl',
      })


      .state('root.home.product',{
        url:'/product',
        templateUrl:'view/product.html',
        controller:'productCtrl',
      })

			$urlRouterProvider.otherwise("/login");
    });

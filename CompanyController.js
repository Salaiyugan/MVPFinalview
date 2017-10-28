var CompanyAppModule = angular.module("CompanyApp", []);
 CompanyAppModule.controller("CompanyCtrl", function ($scope, CompanyService) {
   var init = function init() {
         employeeService.doGetCompanies(success);
        }

        function success(response){
          //window.localStorage.setItem("employees", response.data);
          //console.log(localStorage.getItem("employees"));
           window.localStorage.setItem('Comapnydata', JSON.stringify(response.data));
          $scope.Companies = JSON.parse(localStorage.getItem('Companydata'));
        }
        init();
 });

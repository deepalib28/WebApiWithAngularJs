//var app;
//(function () {
//    app = angular.module("APIModule",[])
//})();


//var app = angular
//    .module("APIModule", [])
//    .controller("APIController", ['$scope', '$http', function ($scope, $http) {
//        $http.get('http://localhost:61512/api/employee').then(function (response) {
//            $scope.employee = response.data;
//        });
//    }]);



//var app = angular
//    .module("APIModule", [])
//    .controller("APIController", function ($scope, $http) {
//        $http.get('http://localhost:61512/api/employee').then(function (response) {
//            $scope.employee = response.data;
//        });
//    });


var app = angular.module("APIModule", []);
   app.controller("APIController", function ($scope, $http) {
        $http.get('http://localhost:61512/api/employee').then(function (response) {
            $scope.employee = response.data;
       });

        $scope.save = function () {
            var emp = new Object();

            emp.Name = $scope.Name;
            emp.EmailId = $scope.EmailId;
            emp.EmployeeType = $scope.EmployeeType;
          

            $http.post('/api/employee/saveEmployee', emp).then(function () {
                alert("save")
            })
        }
   },
       

   );




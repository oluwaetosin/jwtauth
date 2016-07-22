var app = angular.module('app',[])
        .controller('myCrtl',function($scope,serverHandler){
            
          $scope.user = null;
         $scope. getUser = function(){
          serverHandler.getUser().
          success(function(data){
              $scope.user = data;
          })
          .error(function(){
              
          });
         }
        })
        .constant('apiUrl','http://localhost:3000')
        .factory('serverHandler',function($http,apiUrl){
                    var api = {};
                        api.getUser = function(){
                                           return $http.get(apiUrl+'/random-user');
                                         }
                        return api;
                         
                });



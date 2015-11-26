'use strict';

angular.module('authenticationService', [])
            
    .factory('Authenticate', function($http){
        return {
            createUser : function(user){
                return user;

            },
            login : function(user){
                return user;
            }
        }
    });
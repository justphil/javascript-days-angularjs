'use strict';

angular.module('myApp')
    .factory('dataHolder', function() {

	var members = [{id:0, name:'peter', email:'peter.rossbach@bee42.com'},
                        {id:1, name:'phil',  email:'philipp.tarasiewicz@googlemail.com'},
                        {id:2, name:'robin', email:'robinboehm@me.com'}
                       ];
    return {
            participants: function() {
                return members;
            },
            getParticipantById: function(id) {
            	return members[id];
            }
    	};
    });
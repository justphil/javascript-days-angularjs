'use strict';

angular.module('myApp')
    .factory('dataHolder', function() {

	var participants = [{id:0, name:'peter', email:'peter.rossbach@bee42.com'},
                        {id:1, name:'phil',  email:'philipp.tarasiewicz@googlemail.com'},
                        {id:2, name:'robin', email:'robinboehm@me.com'}
                       ];
    return {
            getParticipants: function() {
                return participants;
            }
    	};
    });
'use strict';

angular.module('myApp')
    .factory('dataHolder', function () {

        var members = {
            0: {name: 'peter', email: 'peter.rossbach@bee42.com'},
            1: {name: 'phil', email: 'philipp.tarasiewicz@googlemail.com'},
            2: {name: 'robin', email: 'robinboehm@googlemail.com'}
        };

        var idGenerator = 3;

        return {
            clear             : function () {
                angular.forEach(members, function (item, index) {
                    delete members[index];
                });
            },
            participants      : function () {
                return members;
            },
            getParticipantById: function (id) {
                return members[id];
            },
            add               : function (participant) {
                members[idGenerator++] = participant;
                return idGenerator;
            },
            editById          : function (id, participant) {
                members[id] = participant;
            },
            removeById        : function (id) {
                delete members[id];
            }
        };
    });

// $http
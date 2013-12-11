//'use strict';

angular.module('app')
    .directive('dragable',
    function ($swipe) {
        return {
            restrict: 'A',
            link    : function (scope, iElement) {
                var toggleActive = function () {
                    iElement.toggleClass('swipe-active');
                };

                $swipe.bind(element, {
                    'start' : function(coords, event){
                        console.log("start",coords.x, coords.y);
                    },
                    'move'  : function(coords, event){
                        console.log("move",coords.x, coords.y);
                    },
                    'end'   : function(coords, event){
                        console.log("end",coords.x, coords.y);
                    },
                    'cancel': function(event){
                        console.log("cancel",event);
                    }
                });


            }
        };
    });

(function(){
    'use strict';

    angular
        .module('optionThemeCtrl')
        .controller('mapController', mapController)

        mapController.$inject = ['mapThemeService', 'NgMap']
    /** @ngInject */
    function mapController(mapThemeService, NgMap){
        var mapCtrl = this;
        
        init();

        function init(){
            capturarMapa();
        }

        function capturarMapa(){
            NgMap.getMap().then(function(map) {
                map.setOptions(mapThemeService.getStyle('retro'));
                console.log(map.getCenter());
                console.log('markers', map.markers);
                console.log('shapes', map.shapes);
            });
        }
    }
}());
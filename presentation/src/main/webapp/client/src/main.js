(function (define, angular) {

    "use strict";

    define(
        [
            "start/StartModule",
            "movie/MovieModule",
            "util/StateManager"
        ],
        function (WelcomeModule, MovieModule, StateManager) {

            var appName = "moviex";
            var app = angular.module(appName,
                [
                    "ui.router",
                    "ui.bootstrap",
                    "ngResource",
                    "spring-data-rest",
                    WelcomeModule,
                    MovieModule
                ])
                .config(StateManager);

            return appName;
        }
    );
})(define, angular);

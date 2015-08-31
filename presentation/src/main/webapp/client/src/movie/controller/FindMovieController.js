(function (define) {

    "use strict";

    define(
        [],
        function () {
            var FindMovieController = function ($rootScope, $scope, $log, $state, Movie, SpringDataRestAdapter) {
                $rootScope.isLoaded = true;
                $scope.title = {};

                $scope.searchMovie = function (title) {
                    if (title) {
                        Movie()
                            .searchByTitle({title: title}, function (data) {
                                SpringDataRestAdapter
                                    .process(data)
                                    .then(function (processedResponse) {
                                        if (processedResponse) {
                                            $scope.movies = processedResponse._embeddedItems;
                                        }
                                    });
                            });
                    }
                };

                $scope.toDetails = function (selectedItem) {
                    $scope.selectedSearchResult = selectedItem;
                    $state.go('root.find-movie.details', {movieLink: encodeURIComponent(selectedItem._links.movie.href)});
                };

                $scope.findMovie = function () {
                    $state.go("root.find-movie.search-result", {title: $scope.title.value}, {reload: true});
                };
            };
            return ["$rootScope", "$scope", "$log", "$state", "Movie", "SpringDataRestAdapter", FindMovieController];
        }
    );

    var ResultInfo = {
        OK: "OK",
        BY_WORD_REQUEST_REQUIRED: "BY_WORD_REQUEST_REQUIRED"
    }
})
(define);

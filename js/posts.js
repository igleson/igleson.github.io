var app = angular.module('myApp', ['ui.router']);

app.filter('slice', function() {
    return function(arr, start, end) {
        return arr.slice(start, end);
    };
});

app.config(['$stateProvider', '$urlRouterProvider', '$locationProvider',
function($stateProvider, $urlRouterProvider, $locationProvider) {

    $urlRouterProvider.otherwise('/posts/page/1');

//    $locationProvider.html5Provider(true);

    $stateProvider
        .state('postsPage', {
            url: '/posts/page/:pageNum',
            templateUrl: 'posts.html'
        })
        .state('post', {
            url: '/post/:title',
            templateUrl: "post.html"
        });
}]);

posts = [
    {title:'Lorem ipsum1', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'Igleson', date:'26-01-2014'},
    {title:'Lorem ipsum2', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum3', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum4', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum5', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum6', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum7', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum8', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum9', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum10', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum11', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum12', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum13', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum14', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum15', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum16', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum17', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum18', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum19', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum20', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum21', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum22', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum23', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum24', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum25', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum26', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum27', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum28', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum29', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum30', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum31', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum32', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum33', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum34', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum35', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum36', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum37', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum38', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum39', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum39', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'},
    {title:'Lorem ipsum40', subtitle:'dolor sit amet, consectetur adipiscing elit', creator:'igleson', date:'26-01-2014'}
];

app.controller('postsController', function ($scope, $stateParams, $location) {

    $scope.data = {}
    $scope.data.allPosts = posts

    $scope.interface = {};

    $scope.interface.page = parseInt($stateParams.pageNum);
    $scope.interface.init = ($scope.interface.page-1)*10;
    $scope.interface.final = $scope.interface.init+10;

    $scope.functions = {}

    $scope.functions.nextPage = function(){
        $location.path("/page/" + ($scope.interface.page+1))
    }

    $scope.functions.previousPage = function(){
        $location.path("/page/" + ($scope.interface.page-1))
    }

    $scope.functions.seePost = function(index){
        selectedIndex = $scope.interface.init + index +1
        $location.path("/post/" + $scope.data.allPosts[selectedIndex].title)
    }
});

app.controller('postController', function ($scope, $stateParams, $location) {

    $scope.data = {}
    $scope.data.title = $stateParams.title;

    var byTitle = function(element){
        console.log(element.title == $scope.data.title)
        return element.title === $scope.data.title
    }

    $scope.data.post = posts.filter(byTitle)[0];
    //tratar o caso de não existir o post com o título dado.

    alert($scope.data.post.title)
});
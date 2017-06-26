var expModule=angular.module('myexpanders',[])

//accordion不可自己随意命名
expModule.directive('accordion', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,
        template : '<div ng-transclude></div>',
        controller : function() {
            var expanders = [];

            //this指controller
            this.gotOpened = function(selectedExpander) {
                angular.forEach(expanders, function(expander) {
                    if (selectedExpander != expander) {
                        expander.showMe = false;
                    }
                });
            }
            this.addExpander = function(expander) {
                expanders.push(expander);
            }
        }
    }
});

expModule.directive('expander', function() {
    return {
        restrict : 'EA',
        replace : true,
        transclude : true,


        //'^?accordion' ?后面写的是包含这个指令的那个父指令（这个是指令嵌套用的），表示向外层寻找accordion指令,直到找到为止.注意:向外层寻找,也包括了自己本身,也就是说,自己可以寻找到自己身上的其它指令
        //'?'的作用是如果找不到也不会报错
        //定义了require属性后,link函数的第四个参数ctrl就是require到的指令的controller方法的实例.所以ctrl就有了addChild方法了.
        require : '^?accordion',
        scope : {
            title : '=expanderTitle'
        },
        template : '<div>'
        + '<div class="title" ng-click="toggle()">{{title}}</div>'
        + '<div class="body" ng-show="showMe" ng-transclude></div>'
        + '</div>',
        link : function(scope, element, attrs, ctrl) {
            //ctrl参数是我之前require的controller实例
            scope.showMe = false;
            ctrl.addExpander(scope);
            scope.toggle = function toggle() {
                scope.showMe = !scope.showMe;
                ctrl.gotOpened(scope);
            }
        }
    }
});

expModule.controller("myCtrl",function($scope) {
    $scope.expanders = [{
        title : 'Click me to expand',
        text : 'Hi there folks, I am the content that was hidden but is now shown.'
    }, {
        title : 'Click this',
        text : 'I am even better text than you have seen previously'
    }, {
        title : 'Test',
        text : 'test'
    }];
});

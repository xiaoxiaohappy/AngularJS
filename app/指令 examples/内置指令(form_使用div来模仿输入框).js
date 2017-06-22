/**
 * Created by YXX on 2017/6/22.
 */
var myModule=angular.module("form_div",[]);
myModule.directive('contenteditable', function(){
    return{
        require:'ngModel',
        link:function (scope,elm,attrs,ctrl) {
            // view -> model
            elm.bind('keyup',function () {
                scope.$apply(function () {
                    ctrl.$setViewValue(elm.text());
                });
            });

            // model -> view
            ctrl.$render=function () {
                    elm.html(ctrl.$viewValue)
            }



            // load init value from DOM
            ctrl.$setViewValue(elm.html())
        }
    }

})
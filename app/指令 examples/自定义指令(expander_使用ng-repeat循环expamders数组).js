/**
 * Created by YXX on 2017/6/22.
 */
var manyExpanderModule = angular.module('myexpanders',[])

manyExpanderModule.directive('myManyExpander',function () {
    return {
        restrict:'EA',
        replace:true,
        tansclude:true,
        template:'<div ng-transclude></div>',
        controller:function () {
            var expanders=[]
            this.gotOpened=function (selectedExpander) {
                angular.forEach(expanders,function (expander) {
                    if(selectedExpander!=expander){
                        expander.showMe=false
                    }
                })
            }
            this.addExpander=function (expander) {
                expanders.push(expander)
            }
        }
    }
})

manyExpanderModule.directive('expander',function () {
    return{
        restrict:'EA',
        replace:true,
        transclude:true,

    }
})



















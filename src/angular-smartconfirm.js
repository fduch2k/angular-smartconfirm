angular.module('angularSmartconfirm', [])
	.directive('angularSmartconfirm', ['$compile', function($compile){

		return{
			restrict: 'EA',
			scope:{
				"confirm": "&",
				"buttonClass": "@"				
			},
			transclude: true,
			template:
			'<a ng-hide="show" class="btn btn-primary" ng-class="buttonClass" ng-click="show=true"><ng-transclude/></a>' +
			'<div ng-show="show">' +
			'<a href="#" class="btn btn-danger" ng-class="buttonClass" ng-click="confirm()"><i class="fa fa-check fa-fw"></i></a> ' +
			'<a href="#" class="btn btn-primary" ng-class="buttonClass" ng-click="show=false"><i class="fa fa-times fa-fw"></i></a>' +
			'</div>',
			link: function(scope, element, attrs){
			}
		}

	}]);

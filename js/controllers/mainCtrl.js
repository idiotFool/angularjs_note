define([
    './module'
], function(controllers) {
    controllers.controller("controllerOuter", ["$scope", function($scope){
        $scope.tabState = 'tab1';   // 默认选中的tab为tab1
        $scope.isTab1Active = true;
        $scope.isTab12Active = false;
        $scope.includeUrl = "views/tab1.html";
        $scope.tabClick = function(tabIndex) {  // 通过点击切换tabState的值
            if ($scope.tabState === tabIndex) {
                return;
            }
            $scope.tabState = tabIndex;
            $scope.isTab1Active = tabIndex === 'tab1';
            $scope.isTab2Active = tabIndex === 'tab2';
            $scope.includeUrl = $scope.isTab1Active ? "views/tab1.html" : "views/tab2.html"
        }
    }])
});
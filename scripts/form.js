function formCtrl($scope){




}
function CtrlB($scope){
    $scope.$parent;//is the CtrlA.ngInclude, not the CtrlA
    $scope.$parent.$parent;//is the CtrlA

}
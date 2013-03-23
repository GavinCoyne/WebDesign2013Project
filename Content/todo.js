/**
 * Created with JetBrains WebStorm.
 * User: Gavin
 * Date: 21/03/13
 * Time: 2:30 PM
 * To change this template use File | Settings | File Templates.
 */
function TodoCtrl($scope)
{

    $scope.todos = [
        {text:'Learn Angular JS', done:false},
        {text:'Build an ap', done:false}
    ];
    $scope.getTotalTodos = function(){
        return $scope.todos.length;
    };

    $scope.clearCompleted = function(todo){
        $scope.todos = _.filter($scope.todos, function(todo){
            return !todo.done;
        })
    };

    $scope.addTodo = function (){
        $scope.todos.push({text:$scope.formTodoText, done:true});
        $scope.formTodoText = '';
    };

}
let todoList = {
            todos: ['item1', 'item2', 'item3'],
            showTodos: function () {
                console.log('My Todos: ' + this.todos.join(', '));
                },
            addTodo: function (todo) {
                this.todos.push(todo);
                this.showTodos();
                 },
            editTodo: function (position, edit) {
                this.todos[position] = edit;
                this.showTodos();
                },
            deleteTodo: function(position){
                this.todos.splice(position, 1)
                this.showTodos();
                }
            }








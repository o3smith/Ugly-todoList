let todoList = {
            todos: [],
            showTodos: function () {
                let myTodos = []
                for(let i = 0; i < this.todos.length; i++){
                  myTodos.push(this.todos[i])
                };
                console.log(myTodos);
                },
            addTodo: function (todoText) {
                this.todos.push({
                  todoText: todoText,
                  completed: false
                });
                this.showTodos({});
                 },
            editTodo: function (position, todoText) {
                this.todos[position].todoText = todoText;
                this.showTodos();
                },
            deleteTodo: function(position){
                this.todos.splice(position, 1)
                this.showTodos();
                },
            toggleCompleted: function(position) {
                let todo = this.todos[position];
                todo.completed = !todo.completed;
                this.showTodos();
            }
            }
            








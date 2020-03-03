let todoList = {
    todos: [],
    showTodos: function () {
        if(this.todos.length === 0) {
            console.log('No more tasks!')
        } else {
        console.log('My Todos: ')
            for(let i = 0; i < this.todos.length; i++){
                if(this.todos[i].completed === true) {
                console.log('(x) ' + this.todos[i].todoText)
                } else {
                console.log( '( ) ' + this.todos[i].todoText)
                }
            };
        }
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
    },
    toggleAll: function () {
        let totalTodos = this.todos.length;
        let completedTodos = 0;
        for( let i = 0; i < totalTodos; i++){
            if(this.todos[i].completed === true) {
                completedTodos++;
            }
        }
            if(completedTodos === totalTodos) {
                for(let i = 0; i < totalTodos; i++){
                    this.todos[i].completed = false;      
                }
            } else {
                for(let i = 0; i < totalTodos; i++){
                    this.todos[i].completed = true;         
                }
            }
        this.showTodos();
    }
}

const displayTodosButton = document.querySelector('.displayTodosBtn');
const toggleAllButton = document.querySelector('.toggleAllBtn');

displayTodosButton.addEventListener('click', () => {
    todoList.showTodos();
});

toggleAllButton.addEventListener('click', () => {
    todoList.toggleAll();
});







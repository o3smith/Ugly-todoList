const todoList = {
    todos: [],
    addTodo: function (todoText) {
        this.todos.push({
            todoText: todoText,
            completed: false
        });
            },
    editTodo: function (position, todoText) {
        this.todos[position].todoText = todoText;
        },
    deleteTodo: function(position){
        this.todos.splice(position, 1)
        },
    toggleCompleted: function(position) {
        let todo = this.todos[position];
        todo.completed = !todo.completed;
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
    }
}

const handlers = {
    addTodo: () => {
        let addTodoInputText = document.querySelector('#addTodoInputText');
        todoList.addTodo(addTodoInputText.value);
        addTodoInputText.value = '';
        view.showTodos();
    },
    editTodo: () => {
        let editTodoPositionInput = document.querySelector('#editTodoPositionInput');
        let editTodoTextInput = document.querySelector('#editTodoTextInput');
        todoList.editTodo(editTodoPositionInput.valueAsNumber, editTodoTextInput.value);
        editTodoPositionInput.value = '';
        editTodoTextInput.value = '';
        view.showTodos();
    },
    deleteTodo: () => {
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = ''
        view.showTodos();
    },
    toggleCompleted: () => {
        let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
        view.showTodos();
    },
    toggleAll: () => {
        todoList.toggleAll();
        view.showTodos();
    }
}

const view = {
    showTodos: () => {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        for (let i = 0; i < todoList.todos.length; i++){  
            let todoLi = document.createElement('li');
            let todoTextWithCompletion = '';
            let todo = todoList.todos[i];

            if(todo.completed === true) {
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( ) ' + todo.todoText;
            }

            todoLi.textContent = todoTextWithCompletion;
            todosUl.appendChild(todoLi);
        }
    }
}




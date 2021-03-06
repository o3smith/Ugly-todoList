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

const handlers = {
    showTodos:  () => {
        todoList.showTodos();
    },
    addTodo: () => {
        let addTodoInputText = document.querySelector('#addTodoInputText');
        todoList.addTodo(addTodoInputText.value);
        addTodoInputText.value = '';
    },
    editTodo: () => {
        let editTodoPositionInput = document.querySelector('#editTodoPositionInput');
        let editTodoTextInput = document.querySelector('#editTodoTextInput');
        todoList.editTodo(editTodoPositionInput.valueAsNumber, editTodoTextInput.value);
        editTodoPositionInput.value = '';
        editTodoTextInput.value = '';
    },
    deleteTodo: () => {
        let deleteTodoPositionInput = document.getElementById('deleteTodoPositionInput');
        todoList.deleteTodo(deleteTodoPositionInput.valueAsNumber);
        deleteTodoPositionInput.value = ''
    },
    toggleCompleted: () => {
        let toggleCompletedPositionInput = document.getElementById('toggleCompletedPositionInput');
        todoList.toggleCompleted(toggleCompletedPositionInput.valueAsNumber);
        toggleCompletedPositionInput.value = '';
    },
    toggleAll: () => {
        todoList.toggleAll();
    }
}

const view = {
    displayTodos: () => {
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




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
    deleteTodo: (position) => {
        todoList.deleteTodo(position);
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
            todoLi.id = i;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(view.createDeleteButton());
            todosUl.appendChild(todoLi);
        }
    },
    createDeleteButton: () => {
        let deleteButton = document.createElement('button');
        deleteButton.textContent = 'Delete';
        deleteButton.className = 'deleteButton';
        return deleteButton;
    },
    setUpEventListeners: () => {
        let todosUl = document.querySelector('ul')

        todosUl.addEventListener('click', (e) => {
            let elementClicked = event.target;

            if(elementClicked.className === 'deleteButton'){
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};

view.setUpEventListeners();
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
        this.todos.forEach(todo => {
            if(todo.completed === true) {
                completedTodos++;
            }
        })
            //if everything is true, make everything false
            if(completedTodos === totalTodos) {
                this.todos.forEach(todo => {
                    todo.completed = false;
                })      
                //if everything is false, make anything true
                } else {
                this.todos.forEach(todo => {
                    todo.completed = true;
                })
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
    showTodos: function() {
        let todosUl = document.querySelector('ul');
        todosUl.innerHTML = '';
        todoList.todos.forEach((todo, position) => {
            let todoLi = document.createElement('li');
            let todoTextWithCompletion = '';
            
            if(todo.completed ===true){
                todoTextWithCompletion = '(x) ' + todo.todoText;
            } else {
                todoTextWithCompletion = '( )' + todo.todoText;
            }
            todoLi.id = position;
            todoLi.textContent = todoTextWithCompletion;
            todoLi.appendChild(this.createDeleteButton());
            todosUl.appendChild(todoLi);
        }, this);
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
            let elementClicked = e.target;

            if(elementClicked.className === 'deleteButton'){
            handlers.deleteTodo(parseInt(elementClicked.parentNode.id));
            }
        });
    }
};


view.setUpEventListeners();
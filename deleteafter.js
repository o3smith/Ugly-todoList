var toDo =  {
	list: [],
	addToDo: function(item){
		this.list.push({
			toDoText: item,
			completed: false
		});
	},
	changeToDo: function(position,itemText){
		this.list[position].toDoText = itemText;
	},
	deleteToDos: function(position){
		this.list.splice(position,1);
	},
	toggleCompleted: function(position){
		var switches =  this.list[position];
		switches.completed = !switches.completed;
	},
	toggleAll: function(){
		var totalTodos = this.list.length;
		var completedTodos = 0;
		// Gets the number of total todos
		this.list.forEach(function (todo) {
			if (todo.completed === true){
				completedTodos++;
			}
		});
		
		this.list.forEach(function (todo) {
			//case 1: if everything is true make everything false
				if (completedTodos === totalTodos){
					todo.completed = false;
				}
			//case 2: otherwise make everything true
				else {
					todo.completed = true;
				}
		});
		
		
	} 
};

var handlers  = {
	addToDo: function() {
		var addToDoTextInput = document.getElementById('addToDoTextInput');
		toDo.addToDo(addToDoTextInput.value);
		addToDoTextInput.value = "";
		view.displayToDo();
	},
	changeToDo: function() {
		var changeToDoPositionInput = document.getElementById("changeToDoPositionInput");
		var changeToDoTextInput = document.getElementById("changeToDoTextInput");
		toDo.changeToDo(changeToDoPositionInput.valueAsNumber , changeToDoTextInput.value);
		changeToDoTextInput.value = "";
		changeToDoPositionInput.value = "";
		view.displayToDo();
	},
	deleteToDos: function(position){
		toDo.deleteToDos(position);
		view.displayToDo();
	},
	toggleToDo: function() {
		var toggleToDo = document.getElementById("toggleToDo");
		toDo.toggleCompleted(toggleToDo.valueAsNumber);
		view.displayToDo();
	},
	toggleAll: function() {
		toDo.toggleAll();
		view.displayToDo();
	}
};

var view = {
	displayToDo: function(){
		var toDoUl = document.querySelector('ul');
		toDoUl.innerHTML = '';
		
		toDo.list.forEach(function (todo, position){
			var toDoLi = document.createElement('li');
			var toDoTextWithCompletion =  '';
			
			if (todo.completed === true){
				toDoTextWithCompletion =  '(x) ' +  todo.toDoText;
			}else{
				toDoTextWithCompletion = '( ) '  + todo.toDoText;
			} 
			
			toDoLi.id = position;
			toDoLi.textContent = toDoTextWithCompletion;
			toDoLi.appendChild(this.createDeleteButton());
			toDoUl.appendChild(toDoLi);		
		},this);
	},
	createDeleteButton: function() {
		var deleteButton = document.createElement('button');
		deleteButton.textContent = 'Delete';
		deleteButton.className = 'deleteButton';
		return deleteButton;
	},
	setUpEventListeners: function(){
		var todosUl = document.querySelector('ul');

		todosUl.addEventListener('click', function(event){
		// Get the element that was clicked on
		var elementClicked = event.target;
		
		//check if element clicked is a delete button
		if (elementClicked.className === 'deleteButton'){
			handlers.deleteToDos(parseInt(elementClicked.parentNode.id));
			}
		});
	}
};

view.setUpEventListeners();
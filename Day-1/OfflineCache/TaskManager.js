var txtTask,btnAdd,btnRemoveCompleted,ulTaskList;

	window.addEventListener("DOMContentLoaded",init);
	function init(){
		txtTask = document.getElementById("txtTask");
		btnAdd= document.getElementById("btnAdd");
		btnRemoveCompleted = document.getElementById("btnRemoveCompleted");
		ulTaskList = document.getElementById("ulTaskList");

		btnAdd.addEventListener("click",onBtnAddClick);
		btnRemoveCompleted.addEventListener("click",onBtnRemoveCompletedClick);
		window.addEventListener("storage",updateUI);
		var tasks = getTasksFromStorage();
		loadTasks(tasks);


	}

	function updateUI(){
		var tasks = getTasksFromStorage();
		loadTasks(tasks);
	}

	function loadTasks(tasks){
		ulTaskList.innerHTML = "";
		for(var i=0;i<tasks.length;i++)
			addTaskToUI(tasks[i]);
	}

	function addTaskToUI(task){
		var newTaskItem = document.createElement("li");
		newTaskItem.innerText= task.name;
		newTaskItem.setAttribute("task-id",task.id)
		if (task.isCompleted) newTaskItem.classList.add("completed");
		newTaskItem.addEventListener("click",onTaskItemClick);
		ulTaskList.appendChild(newTaskItem);
	}

	
	function onBtnAddClick(){
		var newTask = addTaskToStorage(txtTask.value);
		addTaskToUI(newTask);
		
	}

	

	function onBtnRemoveCompletedClick(){
		var taskItems = ulTaskList.children;
		for(var i=taskItems.length-1;i>=0;i--){
			var taskItem = taskItems[i];
			if (taskItem.classList.contains("completed")){
				removeTaskFromStorage(taskItem.getAttribute("task-id"));
				taskItem.remove();

			}
		}
	}
	
	function onTaskItemClick(){
		toggleStatusInStorage(this.getAttribute("task-id"));
		this.classList.toggle("completed");
	}

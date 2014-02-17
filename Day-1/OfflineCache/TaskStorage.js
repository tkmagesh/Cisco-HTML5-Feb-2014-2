function getTasksFromStorage(){
		var tasks = [];
		for(var i=0;i<localStorage.length;i++){
			var key = localStorage.key(i);
			var taskObj = JSON.parse(localStorage.getItem(key));
			tasks.push(taskObj);
		}
		return tasks;
	}
function addTaskToStorage(taskName){
		var newKey = new Date().getTime().toString();
		var newTask = {
			id : newKey,
			name : taskName,
			isCompleted : false
		}
		window.localStorage.setItem(newKey,JSON.stringify(newTask));
		return newTask;
	}

function toggleStatusInStorage(key){
		var taskObj = JSON.parse(localStorage.getItem(key));
		taskObj.isCompleted = !taskObj.isCompleted;
		localStorage.setItem(key,JSON.stringify(taskObj));
	}
	function removeTaskFromStorage(key){
		localStorage.removeItem(key);
	}
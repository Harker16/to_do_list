/*jslint node: true */

(function(exports){

	function ToDoList(ToDo) {
	this.list = [];
	this.ToDo = ToDo;
	}

	ToDoList.prototype = {

		listAllToDos: function() {
			return this.list;
		},

		convertListToHTML: function() {
			var returnString = "<ul>";

			this.list.forEach(function(taskItem){
				returnString += ("<li><div>"+taskItem.entry+"</div></li>");
			});
			return returnString += '</ul>';
		},

		createToDo: function(value) {
			this.list.push(new this.ToDo(value));
		},
	};
	exports.ToDoList = ToDoList;
})(this);

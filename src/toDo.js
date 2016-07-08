/*jslint node: true */
'use strict';

(function(exports) {
	function ToDo(entry){
		this.entry = entry;
		this.complete = false;
	}

	ToDo.prototype.display = function() {
		return (this.entry);
	};
	exports.ToDo = ToDo
})(this);

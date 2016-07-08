/*jslint node: true */
/*global describe, it, before, beforeEach, after, afterEach */
"use strict";

var assert = require('chai').assert;
var expect = require('chai').expect;
var ToDo = require('../src/toDo.js').ToDo;
var ToDoList = require('../src/toDoList.js').ToDoList;

describe('ToDo', function(){

  it('can instantiate a to-do object', function(){
      var toDo = new ToDo('Eat Breakfast');
      expect(toDo).to.be.an.instanceof(ToDo);
    });
  it('can display its value',function(){
  		var toDo = new ToDo('Eat Breakfast');
  		expect(toDo.display()).to.include('Eat Breakfast');
  });
});

describe('ToDoList', function() {
  it('can return a string of html containing todo\'s', function(){
      var todolist = new ToDoList(ToDo);
      todolist.createToDo('Eat Breakfast');
      todolist.createToDo('Washing Up');
      expect(todolist.convertListToHTML()).to.include('<ul><li><div>Eat Breakfast</div></li><li><div>Washing Up</div></li></ul>');
  });
});

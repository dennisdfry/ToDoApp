import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent implements OnInit {
  todo: string = '';
  todos: any[] = [];
  index: number = 0;
  todoDefault: any;
  editMode: any;
  storedTodos : any;

  ngOnInit(): void {
    this.loadTodos();
  }

  createTodo() {
    this.todoDefault = { todo: this.todo, checked: false, editMode: true }
    this.todos.push(this.todoDefault);
    this.saveToLocalStorage();
    console.log(this.todos)
  }

  changeTodo() {

  }

  saveToLocalStorage() {
    localStorage.setItem('todos', JSON.stringify(this.todos));
  }

  loadTodos() {
    this.storedTodos = localStorage.getItem('todos');
    this.todos = JSON.parse(this.storedTodos);
  }

  deleteToDo(index: number) {
    this.todos.splice(index, 1)
    this.saveToLocalStorage();
  }
}

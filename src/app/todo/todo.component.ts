import { Component, OnInit ,  AfterViewInit, ElementRef} from '@angular/core';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { CalenderComponent } from '../calender/calender.component';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { Draggable } from '@fullcalendar/interaction';


@Component({
  selector: 'app-todo',
  standalone: true,
  imports: [CommonModule, FormsModule, CalenderComponent, DragDropModule],
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.scss'
})

export class TodoComponent implements OnInit, AfterViewInit {
  constructor(private elementRef: ElementRef) {}
  todo: string = '';
  todos: any[] = [];
  index: number = 0;
  todoDefault: any;
  editMode: any;
  storedTodos : any;

  ngOnInit(): void {
    this.loadTodos();
  }

  ngAfterViewInit(): void {
    const containerEl = this.elementRef.nativeElement.querySelector('.todos');
    new Draggable(containerEl, {
      itemSelector: '.todo',
      eventData: (eventEl: HTMLElement) => ({
        title: eventEl.innerText.trim()
      })
    });
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

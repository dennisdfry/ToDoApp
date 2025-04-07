import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet, ROUTES } from '@angular/router';
import { TodoComment } from 'typescript';
import { TodoComponent } from './todo/todo.component';


@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, TodoComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'ToDo-List';
}

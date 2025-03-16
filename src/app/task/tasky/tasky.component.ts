import { Component, Input } from '@angular/core';
import { type Task } from './task.model';
@Component({
  selector: 'app-tasky',
  standalone: true,
  imports: [],
  templateUrl: './tasky.component.html',
  styleUrl: './tasky.component.css',
})
export class TaskyComponent {
  @Input({ required: true }) task!: Task;
}

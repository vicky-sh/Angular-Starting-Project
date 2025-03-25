import { Component, EventEmitter, inject, Inject, Input, Output } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from "../../shared/card/card.component";
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';
@Component({
  selector: 'app-tasky',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './tasky.component.html',
  styleUrl: './tasky.component.css',
})
export class TaskyComponent {
  @Input({ required: true }) task!: Task;
  @Output() complete = new EventEmitter<string>();
  private tasksService = inject(TasksService);

  onCompleteTask(){
    this.tasksService.removeTask(this.task.id);
  }
}

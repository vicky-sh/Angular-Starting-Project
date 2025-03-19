import { Component, EventEmitter, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NewTaskData } from '../tasky/task.model';

@Component({
  selector: 'app-new-task',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  @Output() isCanceled = new EventEmitter<void>();
  @Output() add = new EventEmitter<NewTaskData>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDate = '';


  onCancel(){
    this.isCanceled.emit();
  }

  onSubmit(){
    this.add.emit({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      date: this.enteredDate,
    })
  }
}

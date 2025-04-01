import { NgModule } from "@angular/core";
import { TaskyComponent } from "./tasky/tasky.component";
import { NewTaskComponent } from "./new-task/new-task.component";
import { TaskComponent } from "./task.component";
import { SharedModule } from "../shared/card/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
  declarations: [TaskComponent, TaskyComponent, NewTaskComponent],
  exports: [TaskComponent],
  imports: [CommonModule, FormsModule, SharedModule]
})
export class TasksModule{

}

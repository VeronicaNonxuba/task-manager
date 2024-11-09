import { Component, EventEmitter, Input, Output} from '@angular/core';
import { TaskComponent } from './task/task.component';
import { dummyTasks } from '../dummy-tasks';
import { type Task } from './task/task.model';
import { CreateComponent } from './task/create/create.component';
import { type NewTask } from './task/new-task.model';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
  standalone: true,
  imports: [TaskComponent, CreateComponent],
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
  //providers:[TasksService]
})
export class TasksComponent {
  @Input({required: true}) userId!:string;
  @Input({required: true}) name!:string;
  tasks = dummyTasks;
  isAddingTask = false;
  
  constructor(private _service:TasksService ) {
    // super();
  }

  get selectedUsertasks(){
    return this._service?.getUserTasks(this.userId);
  }

 onAddTask(){
    this.isAddingTask = true;
 }

 onCloseTaskAdd(){
  console.log('test:Task cancel: ');
  this.isAddingTask = false;
 }
}


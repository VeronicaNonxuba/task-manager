import { Component, Input} from '@angular/core';
import { dummyTasks } from '../dummy-tasks';
import { TasksService } from './tasks.service';

@Component({
  selector: 'app-tasks',
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


import { Component, Input, OnInit, inject } from '@angular/core';
import { type Task } from './task.model';
import { CardComponent } from '../../shared/card/card.component';
import { DatePipe } from '@angular/common';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [CardComponent, DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent implements OnInit{
  private _service = inject(TasksService);

  @Input({required: true}) task!:Task;

  ngOnInit(): void {
    console.log('task: ' + this.task.summary);
  }
  
  onCompleteTask(){
    this._service.removeTask(this.task.id);
  }
}

import { Component, EventEmitter, Output, Input, inject } from '@angular/core';
import { dummyTasks } from '../../../dummy-tasks';
import { Task } from '../task.model';
import { FormsModule } from '@angular/forms';
import { type NewTask } from '../new-task.model';
import { TasksService } from '../../tasks.service';

@Component({
  selector: 'app-create',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './create.component.html',
  styleUrl: './create.component.css'
})
export class CreateComponent {
  tasks = dummyTasks;
  @Input({required: true}) userId!: string;
  @Output() close = new EventEmitter<void>();  

  id = '';
  dueDate = '1999-05-29';
  summary = '';
  title = '';
  
  private _service = inject(TasksService);

  onSubmit(){
    this._service.addTask({
      dueDate:this.dueDate,
      summary:this.summary,
      title:this.title
    },this.userId);

    this.close.emit();
  }

  onCancelAdd(){
    console.log('Canelled Add');
    this.close.emit();
  }

}


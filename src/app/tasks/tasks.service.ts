import { dummyTasks } from "../dummy-tasks";
import { NewTask } from "./task/new-task.model";
import { Injectable } from "@angular/core";

@Injectable({providedIn: 'root'})
export class TasksService {
    private tasks = dummyTasks;

    constructor() {
        const tasks = localStorage.getItem('tasks');

        if(tasks){
            this.tasks = JSON.parse(tasks);
        }
    }
    addTask(newTask: NewTask, userId: string){
        this.tasks.push({
            id:new Date().getTime().toString(),
            userId:userId,
            title:newTask.title,
            dueDate:newTask.dueDate,
            summary:newTask.summary
          });
          this.saveTasks();
    }

    getUserTasks(userId:string){
        return this.tasks.filter((task) => task.userId === userId)!;
    }

    removeTask(id:string){
        this.tasks = this.tasks.filter((task)=>task.id !== id)
        this.saveTasks();
    }

    private saveTasks(){
        localStorage.setItem('tasks',JSON.stringify(this.tasks))
    }
}
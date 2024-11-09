import { NgModule } from "@angular/core";
import { TasksComponent } from "./tasks.component";
import { CreateComponent } from "./task/create/create.component";
import { TaskComponent } from "./task/task.component";
import { SharedModule } from "../shared/shared.module";
import { CommonModule } from "@angular/common";
import { FormsModule } from "@angular/forms";

@NgModule({
    declarations:[TasksComponent, 
        CreateComponent,
        TaskComponent],
    exports:[ TasksComponent  ],
    imports:[SharedModule, CommonModule, FormsModule]
})
export class TasksModule{

}
import { Component, Input, inject } from '@angular/core';
import { Task } from './task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-task',
  standalone: false,
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'
})
export class TaskComponent {
  @Input() task!: Task;
  private tasksService = inject(TasksService);

  onComplete() {
    this.tasksService.deleteTask(this.task.id);
  }
}

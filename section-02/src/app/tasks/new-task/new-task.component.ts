import { Component, EventEmitter, Output, inject, Input } from '@angular/core';
import { type Task } from '../task/task.model';
import { TasksService } from '../tasks.service';

@Component({
  selector: 'app-new-task',
  standalone: false,
  templateUrl: './new-task.component.html',
  styleUrl: './new-task.component.css'
})
export class NewTaskComponent {
  newTask!: Task;
  @Input({ required: true }) userId!: string;
  @Output() cancelAddingTask = new EventEmitter<void>();
  enteredTitle = '';
  enteredSummary = '';
  enteredDueDate = '';
  private tasksService = inject(TasksService);

  onCancelAddingTask() {
    this.cancelAddingTask.emit();
  }

  onSubmit() {
    this.tasksService.addTask({
      title: this.enteredTitle,
      summary: this.enteredSummary,
      dueDate: this.enteredDueDate,
    }, this.userId);
    this.cancelAddingTask.emit();
  }
}

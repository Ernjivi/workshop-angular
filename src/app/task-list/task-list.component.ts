import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  private taskList: any[];

  constructor() { }

  ngOnInit() {
    this.taskList = [
      { status: false, text: 'Tarea 1' },
      { status: false, text: 'Tarea 2' },
      { status: false, text: 'Tarea 3' },
      { status: false, text: 'Tarea 4' },
      { status: false, text: 'Tarea 5' },
    ]
  }

  addTask(task): void{
    // console.log(task.value);
    this.taskList.push({ text: task.value, status: false });
    task.value = "";
  }

  deleteTask(index){
    this.taskList.splice(index, 1);
  }

}

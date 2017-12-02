import { Component, OnInit } from '@angular/core';
import { AngularFireDatabase, AngularFireList } from "angularfire2/database";
import { AuthService } from '../services/auth/auth.service';

import 'rxjs/add/operator/map';

import * as firebase from "firebase/app";
import { Observable } from 'rxjs/Observable';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.scss']
})
export class TaskListComponent implements OnInit {

  private taskListRef: AngularFireList<any>;
  private taskList: Observable<any[]>;

  constructor(
    private db: AngularFireDatabase,
    private authService: AuthService
  ) { }

  ngOnInit() {

    this.authService.user
      .map((user: firebase.User) => user.uid)
      .subscribe((uid: string) => {
        this.taskListRef = this.db.list(`tasks/${uid}`);
        this.taskList = this.taskListRef.snapshotChanges().map(changes => {
          return changes.map(c => ({ key: c.payload.key, ...c.payload.val() }));
        });
      })
  }

  addTask(task): void{
    // console.log(task.value);
    this.taskListRef.push({ text: task.value, status: false });
    task.value = "";
  }

  deleteTask(task){
    this.taskListRef.remove(task.key);
  }

  updateTask(task){
    this.taskListRef.update(task.key, {status: !task.status});
  }

}

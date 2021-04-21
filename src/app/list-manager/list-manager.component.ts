import { Component, OnInit } from '@angular/core';
import { TodoListService } from '../services/todo-list.service';
import { TodoItem } from '../interfaces/todo-item';

@Component({
  selector: 'app-list-manager',
  templateUrl: './list-manager.component.html',
  styleUrls: ['./list-manager.component.scss']
})
export class ListManagerComponent implements OnInit {
  title = 'To-Do-List';
  todoList: TodoItem[];

  constructor(private todoListService: TodoListService) {
  }

  ngOnInit(): void {
      this.todoList = this.todoListService.getTodoList();
    }

    addItem(title: string): void {
      this.todoListService.addItem({ title });
    }

    removeItem(item: string): void {
    this.todoListService.deleteItem(item);
    }

    updateItem(item: string, changes: string): void {
    this.todoListService.updateItem(item, changes);
    }
}

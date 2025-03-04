import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Todo } from 'src/app/models/todo';

@Component({
  selector: 'app-todo-card',
  templateUrl: './todo-card.component.html',
  styleUrls: ['./todo-card.component.css']
})
export class TodoCardComponent {
  @Input() todo!: Todo;
  @Output() edit = new EventEmitter<Todo>();
  @Output() delete = new EventEmitter<Todo>();

  isEditing = false;

  startEditing() {
    this.isEditing = true;
  }

  saveEdit(newText: string) {
    if (newText.trim() && newText.trim() !== this.todo.todo) {
      const updatedTodo = { ...this.todo, todo: newText.trim() };
      this.edit.emit(updatedTodo);
    }
    this.isEditing = false;
  }

  cancelEditing() {
    this.isEditing = false;
  }

  onDelete() {
    this.delete.emit(this.todo);
  }
}

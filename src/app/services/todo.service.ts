import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Todo } from '../models/todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl = 'https://dummyjson.com/todos';

  constructor(private http: HttpClient) {}

  // Get todos from API
  getTodos(): Observable<{ todos: Todo[] }> {
    return this.http.get<{ todos: Todo[] }>(`${this.apiUrl}?limit=10`);
  }

  // Update a todo's completed status
  updateTodo(id: number, updates: Partial<Todo>): Observable<Todo> {
    return this.http.put<Todo>(`${this.apiUrl}/${id}`, updates);
  }

  // Delete a todo
  deleteTodo(id: number): Observable<{ isDeleted: boolean }> {
    return this.http.delete<{ isDeleted: boolean }>(`${this.apiUrl}/${id}`);
  }
  
  addTodo(newTodo: Partial<Todo>) {
    return this.http.post(this.apiUrl + '/add', {...newTodo, userId:'1'});
  }
  
}

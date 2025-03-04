import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { Todo } from 'src/app/models/todo';
import { TodoService } from 'src/app/services/todo.service';

@Component({
  selector: 'app-board',
  templateUrl: './board.component.html',
  styleUrls: ['./board.component.css']
})
export class BoardComponent implements OnInit {
  todos: Todo[] = [];
  newTodoText:string='';
  isLoading:boolean = false;
  constructor(private todoService: TodoService) {}

  ngOnInit() {
    this.loadTodos();
  }

  loadTodos() {
    this.isLoading=true;  // showing loading spinner
    // fetching our todos from the server
    this.todoService.getTodos().subscribe((response) => {
      this.todos = response.todos;
      this.isLoading=false;
    },err=>{
      this.isLoading=false;
      console.error('Failed to load todos', err);
    });
  }

  // just dividin the list in two parts
  getTodosByStatus(completed: boolean): Todo[] {
    return this.todos.filter(todo => todo.completed === completed);
    // 
  }
  addTodo() {
    if (!this.newTodoText.trim()) return; 
    let todos = this.todos.map(item=>item.todo.toLowerCase().trim())
    if(todos.includes(this.newTodoText.toLowerCase().trim())){
      alert('Todo already added! Please try with a different title.')
      return;
    }
    const newTodo: Todo = {
      todo: this.newTodoText.trim(), //for extra space remove
      completed: false,
      id: Math.floor(Math.random() * 100) + 1
    };
    this.isLoading=true;
    this.todoService.addTodo(newTodo).subscribe({
      next: () => {
        this.todos.unshift(newTodo); //here i am pushing it in the first place to keep it on the top
        this.newTodoText = ''; // clear input 
        this.isLoading=false;
      },
      error: (err) => {
        this.isLoading=false;

        console.error('Failed to delete todo', err);
      }
    });
  }
  drop(event: CdkDragDrop<Todo[]>, completed: boolean) {
    
    // I am using angular cdk for drag and drop feature
    // here i am checking if container are not same, just move the item and call the api
    if (event.previousContainer !== event.container) {
      const todo = event.previousContainer.data[event.previousIndex];

      if (todo.completed !== completed) {
        transferArrayItem(event.previousContainer.data, event.container.data, event.previousIndex, event.currentIndex);
        // update locally here 
        this.isLoading=true;
        this.todoService.updateTodo(todo.id, { completed }).subscribe(()=>{
          this.todos = this.todos.map(t => (t.id === todo.id ? { ...t, completed } : t));
          this.isLoading=false;
        },
      error=>{
        this.isLoading=false;
        console.log(error);
      });
      }
    } 
  }


  
  editTodo(todo: Todo) {
    // this api not working so updating liek this.
    // this.todoService.updateTodo(todo.id, todo).subscribe(() => {
      this.todos = this.todos.map(t => (t.id === todo.id ? todo : t));
    // });
  }

  deleteTodo(todo: Todo) {
    let value = confirm('Are you sure you want to delete?')
      if(value){
      this.isLoading=true;
      this.todoService.deleteTodo(todo.id).subscribe((response) => {
          this.todos = this.todos.filter(t => t.id !== todo.id);
          this.isLoading=false;
        },
        (err) => {
          this.isLoading=false;
          console.error('Failed to delete todo', err);
      });
    }
  }

}

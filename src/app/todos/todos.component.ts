import { Component, OnInit } from '@angular/core';
import { Todo } from './../models/todo';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {

  todos: Todo[];

  inputTodo:string ="";
  
  constructor() { }

  ngOnInit(): void {
    this.todos = [
      {
        content: 'Göra läxor',
        completed: false
      },
      {
        content: 'Köpa godis',
        completed: false
      },
    ]
  }

// Loopar igenom alla todos för att se om de är färdiga. 
// ser till att när man klickar på en todo, och den är klar så blir den genomstruken.
// Om id matchar index så är den klar och kan strykas.
  toggleDone(id:number) {
    this.todos.map((v, i) => {
      if (i == id) v.completed = !v.completed;

      return v;
    })
  }
  // Remove-knappen som tar bort todos från listan om de är färdiga.
  removeTodo (id:number) {
    this.todos = this.todos.filter((v, i) => i !== id);
  }
  //Lägger till todos i listan
  addTodo () {
    this.todos.push({
      content: this.inputTodo,
      completed: false
    })
    // Rensar todo-fälet
    this.inputTodo = "";
  }
}

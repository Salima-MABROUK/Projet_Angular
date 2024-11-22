import { Component } from '@angular/core';
import { Task } from '../../class/task.model';
import { TodolistService } from '../../services/todolist.service';
import { TaskComponent } from "../task/task.component";

@Component({
  selector: 'app-todolist',
  standalone: true,
  imports: [TaskComponent],
  templateUrl: './todolist.component.html',
  styleUrl: './todolist.component.css'
})
export class TodolistComponent {


  
  title : string ='todoList';
  compteur : number = 0;
  completion: number = 0;

  
  //declaration du Tableau:
  public tasks: Task[] = []


  //Constructeur:

  constructor(public todoServices: TodolistService) {
      this.tasks=todoServices.list
  }

  //Methode miseAjour 
  miseAjourCompteur(complete:boolean):void{

    if(complete==true){
      this.compteur+=1
    }else{
      this.compteur-=1
    }
    this.completion = (this.compteur/this.tasks.length)*100
  }


}



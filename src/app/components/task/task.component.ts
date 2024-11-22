import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Task } from '../../class/task.model';
import { CommonModule, DatePipe } from '@angular/common';
import { TodolistService } from '../../services/todolist.service';

@Component({
  selector: 'app-task',
  standalone: true,
  imports: [FormsModule, CommonModule],
  providers:[DatePipe],
  templateUrl: './task.component.html',
  styleUrl: './task.component.css'

})

export class TaskComponent {
  @Input({required:true}) task!: Task

  @Output()
  miseAjourComplete: EventEmitter<boolean> = new EventEmitter<boolean>();



  //Constructeur
  constructor(private todoListService:TodolistService){
    
  }





  //Déclarer des méthodes:


  toggleComplete():void{

    // this.task.completed= !this.task.completed

    this.todoListService.toggleComplete(this.task.id)
    this.miseAjourComplete.emit(this.task.completed)
  
  }

  getComplete():string{

    if(this.task.completed==true){
      return "terminée"
    } else{

      return "en cours"
    }
    
  }


  getBadgeVariant():string{

    if(this.task.completed==true){
      return "d-inline float-right badge text-bg-success"
    } else{

      return "d-inline float-right badge text-bg-warning"
    }
  }

  getItemVariant():string{

    if(this.task.completed==true){
      return "list-group-item list-group-item-success"
    } else{

      return "list-group-item list-group-item-warning"
    }

  }

  
  


  getButtonText():string{

    if(this.task.completed==true){
      return "Annuler"
    } else{

      return "Terminer"
    }

  }



}

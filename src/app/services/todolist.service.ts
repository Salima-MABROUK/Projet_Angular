import { Injectable } from '@angular/core';
import { Task } from '../class/task.model';

//Creer une constante:
const initialList=[
  new Task(0, "Faire la vaisselle", false, "Avec une eponge", new Date('08/04/2023 09:00')),
  new Task(1, "Faire les courses", false, "Budget 100€", new Date('08/21/2023 09:00')),
  new Task(2, "Promener le chien", false, "Bon toutou", new Date('08/30/2023 09:00')),
]


@Injectable({
  providedIn: 'root'
})


export class TodolistService {


  //Creer une propriété list:
  list:Task[] = [];


  //Constructeur:
  constructor() {
    this.updateList(initialList)
      }

  //creer les méthodes:
     
  updateList(listTask:Task[]){
    this.list=listTask
  }


  toggleComplete(id:number){
    let elementRecuperer = this.list.find(elementList => elementList.id == id)
    if(elementRecuperer){
      elementRecuperer.completed = !elementRecuperer.completed
    }
  }


}

import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private isAuthenticated: boolean = false;
  
  constructor(private router:Router) { }

  // Getter pour isAuth
  get isAuth(): boolean {
    return this.isAuthenticated;
  }

  // Méthode login
  login(): Observable<boolean> {
    return new Observable<boolean>((observer) => {
      setTimeout(() => {
        this.isAuthenticated = true; // Après un délai, on passe isAuthenticated à true
        observer.next(this.isAuthenticated);
        observer.complete();

        this.router.navigate(["todolist"])



      }, 2000); // Simule un délai de 2 secondes
    });
  }

  // Méthode logout
  logout(): void {
   this.isAuthenticated = false; // Réinitialise isAuthenticated à false
   this.router.navigate(["login"])
  
}

}
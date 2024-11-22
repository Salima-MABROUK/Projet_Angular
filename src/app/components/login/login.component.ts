import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
logout() {
throw new Error('Method not implemented.');
}
  constructor(private authService: AuthService) { }



 // Méthode de connexion qui appelle le service Auth
 login() {
  this.authService.login().subscribe(authenticated => {

    
    // Le statut de l'authentification est mis à jour
  });
}

// Vérifie si l'utilisateur est authentifié
get isUserAuthenticated(): boolean {
  return this.authService.isAuth;
}
}

import { Component } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-logout',
  standalone: true,
  imports: [],
  templateUrl: './logout.component.html',
  styleUrl: './logout.component.css'
})
export class LogoutComponent {


  constructor(private authService: AuthService) { }

  // Méthode de déconnexion
  logout() {
    this.authService.logout();
  }

  // Vérifie si l'utilisateur est authentifié
  get isUserAuthenticated(): boolean {
    return this.authService.isAuth;
  }
}




// Angular
import { Component } from '@angular/core';

// Aplicação
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent {

  constructor(private authService: AuthService) { }

  public logout(): void {
    this.authService.logout();
  }

}

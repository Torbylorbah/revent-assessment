import { Component } from '@angular/core';
import { HeaderComponent } from '../../../shared/header/header.component';
import { FooterComponent } from '../../../shared/footer/footer.component';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-landing',
  standalone: true,
  imports: [
    HeaderComponent,
    FooterComponent,
    RouterModule
  ],
  templateUrl: './landing.component.html',
  styleUrl: './landing.component.scss'
})
export class LandingComponent {

  isMenuOpen: boolean = false;

  constructor() { }

  toggleMenu(): void {
    this.isMenuOpen = !this.isMenuOpen;
  }
}

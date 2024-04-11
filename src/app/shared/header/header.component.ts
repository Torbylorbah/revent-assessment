import { CommonModule } from '@angular/common';
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [
    CommonModule
  ],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent {

  @Output() toggleMenu: EventEmitter<void> = new EventEmitter<void>();
  
  isMenuOpen: boolean = false;

  constructor() { }

  onClick(): void {
    this.toggleMenu.emit();
    this.isMenuOpen = !this.isMenuOpen;
  }

}

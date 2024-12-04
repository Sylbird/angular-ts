import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ButtonModule } from 'primeng/button';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private themeService: ThemeService) {}

  // Default values for theme & icon
  iconTheme = 'pi pi-sun';
  isLight = true;

  toggleTheme() {
    this.isLight = !this.isLight;
    this.themeService.switchTheme(this.isLight);
    this.isLight
      ? (this.iconTheme = 'pi pi-sun')
      : (this.iconTheme = 'pi pi-moon');
  }
}

import { Component } from '@angular/core';
import { ThemeService } from '../theme.service';
import { ButtonModule } from 'primeng/button';
import { RouterLinkWithHref } from '@angular/router';
import { SidebarModule } from 'primeng/sidebar';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [ButtonModule, RouterLinkWithHref, SidebarModule],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.scss',
})
export class NavbarComponent {
  constructor(private themeService: ThemeService) {}

  iconTheme = 'pi pi-sun';
  isLight = true;
  sidebarVisible: boolean = false;

  toggleTheme() {
    this.isLight = !this.isLight;
    this.themeService.switchTheme(this.isLight);
    this.isLight
      ? (this.iconTheme = 'pi pi-sun')
      : (this.iconTheme = 'pi pi-moon');
  }
}

import { DOCUMENT } from '@angular/common';
import { Inject, Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ThemeService {
  constructor(@Inject(DOCUMENT) private document: Document) {}

  switchTheme(isLight: boolean) {
    const darkTheme = 'lara-dark-indigo.css';
    const lightTheme = 'lara-light-indigo.css';

    const themeLink = this.document.getElementById(
      'app-theme'
    ) as HTMLLinkElement;

    if (themeLink) {
      isLight ? (themeLink.href = lightTheme) : (themeLink.href = darkTheme);
    }
  }
}

import { Injectable, Renderer2, RendererFactory2 } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface ThemeColors {
  background: string;
  text: string;
  accent: string;
  cardBg: string;
  secondaryText: string;
  progressBg: string;
}

const darkTheme: ThemeColors = {
  background: '#1a1a1a',
  text: '#ffffff',
  accent: '#4ecca3',
  cardBg: '#232323',
  secondaryText: '#8f8f8f',
  progressBg: '#2b2b2b'
};

const lightTheme: ThemeColors = {
  background: '#ffffff',
  text: '#1a1a1a',
  accent: '#2e8b6f',
  cardBg: '#f5f5f5',
  secondaryText: '#666666',
  progressBg: '#e0e0e0'
};


@Injectable({
  providedIn: 'root'
})
export class ThemeService {
  private renderer: Renderer2;
  private darkMode = new BehaviorSubject<boolean>(true);
  darkMode$ = this.darkMode.asObservable();

  constructor(rendererFactory: RendererFactory2) {
    this.renderer = rendererFactory.createRenderer(null, null);
    this.initializeTheme();
   }

   private initializeTheme(): void {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    const isDark = savedTheme === 'dark';
    this.darkMode.next(isDark);
    this.updateTheme(isDark);
  }

  toggleTheme(): void {
    const isDark = !this.darkMode.value;
    this.darkMode.next(isDark);
    this.updateTheme(isDark);
    localStorage.setItem('theme', isDark ? 'dark' : 'light');
  }
  private applyThemeColors(isDark: boolean): void {
    const colors = isDark ? darkTheme : lightTheme;
    Object.entries(colors).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--${key}`, value);
    });
  }
  
  // Modify your updateTheme method
  private updateTheme(isDark: boolean): void {
    if (isDark) {
      this.renderer.addClass(document.body, 'dark-theme');
      this.renderer.removeClass(document.body, 'light-theme');
    } else {
      this.renderer.addClass(document.body, 'light-theme');
      this.renderer.removeClass(document.body, 'dark-theme');
    }
    this.applyThemeColors(isDark);
  }

}

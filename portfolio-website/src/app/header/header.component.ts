import { Component, OnInit, Renderer2 } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import { ViewportScroller } from '@angular/common';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit{
  isDarkMode = true;
  isMobileMenuOpen = false;

  constructor(private renderer: Renderer2 , private themeService : ThemeService) { 
    this.themeService.darkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }
   scrollToSection(elementId: string): void {
    document.getElementById(elementId)?.scrollIntoView({
      behavior: 'smooth',
      block: 'start'
    });
  }

  ngOnInit(): void {
    this.setInitialTheme();
  }

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }

  toggleMobileMenu(): void {
    this.isMobileMenuOpen = !this.isMobileMenuOpen;
    if (this.isMobileMenuOpen) {
      this.renderer.addClass(document.body, 'no-scroll');
    } else {
      this.renderer.removeClass(document.body, 'no-scroll');
    }
  }

  private setInitialTheme(): void {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.isDarkMode = savedTheme === 'dark';
    this.renderer.addClass(document.body, `${savedTheme}-theme`);
  }
}

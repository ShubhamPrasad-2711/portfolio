import { AfterViewInit, Component, ElementRef, OnInit, Renderer2, ViewChild } from '@angular/core';
import { ThemeService } from '../services/theme.service';
import lottie from 'lottie-web';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [],
  templateUrl: './header.component.html',
  styleUrl: './header.component.scss'
})
export class HeaderComponent implements OnInit , AfterViewInit{
  @ViewChild('lottieContainer') lottieContainer!: ElementRef;

  ngAfterViewInit() {
    lottie.loadAnimation({
      container: this.lottieContainer.nativeElement,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      path: '../../assets/Hello-animation.json'
    });
  }

  
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

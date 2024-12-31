import { Component, Renderer2 } from '@angular/core';
import { ThemeService } from '../services/theme.service';

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  isDarkMode = true;
  constructor(private renderer: Renderer2 , private themeService : ThemeService){
    this.themeService.darkMode$.subscribe(
      isDark => this.isDarkMode = isDark
    );
  }

  ngOnInit(): void {
    this.setInitialTheme();
  }

  private setInitialTheme(): void {
    const savedTheme = localStorage.getItem('theme') || 'dark';
    this.isDarkMode = savedTheme === 'dark';
    this.renderer.addClass(document.body, `${savedTheme}-theme`);
  } 

  toggleTheme(): void {
    this.themeService.toggleTheme();
  }
  
  downloadResume() {
    const link = document.createElement('a');
    link.href = '../../assets/Shubham-CV.pdf'; 
    link.download = 'Shubham-Prasad_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  }

}

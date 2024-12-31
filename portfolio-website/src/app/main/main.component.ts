import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-main',
  standalone: true,
  imports: [],
  templateUrl: './main.component.html',
  styleUrl: './main.component.scss'
})
export class MainComponent implements OnInit, OnDestroy {
  currentText: string = '';
  private currentIndex = 0;
  private isDeleting = false;
  private typingSpeed = 100;
  private deletingSpeed = 50;
  private timer: any;

  readonly roles: string[] = [
    "Full Stack Developer",
    "Frontend Developer",
    "DevOps Engineer",
    "Web Developer"
  ];

  ngOnInit(): void {
    this.startTypewriter();
  }

  ngOnDestroy(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
  }

  private startTypewriter(): void {
    const currentRole = this.roles[this.currentIndex];
    const currentLength = this.currentText.length;

    if (!this.isDeleting && currentLength === currentRole.length) {
      // Pause at the end of typing
      this.timer = setTimeout(() => {
        this.isDeleting = true;
        this.typewriterEffect();
      }, 2000);
      return;
    }

    if (this.isDeleting && currentLength === 0) {
      this.isDeleting = false;
      this.currentIndex = (this.currentIndex + 1) % this.roles.length;
      // Pause before starting next word
      this.timer = setTimeout(() => {
        this.typewriterEffect();
      }, 500);
      return;
    }

    this.currentText = this.isDeleting 
      ? currentRole.substring(0, currentLength - 1)
      : currentRole.substring(0, currentLength + 1);

    const speed = this.isDeleting ? this.deletingSpeed : this.typingSpeed;
    
    this.timer = setTimeout(() => {
      this.typewriterEffect();
    }, speed);
  }

  private typewriterEffect(): void {
    if (this.timer) {
      clearTimeout(this.timer);
    }
    this.startTypewriter();
  }
}

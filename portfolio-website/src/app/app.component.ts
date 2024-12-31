import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from "./header/header.component";
import { MainComponent } from "./main/main.component";
import { AboutMeComponent } from "./about-me/about-me.component";
import { FooterComponent } from "./footer/footer.component";
import { WorkExperienceComponent } from "./work-experience/work-experience.component";
import { CertificationsComponent } from "./certifications/certifications.component";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, HeaderComponent, MainComponent, AboutMeComponent, FooterComponent, WorkExperienceComponent, CertificationsComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'portfolio-website';
}

import { Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { CertificationsComponent } from './certifications/certifications.component';
import { FooterComponent } from './footer/footer.component';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: MainComponent },
  { path: 'about', component: AboutMeComponent },
  { path: 'work', component: WorkExperienceComponent },
  { path: 'certifications', component: CertificationsComponent },
  { path: 'contact', component: FooterComponent },
  { path: '**', redirectTo: 'home' },
];

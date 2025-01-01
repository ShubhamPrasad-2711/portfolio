import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { 
    path: 'home',
    loadComponent: () => import('./main/main.component')
      .then(m => m.MainComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./about-me/about-me.component')
      .then(m => m.AboutMeComponent)
  },
  {
    path: 'work',
    loadComponent: () => import('./work-experience/work-experience.component')
      .then(m => m.WorkExperienceComponent)
  },
  {
    path: 'certifications',
    loadComponent: () => import('./certifications/certifications.component')
      .then(m => m.CertificationsComponent)
  },
  {
    path: 'contact',
    loadComponent: () => import('./footer/footer.component')
      .then(m => m.FooterComponent)
  },
  { path: '**', redirectTo: 'home' }
];


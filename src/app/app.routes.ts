import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import { ContactoComponent } from './contacto/contacto.component';
import { PortfolioComponent } from './Portfolio/portfolio.component';

export const routes: Routes = [
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'cv', component: CvComponent },
  { path: 'contacto', component: ContactoComponent },
  { path: '', redirectTo: '/portfolio', pathMatch: 'full' },
];

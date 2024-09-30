import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-pottafolio',
  standalone: true,
  imports: [MatCardModule],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.css'
})
export class PortfolioComponent {

  projects = [
    { title: 'Proyecto 1', description: 'Descripción del proyecto 1', link: 'http://example.com' },
    { title: 'Proyecto 2', description: 'Descripción del proyecto 2', link: 'http://example.com' }
  ];
}

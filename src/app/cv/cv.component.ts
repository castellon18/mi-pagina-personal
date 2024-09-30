import { Component } from '@angular/core';
import {MatCardModule} from '@angular/material/card';
import {MatButtonModule} from '@angular/material/button';

@Component({
  selector: 'app-cv',
  standalone: true,
  imports: [MatCardModule, MatButtonModule],
  templateUrl: './cv.component.html',
  styleUrl: './cv.component.css'
})
export class CvComponent {

}

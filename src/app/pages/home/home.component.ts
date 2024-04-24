import { Component } from '@angular/core';
import { StepsComponent } from '../../components/steps/steps.component';
import { FormsComponent } from '../../components/forms/forms.component';
@Component({
  selector: 'app-home',
  standalone: true,
  imports: [StepsComponent, FormsComponent],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css',
})
export class HomeComponent {}

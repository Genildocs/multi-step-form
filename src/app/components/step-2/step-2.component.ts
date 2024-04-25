import { Component } from '@angular/core';
import { FormTextComponent } from '../form-text/form-text.component';

@Component({
  selector: 'app-step-2',
  standalone: true,
  imports: [FormTextComponent],
  templateUrl: './step-2.component.html',
  styleUrl: './step-2.component.css',
})
export class Step2Component {}

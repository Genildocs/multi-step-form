import { Component, viewChild } from '@angular/core';
import { FormTextComponent } from '../form-text/form-text.component';

@Component({
  selector: 'app-step-1',
  standalone: true,
  imports: [FormTextComponent],
  templateUrl: './step-1.component.html',
  styleUrl: './step-1.component.css',
})
export class Step1Component {}

import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-form-text',
  standalone: true,
  imports: [],
  templateUrl: './form-text.component.html',
  styleUrl: './form-text.component.css',
})
export class FormTextComponent {
  @Input({ alias: 'title' }) title!: string;
  @Input({ alias: 'description' }) description: string = '';
}

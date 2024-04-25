import { Component } from '@angular/core';
import { RouterLink, RouterLinkActive } from '@angular/router';
@Component({
  selector: 'app-steps',
  standalone: true,
  imports: [RouterLink, RouterLinkActive],
  templateUrl: './steps.component.html',
  styleUrl: './steps.component.css',
})
export class StepsComponent {}

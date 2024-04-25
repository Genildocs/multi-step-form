import { Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { Step1Component } from './components/step-1/step-1.component';
import { Step2Component } from './components/step-2/step-2.component';

export const routes: Routes = [
  {
    path: '',
    title: 'Home',
    component: HomeComponent,
    children: [
      {
        path: 'step1',
        title: 'Home - Step-1',
        component: Step1Component,
      },
      {
        path: 'step2',
        title: 'Home - Step-2',
        component: Step2Component,
      },
    ],
  },
];

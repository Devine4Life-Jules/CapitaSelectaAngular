import { Routes } from '@angular/router';
import { FloorPlanComponent } from './components/floor-plan/floor-plan.component';
import { ReservationsComponent } from './components/reservations/reservations.component';
import { AboutComponent } from './components/about/about.component';

export const routes: Routes = [
  { path: '', component: FloorPlanComponent },
  { path: 'reservations', component: ReservationsComponent },
  { path: 'about', component: AboutComponent },
  { path: '**', redirectTo: '' }
];

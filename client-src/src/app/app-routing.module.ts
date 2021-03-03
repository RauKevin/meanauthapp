import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

/* My route imports */
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProfileComponent } from './components/profile/profile.component';
import { ScheduleAppointmentComponent } from './components/schedule-appointment/schedule-appointment.component';
import { ViewAppointmentComponent } from './components/view-appointment/view-appointment.component';
import { CalenderComponent } from './components/calender/calender.component';

/* Service imports */
import { AuthGuard } from './guards/auth.guard';
import { HelpComponent } from './components/help/help.component';

const routes: Routes = [
  {path:'register', component: RegisterComponent},
  {path:'login', component: LoginComponent},
  {path:'', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'dashboard', component: DashboardComponent, canActivate:[AuthGuard]},
  {path:'profile', component: ProfileComponent, canActivate:[AuthGuard]},
  {path:'generate', component: CalenderComponent, canActivate:[AuthGuard]},
  {path:'schedule', component: ScheduleAppointmentComponent, canActivate:[AuthGuard]},
  {path:'view', component: ViewAppointmentComponent, canActivate:[AuthGuard]},
  {path:'help', component: HelpComponent, canActivate:[AuthGuard]},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

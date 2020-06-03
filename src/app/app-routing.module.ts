import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { SexchooseComponent} from './sexchoose/sexchoose.component';
import { SearchSymptomComponent } from '../../search-symptom/search-symptom.component';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'diagnose',
    component: DiagnoseComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'gender-age',
    component: SexchooseComponent,
    canActivate: [AuthGuard]
  },
  {
    path:'symptom-choose',
    component: SearchSymptomComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

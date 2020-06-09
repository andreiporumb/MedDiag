import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { SexchooseComponent} from './sexchoose/sexchoose.component';
import { SearchSymptomComponent } from '../../search-symptom/search-symptom.component';
import { FormComponent} from './form.component';



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
  },
  {
    path:'form-question=1&sympthomId=2',
    component: FormComponent,
    canActivate: [AuthGuard]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

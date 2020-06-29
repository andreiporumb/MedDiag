import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AuthGuard } from './auth/auth.guard';
import { ProfileComponent } from './pages/profile/profile.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { SexchooseComponent} from './sexchoose/sexchoose.component';
import { SearchSymptomComponent } from '../../search-symptom/search-symptom.component';
import { FormComponent} from './form.component';
import { Form2Component} from './form2/form2.component';
import { Form3Component} from './form3/form3.component';
import { Form4Component} from './form4/form4.component';
import { Form5Component} from './form5/form5.component';
import { Form22Component} from './form22/form22.component';
import { Form222HeartAttackComponent} from './form222-heart-attack/form222-heart-attack.component';
import { Form222WetCoughComponent} from './form222-wet-cough/form222-wet-cough.component';
import { Form2222VeinsComponent} from './form2222-veins/form2222-veins.component';
import { Form2222FeverComponent} from './form2222-fever/form2222-fever.component';
import { SympthomRecapComponent} from './sympthom-recap/sympthom-recap.component';
import { DiagnosticComponent} from './diagnostic/diagnostic.component';
import { DiagnosticListComponent} from './diagnostic-list/diagnostic-list.component';
import { StatisticsComponent} from './statistics/statistics.component';


const routes: Routes = [
  {
    path: 'profile',
    component: ProfileComponent,
    //canActivate: [AuthGuard]
  },
  {
    path: '',
    component: HomeComponent,
    pathMatch: 'full'
  },
  {
    path:'diagnose',
    component: DiagnoseComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'gender-age',
    component: SexchooseComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'symptom-choose',
    component: SearchSymptomComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'form-question=1&sympthomId=2',
    component: FormComponent,
    //canActivate: [AuthGuard]
  }
  ,
  {
    path:'form-question=2&sympthomId=1',
    component: Form2Component,
    //canActivate: [AuthGuard]
  }
  ,
  {
    path:'form-question=2&sympthomId=2',
    component: Form3Component,
    //canActivate: [AuthGuard]
  }
  ,
  {
    path:'form-question=2&sympthomId=3',
    component: Form4Component,
    //canActivate: [AuthGuard]
  }
  ,
  {
    path:'form-question=2&sympthomId=4',
    component: Form5Component,
    //canActivate: [AuthGuard]
  }
  ,
  {
    path:'form-question=3&sympthomId=1',
    component: Form22Component,
    //canActivate: [AuthGuard]
  },
  {
    path:'form-question=4&sympthomId=1',
    component: Form222HeartAttackComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'form-question=4&sympthomId=2',
    component: Form222WetCoughComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'form-question=5&sympthomId=1',
    component: Form2222VeinsComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'form-question=5&sympthomId=2',
    component: Form2222FeverComponent,
    //canActivate: [AuthGuard]
  }
  ,
  {
    path:'sympthom-recap',
    component: SympthomRecapComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'diagnostic',
    component: DiagnosticComponent,
    //canActivate: [AuthGuard]
  }
  ,
  {
    path:'diagnostic-list',
    component: DiagnosticListComponent,
    //canActivate: [AuthGuard]
  },
  {
    path:'statistics',
    component: StatisticsComponent,
    //canActivate: [AuthGuard]
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

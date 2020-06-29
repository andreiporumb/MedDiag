import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HighlightModule } from 'ngx-highlightjs';
import json from 'highlight.js/lib/languages/json';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

import { AppRoutingModule } from './app-routing.module';
import { RouterModule, Routes } from '@angular/router';

import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeroComponent } from './components/hero/hero.component';
import { HomeContentComponent } from './components/home-content/home-content.component';
import { LoadingComponent } from './components/loading/loading.component';
import { DiagnoseComponent } from './diagnose/diagnose.component';
import { SexchooseComponent } from './sexchoose/sexchoose.component';
import { SearchSymptomComponent } from '../../search-symptom/search-symptom.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { FormsModule } from '@angular/forms';
import { FormComponent } from './form.component';
import { Form2Component } from './form2/form2.component';
import { Form3Component } from './form3/form3.component';
import { Form4Component } from './form4/form4.component';
import { Form5Component } from './form5/form5.component';
import { Form22Component } from './form22/form22.component';
import { Form222HeartAttackComponent } from './form222-heart-attack/form222-heart-attack.component';
import { Form222WetCoughComponent } from './form222-wet-cough/form222-wet-cough.component';
import { Form2222VeinsComponent } from './form2222-veins/form2222-veins.component';
import { Form2222FeverComponent } from './form2222-fever/form2222-fever.component';
import { SympthomRecapComponent } from './sympthom-recap/sympthom-recap.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { DiagnosticComponent } from './diagnostic/diagnostic.component';

import { AngularFireModule } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { DiagnosticListComponent } from './diagnostic-list/diagnostic-list.component';
import { StatisticsComponent } from './statistics/statistics.component';


export function hljsLanguages() {
  return [{ name: 'json', func: json }];
}

const appRoutes: Routes = [ { path: 'diagnose', component: DiagnoseComponent }];



@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ProfileComponent,
    NavBarComponent,
    FooterComponent,
    HeroComponent,
    HomeContentComponent,
    LoadingComponent,
    DiagnoseComponent,
    SexchooseComponent,
    SearchSymptomComponent,
    FormComponent,
    Form2Component,
    Form3Component,
    Form4Component,
    Form5Component,
    Form22Component,
    Form222HeartAttackComponent,
    Form222WetCoughComponent,
    Form2222VeinsComponent,
    Form2222FeverComponent,
    SympthomRecapComponent,
    DiagnosticComponent,
    DiagnosticListComponent,
    StatisticsComponent
  ],
  imports: [
    BrowserModule,
    AngularFireModule.initializeApp(environment.firebase),
 	  AngularFirestoreModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    Ng2SearchPipeModule,
    FormsModule,

    HighlightModule.forRoot({
      languages: hljsLanguages
    }),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    FontAwesomeModule,
    BrowserAnimationsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

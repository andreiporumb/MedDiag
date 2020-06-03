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
    SearchSymptomComponent
  ],
  imports: [
    BrowserModule,
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
    FontAwesomeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})


export class AppModule { }

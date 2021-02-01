import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from '../components/common/header/header.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { TeamsComponent } from '@components/teams/teams.component';
import { RouterModule } from '@angular/router';
import { ConferenceComponent } from '@components/conference/conference.component';
import { RootStoreModule } from '../root-store';
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    TeamsComponent,
    ConferenceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RootStoreModule,
    RouterModule,
    NgbModule,

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

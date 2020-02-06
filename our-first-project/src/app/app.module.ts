import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlaneBuilderService } from './services/plane-builder.service';
import { PlaneComponent } from './components/plane/plane.component';
import { BaseComponent } from './components/base/base.component';
import { WeaponHudComponent } from './components/plane/weapon-hud/weapon-hud.component';
import { MotorHudComponent } from './components/plane/motor-hud/motor-hud.component';
import { FlightHudComponent } from './components/plane/flight-hud/flight-hud.component';
import { ConfigHudComponent } from './components/plane/config-hud/config-hud.component';
import { PlaneStatsComponent } from './components/plane/plane-stats/plane-stats.component';
import { BaseStatsComponent } from './components/base/base-stats/base-stats.component';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    PlaneComponent,
    BaseComponent,
    WeaponHudComponent,
    MotorHudComponent,
    FlightHudComponent,
    ConfigHudComponent,
    PlaneStatsComponent,
    BaseStatsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule { }

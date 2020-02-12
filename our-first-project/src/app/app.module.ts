import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { PlaneComponent } from './components/plane/plane.component';
import { BaseComponent } from './components/base/base.component';
import { WeaponHudComponent } from './components/plane/weapon-hud/weapon-hud.component';
import { MotorHudComponent } from './components/plane/motor-hud/motor-hud.component';
import { FlightHudComponent } from './components/plane/flight-hud/flight-hud.component';
import { ConfigHudComponent } from './components/plane/config-hud/config-hud.component';
import { PlaneStatsComponent } from './components/plane/plane-stats/plane-stats.component';
import { BaseStatsComponent } from './components/base/base-stats/base-stats.component';

import { StoreModule } from '@ngrx/store';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';

import { RootStoreModule } from './root-store';
import { metaReducers, ROOT_REDUCERS } from './root-store/reducers';

import {FontAwesomeModule, FaIconLibrary} from '@fortawesome/angular-fontawesome';
import {faAngleDoubleLeft, faAngleDoubleRight} from '@fortawesome/free-solid-svg-icons';

import { environment } from '../environments/environment';

import { SharedModule } from './shared/shared.module';

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
    FontAwesomeModule,
    RootStoreModule,
    SharedModule,
    StoreModule.forRoot(ROOT_REDUCERS, {
      metaReducers,
      runtimeChecks: {
        strictStateImmutability: true,
        strictActionImmutability: true,
        strictStateSerializability: true,
        strictActionSerializability: true
      }
    }),
    StoreDevtoolsModule.instrument({
      maxAge: 25,
      logOnly: environment.production
    }),
    !environment.production ? StoreDevtoolsModule.instrument() : [],
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor(library: FaIconLibrary) {
    library.addIcons(faAngleDoubleLeft);
    library.addIcons(faAngleDoubleRight);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EffectsModule } from '@ngrx/effects';
import { StoreDevtoolsModule } from '@ngrx/store-devtools';
import { environment } from '../../environments/environment';
import { HelpStoreModule } from './help-store/help-store.module';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    HelpStoreModule,
    EffectsModule.forFeature([]),
    !environment.production ? StoreDevtoolsModule.instrument() : []
  ]
})
export class RootStoreModule { }

import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { EffectsModule } from '@ngrx/effects';
import { StoreModule } from '@ngrx/store';
import { reducers } from './store/reducers';
import { NgbButtonsModule, NgbAlertModule, NgbTooltipModule, NgbPopoverModule } from '@ng-bootstrap/ng-bootstrap';


@NgModule({
  imports: [
    CommonModule,
    HttpClientModule,
    FontAwesomeModule,
    FormsModule,
    ReactiveFormsModule,
    NgbButtonsModule,
    NgbPopoverModule,
    NgbTooltipModule,
    StoreModule.forFeature('shared', reducers),
    EffectsModule.forFeature([]),
    NgbAlertModule,
    EffectsModule.forRoot([]),
  ],
  declarations: [],
  exports: [],
  entryComponents: []
})
export class SharedModule { }

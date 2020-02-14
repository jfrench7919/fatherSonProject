import { createAction, props } from '@ngrx/store';
import { BaseModel, IBase } from 'src/app/models/base.model';

export const setBases = createAction(
  '[Bases] Set Bases',
  props<{bases: BaseModel[]}>()
);

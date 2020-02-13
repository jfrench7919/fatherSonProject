import { createAction, props } from '@ngrx/store';
import { BaseModel, IBase } from 'src/app/models/base.model';

export const setSelectedBase = createAction(
  '[Selected Base] Set Selected Base',
  props<{ base: BaseModel }>()
);


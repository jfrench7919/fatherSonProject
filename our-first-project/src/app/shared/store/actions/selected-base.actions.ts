import { createAction, props } from '@ngrx/store';
import { BaseModel, IBase } from 'src/app/models/base.model';

export const setSelectedBase = createAction(
  '[selectedBase] Set Selected Base',
  props<{enemyBase: BaseModel}>()
);

import { createAction, props } from '@ngrx/store';
import { PlaneModel } from 'src/app/models/plane.model';

export const setPlanes = createAction(
  '[Planes] Set Planes',
  props<{planes: PlaneModel[]}>()
);

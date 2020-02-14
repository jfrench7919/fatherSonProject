import { createReducer, on } from '@ngrx/store';
import { PlaneActions } from '../actions';
import { PlaneModel } from 'src/app/models/plane.model';

// State

export interface State {
  planes: PlaneModel[] | null;
}

export const initialState: State = {
  planes: []
};

// Reducer

export const reducer = createReducer(
  initialState,
  on(PlaneActions.setPlanes, (state, { planes }) => ({...state, planes: planes })),
);

// Selectors

export const getPlanes = (state: State) => state.planes;

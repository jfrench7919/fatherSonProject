import { createReducer, on } from '@ngrx/store';
import { SelectedBaseActions } from '../actions';
import { BaseModel, IBase } from 'src/app/models/base.model';

// State

export interface State {
  base: BaseModel | null;
}

export const initialState: State = {
  base: null
};

// Reducer

export const reducer = createReducer(
  initialState,
  on(SelectedBaseActions.setSelectedBase, (state, { base }) => ({ ...state, base: base })),
);

// Selectors

export const getSelectedBase = (state: State) => state.base;

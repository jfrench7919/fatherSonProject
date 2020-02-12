import { createReducer, on } from '@ngrx/store';
import { SelectedBaseActions } from '../actions';
import { Base, IBase } from 'src/app/models/base.model';

// State

export interface State {
  base: IBase | null;
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

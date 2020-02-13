import { createReducer, on } from '@ngrx/store';
import { SelectedBaseActions } from '../actions';
import { BaseModel, IBase } from 'src/app/models/base.model';

// State

export interface State {
  enemyBase: BaseModel | null;
}

export const initialState: State = {
  enemyBase: null
};

// Reducer

export const reducer = createReducer(
  initialState,
  on(SelectedBaseActions.setSelectedBase, (state, { enemyBase }) => ({...state, enemyBase: enemyBase })),
);

// Selectors

export const getSelectedBase = (state: State) => state.enemyBase;

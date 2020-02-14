import { createReducer, on } from '@ngrx/store';
import { BaseActions } from '../actions';
import { BaseModel, IBase } from 'src/app/models/base.model';

// State

export interface State {
  bases: BaseModel[] | null;
}

export const initialState: State = {
  bases: []
};

// Reducer

export const reducer = createReducer(
  initialState,
  on(BaseActions.setBases, (state, { bases }) => ({...state, bases: bases })),
);

// Selectors

export const getBases = (state: State) => state.bases;

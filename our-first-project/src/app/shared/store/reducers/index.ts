import { combineReducers, createFeatureSelector, createSelector, Action } from '@ngrx/store';
import * as fromSelectedBase from './selected-base.reducer';
import { RootState } from '../../models/root-state';

export interface SharedState {
  selectedBase: fromSelectedBase.State;
}

// Include SharedState in root state
export interface State extends RootState {
  shared: SharedState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: SharedState | undefined, action: Action): SharedState {
  return combineReducers({
    selectedBase: fromSelectedBase.reducer,
  })(state, action);
}

/**
 * The createFeatureSelector function selects a piece of state
 * from the root of the state object. It is used for selecting
 * feature states that are loaded eagerly or lazily.
 */
export const getSharedState = createFeatureSelector<State, SharedState>('shared');

// UserSelectedCoi State

export const getSelectedBaseState = createSelector(
  getSharedState,
  state => state.selectedBase
);

export const getSelectedBase = createSelector(
  getSelectedBaseState,
  fromSelectedBase.getSelectedBase
);


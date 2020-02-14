import { combineReducers, createFeatureSelector, createSelector, Action } from '@ngrx/store';
import * as fromBase from './base.reducer';
import * as fromPlane from './plane.reducer';
import { RootState } from '../../models/root-state';

export interface SharedState {
  base: fromBase.State;
  plane: fromPlane.State;
}

// Include SharedState in root state
export interface State extends RootState {
  shared: SharedState;
}

/** Provide reducer in AoT-compilation happy way */
export function reducers(state: SharedState | undefined, action: Action): SharedState {
  return combineReducers({
    base: fromBase.reducer,
    plane: fromPlane.reducer,
  })(state, action);
}

/**
 * The createFeatureSelector function selects a piece of state
 * from the root of the state object. It is used for selecting
 * feature states that are loaded eagerly or lazily.
 */
export const getSharedState = createFeatureSelector<State, SharedState>('shared');

export const getBaseState = createSelector(
  getSharedState,
  state => state.base
);

export const getBases = createSelector(
  getBaseState,
  fromBase.getBases
);

export const getPlaneState = createSelector(
  getSharedState,
  state => state.plane
);

export const getPlanes = createSelector(
  getPlaneState,
  fromPlane.getPlanes
);


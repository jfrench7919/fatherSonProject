import {
  ActionReducer,
  ActionReducerMap,
  createFeatureSelector,
  createSelector,
  MetaReducer
} from '@ngrx/store';
import { environment } from '../../../../environments/environment';

// tslint:disable-next-line: no-empty-interface
export interface State {

}

export const helpReducers: ActionReducerMap<State> = {

};


export const helpMetaReducers: MetaReducer<State>[] = !environment.production ? [] : [];

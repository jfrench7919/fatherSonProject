import { InjectionToken } from '@angular/core';
import { ActionReducerMap, Action, MetaReducer, ActionReducer } from '@ngrx/store';
import { environment } from 'src/environments/environment';

// tslint:disable-next-line: no-empty-interface
export interface State { }

export const ROOT_REDUCERS = new InjectionToken<
  ActionReducerMap<State, Action>
>('Root reducers token', {
  factory: () => ({
  })
});

export function logger(reducer: ActionReducer<State>): ActionReducer<State> {
  return (state, action) => {
    const result = reducer(state, action);
    return result;
  };
}

export const metaReducers: MetaReducer<State>[] = !environment.production ? [logger] : [];

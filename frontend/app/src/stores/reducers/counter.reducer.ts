import { Action } from '@ngrx/store';
import { ActionType } from '~/stores/actions/counter.action';

export const instalState: number = 0; // 初期値

export function counterReducer(state = instalState, action: Action) {
  switch (action.type) {
    case ActionType.Increment:
      return state + 1;
    default:
      return state;
  }
}

import { Action } from '@ngrx/store';

export enum ActionType {
  Increment = 'Counter Increment',
}

export class Increment implements Action {
  readonly type: string = ActionType.Increment;
}

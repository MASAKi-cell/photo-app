import { Action } from '@ngrx/store';

export enum SessionActionTypes {
  LoadSessions = '[Session] Load',
  LoginSessions = '[Session] Login',
  LogoutSessions = '[Session] Logout',
}

export class LoadSessions implements Action {
  readonly type = SessionActionTypes.LoadSessions;
}

export class LoginSessions implements Action {
  readonly type = SessionActionTypes.LoginSessions;
}

export class LogoutSessions implements Action {
  readonly type = SessionActionTypes.LogoutSessions;
}

export type SessionActions = LoadSessions | LoginSessions | LogoutSessions;

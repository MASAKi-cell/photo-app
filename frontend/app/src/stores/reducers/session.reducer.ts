import {
  SessionActions,
  SessionActionTypes,
} from '@/stores/actions/session.action';

/**
 * state
 */
export interface State {
  session: { login: boolean };
}

/**
 * 初期値
 */
export const initialState: State = {
  session: { login: false },
};

export function reducer(state = initialState, action: SessionActions): State {
  switch (action.type) {
    case SessionActionTypes.LoginSessions: {
      return { ...state };
    }
    case SessionActionTypes.LoginSessions: {
      return { session: { login: true } };
    }
    case SessionActionTypes.LogoutSessions: {
      return { session: { login: false } };
    }
    default:
      return state;
  }
}

export const getSession = (state: State) => state.session;

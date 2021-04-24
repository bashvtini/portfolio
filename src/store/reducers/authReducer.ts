import { AnyAction } from "redux";

import { AUTH_LOADING } from "../actions/types";

export interface AuthReducerState {
  loading: boolean;
  isAuthenticated: boolean;
}

const initialState: AuthReducerState = {
  loading: true,
  isAuthenticated: false,
};

const authReducer = (state = initialState, { type }: AnyAction) => {
  switch (type) {
    case AUTH_LOADING:
      return { ...state, loading: false };

    default:
      return state;
  }
};

export default authReducer;

import type {
  InitialState,
  FormReducer,
  HandleDispatch,
  UseForm,
  HandleDispatcher,
} from "./type";

import { useReducer } from "react";

const initialState = {
  id: "",
  password: "",
} as InitialState;

const reducer: FormReducer = (state, action) => ({
  ...state,
  [action.type]: action.payload,
});

export const dispatcher: HandleDispatcher = (callBack, type) => (event) => {
  callBack({
    type,
    payload: event.currentTarget.value,
  });
};

export const useForm = (): UseForm => {
  const [state, dispatch] = useReducer(reducer, initialState);
  console.log({ state });

  const handleDispatch: HandleDispatch = (type) => (event) => {
    dispatch({
      type,
      payload: event.currentTarget.value,
    });
  };

  return {
    state,
    handleDispatch,
  };
};

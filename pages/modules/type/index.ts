import type { ChangeEventHandler } from "react";

export type InitialState = {
  id: string;
  password: string;
};

export type HandleChange = ChangeEventHandler<HTMLInputElement>;
export type HandleDispatch = (type: keyof InitialState) => HandleChange;
export type FormReducer = (state: InitialState, action: any) => InitialState;
export type UseForm = {
  state: InitialState;
  handleDispatch: HandleDispatch;
};

type CallBackProps = {
  type: keyof InitialState;
  payload: string;
};

export type HandleDispatcher = (
  callBack: (value: CallBackProps) => void,
  type: keyof InitialState
) => HandleChange;

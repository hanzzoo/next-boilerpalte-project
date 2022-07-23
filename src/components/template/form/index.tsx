import type { FC } from "react";

import { createContext, useReducer } from "react";
import { useForm } from "../../../../pages/modules/useForm";

import { InputText } from "../../atoms/InputText";

export const FormTemplate: FC = () => {
  const { state, handleDispatch } = useForm();

  return (
    <div>
      <InputText handleDispatch={handleDispatch} type="id" />
    </div>
  );
};

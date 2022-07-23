import type { FC } from "react";
import { HandleDispatch, InitialState } from "../../../../pages/modules/type";

type Props = {
  handleDispatch: HandleDispatch;
  type: keyof InitialState;
};

export const InputText: FC<Props> = (props) => {
  const { handleDispatch, type } = props;
  return (
    <div>
      input
      <input type="text" role="textbox" onChange={handleDispatch(type)} />
    </div>
  );
};

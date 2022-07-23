import type { ComponentStoryObj, Meta } from "@storybook/react";
import type { ComponentProps } from "react";

import { InputText } from ".";
import { useForm } from "../../../../pages/modules/useForm";

type InputTextType = typeof InputText;
type InputTextStory = ComponentStoryObj<InputTextType>;

const meta: Meta<ComponentProps<InputTextType>> = {
  component: InputText,
};
export default meta;

export const Default = () => {
  const { handleDispatch } = useForm();

  return <InputText type="id" handleDispatch={handleDispatch} />;
};

import Yup from "./validation";

export const ToolsValid = () =>
  Yup.object().shape({
    name: Yup.string().required().min(6),
    gender: Yup.string().required(),
    surname: Yup.string().required().min(6),
  });

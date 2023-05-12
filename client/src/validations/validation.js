import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Bu alan doldurulması gerek bir alandır",
  },
  string: {
    min: "Bu alan minimum ${min} karakter olmalıdır",
    max: "Bu alan maximum ${max} karakter olmalıdır",
  },
});

export default Yup;

import * as Yup from "yup";

Yup.setLocale({
  mixed: {
    required: "Bu alan doldurulması gerek bir alandır",
  },
  string: {
    min: "Bu alan minimum ${min} karakter olmalıdır",
    max: "Bu alan maximum ${max} karakter olmalıdır",
    email: "Geçerli bir email giriniz.",
  },
});

export default Yup;

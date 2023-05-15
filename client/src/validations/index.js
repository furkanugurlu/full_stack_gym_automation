import Yup from "./validation";

export const ToolsValid = () =>
  Yup.object().shape({
    name: Yup.string().required().min(6),
    gender: Yup.string().required(),
    surname: Yup.string().required().min(6),
  });

export const CategoriesValidation = () =>
  Yup.object().shape({
    kategoriAdi: Yup.string().required().min(6),
  });

export const ToolsValidation = () =>
  Yup.object().shape({
    esyaAdi: Yup.string().required(),
    seriNo: Yup.string().required(),
    marka: Yup.string().required(),
    fiyat: Yup.number()
      .typeError("Fiyat alanı sayısal bir değer olmalıdır.")
      .required(),
  });

export const MemberValidation = () =>
  Yup.object().shape({
    ad: Yup.string().required(),
    soyad: Yup.string().required(),
    tcNO: Yup.string()
      .matches(/^\d{11}$/, "Telefon numarası geçerli değil")
      .required(),
    mail: Yup.string().email().required(),
    telNO: Yup.string()
      .matches(/^\d{10}$/, "Telefon numarası geçerli değil")
      .required(),
    dogumTarihi: Yup.date()
      .typeError("Doğum tarihi xxxx-xx-xx şekline olmak zorundadır")
      .max(new Date(), "Doğum tarihi gelecekte olamaz!")
      .required(),
    adres: Yup.string().required(),
    cinsiyet: Yup.string().required(),
    paket: Yup.string(),
    ant: Yup.string(),
  });

export const BranchesValidation = () =>
  Yup.object().shape({
    bransAdi: Yup.string().required(),
    kategoriID: Yup.string().required(),
  });

export const PackageValidation = () =>
  Yup.object().shape({
    paketAdi: Yup.string().required(),
    kategoriID: Yup.string().required(),
    gun: Yup.number()
      .typeError("Fiyat alanı sayısal bir değer olmalıdır.")
      .required(),
    ucret: Yup.number()
      .typeError("Fiyat alanı sayısal bir değer olmalıdır.")
      .required(),
  });

export const CoachValidation = () =>
  Yup.object().shape({
    adi: Yup.string().required(),
    soyadi: Yup.string().required(),
    tcNo: Yup.string()
      .matches(/^\d{11}$/, "Telefon numarası geçerli değil")
      .required(),
    mail: Yup.string().email().required(),
    telNo: Yup.string()
      .matches(/^\d{10}$/, "Telefon numarası geçerli değil")
      .required(),
    dogumTarihi: Yup.date()
      .typeError("Doğum tarihi xxxx-xx-xx şekline olmak zorundadır")
      .max(new Date(), "Doğum tarihi gelecekte olamaz!")
      .required(),
    adres: Yup.string().required(),
    sifre: Yup.string()
      .required("Şifre alanı zorunludur")
      .min(8, "Şifreniz en az 8 karakter uzunluğunda olmalıdır"),

    confirmPassword: Yup.string()
      .oneOf([Yup.ref("sifre"), null], "Şifreler uyuşmuyor")
      .required("Şifre doğrulama alanı zorunludur"),
  });

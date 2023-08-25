import * as yup from "yup";

// error messages
export const errorsEnum = {
  required: "این فیلد باید پر شود",
  notType: "ورودی این فیلد معتبر نیست",
  justPersian: "این فیلد باید با کاراکتر های فارسی پر شود",
  mobile: "فرمت موبایل صحیح نیست",
  min: "این فیلد باید حداقل ${min} کاراکتر باشد",
  max: "این فیلد باید حداکثر ${max} کاراکتر باشد",
  password: "رمز عبور باید از حداقل یک عدد، یک حرف لاتین بزرگ و یک حرف لاتین کوچک پر شود",
};

//regex
export const JUST_PERSIAN_REGEX = /^[\u0600-\u06FF\uFB8A\u067E\u0686\u06AF\u200C\u200F ]+$/;
export const MOBILE_REGEX = /^09\d{9}$/g;
export const PASSWORD_REGEX = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])/;

// Yup configuration
yup.setLocale({
  mixed: {
    notType: errorsEnum.notType,
    required: errorsEnum.required,
  },
  string: {
    min: errorsEnum.min,
    max: errorsEnum.max,
  },
});

// validations
export const registerValidation = yup.object({
  firstName: yup.string().required().matches(JUST_PERSIAN_REGEX, errorsEnum.justPersian),
  lastName: yup.string().required().matches(JUST_PERSIAN_REGEX, errorsEnum.justPersian),
  mobile: yup.string().required().matches(MOBILE_REGEX, errorsEnum.mobile),
  password: yup.string().required().min(4).max(10).matches(PASSWORD_REGEX, errorsEnum.password),
});

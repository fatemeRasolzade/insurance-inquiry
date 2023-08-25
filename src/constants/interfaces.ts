import {
  FieldValues,
  UseFormGetValues,
  UseFormWatch,
  UseFormGetFieldState,
  Control,
  UseFormSetFocus,
  UseFormSetError,
  UseFormSetValue,
  FormState,
  UseFormReset,
  UseFormUnregister,
  UseFormClearErrors,
  UseFormTrigger,
  UseFormResetField,
  UseFormRegister,
  UseFormHandleSubmit,
} from "react-hook-form";

export type UseFormReturn<TFieldValues extends FieldValues = FieldValues, TContext = any> = {
  watch: UseFormWatch<TFieldValues>;
  getValues: UseFormGetValues<TFieldValues>;
  getFieldState: UseFormGetFieldState<TFieldValues>;
  setError: UseFormSetError<TFieldValues>;
  clearErrors: UseFormClearErrors<TFieldValues>;
  setValue: UseFormSetValue<TFieldValues>;
  trigger: UseFormTrigger<TFieldValues>;
  formState: FormState<TFieldValues>;
  resetField: UseFormResetField<TFieldValues>;
  reset: UseFormReset<TFieldValues>;
  handleSubmit: UseFormHandleSubmit<TFieldValues>;
  unregister: UseFormUnregister<TFieldValues>;
  control: Control<TFieldValues, TContext>;
  register: UseFormRegister<TFieldValues>;
  setFocus: UseFormSetFocus<TFieldValues>;
};


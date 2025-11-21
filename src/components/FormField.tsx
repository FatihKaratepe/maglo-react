import { cn } from '@/utils';
import * as React from 'react';
import {
  Controller,
  useFormContext,
  type Control,
  type ControllerFieldState,
  type ControllerRenderProps,
  type FieldPath,
  type FieldValues,
  type UseFormReturn,
  type UseFormStateReturn,
} from 'react-hook-form';

type RHFControl<T extends FieldValues> = Control<T, unknown, T>;
type RHFReturn<T extends FieldValues> = UseFormReturn<T, unknown, T>;

export const FormLabel = ({
  children,
  required = false,
  requiredClassName,
  labelClassName,
  htmlFor,
}: {
  requiredClassName?: string;
  labelClassName?: string;
  children: React.ReactNode;
  required?: boolean;
  htmlFor?: string;
}) => {
  return (
    <label htmlFor={htmlFor} className={cn('font-medium text-sm text-text-1', labelClassName)}>
      {children}
      {required && <small className={cn('text-brand-600 ml-1 text-sm', requiredClassName)}>*</small>}
    </label>
  );
};

export type RenderProps<TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>> = {
  field: ControllerRenderProps<TFieldValues, TName>;
  fieldState: ControllerFieldState;
  formState: UseFormStateReturn<TFieldValues>;
  hasError: boolean;
  isSuccess: boolean;
  inputId: string;
};

export interface IFormFieldProps<
  TFieldValues extends FieldValues = FieldValues,
  TName extends FieldPath<TFieldValues> = FieldPath<TFieldValues>
> {
  name: TName;
  required?: boolean;
  label?: string;
  control?: RHFControl<TFieldValues>;
  render: (props: RenderProps<TFieldValues, TName>) => React.ReactNode;

  validateStatus?: 'error' | 'success';
  hideDefaultMessage?: boolean;
  validMessage?: boolean | { message: React.ReactNode };
  showValidationMessage?: boolean;

  wrapperClassName?: string;
  className?: string;
  labelClassname?: string;
  messageClassname?: string;
  requiredClassName?: string;

  disabled?: boolean;
}

export const FormField = <TFieldValues extends FieldValues, TName extends FieldPath<TFieldValues>>({
  name,
  control: controlProp,
  required = false,
  label,
  validMessage = false,
  showValidationMessage = true,
  hideDefaultMessage = false,
  wrapperClassName,
  className,
  labelClassname,
  messageClassname,
  render,
  requiredClassName,
  disabled,
  ...restProps
}: IFormFieldProps<TFieldValues, TName>) => {
  const ctx = useFormContext<TFieldValues>() as RHFReturn<TFieldValues> | undefined;
  const control = (controlProp ?? ctx?.control) as RHFControl<TFieldValues> | undefined;

  if (!control) {
    throw new Error(
      'FormField: control bulunamadı. Bu bileşeni ya <FormProvider> / <Form> içinde kullanın ya da control prop’u geçin.'
    );
  }

  const inputId = React.useId();

  return (
    <div className={cn('flex flex-col gap-2.5', wrapperClassName)}>
      {label && (
        <FormLabel
          required={required}
          requiredClassName={requiredClassName}
          labelClassName={labelClassname}
          htmlFor={inputId}
        >
          {label}
        </FormLabel>
      )}

      <Controller<TFieldValues, TName>
        control={control}
        name={name}
        disabled={disabled}
        render={({ field, fieldState, formState }) => {
          const hasError = !!fieldState.error;
          const isSuccess = formState.isSubmitted && !hasError && !!field.value;
          const status = hasError ? 'error' : isSuccess ? 'success' : undefined;

          const getMessage = () => {
            if (hideDefaultMessage) return null;
            if (hasError) return fieldState.error?.message;
            if (isSuccess && validMessage) {
              if (typeof validMessage === 'object' && validMessage?.message) return validMessage.message;
              return 'Başarılı';
            }
            return '';
          };

          return (
            <div className={cn('flex flex-col gap-2', className)}>
              {render({ field, fieldState, formState, hasError, isSuccess, inputId })}
              {showValidationMessage && (
                <span
                  data-validate-status={status}
                  className={cn('text-xs', status === 'error' ? 'text-red-600' : 'text-green-600', messageClassname)}
                >
                  {getMessage()}
                </span>
              )}
            </div>
          );
        }}
        {...restProps}
      />
    </div>
  );
};

import type { FormikForm } from "@/pages/contact";
import { Field, useFormikContext } from "formik";
import { type FunctionComponent } from "react";

interface FormInputProps {
  label?: string;
  name: keyof FormikForm;
  as?: string;
}

export const FormInput: FunctionComponent<FormInputProps> = ({
  label,
  name,
  as,
}) => {
  const { isSubmitting, errors } = useFormikContext<FormikForm>();
  return (
    <div className="flex flex-col gap-2">
      <label className="font-helvetica text-sm capitalize 2xl:text-base">
        {label ?? name}
      </label>

      <Field
        as={as ?? "input"}
        className={`font-helvetica text-xs 2xl:text-base ${as === "textarea" ? "min-h-[70px] resize-none 2xl:min-h-[100px]" : ""} border border-black/50 bg-[#f1f3f4] p-2`}
        name={name}
        id={name}
        disabled={isSubmitting}
      />

      {errors[name] && (
        <p className="self-end text-right text-xs italic text-red-600">
          {errors[name]}
        </p>
      )}
    </div>
  );
};

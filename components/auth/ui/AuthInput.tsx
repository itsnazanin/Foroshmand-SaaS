"use client"

import { forwardRef , InputHTMLAttributes } from "react";

type AuthInputProps = InputHTMLAttributes<HTMLInputElement> & {
    label: string;
    error?: string;
}


const AuthInput = forwardRef<HTMLInputElement, AuthInputProps>(
  ({ label, error, ...props }, ref) => {
    return (
      <div className="flex flex-col gap-2">

        <label>{label}</label>

        <input
          ref={ref}
          {...props}
          className="rounded-[48px] input py-3 pr-4"
        />

        {error && (
          <span className="text-red-500">
            {error}
          </span>
        )}

      </div>
    );
  }
);

AuthInput.displayName = "AuthInput";

export default AuthInput;
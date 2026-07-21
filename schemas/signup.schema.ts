import { z } from "zod";

export const signupSchema = z.object({
    identifier: z.string().min(1, "شماره موبایل الزامی است").regex(/^0?[۰۹][۰-۹0-9]{9}$/, "شماره موبایل وارد شده نامعتبر است")
})
export type SignupFormData = z.infer<typeof signupSchema>;
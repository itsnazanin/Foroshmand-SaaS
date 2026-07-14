import { z } from "zod";

export const signupSchema = z.object({
    phone: z.string().min(1, "شماره موبایل الزامی است").regex(/^09\d{9}$/, "شماره موبایل وارد شده نامعتبر است")
})
export type SignupFormData = z.infer<typeof signupSchema>;
import { z } from "zod";

export const forgotPasswordSchema = z.object({
  phone: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^09\d{9}$/, "شماره موبایل معتبر نیست"),
});

export type ForgotPasswordFormData = z.infer<
  typeof forgotPasswordSchema
>;
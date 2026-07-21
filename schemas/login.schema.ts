import { z } from "zod";

export const loginSchema = z.object({
    phone: z
    .string()
    .min(1, "شماره موبایل الزامی است")
    .regex(/^0?[۰۹][۰-۹0-9]{9}$/, "شماره موبایل وارد شده نامعتبر است"),

    password: z
    .string()
    .min(1, "رمز عبور الزامی است")
    .min(8, "رمز عبور باید حداقل ۸ کاراکتر باشد")

})
export type LoginFormData = z.infer<typeof loginSchema>;
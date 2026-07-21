"use client"

import { useForm } from "react-hook-form"
import { zodResolver } from "@hookform/resolvers/zod"
import { signupSchema , SignupFormData } from "@/schemas/signup.schema"

export function useSignupForm () {
 return useForm<SignupFormData>({
    resolver: zodResolver(signupSchema),
    defaultValues: {
        identifier: ""
    }
 })
}
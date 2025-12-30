import { z } from "zod";

export const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

export const contactFormSchema = z.object({
    name: z
        .string()
        .trim()
        .min(2, "Name must be at least 2 characters long")
        .max(100, "Name is too long"),
    email: z
        .string()
        .trim()
        .toLowerCase()
        .email("Please provide a valid email address"),
    phone: z
        .string()
        .trim()
        .min(10, "Phone number must be at least 10 digits")
        .regex(phoneRegex, "Please provide a valid phone number"),
    businessType: z
        .string()
        .min(1, "Please select a business type"),
    message: z
        .string()
        .trim()
        .min(10, "Message must be at least 10 characters long")
        .max(2000, "Message is too long"),
});

export type ContactFormData = z.infer<typeof contactFormSchema>;

export const validBusinessTypes = ["salon", "restaurant", "gym", "retail", "clinic", "other"] as const;

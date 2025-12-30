"use client";

import { useState } from "react";
import { Send } from "lucide-react";
import { Button, Input, Textarea, Select } from "@/components/common";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "@/components/ui/ToastProvider";

const phoneRegex = /^[\+]?[(]?[0-9]{1,3}[)]?[-\s\.]?[(]?[0-9]{1,4}[)]?[-\s\.]?[0-9]{1,4}[-\s\.]?[0-9]{1,9}$/;

const formSchema = z.object({
  name: z
    .string()
    .min(2, "Name must be at least 2 characters long")
    .max(100, "Name is too long"),
  email: z.string().email("Please provide a valid email address"),
  phone: z
    .string()
    .regex(phoneRegex, "Please provide a valid phone number"),
  businessType: z.string().min(1, "Please select a business type"),
  message: z
    .string()
    .min(10, "Message must be at least 10 characters long")
    .max(2000, "Message is too long"),
});

type FormData = z.infer<typeof formSchema>;

export default function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const { register, handleSubmit, formState: { errors }, reset, setError } = useForm<FormData>({
    resolver: zodResolver(formSchema),
    mode: "onBlur",
  });

  const { toast } = useToast();

  const onSubmit = async (data: FormData) => {
    setIsSubmitting(true);
    setErrorMessage("");

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      const result = await response.json();

      if (response.ok) {
        setSubmitStatus("success");
        reset();
        toast({
          type: "success",
          title: "Message sent",
          description: "Thank you! We'll get back to you within 24 hours.",
        });
        setTimeout(() => setSubmitStatus("idle"), 3000);
      } else {
        setSubmitStatus("error");
        const msg = result?.error || "Something went wrong";
        if (result?.field) {
          setError(result.field as keyof FormData, { message: msg });
        }
        setErrorMessage(msg);
        toast({ type: "error", title: "Submission failed", description: msg });
      }
    } catch (error) {
      setSubmitStatus("error");
      setErrorMessage("Failed to send message. Please try again.");
      toast({ type: "error", title: "Network error", description: "Failed to send message. Please try again." });
      console.error("Form submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="bg-white px-5 py-8 sm:p-10 rounded-2xl border-2 border-gray-100 shadow-lg w-full">
      <h2 className="text-2xl font-bold text-wave-navy mb-6">
        Send us a Message
      </h2>

      <form onSubmit={handleSubmit(onSubmit)} className="space-y-6" noValidate>
        <Input
          id="name"
          {...register("name")}
          label="Your Name"
          type="text"
          placeholder="John Doe"
          error={errors.name?.message}
        />

        <Input
          id="email"
          {...register("email")}
          label="Email Address"
          type="email"
          placeholder="john@example.com"
          error={errors.email?.message}
        />

        <Input
          id="phone"
          {...register("phone")}
          label="Phone Number"
          type="tel"
          placeholder="+91 95674 64435"
          error={errors.phone?.message}
        />

        <Select
          id="businessType"
          {...register("businessType")}
          label="Business Type"
          placeholder="Select your business type"
          options={[
            { value: "salon", label: "Salon / Beauty Parlor" },
            { value: "restaurant", label: "Restaurant / Food Shop" },
            { value: "gym", label: "Gym / Fitness Center" },
            { value: "retail", label: "Retail Shop" },
            { value: "clinic", label: "Clinic / Healthcare" },
            { value: "other", label: "Other" },
          ]}
          error={errors.businessType?.message}
        />

        <Textarea
          id="message"
          {...register("message")}
          label="Your Message"
          placeholder="Tell us about your project requirements..."
          error={errors.message?.message}
        />

        {submitStatus === "success" && (
          <div className="p-4 bg-green-50 border-2 border-green-200 rounded-lg text-green-800 text-sm">
            ✓ Thank you! We'll get back to you within 24 hours.
          </div>
        )}

        {submitStatus === "error" && (
          <div className="p-4 bg-red-50 border-2 border-red-200 rounded-lg text-red-800 text-sm">
            ✗ {errorMessage || "Something went wrong. Please try again or contact us directly."}
          </div>
        )}

        <Button
          type="submit"
          variant="primary"
          size="lg"
          isLoading={isSubmitting}
          className="w-full"
        >
          {!isSubmitting && (
            <>
              <Send className="w-5 h-5 mr-2" />
              Send Message
            </>
          )}
        </Button>
      </form>
    </div>
  );
}

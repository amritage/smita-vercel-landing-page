// Environment variable validation and type safety
import { z } from "zod"

const envSchema = z.object({
  // Next.js
  NODE_ENV: z.enum(["development", "production", "test"]).default("development"),
  NEXT_PUBLIC_APP_URL: z.string().url().optional(),

  // Contact Information
  NEXT_PUBLIC_COMPANY_PHONE: z.string().optional(),
  NEXT_PUBLIC_COMPANY_EMAIL: z.string().email().optional(),
  NEXT_PUBLIC_WHATSAPP_NUMBER: z.string().optional(),

  // Analytics
  NEXT_PUBLIC_GA_MEASUREMENT_ID: z.string().optional(),
  NEXT_PUBLIC_GTM_ID: z.string().optional(),
  NEXT_PUBLIC_FACEBOOK_PIXEL_ID: z.string().optional(),

  // Email Services
  RESEND_API_KEY: z.string().optional(),
  SENDGRID_API_KEY: z.string().optional(),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.string().optional(),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),

  // Database
  DATABASE_URL: z.string().optional(),
  NEXT_PUBLIC_SUPABASE_URL: z.string().url().optional(),
  NEXT_PUBLIC_SUPABASE_ANON_KEY: z.string().optional(),
  SUPABASE_SERVICE_ROLE_KEY: z.string().optional(),

  // Security
  NEXTAUTH_SECRET: z.string().optional(),
  NEXTAUTH_URL: z.string().url().optional(),

  // Monitoring
  NEXT_PUBLIC_SENTRY_DSN: z.string().optional(),
  SENTRY_AUTH_TOKEN: z.string().optional(),
})

export const env = envSchema.parse(process.env)

// Helper functions for environment checks
export const isProduction = env.NODE_ENV === "production"
export const isDevelopment = env.NODE_ENV === "development"
export const isTest = env.NODE_ENV === "test"

// Validate required production environment variables
export function validateProductionEnv() {
  if (isProduction) {
    const requiredVars = [
      "NEXT_PUBLIC_APP_URL",
      "NEXT_PUBLIC_COMPANY_PHONE",
      "NEXT_PUBLIC_COMPANY_EMAIL",
      "NEXT_PUBLIC_WHATSAPP_NUMBER",
    ]

    const missing = requiredVars.filter((varName) => !process.env[varName])

    if (missing.length > 0) {
      throw new Error(`Missing required environment variables for production: ${missing.join(", ")}`)
    }
  }
}

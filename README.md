# Thira - Building Digital Presence for Local Businesses

Thira is a modern, responsive web application built with Next.js 16, designed to help local businesses across Kerala establish a professional digital presence. From salons to restaurants and gyms, Thira provides custom-tailored web solutions.

## 🌊 Ride the Wave of Growth

Thira focuses on mobile-first design, high performance, and seamless user experiences using state-of-the-art animations.

## ✨ Features

- **Responsive Design**: Mobile-first architecture ensures a perfect look on all devices.
- **GSAP Animations**: Fluid, premium animations for hero sections, scroll reveals, and page transitions.
- **Modern UI/UX**: Clean aesthetics using Tailwind CSS 4.
- **Gmail API Integration**: Secure OAuth2-powered email delivery for contact forms.
- **Contact Forms**: Integrated lead generation with validation (Zod + React Hook Form).
- **Direct WhatsApp Integration**: Floating contact buttons and quick-action links.
- **SEO Optimized**: Built-in SEO best practices using dedicated metadata configurations.

## 🛠️ Tech Stack

- **Framework**: [Next.js 16 (App Router)](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Email/API**: [Google Gmail API](https://developers.google.com/gmail/api) via OAuth2
- **Styling**: [Tailwind CSS 4](https://tailwindcss.com/)
- **Animations**: [GSAP](https://greensock.com/gsap/) with `@gsap/react`
- **Icons**: [Lucide React](https://lucide.dev/)
- **Forms**: [React Hook Form](https://react-hook-form.com/) & [Zod](https://zod.dev/)
- **Email**: [Resend](https://resend.com/)

## 🚀 Getting Started

### Prerequisites

- Node.js 18.x or higher
- npm or pnpm

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Zallu4435/thira.git
   cd thira
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Set up environment variables:
   Copy `.env.example` to `.env.local` and fill in your keys:
   ```bash
   cp .env.example .env.local
   ```

4. Run the development server:
   ```bash
   npm run dev
   ```
   Open [http://localhost:3000](http://localhost:3000) in your browser.

## 📦 Project Structure

- `src/app`: Page routes and layouts.
- `src/components`: Reusable UI components.
  - `animations/`: GSAP-powered motion components.
  - `common/`: Base building blocks like Buttons, Cards, and Containers.
  - `layout/`: Global elements like Header and Footer.
  - `sections/`: High-level page sections (Hero, Services, CTA).
- `src/lib`: Utilities, constants, and shared types.
- `public/`: Static assets (images, icons).

## 📄 Scripts

- `npm run dev`: Starts the development server with Turbopack.
- `npm run build`: Creates an optimized production build.
- `npm run start`: Starts the production server.
- `npm run lint`: Runs ESLint for code quality checks.
- `npm run type-check`: Validates TypeScript types.

## 📧 Contact

**Email**: hello@thira.in  
**WhatsApp**: +91 95674 64435  
**Location**: Malappuram, Kerala, India

---

Developed with ❤️ by the Thira Team.

# AID-CONNECT

A humanitarian NGO website prototype built with Next.js, TypeScript, and Tailwind CSS. This website showcases programs supporting vulnerable communities in Ethiopia including disability support, education, healthcare, and emergency aid.

## Features

- **Modern Design**: Clean, professional, and humanitarian-focused UI
- **Responsive**: Mobile-friendly design that works on all devices
- **Fast**: Built with Next.js App Router for optimal performance
- **Accessible**: Designed with accessibility best practices
- **Demo-Ready**: Includes functional forms and interactive elements

## Pages

- **Home**: Hero section, mission statement, statistics, featured programs, testimonials
- **About**: Organization story, vision/mission, core values, team profiles
- **Programs**: Detailed program cards for disability support, education, healthcare, etc.
- **Donate**: Donation form with amount selection and payment UI
- **Volunteer**: Volunteer registration form with skills and availability selection
- **Contact**: Contact form, NGO information, and map placeholder
- **Admin Dashboard**: Demo dashboard showing NGO management metrics

## Tech Stack

- **Framework**: Next.js 16 with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Deployment**: Vercel-ready

## Getting Started

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Run the development server**:
   ```bash
   npm run dev
   ```

3. **Open your browser** to [http://localhost:3000](http://localhost:3000)

## Project Structure

```
aid-connect/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Home page
│   ├── about/page.tsx     # About page
│   ├── programs/page.tsx  # Programs page
│   ├── donate/page.tsx    # Donate page
│   ├── volunteer/page.tsx # Volunteer page
│   ├── contact/page.tsx   # Contact page
│   ├── admin/page.tsx     # Admin dashboard
│   └── layout.tsx         # Root layout
├── components/            # Reusable React components
│   ├── Navbar.tsx         # Navigation bar
│   ├── Footer.tsx         # Footer
│   ├── HeroSection.tsx    # Hero section component
│   ├── SectionTitle.tsx   # Section title component
│   ├── StatCard.tsx       # Statistics card
│   ├── ProgramCard.tsx    # Program display card
│   ├── TestimonialCard.tsx# Testimonial card
│   └── CTASection.tsx     # Call-to-action section
├── public/               # Static assets
└── package.json          # Dependencies and scripts
```

## Deployment

This project is configured for easy deployment on Vercel:

1. Push your code to GitHub
2. Connect your repository to Vercel
3. Deploy automatically

The build command is `npm run build` and the output directory is `.next`.

## Notes

- This is a **prototype/demo** website with mock data only
- Forms are functional UI but don't submit real data
- Images use placeholder text/icons instead of actual images
- All components include beginner-friendly comments
- The admin dashboard shows demo metrics and data

## Learn More

- [Next.js Documentation](https://nextjs.org/docs)
- [Tailwind CSS Documentation](https://tailwindcss.com/docs)
- [TypeScript Handbook](https://www.typescriptlang.org/docs/)

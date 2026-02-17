<!-- Edmass School Management System - Project Guidelines -->

## Project Overview
Edmass is a comprehensive Next.js frontend application for school management with registration, dashboard, and multiple management modules.

## Project Technology Stack
- **Framework**: Next.js 16+ with App Router
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Framework**: React 19
- **Package Manager**: npm

## Project Structure Guidelines
- All pages are in `src/app/`
- Public-facing pages (landing, registration) are at root level
- App pages are under `src/app/app/` with shared layout
- Reusable components are in `src/components/`
- All pages use TypeScript (`.tsx`)

## Development Guidelines
- Use `'use client'` directive for interactive components
- Use Next.js Link for navigation (not anchor tags)
- Use Next.js Image component for images
- Follow Tailwind CSS utility classes for styling
- Maintain responsive design (mobile-first approach)
- Use TypeScript for type safety

## Key Features to Maintain
- Registration flow with form validation
- Shared sidebar navigation across app pages
- Dashboard with statistics cards
- Multiple management modules:
  - Schools
  - Teachers
  - Students
  - Attendance
  - Subjects
  - Scoresheet
  - School Calendar
  - Bursary

## Common Tasks
- To add a new page: Create file in `src/app/app/<feature>/page.tsx`
- To create a component: Add to `src/components/` folder
- To modify styling: Use Tailwind CSS classes
- To update navigation: Edit Sidebar component in `src/components/Sidebar.tsx`

## Build and Deploy
- Development: `npm run dev`
- Production build: `npm run build`
- Start production: `npm run start`
- Lint code: `npm run lint`

## Next Steps
- Install dependencies: `npm install`
- Run development server: `npm run dev`
- Access application at http://localhost:3000
- Connect to backend API when ready

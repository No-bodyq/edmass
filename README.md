# Edmass - School Management System

Edmass is a comprehensive school management system built with Next.js, React, and Tailwind CSS. It provides a modern and efficient solution for managing school operations including student records, teacher management, attendance tracking, scoresheets, and financial management.

## Features

### 🎓 Core Features
- **User Authentication**: Registration and login flows with role-based access
- **Dashboard**: Interactive dashboard with key metrics and recent activity
- **Student Management**: Complete student records management with grades and enrollment
- **Teacher Management**: Teacher profiles, subject assignments, and contact information
- **School Management**: Multi-school support with location tracking
- **Attendance Tracking**: Daily attendance marking with status tracking (Present, Absent, Late)
- **Subject Management**: Subject listing with teacher assignments and student enrollment
- **Scoresheet**: Grade management and academic performance tracking
- **School Calendar**: Events calendar with holidays and important dates
- **Bursary System**: Payment tracking, fee management, and financial reporting

### 🎨 UI/UX Features
- Responsive design that works on mobile, tablet, and desktop
- Collapsible sidebar navigation
- Modern Tailwind CSS styling
- Intuitive user interface with clear navigation
- Status indicators and visual feedback

## Project Structure

```
edmass/
├── src/
│   ├── app/
│   │   ├── page.tsx                 # Landing page
│   │   ├── register/
│   │   │   └── page.tsx             # Registration page
│   │   ├── app/
│   │   │   ├── layout.tsx           # App layout with sidebar
│   │   │   ├── dashboard/
│   │   │   │   └── page.tsx         # Dashboard page
│   │   │   ├── schools/
│   │   │   │   └── page.tsx         # Schools management
│   │   │   ├── teachers/
│   │   │   │   └── page.tsx         # Teachers management
│   │   │   ├── students/
│   │   │   │   └── page.tsx         # Students management
│   │   │   ├── attendance/
│   │   │   │   └── page.tsx         # Attendance tracking
│   │   │   ├── subjects/
│   │   │   │   └── page.tsx         # Subjects management
│   │   │   ├── scoresheet/
│   │   │   │   └── page.tsx         # Scoresheet management
│   │   │   ├── school-calendar/
│   │   │   │   └── page.tsx         # School calendar
│   │   │   └── bursary/
│   │   │       └── page.tsx         # Bursary management
│   ├── components/
│   │   └── Sidebar.tsx              # Sidebar navigation component
│   ├── layout.tsx                   # Root layout
│   └── globals.css                  # Global styles
├── package.json
├── tsconfig.json
├── tailwind.config.ts
├── next.config.ts
└── postcss.config.mjs
```

## Getting Started

### Prerequisites
- Node.js 18+ 
- npm or yarn package manager

### Installation

1. Navigate to the project directory:
```bash
cd edmass
```

2. Install dependencies:
```bash
npm install
```

### Running the Development Server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the landing page.

### Navigation Flow

1. **Landing Page** (`/`) - Introduction and navigation to registration or dashboard
2. **Registration** (`/register`) - Create a new account
3. **Dashboard** (`/app/dashboard`) - Main application hub with overview
4. **Management Pages** - Access various management modules from the sidebar:
   - Schools
   - Teachers
   - Students
   - Attendance
   - Subjects
   - Scoresheet
   - School Calendar
   - Bursary

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## Technologies Used

- **Framework**: Next.js 16+
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI**: React Components
- **Routing**: Next.js App Router
- **Linting**: ESLint

## Future Enhancements

- Backend API integration
- User authentication with JWT
- Database integration (PostgreSQL/MongoDB)
- Real-time notifications
- Export to PDF/Excel functionality
- Advanced analytics and reporting
- Mobile app version
- Payment gateway integration

## Contributing

Feel free to submit issues and enhancement requests!

## License

This project is open source and available under the MIT License.

This project uses [`next/font`](https://nextjs.org/docs/app/building-your-application/optimizing/fonts) to automatically optimize and load [Geist](https://vercel.com/font), a new font family for Vercel.

## Learn More

To learn more about Next.js, take a look at the following resources:

- [Next.js Documentation](https://nextjs.org/docs) - learn about Next.js features and API.
- [Learn Next.js](https://nextjs.org/learn) - an interactive Next.js tutorial.

You can check out [the Next.js GitHub repository](https://github.com/vercel/next.js) - your feedback and contributions are welcome!

## Deploy on Vercel

The easiest way to deploy your Next.js app is to use the [Vercel Platform](https://vercel.com/new?utm_medium=default-template&filter=next.js&utm_source=create-next-app&utm_campaign=create-next-app-readme) from the creators of Next.js.

Check out our [Next.js deployment documentation](https://nextjs.org/docs/app/building-your-application/deploying) for more details.

# Doctor Appointment Manager — Frontend

A web application for browsing doctors, viewing detailed profiles, and booking appointments online. Built with Next.js (App Router) and deployed on Vercel.

**Live site:** [doctor-apoint.vercel.app](https://doctor-apoint.vercel.app)

## Features

- 🔍 Browse a directory of doctors with specialty, hospital, and availability info
- 👨‍⚕️ View detailed doctor profiles (experience, consultation fee, bio, available time slots)
- 📅 Book appointments directly from a doctor's profile
- 🔐 Authentication via Google OAuth (Better Auth)
- 📱 Responsive UI built with HeroUI components

## Tech Stack

- **Framework:** [Next.js](https://nextjs.org/) (App Router, Server Components)
- **UI Library:** [HeroUI](https://heroui.com/) (`@heroui/react`)
- **Authentication:** [Better Auth](https://www.better-auth.com/) with Google OAuth
- **Styling:** Tailwind CSS
- **Deployment:** [Vercel](https://vercel.com/)

## Getting Started

### Prerequisites

- Node.js 18+
- npm / yarn / pnpm
- A running instance of the [backend server](#) (see backend README)

### Installation

```bash
git clone https://github.com/<your-username>/doctor-apoint-app.git
cd doctor-apoint-app
npm install
```

### Environment Variables

Create a `.env.local` file in the project root:

```env
BETTER_AUTH_SECRET=your-random-secret
BETTER_AUTH_URL=http://localhost:3000
MONGODB_URI=your-mongodb-connection-string
GOOGLE_CLIENT_ID=your-google-client-id
GOOGLE_CLIENT_SECRET=your-google-client-secret
NEXT_PUBLIC_SERVER_URL=http://localhost:5000
```

> ⚠️ Never commit `.env.local` or any file containing real secrets. Add it to `.gitignore`.

### Run the development server

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Build for production

```bash
npm run build
npm run start
```

## Project Structure

```
app/
├── doctors/
│   ├── page.jsx          # Doctors listing page
│   └── [id]/
│       └── page.jsx      # Doctor details page (Server Component)
├── lib/
│   └── actions.js         # Server actions (fetch doctors, book appointments)
├── layout.js               # Root layout + global metadata
components/
└── BookApoinmentForm.jsx  # Appointment booking form
```

## Deployment

This project is deployed on **Vercel**. On push to the main branch, Vercel automatically builds and deploys the app.

Make sure the following environment variables are set in **Vercel → Project Settings → Environment Variables**:

| Variable | Description |
|---|---|
| `BETTER_AUTH_SECRET` | Secret used to sign auth sessions |
| `BETTER_AUTH_URL` | Deployed frontend URL (e.g. `https://doctor-apoint.vercel.app`) |
| `MONGODB_URI` | MongoDB connection string used by Better Auth |
| `GOOGLE_CLIENT_ID` | Google OAuth client ID |
| `GOOGLE_CLIENT_SECRET` | Google OAuth client secret |
| `NEXT_PUBLIC_SERVER_URL` | URL of the deployed backend API (Render) |

## Related Repositories

- [Backend API (Express + MongoDB)](#)

## License

This project is licensed under the MIT License.

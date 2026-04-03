# 🏨 The Wild Oasis — Hotel Management Dashboard

> An internal hotel management system for staff to manage cabins, bookings, and guests — built with React and Supabase.

![React](https://img.shields.io/badge/React-18-61DAFB?logo=react&logoColor=white)
![Vite](https://img.shields.io/badge/Vite-5-646CFF?logo=vite&logoColor=white)
![JavaScript](https://img.shields.io/badge/JavaScript-ES6+-F7DF1E?logo=javascript&logoColor=black)
![Supabase](https://img.shields.io/badge/Supabase-Backend-3ECF8E?logo=supabase&logoColor=white)
![TailwindCSS](https://img.shields.io/badge/Tailwind-CSS-06B6D4?logo=tailwindcss&logoColor=white)

---

## 📌 Overview

The Wild Oasis is a full-featured, internal-facing hotel dashboard application. It enables hotel staff to manage cabin inventory, track bookings, handle check-ins and check-outs, and monitor business performance through a real-time analytics dashboard.

This project demonstrates proficiency in React application architecture, state management with React Query, and backend integration with Supabase (PostgreSQL + Auth + Storage).

---

## ✨ Features

- 🔐 **Authentication** — Secure staff login with Supabase Auth; only hotel employees can access the system
- 🛖 **Cabin Management** — Create, update, delete, and view all cabins with photo uploads
- 📅 **Booking Management** — Full CRUD for guest bookings with check-in/check-out status tracking
- 👤 **Guest Check-in / Check-out** — Real-time status updates for arriving and departing guests
- 📊 **Dashboard Analytics** — Visual sales charts, occupancy stats, and recent activity feed
- 🌙 **Dark Mode** — Full light/dark theme toggle persisted across sessions
- ⚙️ **App Settings** — Configure breakfast pricing, min/max booking length, and max guests per booking

---

## 🛠️ Tech Stack

| Layer | Technology |
|---|---|
| Frontend Framework | React 18 |
| Build Tool | Vite |
| Styling | Styled Components / Tailwind CSS |
| State Management | React Query (TanStack Query) |
| Routing | React Router v6 |
| Backend / Database | Supabase (PostgreSQL) |
| Auth | Supabase Auth |
| File Storage | Supabase Storage |
| Charts | Recharts |
| Forms | React Hook Form |

---

## 🚀 Getting Started

### Prerequisites

- Node.js v18+
- A [Supabase](https://supabase.com) account and project

### Installation

```bash
# Clone the repository
git clone https://github.com/dennis-dentrix/the-wild-oasis.git
cd the-wild-oasis

# Install dependencies
npm install
```

### Environment Variables

Create a `.env.local` file in the root directory:



### Run Development Server

```bash
npm run dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## 📁 Project Structure

```
src/
├── features/           # Feature-based modules (cabins, bookings, dashboard, auth)
│   ├── cabins/
│   ├── bookings/
│   ├── check-in-out/
│   ├── dashboard/
│   └── settings/
├── services/           # Supabase API calls (apiCabins, apiBookings, etc.)
├── ui/                 # Reusable UI components (Button, Modal, Table, etc.)
├── hooks/              # Custom React hooks
├── context/            # Global context providers (DarkMode)
├── pages/              # Route-level page components
└── utils/              # Helper functions
```


## 🧠 Key Concepts Demonstrated

- **Feature-based folder architecture** for scalable React apps
- **React Query** for server-state management, caching, and background refetching
- **Compound component pattern** for reusable, flexible UI components
- **Supabase Row Level Security (RLS)** for data access control
- **Optimistic UI updates** for a snappy user experience

---

## 📄 License

MIT © [Denis Kyusya](https://github.com/dennis-dentrix)

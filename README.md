# Invest Applet

Invest Applet is a **Next.js + React** web application prototype for a simple, beginner-friendly investing experience. It explores a flow from onboarding and verification through investment actions, a personal dashboard, transactions, and withdrawal.

> **Project status:** Frontend prototype. Payment, verification, UPI, and investment actions are simulated locally for demonstration purposes; this repository does not contain a production backend or real payment integration.

## Highlights

- Responsive landing page with product information and investing education.
- Onboarding flows for login, signup, account setup, Aadhaar verification, and UPI setup.
- Investment dashboard with portfolio and returns visualizations.
- Lump-sum investment flow with local state and success feedback.
- Round-up investment setup for micro-investing preferences.
- Transaction history with filters and simulated transaction data.
- Investment and withdrawal screens.
- Reusable React components and asset-driven UI.
- Chart visualizations using Chart.js and react-chartjs-2.

## Tech Stack

- **Next.js 15**
- **React 19**
- **JavaScript**
- **Tailwind CSS**
- **Material UI Icons / Emotion**
- **Chart.js + react-chartjs-2**

## Getting Started

```bash
npm install
npm run dev
```

Open **http://localhost:3000** in your browser.

For a production build:

```bash
npm run build
npm start
```

## Project Structure

```text
src/
├── app/          # Next.js application routes and pages
├── assets/       # Images, GIFs, illustrations and branding
└── components/   # Reusable React components

public/
└── videos/       # Public video assets
```

## Notes

This project is intended as a UI/interaction prototype rather than a production financial service. Several flows use simulated data and browser-side state. Do not use it with real financial credentials, payment information, or identity documents.

## Author

**Leela Krishna**

GitHub: https://github.com/leelakrishnacmyk

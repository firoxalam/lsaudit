# Lok Sabha Audit (LS-Audit)

![Official Performance Audit Banner](https://images.unsplash.com/photo-1590644365607-1c5a21966531?auto=format&fit=crop&q=80&w=2000)

## Overview
**Lok Sabha Audit** is a high-performance, data-driven investigative tool designed to track and visualize the performance of Indian Parliamentary Representatives (MPs). Built with a "Government Dossier meets Modern Newspaper" aesthetic, it provides citizens with a transparent, unsealable index of legislative participation.

Created by **Firoz Alam**.

## Key Features
- **Performance Indexing**: Dynamic grading system based on attendance, questions raised, and legislative history.
- **Dossier Interface**: Specialized UI using thermal-paper textures, mono-space typography, and archival aesthetics.
- **Analytical Insights**: Unsealable data analytics section showing state-wise performance and wealth distribution.
- **Cross-Referencing**: Compare up to 3 MPs side-by-side to analyze performance gaps.
- **Interactive Search**: Real-time filtering by MP name, constituency, or political affiliation.

## Tech Stack
- **Frontend**: React 18, Vite
- **Styling**: Tailwind CSS (JIT Engine)
- **Animations**: Framer Motion
- **Icons**: Lucide React
- **Typography**: Inter (UI), Space Grotesk (Display), JetBrains Mono (Technical)

## Data Sources
This project aggregates data from various verified public archives:
- **PRS Legislative Research**: Attendance and participation metrics.
- **Myneta.info / ADR**: Financial disclosures and legal declarations.
- **Lok Sabha Digital Portal**: Official parliamentary records.

## Methodology
Grades are calculated using a weighted performance algorithm:
- **Legislative Presence (30%)**: Attendance frequency in the 18th Session.
- **Inquiry Volume (40%)**: Total questions and debates initiated.
- **Asset Transparency**: Portfolio disclosure context.
- **Legal Adjustments**: Deductions applied for criminal declarations to reflect the "Audit" nature.

## Development

```bash
# Install dependencies
npm install

# Run development server (port 3000)
npm run dev

# Build for production
npm run build
```

## Security Notice
This application is a transparency tool. All data is sourced from public records and is subject to official verification.

---
© 2026 Firoz Alam • The Parliamentary Audit Project

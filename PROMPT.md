# LS-Audit Project Specification & Prompt

## Core Concept
**Lok Sabha Audit (LS-Audit)** is an investigative performance index designed to provide granular transparency into the legislative activities of the 18th Lok Sabha. It adopts a "Government Dossier" aesthetic, moving away from generic political dashboards towards a high-fidelity, archival investigative interface.

## Branding & Visual Language
- **Project Identity**: Archivist/Investigative Reporter.
- **Aesthetic**: Thermal-paper textures, mono-space typography (JetBrains Mono), and brutalist archival designs.
- **Key Visual Elements**: 
  - "Rubber Stamp" grading indicators (A, B, C, D, F).
  - High-contrast monochrome backgrounds with primary red accents (#e11d48).
  - Micro-animations for card expansions and data unsealing.

## Data Integrity Protocol
- **Entities**: Parliamentary Representatives (MPs).
- **Primary Metrics**:
  - **Legislative Presence**: Attendance percentage in the current session.
  - **Inquiry Volume**: Total questions raised (oral and written).
  - **Legal Integrity**: Declarations of criminal cases (weighted penalty in grading).
  - **Asset Disclosure**: Net asset disclosures in Crores (INR).
- **Weighted Grading (ls-grade-v1)**:
  - Attendance (30%)
  - Participation/Questions (30%)
  - Debate Participation (40%)
  - Penalty: -10 points per criminal case.

## System Prompts for Maintenance
When updating this repository, adhere to the following:
1. **Maintain the Mood**: Every UI element must feel like part of a classified document. Use labels like "QUERY PROTOCOL", "UNSEAL DATA", and "ARCHIVE NO.".
2. **Data Accuracy**: Prioritize confirmed data from PRS, ECI, and Myneta. Mark estimates as "Uncertain/Verified Pending".
3. **Responsive Archiving**: Ensure the grid maintains high information density on desktop while remaining legible on mobile dossiers.
4. **Author Credit**: Ensure "Firoz Alam" is attributed as the Project Architect.

## Published State
- **URL**: [Preview Link provided in session]
- **Release Version**: 1.0.0 (Post-Monsoon Session Audit)
- **Security Check**: PASS
- **Performance Leak Check**: PASS

# Alison Website

Frontend prototype for **Kibble Ferrier Consulting**.

## Design decisions

- **Layout and hierarchy:** Pages use a simple top-down structure (hero/introduction, core content blocks, CTA) to make navigation predictable and reduce cognitive load. Repeated section rhythm and card patterns help users quickly scan content.
- **Color system:** The palette centers on `#44617c` (primary actions, links, emphasis) and `#ecf6f5` (soft surfaces and calming backgrounds), with high-contrast text tones for readability.
- **Typography and spacing:** Inter is used for clean legibility, with generous line-height, restrained heading scales, and whitespace-driven grouping so content feels calm and uncluttered.
- **Reusable components:** A shared header, footer, CTA panel pattern, button styles, cards, and highlight blocks are reused across all pages via shared CSS and a common JS shell component.
- **Accessibility-first choices:** Focus-visible states, semantic HTML structure, descriptive alt text, readable paragraph widths, and mobile-first responsive layouts support neurodivergent-friendly and accessible browsing.
- **Interaction style:** Interactions are intentionally subtle (hover/focus feedback and light elevation) to avoid overstimulation while still signaling affordances.

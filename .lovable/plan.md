
Goal: fix the footer “Download Resume” button so the text is clearly visible against the dark footer background.

What’s happening now:
- The footer uses a dark background (`bg-foreground`) with light text (`text-primary-foreground`).
- The button is using `variant="outline"`, which injects `bg-background` (light fill).
- The recent override sets `text-background`, which is also light.
- Result: light text on a light button fill, so the label disappears (matching your screenshot).

Implementation plan:
1) Update the footer button styling in `src/components/FooterSection.tsx`
- Keep the button as `variant="outline"` for border structure.
- Replace the current class override with a dark-surface-safe override:
  - `bg-transparent`
  - `text-primary-foreground`
  - `border-primary-foreground/40`
  - `hover:bg-primary-foreground/10`
  - `hover:text-primary-foreground`
- This explicitly overrides the outline variant’s light background and keeps contrast readable.

2) Keep icon + text inheritance intact
- No structure change needed for the `<a>` inside `<Button asChild>`.
- The icon will inherit text color via current button/anchor inheritance, so icon and label stay visible together.

3) Validate visually and interaction-wise
- Confirm footer button label is readable at rest and on hover.
- Confirm click still downloads `/Nick_Heldmann_Resume.pdf`.
- Quick responsive check (desktop + mobile width) to ensure contrast remains good on all breakpoints.

Technical notes:
- File to change: `src/components/FooterSection.tsx`
- No changes required in `src/components/ui/button.tsx` (global variant behavior should remain untouched to avoid side effects across the app).
- This is a targeted, low-risk fix scoped only to the problematic footer instance.



# Resume Site Enhancements

## 1. Scroll-in Animations for All Sections
Add a reusable `useScrollReveal` hook using the Intersection Observer API (no extra dependencies). Each section will fade in and slide up as it enters the viewport.

- Create a custom hook `src/hooks/useScrollReveal.ts`
- Add fade-in keyframes to `tailwind.config.ts`
- Apply the animation class to each section component (Skills, Experience, Education, Achievements)

## 2. Smooth Hover Effects on Cards
Enhance all Card components across Experience, Education, and Achievements with lift + shadow transitions on hover.

- Add `hover:-translate-y-1 hover:shadow-lg transition-all duration-300` to cards in:
  - `ExperienceSection.tsx`
  - `EducationSection.tsx`
  - `AchievementsSection.tsx`
- Also add hover color accent to skill badges in `SkillsSection.tsx`

## 3. Typing Animation on Hero
Add a typing effect to the tagline in the hero section, character by character.

- Create a `useTypingEffect` hook in `src/hooks/useTypingEffect.ts`
- Apply it to the subtitle text in `HeroSection.tsx`
- Include a blinking cursor that disappears after typing completes

## 4. Dark Mode Toggle
Add a theme toggle button in the navigation bar.

- Install/use `next-themes` (already installed) for theme management
- Wrap the app in a `ThemeProvider` in `App.tsx`
- Add a Sun/Moon toggle button to `Navigation.tsx` (desktop and mobile)
- The existing CSS variables for `.dark` are already defined in `index.css`, so it will work out of the box

## 5. Richer Experience Descriptions
Expand the experience entries with more detail and bullet points where appropriate.

- Update the `experiences` array in `ExperienceSection.tsx` with additional accomplishments and responsibilities
- Optionally convert single description strings to arrays of bullet points for better readability
- Update the card rendering to support bullet-point lists

## Files to Create
- `src/hooks/useScrollReveal.ts`
- `src/hooks/useTypingEffect.ts`

## Files to Modify
- `src/App.tsx` — wrap with ThemeProvider
- `src/components/Navigation.tsx` — add dark mode toggle
- `src/components/HeroSection.tsx` — typing animation on tagline
- `src/components/ExperienceSection.tsx` — hover effects, richer descriptions with bullets
- `src/components/EducationSection.tsx` — hover effects, scroll reveal
- `src/components/AchievementsSection.tsx` — hover effects, scroll reveal
- `src/components/SkillsSection.tsx` — hover on badges, scroll reveal
- `tailwind.config.ts` — add fade-in/slide-up keyframes


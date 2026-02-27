import { useScrollReveal } from "@/hooks/useScrollReveal";

const skillGroups = [
  {
    label: "Tech & Tools",
    skills: [
      "Microsoft Office",
      "Excel",
      "PowerPoint",
      "Google Docs",
      "Google Sheets",
      "Google Slides",
      "Google Calendar",
    ],
  },
  {
    label: "Communication",
    skills: [
      "Zoom",
      "Microsoft Teams",
      "Google Meet",
      "Phone Skills",
      "Email Skills",
      "Social Media Management",
    ],
  },
  {
    label: "Professional",
    skills: [
      "Project Management",
      "Team Management",
      "Communication Skills",
      "Time Management",
      "Customer Service",
    ],
  },
];

export function SkillsSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="skills" className="py-20 px-6 bg-card/50" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Skills
        </h2>

        <div className="grid md:grid-cols-3 gap-8">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <h3
                className="text-sm font-semibold text-primary uppercase tracking-wider mb-4"
                style={{ fontFamily: "'DM Sans', sans-serif" }}
              >
                {group.label}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className="text-sm px-3 py-1.5 rounded-full bg-accent text-accent-foreground border border-border/50 hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

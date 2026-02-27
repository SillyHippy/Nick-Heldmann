import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const experiences = [
  {
    title: "Concessions Worker",
    company: "Tulsa Drillers",
    dates: "March 2024 – Present",
    bullets: [
      "Serve customers while demonstrating quality customer service skills at the Home Plate hot food stand.",
      "Maintain an organized and clean workspace during high-traffic game days.",
      "Cover multiple stations as needed, including cash register, food prep, and stocking.",
      "Handle cash and card transactions accurately under time pressure.",
    ],
  },
  {
    title: "Team Member",
    company: "Urban Air Tulsa",
    dates: "Sep 2023 – Nov 2023",
    bullets: [
      "Operated attractions and ensured guest safety across multiple activity zones.",
      "Worked the front desk handling check-ins, waivers, and customer inquiries.",
      "Prepared and served food in the café area during peak hours.",
      "Contributed to a positive guest experience through friendly and attentive service.",
    ],
  },
  {
    title: "Contractor — Volunteer Handbook Author",
    company: "Happy Tails Happy Homes",
    dates: "May 2023 – Jun 2023",
    location: "Bellingham, WA",
    bullets: [
      "Wrote the complete volunteer handbook for a non-profit dog fostering organization.",
      "Collaborated with organization leadership to align the handbook with their rebranding strategy.",
      "Delivered the project as part of a senior practicum at Western Washington University.",
    ],
  },
  {
    title: "Kitchen Worker",
    company: "Domani Pizza",
    dates: "Summer 2019",
    bullets: [
      "Rotated through various kitchen positions including prep, line, and dishwashing.",
      "Adapted quickly to keep the team working efficiently during busy shifts.",
    ],
  },
  {
    title: "Contractor — Eagle Scout Project",
    company: "PAWS Lynnwood",
    dates: "Apr 2018 – Jun 2018",
    location: "Lynnwood, WA",
    bullets: [
      "Designed and built play structures for orphaned baby bears at the Progressive Animal Welfare Society.",
      "Led a team of volunteers through planning, material sourcing, and construction.",
      "Managed the project end-to-end as the capstone requirement for earning Eagle Scout rank.",
    ],
  },
  {
    title: "Warehouse Worker",
    company: "India Tree",
    dates: "Summer 2018",
    bullets: [
      "Worked in warehouse production for the food service industry.",
      "Ensured timely and accurate order fulfillment and packaging.",
    ],
  },
  {
    title: "Tree Lot Volunteer",
    company: "QA Food Bank / Troop 72",
    dates: "Dec 2008 – Dec 2018",
    bullets: [
      "Volunteered 40–60 hours each holiday season for the annual Christmas tree lot.",
      "Took on roles including construction, stocking, sales, distribution, and training new members.",
      "Demonstrated long-term commitment with 10 consecutive years of service.",
    ],
  },
];

export function ExperienceSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="experience" className="py-20 px-6 bg-card/50" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Experience
        </h2>

        <div className="relative">
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                <div className="absolute left-2.5 md:left-4.5 top-6 h-3 w-3 rounded-full bg-primary border-2 border-background shadow" />

                <Card className="border-border/60 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1 mb-2">
                      <div>
                        <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                          {exp.title}
                        </h3>
                        <p className="text-sm text-primary font-medium">
                          {exp.company}
                          {exp.location && ` · ${exp.location}`}
                        </p>
                      </div>
                      <span className="text-xs text-muted-foreground whitespace-nowrap mt-1 sm:mt-0">
                        {exp.dates}
                      </span>
                    </div>
                    <ul className="space-y-1.5 mt-2">
                      {exp.bullets.map((b, j) => (
                        <li key={j} className="text-sm text-muted-foreground leading-relaxed flex items-start gap-2">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary/60 flex-shrink-0" />
                          {b}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

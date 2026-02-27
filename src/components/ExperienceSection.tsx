import { Card, CardContent } from "@/components/ui/card";

const experiences = [
  {
    title: "Concessions Worker",
    company: "Tulsa Drillers",
    dates: "March 2024 – Present",
    description:
      "Serve customers while demonstrating quality customer service skills, maintaining an organized workspace, and covering multiple stations as needed including the cash register at the Home Plate hot food stand.",
  },
  {
    title: "Team Member",
    company: "Urban Air Tulsa",
    dates: "Sep 2023 – Nov 2023",
    description:
      "Operated attractions, worked the front desk, and handled food service in the café. Performed daily customer service and guest experience duties.",
  },
  {
    title: "Contractor — Volunteer Handbook Author",
    company: "Happy Tails Happy Homes",
    dates: "May 2023 – Jun 2023",
    location: "Bellingham, WA",
    description:
      "Wrote the volunteer handbook for a non-profit dog fostering organization as part of a senior practicum at Western Washington University, supporting their rebranding launch with new internal documentation.",
  },
  {
    title: "Kitchen Worker",
    company: "Domani Pizza",
    dates: "Summer 2019",
    description:
      "Rotated through various kitchen positions to keep the team working efficiently and meet shift demands.",
  },
  {
    title: "Contractor — Eagle Scout Project",
    company: "PAWS Lynnwood",
    dates: "Apr 2018 – Jun 2018",
    location: "Lynnwood, WA",
    description:
      "Designed and built play structures for orphaned baby bears as part of the Eagle Scout project for the Progressive Animal Welfare Society (PAWS).",
  },
  {
    title: "Warehouse Worker",
    company: "India Tree",
    dates: "Summer 2018",
    description:
      "Worked in warehouse production for the food service industry, ensuring timely and accurate delivery of customer orders.",
  },
  {
    title: "Tree Lot Volunteer",
    company: "QA Food Bank / Troop 72",
    dates: "Dec 2008 – Dec 2018",
    description:
      "Volunteered 40–60 hours each holiday season for the annual Christmas tree lot. Roles included construction, stocking, sales, distribution, and training new members.",
  },
];

export function ExperienceSection() {
  return (
    <section id="experience" className="py-20 px-6 bg-card/50">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Experience
        </h2>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-4 md:left-6 top-0 bottom-0 w-px bg-border" />

          <div className="space-y-8">
            {experiences.map((exp, i) => (
              <div key={i} className="relative pl-12 md:pl-16">
                {/* Timeline dot */}
                <div className="absolute left-2.5 md:left-4.5 top-6 h-3 w-3 rounded-full bg-primary border-2 border-background shadow" />

                <Card className="border-border/60 shadow-sm hover:shadow-md transition-shadow">
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
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>
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

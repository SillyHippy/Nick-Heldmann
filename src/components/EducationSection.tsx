import { GraduationCap } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { useScrollReveal } from "@/hooks/useScrollReveal";

const schools = [
  {
    school: "Western Washington University",
    degree: "BA Business Administration",
    dates: "Sep 2021 – Jun 2023",
    gpa: "3.3 / 4.0",
    activities: ["Nash Hall Dorm Committee", "Economics Club"],
  },
  {
    school: "Shoreline Community College",
    degree: "Transfer Business Degree",
    dates: "Sep 2019 – Jun 2021",
    gpa: "3.5 / 4.0",
    activities: [],
  },
  {
    school: "Ballard High School",
    degree: "Diploma",
    dates: "Graduated Jun 2019",
    gpa: "3.4 / 4.0",
    activities: [],
  },
];

export function EducationSection() {
  const ref = useScrollReveal<HTMLElement>();

  return (
    <section id="education" className="py-20 px-6" ref={ref}>
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Education
        </h2>

        <div className="grid gap-6">
          {schools.map((s, i) => (
            <Card key={i} className="border-border/60 shadow-sm hover:-translate-y-1 hover:shadow-lg transition-all duration-300">
              <CardContent className="p-6 flex gap-4">
                <div className="flex-shrink-0 mt-1">
                  <div className="h-10 w-10 rounded-full bg-accent flex items-center justify-center">
                    <GraduationCap className="h-5 w-5 text-primary" />
                  </div>
                </div>
                <div className="flex-1">
                  <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-1">
                    <div>
                      <h3 className="text-lg font-semibold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                        {s.school}
                      </h3>
                      <p className="text-sm text-primary font-medium">{s.degree}</p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap">
                      {s.dates}
                    </span>
                  </div>
                  <p className="text-sm text-muted-foreground mt-2">GPA: {s.gpa}</p>
                  {s.activities.length > 0 && (
                    <div className="flex flex-wrap gap-2 mt-3">
                      {s.activities.map((a) => (
                        <span
                          key={a}
                          className="text-xs px-3 py-1 rounded-full bg-accent text-accent-foreground"
                        >
                          {a}
                        </span>
                      ))}
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

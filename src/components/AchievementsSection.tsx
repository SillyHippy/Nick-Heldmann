import { Award, ShieldCheck } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const certifications = [
  "CPR Verified",
  "National Retail Federation — Customer Service & Retail Certification",
  "Cross Scholarly Achievement (Ballard High School)",
  "Food Handlers Permit",
];

const volunteer = [
  "Tulsa Young Professionals",
  "Tulsa Air and Space Museum (TASM) Volunteer",
  "Oklahoma Aquarium Volunteer",
];

export function AchievementsSection() {
  return (
    <section id="achievements" className="py-20 px-6">
      <div className="container mx-auto max-w-3xl">
        <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-12 text-center">
          Achievements
        </h2>

        {/* Eagle Scout */}
        <Card className="border-primary/20 shadow-md mb-10">
          <CardContent className="p-6 flex gap-4">
            <div className="flex-shrink-0 mt-1">
              <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="h-6 w-6 text-primary" />
              </div>
            </div>
            <div>
              <h3 className="text-xl font-bold text-foreground" style={{ fontFamily: "'DM Sans', sans-serif" }}>
                Eagle Scout
              </h3>
              <p className="text-sm text-primary font-medium mb-2">
                Troop 72, Chief Seattle Council · June 18, 2018
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed">
                Earned the highest rank in Boy Scouts through proven leadership. Designed and led a team 
                to build play structures for PAWS in Lynnwood, WA. Achieving Eagle Scout is a multi-year 
                commitment requiring both physical and intellectual milestones.
              </p>
            </div>
          </CardContent>
        </Card>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Certifications */}
          <div>
            <h3
              className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <ShieldCheck className="h-4 w-4" />
              Certifications
            </h3>
            <ul className="space-y-2">
              {certifications.map((c) => (
                <li key={c} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {c}
                </li>
              ))}
            </ul>
          </div>

          {/* Volunteering */}
          <div>
            <h3
              className="text-sm font-semibold text-primary uppercase tracking-wider mb-4 flex items-center gap-2"
              style={{ fontFamily: "'DM Sans', sans-serif" }}
            >
              <Award className="h-4 w-4" />
              Volunteering & Memberships
            </h3>
            <ul className="space-y-2">
              {volunteer.map((v) => (
                <li key={v} className="text-sm text-muted-foreground flex items-start gap-2">
                  <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary flex-shrink-0" />
                  {v}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

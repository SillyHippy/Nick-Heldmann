import { Mail, Phone, Download } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export function HeroSection() {
  return (
    <section
      id="about"
      className="min-h-[90vh] flex items-center justify-center pt-20 pb-16 px-6"
    >
      <div className="container mx-auto max-w-3xl text-center">
        <Avatar className="h-28 w-28 mx-auto mb-8 border-4 border-primary/20 shadow-lg">
          <AvatarFallback className="bg-primary text-primary-foreground text-3xl font-bold" style={{ fontFamily: "'Playfair Display', serif" }}>
            NH
          </AvatarFallback>
        </Avatar>

        <h1 className="text-5xl md:text-6xl font-bold text-foreground mb-4 tracking-tight">
          Nick Heldmann
        </h1>

        <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto mb-8 leading-relaxed" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          Recent business administration graduate seeking to leverage strong collaboration skills, 
          project management experience, and a customer-first mindset to bring value to a growing team.
        </p>

        <div className="flex flex-wrap items-center justify-center gap-4 mb-10" style={{ fontFamily: "'DM Sans', sans-serif" }}>
          <a
            href="mailto:Njheldmann@gmail.com"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail className="h-4 w-4" />
            Njheldmann@gmail.com
          </a>
          <span className="hidden sm:inline text-border">|</span>
          <a
            href="tel:+12069532438"
            className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors"
          >
            <Phone className="h-4 w-4" />
            (206) 953-2438
          </a>
        </div>

        <Button asChild size="lg" className="shadow-md">
          <a href="/Nick_Heldmann_Resume.pdf" download className="gap-2">
            <Download className="h-4 w-4" />
            Download Resume
          </a>
        </Button>
      </div>
    </section>
  );
}
